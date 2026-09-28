import { test } from '@playwright/test';
import path from 'path';
import fs from 'fs';

import { LoginPage } from '../pageObjects/LoginPage';
import { ContactDetails } from '../pageObjects/ContactDetails';
import * as XLSX from 'xlsx';
import { excelReader } from '../utils/excelReader';
import { Entitydetails } from '../pageObjects/Entitydetails';
import { PoiDetails } from '../pageObjects/PoiDetails';

const {
    getTestData
} = require('../utils/excelReader').default;


// ================= SCREENSHOT FOLDER =================

const SCREENSHOTS_DIR = path.join(
    process.cwd(),
    'AllScreenshots_ContactDetails'
);


// ================= TEST DATA =================

const testData = getTestData('Contact').filter(
    data => String(data.run ?? '').toUpperCase() === 'Y'
);


// ================= CHECK TEST DATA =================

console.log('Contact test data:', testData);


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
        `Create Legal Categories - ${data.TC_Num} ${data.flowName}`,

        async ({ page }) => {

            test.setTimeout(180000);

            const login = new LoginPage(page);

            const contactDetails = new ContactDetails(page);


            // ================= LOGIN =================

            await login.navigate();

            await login.login(
                data.m_username,
                data.m_password,
                data.dscPath
            );


            // ================= TEST CASE SWITCH =================

            switch (String(data.TC_Num).trim()) {

            case 'TC_CCDLE_02':
            await contactDetails.TC_02_VerifyContactDetailsFieldsAreVisibleEnabledAndClickable(data);
            break;

            case 'TC_CCDLE_03':
            await contactDetails.TC_03_VerifyCountryCodeAcceptsMaximum5Digits(data);
            break;

             case 'TC_CCDLE_04':
            await contactDetails.TC_04_VerifyValidCountryCodeIsAccepted(data);
            break;

            case 'TC_CCDLE_05':
            await contactDetails.TC_05_VerifyDefaultCountryCodeIsSelectedAsPlus91(data);
            break;

                case 'TC_CCDLE_06':
            await contactDetails.TC_06_VerifySelectingCountryCodeFromDropdownWorksCorrectly(data);
            break;

            case 'TC_CCDLE_07':
            await contactDetails.TC_07_VerifyCountryCodeDropdownSearchFilterWorksCorrectly(data);
            break;

            case 'TC_CCDLE_08':
            await contactDetails.TC_08_VerifyCountryCodeMandatoryWhenMobileNumberEntered(data);
            break;

            case 'TC_CCDLE_09':
            await contactDetails.TC_09_VerifyCountryCode02NonMandatoryWhenMobileNumber02NotEntered(data);
            break;

            case 'TC_CCDLE_10':
            await contactDetails.TC_10_VerifyValid10DigitIndianMobileNumberAccepted(data);
            break;

                case 'TC_CCDLE_11':
            await contactDetails.TC_11_VerifyMobileNumberRejects10DigitsWithCountryCode(data);
            break;

            case 'TC_CCDLE_12':
            await contactDetails.TC_12_VerifyMobileNumberDoesNotAcceptSpaces(data);
            break;

            case 'TC_CCDLE_13':
            await contactDetails.TC_13_VerifyMobileNumberAutoSanitizesSpaces(data);
            break;

            case 'TC_CCDLE_14':
            await contactDetails.TC_14_VerifyMobileNumberMaximum10DigitsForIndianNationality(data);
            break;

             case 'TC_CCDLE_15':
            await contactDetails.TC_15_VerifyMobileNumberDoesNotAcceptNonNumericInput(data);
            break;

            case 'TC_CCDLE_16':
            await contactDetails.TC_16_VerifyExistingMobileNumbersAccepted(data);
            break;

             case 'TC_CCDLE_17':
            await contactDetails.TC_17_VerifyPrimaryMobileNumberMandatory(data);
            break;

            
             case 'TC_CCDLE_18':
            await contactDetails.TC_18_VerifySecondaryMobileNumberNonMandatory(data);
            break;

            case 'TC_CCDLE_19':
            await contactDetails.TC_19_VerifyForeignMobileNumberMinimum8DigitsAccepted(data);
            break;

            case 'TC_CCDLE_20':
            await contactDetails.TC_20_VerifyForeignMobileNumberMaximumOf15DigitsAccepted(data);
            break;

            case 'TC_CCDLE_21':
            await contactDetails.TC_21_VerifyMobileNumberAcceptsOnly8To15DigitsWithoutCountryCode(data);
            break;

            case 'TC_CCDLE_22':
            await contactDetails.TC_22_VerifyMobileNumberDoesNotAcceptSpacesBetween8To15Digits(data);
            break;

            case 'TC_CCDLE_23':
            await contactDetails.TC_23_VerifyMobileNumber8to15DigitAutoSanitizesSpaces(data);
            break;

            case 'TC_CCDLE_24':
            await contactDetails.TC_24_VerifySecondaryMobileNumberMaximum15DigitsForForeignNationality(data);
            break;

              case 'TC_CCDLE_25':
            await contactDetails.TC_25_VerifySecondaryMobileNumberMinimum8DigitsForForeignNationality(data);
            break;

            case 'TC_CCDLE_26':
            await contactDetails.TC_26_VerifySecondaryMobileNumberDoesNotAcceptNonNumericInput(data);
            break;

            case 'TC_CCDLE_27':
            await contactDetails.TC_27_VerifyPrimaryMobileNumberMandatoryForForeignNationality(data);
            break;

            case 'TC_CCDLE_28':
            await contactDetails.TC_28_VerifySecondaryMobileNumberNonMandatoryForForeignNationality(data);
            break;

            case 'TC_CCDLE_29':
            await contactDetails.TC_29_VerifyValidEmailIdFormatAccepted(data);
            break;

            case 'TC_CCDLE_30':
            await contactDetails.TC_30_VerifyEmailIdRejectsUnallowedSpecialCharacters(data);
            break;

              case 'TC_CCDLE_31':
            await contactDetails.TC_31_VerifyEmailIdRejectsOnlyNumericCharacters(data);
            break;

            case 'TC_CCDLE_32':
            await contactDetails.TC_32_VerifyEmailIdRejectsOnlyCharacters(data);
            break;

            case 'TC_CCDLE_33':
            await contactDetails.TC_33_VerifyEmailIdRejectsOnlySpecialCharacters(data);
            break;

            case 'TC_CCDLE_34':
            await contactDetails.TC_34_VerifyEmailIdRejectsDoubleAtSymbol(data);
            break;

            case 'TC_CCDLE_35':
            await contactDetails.TC_35_VerifyEmailIdRejectsMissingAtSymbol(data);
            break;

            case 'TC_CCDLE_36':
            await contactDetails.TC_36_VerifyEmailIdAcceptsPlusSign(data);
            break;

            case 'TC_CCDLE_37':
            await contactDetails.TC_37_VerifyEmailIdAcceptsNumericDomain(data);
            break;

            case 'TC_CCDLE_38':
            await contactDetails.TC_38_VerifyEmailIdRejectsMissingDomainName(data);
            break;

            case 'TC_CCDLE_39':
            await contactDetails.TC_39_VerifyEmailIdRejectsMultipleDots(data);
            break;

            case 'TC_CCDLE_40':
            await contactDetails.TC_40_VerifyEmailIdRejectsTrailingDotInDomain(data);
            break;

            case 'TC_CCDLE_41':
            await contactDetails.TC_41_VerifyEmailIdRejectsMultipleSpaces(data);
            break;

            case 'TC_CCDLE_42':
            await contactDetails.TC_42_VerifyEmailIdAccepts254Characters(data);
            break;

            case 'TC_CCDLE_43':
            await contactDetails.TC_43_VerifyEmailIdDoesNotAllowMoreThan254Characters(data);
            break;
            
            case 'TC_CCDLE_44':
            await contactDetails.TC_44_VerifyPrimaryEmailIdIsMandatory(data);
            break;
            
            case 'TC_CCDLE_45':
            await contactDetails.TC_45_VerifySecondaryEmailIdIsNonMandatory(data);
            break;

              case 'TC_CCDLE_46':
            await contactDetails.TC_46_VerifyTelephoneOfficialAcceptsMaximum12Characters(data);
            break;

            case 'TC_CCDLE_47':
            await contactDetails.TC_47_VerifyTelephoneOfficialAcceptsNumericValues(data);
            break;

            case 'TC_CCDLE_48':
            await contactDetails.TC_48_VerifyTelephoneOfficialAcceptsHyphen(data);
            break;

              case 'TC_CCDLE_49':
            await contactDetails.TC_49_VerifyTelephoneOfficialIsNonMandatory(data);
            break;
            
            case 'TC_CCDLE_50':
            await contactDetails.TC_50_VerifyFaxAcceptsMaximum12Characters(data);
            break;

            case 'TC_CCDLE_51':
            await contactDetails.TC_51_VerifyFaxAcceptsNumericValues(data);
            break;

            case 'TC_CCDLE_52':
            await contactDetails.TC_52_VerifyFaxAcceptsHyphen(data);
            break;

             case 'TC_CCDLE_53':
            await contactDetails.TC_53_VerifyFaxIsNonMandatory(data);
            break;

             case 'TC_CCDLE_54':
            await contactDetails.TC_54_VerifySaveAndNextFunctionalityForPrefetchedContactDetails(data);
            break;

            case 'TC_CCDLE_55':
            await contactDetails.TC_55_VerifySaveAndNextFunctionalityForModifiedContactDetails(data);
            break;

           case 'TC_CCDLE_56':
            await contactDetails.TC_56_VerifyREUserCanSaveDetailsAndResumeProcess(data);
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