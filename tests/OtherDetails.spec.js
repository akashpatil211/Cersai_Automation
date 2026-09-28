import { test } from '@playwright/test';
import path from 'path';
import fs from 'fs';

import { LoginPage } from '../pageObjects/LoginPage';
import { ContactDetails } from '../pageObjects/ContactDetails';
import * as XLSX from 'xlsx';
import { excelReader } from '../utils/excelReader';
import { Entitydetails } from '../pageObjects/Entitydetails';
import { PoiDetails } from '../pageObjects/PoiDetails';
import { RelatedPartyDetailsPage } from '../pageObjects/RelatedPartyDetailsPage';
import { OtherDetails } from '../pageObjects/OtherDetails';

const {
    getTestData
} = require('../utils/excelReader').default;


// ================= SCREENSHOT FOLDER =================

const SCREENSHOTS_DIR = path.join(
    process.cwd(),
    'AllScreenshots_OthersDetails'
);


// ================= TEST DATA =================

const testData = getTestData('OthersDetails').filter(
    data => String(data.run ?? '').toUpperCase() === 'Y'
);



// ================= SCREENSHOT AFTER TEST =================

test.afterEach(async ({ page }, testInfo) => {

    try {

        if (!page.isClosed()) {

            if (!fs.existsSync(SCREENSHOTS_DIR)) {

                fs.mkdirSync(SCREENSHOTS_DIR, {
                    recursive: true
                });

            }

            let fileName = `${testInfo.title}.png`;

            let filePath = path.join(
                SCREENSHOTS_DIR,
                fileName
            );

            let counter = 1;

            while (fs.existsSync(filePath)) {

                fileName = `${testInfo.title}_${counter}.png`;

                filePath = path.join(
                    SCREENSHOTS_DIR,
                    fileName
                );

                counter++;
            }

            await page.screenshot({
                path: filePath,
                fullPage: true
            });

            await testInfo.attach('Final Test State', {
                path: filePath,
                contentType: 'image/png'
            });
        }

    } catch (e) {

        console.warn(
            'Screenshot failed:',
            e.message
        );
    }

});


// ================= TEST CASES =================

for (const data of testData) {

    test(
        `${data.TC_Num}`,
        //`Create Legal Categories - ${data.TC_Num} ${data.flowName}`,

        async ({ page }) => {

            test.setTimeout(180000);

            const login = new LoginPage(page);

            const  otherDetails  = new OtherDetails(page);


            // ================= LOGIN =================

            await login.navigate();

            await login.login(
                data.m_username,
                data.m_password,
                data.dscPath
            );


            // ================= TEST CASE SWITCH =================

            switch (String(data.TC_Num).trim()) {

            case 'TC_CODALE_01':
            await otherDetails.TC_01_VerifyNavigationToOtherDetails(data);
            break;

            case 'TC_CODALE_02':
            await otherDetails.TC_02_VerifyRemarksAcceptsAlphanumericInput(data);
            break;

            case 'TC_CODALE_03':
            await otherDetails.TC_03_VerifyRemarksAcceptsMaximum200Characters(data);
            break;

            
            case 'TC_CODALE_04':
            await otherDetails.TC_04_VerifyRemarksDoesNotAllowMoreThan200Characters(data);
            break;

            case 'TC_CODALE_05':
            await otherDetails.TC_05_VerifyRemarksRestrictsInvalidInput(data);
            break;

            case 'TC_CODALE_07':
            await otherDetails.TC_07_VerifyCharacterCountDisplayedForRemarks(data);
            break;

            case 'TC_CODALE_08':
            await otherDetails.TC_08_VerifyMaxCharacterReachedForRemarks(data);
            break;

            case 'TC_CODALE_09':
            await otherDetails.TC_09_VerifyRemarksAllowsSpacesBetweenWords(data);
            break;

            case 'TC_CODALE_10':
            await otherDetails.TC_10_VerifyRemarksFieldIsOptional(data);
            break;

            case 'TC_CODALE_11':
            await otherDetails.TC_11_VerifyAttestationDetailsSubSectionsVisible(data);
            break;

            case 'TC_CODALE_12':
            await otherDetails.TC_12_VerifyCertifiedCopiesCanBeSetToYes(data);
            break;

            case 'TC_CODALE_13':
            await otherDetails.TC_13_VerifyCertifiedCopiesCanBeSetToNo(data);
            break;

            case 'TC_CODALE_14':
            await otherDetails.TC_14_VerifyCertifiedCopiesIsMandatory(data);
            break;

             case 'TC_CODALE_15':
            await otherDetails.TC_15_VerifyEquivalentEDocCanBeSetToYes(data);
            break;

            case 'TC_CODALE_16':
            await otherDetails.TC_16_VerifyEquivalentEDocCanBeSetToNo(data);
            break;

            case 'TC_CODALE_17':
            await otherDetails.TC_17_VerifyEquivalentEDocIsMandatory(data);
            break;

             case 'TC_CODALE_18':
            await otherDetails.TC_18_VerifyVerificationFromDigilockerCanBeSetToYes(data);
            break;

            case 'TC_CODALE_19':
            await otherDetails.TC_19_VerifyVerificationFromDigilockerCanBeSetToNo(data);
            break;

            case 'TC_CODALE_20':
            await otherDetails.TC_20_VerifyVerificationFromDigilockerIsMandatory(data);
            break;

            case 'TC_CODALE_21':
            await otherDetails.TC_21_VerifyKYCVerificationDateFromCalendar(data);
            break;

            case 'TC_CODALE_22':
            await otherDetails.TC_22_VerifyKYCVerificationDateSelection(data);
            break;

             case 'TC_CODALE_23':
            await otherDetails.TC_23_VerifyKYCVerificationDateAcceptsLeapYearDate(data);
            break;

            case 'TC_CODALE_24':
            await otherDetails.TC_24_VerifyKYCVerificationDateHasNoDefaultValue(data);
            break;

            case 'TC_CODALE_26':
            await otherDetails.TC_26_VerifyKYCVerificationDateAcceptsPastDate(data);
            break;

            case 'TC_CODALE_27':
            await otherDetails.TC_27_VerifyKYCVerificationDateDoesNotAcceptFutureDate(data);
            break;

            case 'TC_CODALE_28':
            await otherDetails.TC_28_VerifyKYCVerificationDateAcceptsSeparator(data);
            break;

            case 'TC_CODALE_29':
            await otherDetails.TC_29_VerifyKYCVerificationDateAutoSanitizes(data);
            break;

            case 'TC_CODALE_30':
            await otherDetails.TC_30_VerifyKYCVerificationDateRejectsInvalidDay(data);
            break;

            case 'TC_CODALE_31':
            await otherDetails.TC_31_VerifyKYCVerificationDateThrowsErrorIfLeftBlank(data);
            break;

            case 'TC_CODALE_32':
            await otherDetails.TC_32_VerifyKYCVerificationDateRestrictsAlphanumericAndSpecialCharacters(data);
            break;

            case 'TC_CODALE_33':
            await otherDetails.TC_33_VerifyKYCVerificationDateFormatsSingleDigitDayOrMonth(data);
            break;

            case 'TC_CODALE_34':
            await otherDetails.TC_34_VerifyKYCVerificationDateTrimsLeadingAndTrailingSpaces(data);
            break;

            case 'TC_CODALE_35':
            await otherDetails.TC_35_VerifyKYCVerificationDateConvertsDDMMYYYYToDDMMYYYY(data);
            break;

            case 'TC_CODALE_36':
            await otherDetails.TC_36_VerifyEmployeeNameAcceptsValidAlphabeticInput(data);
            break;

             case 'TC_CODALE_37':
            await otherDetails.TC_37_VerifyEmployeeNameAcceptsMax99Characters(data);
            break;

            case 'TC_CODALE_38':
            await otherDetails.TC_38_VerifyEmployeeNameAcceptsMin1Character(data);
            break;

            case 'TC_CODALE_39':
            await otherDetails.TC_39_VerifyEmployeeNameAcceptsUppercaseAndLowercaseLetters(data);
            break;

            case 'TC_CODALE_40':
            await otherDetails.TC_40_VerifyEmployeeNameTrimsLeadingAndTrailingSpaces(data);
            break;

            
            case 'TC_CODALE_41':
            await otherDetails.TC_41_VerifyEmployeeNameRejectsNumericCharacters(data);
            break;

            case 'TC_CODALE_42':
            await otherDetails.TC_42_VerifyEmployeeNameRejectsSpecialCharactersExceptSingleApostrophe(data);
            break;

            
            case 'TC_CODALE_43':
            await otherDetails.TC_43_VerifyEmployeeCodeAcceptsValidAlphanumericInput(data);
            break;
            
            case 'TC_CODALE_44':
            await otherDetails.TC_44_VerifyEmployeeCodeAcceptsExactly50AlphanumericCharacters(data);
            break;

            case 'TC_CODALE_45':
            await otherDetails.TC_45_VerifyEmployeeCodeAcceptsMinimum1Character(data);
            break;

            case 'TC_CODALE_46':
            await otherDetails.TC_46_VerifyEmployeeCodeTrimsLeadingAndTrailingSpaces(data);
            break;

            
            case 'TC_CODALE_47':
            await otherDetails.TC_47_VerifyEmployeeCodeRejectsSpacesBetweenCharacters(data);
            break;

            case 'TC_CODALE_48':
            await otherDetails.TC_48_VerifyEmployeeCodeDoesNotAcceptEmptyInput(data);
            break;

            
            case 'TC_CODALE_49':
            await otherDetails.TC_49_VerifyEmployeeCodeRejectsOnlySpecialCharacters(data);
            break;

            case 'TC_CODALE_50':
            await otherDetails.TC_50_VerifyEmployeeDesignationAcceptsValidAlphanumericInput(data);
            break;
            
            case 'TC_CODALE_51':
            await otherDetails.TC_51_VerifyEmployeeDesignationAcceptsExactly50AlphanumericCharacters(data);
            break;

             case 'TC_CODALE_52':
            await otherDetails.TC_52_VerifyEmployeeDesignationAcceptsMinimum1Character(data);
            break;

            case 'TC_CODALE_53':
            await otherDetails.TC_53_VerifyEmployeeDesignationTrimsLeadingAndTrailingSpaces(data);
            break;

            case 'TC_CODALE_54':
            await otherDetails.TC_54_VerifyEmployeeDesignationRejectsSpacesBetweenCharacters(data);
            break;

            case 'TC_CODALE_55':
            await otherDetails.TC_55_VerifyEmployeeDesignationDoesNotAcceptEmptyInput(data);
            break;

            case 'TC_CODALE_56':
            await otherDetails.TC_56_VerifyEmployeeDesignationRejectsOnlySpecialCharacters(data);
            break;

            case 'TC_CODALE_57':
            await otherDetails.TC_57_VerifyEmployeeBranchAcceptsValidAlphanumericInput(data);
            break;

            case'TC_CODALE_58':
            await otherDetails.TC_58_VerifyEmployeeBranchAcceptsExactly50AlphanumericCharacters(data);
            break;

            case'TC_CODALE_59':
            await otherDetails.TC_59_VerifyEmployeeBranchAcceptsMinimum1Character(data);
            break;

             case'TC_CODALE_60':
            await otherDetails.TC_61_VerifyEmployeeBranchRejectsSpacesBetweenCharacters(data);
            break;

              case'TC_CODALE_61':
            await otherDetails.TC_61_VerifyEmployeeBranchRejectsSpacesBetweenCharacters(data);
            break;

              case'TC_CODALE_62':
            await otherDetails.TC_62_VerifyEmployeeBranchDoesNotAcceptEmptyInput(data);
            break;

             case'TC_CODALE_63':
            await otherDetails.TC_63_VerifyEmployeeBranchRejectsOnlySpecialCharacters(data);
            break;

            case'TC_CODALE_64':
            await otherDetails.TC_64_VerifyEmployeeCKYCIdAcceptsValidNumericInput(data);
            break;

              case'TC_CODALE_65':
            await otherDetails.TC_65_VerifyEmployeeCKYCIdAcceptsExactly14NumericCharacters(data);
            break;
 
             case'TC_CODALE_66':
            await otherDetails.TC_66_VerifyEmployeeCKYCIdDoesNotAcceptLessThan14Characters(data);
            break;

            case'TC_CODALE_67':
            await otherDetails.TC_67_VerifyEmployeeCKYCIdTrimsLeadingAndTrailingSpaces(data);
            break;

            case'TC_CODALE_68':
            await otherDetails.TC_68_VerifyEmployeeCKYCIdRejectsSpacesBetween14Digits(data);
            break;

            case'TC_CODALE_69':
            await otherDetails.TC_69_VerifyEmployeeCKYCIdDoesNotAcceptEmptyInput(data);
            break;

             case'TC_CODALE_70':
            await otherDetails.TC_70_VerifyEmployeeCKYCIdRejectsAlphanumericAndSpecialCharacters(data);
            break;

              case'TC_CODALE_71':
            await otherDetails.TC_71_VerifyInstitutionalDetailsFields(data);
            break;

              case'TC_CODALE_72':
            await otherDetails.TC_72_VerifyInstitutionNameReflectsValidAlphabeticalData(data);
            break;

            case'TC_CODALE_73':
            await otherDetails.TC_73_VerifyInstitutionNameMax99Characters(data);
            break;

              case'TC_CODALE_74':
            await otherDetails.TC_74_VerifyInstitutionNameReflectsSpacesBetweenCharacters(data);
            break;

             case'TC_CODALE_75':
            await otherDetails.TC_75_VerifyInstitutionNameReflectsMixedCase(data);
            break;

             case'TC_CODALE_76':
            await otherDetails.TC_76_VerifyInstitutionNameReflectsAlphanumericData(data);
            break;

             case'TC_CODALE_77':
            await otherDetails.TC_77_VerifyInstitutionCodeFetchesBasedOnInstitutionName(data);
            break;

            case'TC_CODALE_78':
            await otherDetails.TC_78_VerifyInstitutionCodeFetches50CharacterAlphanumericData(data);
            break;

            case'TC_CODALE_79':
            await otherDetails.TC_79_VerifyInstitutionCodeFetchesMinimum1Character(data);
            break;

            case'TC_CODALE_80':
            await otherDetails.TC_80_VerifyInstitutionFieldsAreNonEditable(data);
            break;

            case'TC_CODALE_82':
            await otherDetails.TC_82_VerifyInstitutionCodeDoesNotShowErrorForNumericData(data);
            break;

             case'TC_CODALE_83':
            await otherDetails.TC_CODALE_83_VerifySaveAndNextFunctionalityForPrefetchedOtherDetails(data);
            break;

            case'TC_CODALE_84':
            await otherDetails.TC_CODALE_84_VerifySaveAndNextFunctionalityForModifiedOtherDetails(data);
            break;

            case'TC_CODALE_85':
            await otherDetails.TC_CODALE_85_VerifyREUserCanSaveAndResumeOtherDetails(data);
            break;



                default:

                    console.log(
                        `No test case found for ${data.TC_Num}`
                    );

                    break;
            }

        }
    );
}