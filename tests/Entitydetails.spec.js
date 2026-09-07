import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

import { LoginPage } from '../pageObjects/LoginPage';
import { excelReader } from '../utils/excelReader';
import { Entitydetails } from '../pageObjects/Entitydetails';

const {
  getTestData,
  writeCellData
} = require('../utils/excelReader').default;


// ================= SCREENSHOT FOLDER =================

const SCREENSHOTS_DIR = path.join(
  process.cwd(),
  'AllScreenshots_EntityDetails'
);


// ================= TEST DATA =================

const testData = getTestData('DataFromSagar').filter(
  data => data.run?.toUpperCase() === 'Y'
);


// ================= SCREENSHOT AFTER TEST =================

test.afterEach(async ({ page }, testInfo) => {

  try {

    if (!page.isClosed()) {

      if (!fs.existsSync(SCREENSHOTS_DIR)) {
        fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
      }

      let fileName = `${testInfo.title}.png`;
      let filePath = path.join(SCREENSHOTS_DIR, fileName);
      let counter = 1;

      // Avoid duplicate screenshot names
      while (fs.existsSync(filePath)) {

        fileName = `${testInfo.title}_${counter}.png`;

        filePath = path.join(SCREENSHOTS_DIR,fileName);

        counter++;
      }

      // Take screenshot
      await page.screenshot({
        path: filePath,
        fullPage: true
      });

      // Attach screenshot to Playwright report
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

  test
  
  (
    `Create Legal Categories - ${data.TC_Num} ${data.flowName}`,
    async ({ page }) => {

      test.setTimeout(180000);

      const login = new LoginPage(page);

      const EntityDetails = new Entitydetails(page);


      // ================= MAKER =================

      await login.navigate();

      await login.login(
        data.m_username,
        data.m_password,
        data.dscPath
      );

    const skipSearchAndCreate = [
    'TC_CEDLE_91',
    'TC_CEDLE_92',
    'TC_CEDLE_93',
    'TC_CEDLE_01',
    'TC_CEDLE_02',
    'TC_CEDLE_03',
    'TC_CEDLE_04',
  
];

if (!skipSearchAndCreate.includes(data.TC_Num)) {
    await EntityDetails.navigateToKYC();
    await EntityDetails.searchAndCreate(data);
}

      // ================= TESTCASE SWITCH =================

      switch (data.TC_Num) {

        case 'TC_CEDLE_01':

          await EntityDetails.TC_01_verifySearchKeyValidationPrompt(data);
          break;

        case 'TC_CEDLE_02':

          await EntityDetails.TC_02_verifySearchKeyValidationFailure(data);
          break;

          case 'TC_CEDLE_03':

          await EntityDetails.TC_03_verifySearchKeyNotEditableForLegalEntity(data);
          break;

          case 'TC_CEDLE_04':

          await EntityDetails.TC_04_verifyEntityDetailsVisibleForModification(data);
          break;
        case 'TC_CEDLE_05':

          await EntityDetails.TC_05_verifyEntityNamefieldacceptsUppercaseandLowercase(data);

          break;

        case 'TC_CEDLE_06':
           
           await EntityDetails.TC_06_VerifythattheEntityNamefieldacceptsalphanumericdata(data);

           break;
        
        case 'TC_CEDLE_07':

           await EntityDetails.TC_07_VerifythattheEntityNamefieldacceptssingleapostrophedata(data);

           break;
        
        case 'TC_CEDLE_08':

           await EntityDetails.TC_08_VerifythattheEntityNamefieldacceptsspecialcharactersdata(data);

           break;

        case 'TC_CEDLE_09':

          await EntityDetails.TC_09_VerifythattheEntityNamefieldacceptsDotcharacterdata(data);

          break;

        case 'TC_CEDLE_10':

           await EntityDetails.TC_10_VerifythattheEntityNamefieldacceptscombinationofalbhabetspecialchardata(data);

           break;

        case 'TC_CEDLE_11':

            await EntityDetails.TC_11_VerifythattheEntityNamefielddoesnotacceptmultipleapostrophes(data);

          break;
        case 'TC_CEDLE_12':

            await EntityDetails.TC_12_VerifythattheEntityNamefieldrejectsonlywhitespaceasinput(data);

          break;

        case 'TC_CEDLE_13':

            await EntityDetails.TC_13_VerifythattheEntityNamefieldrejectsinputexceedingmaximumlengthof99(data);

          break;

        
        case 'TC_CEDLE_14':

            await EntityDetails.TC_14_VerifythattheEntityNamefieldismarkedasmandatoryanddoesnotacceptblankinput(data);

          break;

        case 'TC_CEDLE_15':
            await EntityDetails.TC_15_VerifyEntityNameTrimsLeadingAndTrailingSpaces(data);
           
          break;
        
        case 'TC_CEDLE_16':

           await EntityDetails.TC_16_VerifytheEntityConstitutiondropdownpopulatesdefaultvalues(data);

           break;

        case 'TC_CEDLE_17':

           await EntityDetails.TC_17_VerifyEntityConstitutionDefaultValueIsBlank(data);

           break;

        case 'TC_CEDLE_18':

           await EntityDetails.TC_18_VerifythattheEntityConstitutiondropdownismandatory(data);

           break;

        case 'TC_CEDLE_19':

            await EntityDetails.TC_19_VerifythattheEntityConstitutiondropdownfieldisEditable(data);

            break;

        case 'TC_CEDLE_20':

            await EntityDetails.TC_20_VerifyEntityConstitutionSelectsValueFromLargeList(data);
            
            break;

        case 'TC_CEDLE_21':

           await EntityDetails.TC_21_VerifyEntityConstitutionDropdownAllowsOnlySingleOptionSelection(data);

        break;


        case 'TC_CEDLE_22':

           await EntityDetails.TC_22_VerifythattheEntityConstitutiondropdownismandatoryError(data);

        break;

         case 'TC_CEDLE_23':

           await EntityDetails.TC_23_VerifyEntityConstitutionOptionsAreAccessibleAndSelectable(data);

        break;
        

        case 'TC_CEDLE_24':

           await EntityDetails.TC_24_VerifyEntityConstitutionDropdownCanBeScrolled(data);

           break;


        case 'TC_CEDLE_25':

           await EntityDetails.TC_25_VerifyEntityConstitutionDropdownRendersAndOpensWithinAcceptableTime(data);

           break;

        case 'TC_CEDLE_26':

            await EntityDetails.TC_26_VerifyListedCompanyRadioButtonForPublicLimitedCompany(data);

            break;

        case 'TC_CEDLE_27':

            await EntityDetails.TC_27_VerifyListedCompanyInformationIcon(data);

            break;

        case 'TC_CEDLE_28':

          await EntityDetails.TC_28_VerifyListedCompanyDefaultValueForPublicLimitedCompany(data);

            break;

        case 'TC_CEDLE_29':

          await EntityDetails.TC_29_VerifyListedCompanyCanBeSetToNoForPublicLimitedCompany(data);

           break;

        case 'TC_CEDLE_30':

          await EntityDetails.TC_30_VerifyRegisteredFirmRadioButtoncanBeSetToYesForPartnershipFirm(data);


        case 'TC_CEDLE_31':

          await EntityDetails.TC_31_VerifyRegisteredFirmRadioButtoncanBeSetToNoForPartnershipFirm(data);

          break;

        case 'TC_CEDLE_32':

          await EntityDetails.TC_32_VerifyRegisteredTrustRadioButtoncanBeSetToYesForTrust(data);

          break;

      case 'TC_CEDLE_33':

       await EntityDetails.TC_33_VerifyRegisteredTrustRadioButtoncanBeSetToNoForTrust(data);

       break;
        
      case 'TC_CEDLE_34':

      await EntityDetails.TC_34_VerifyDateOfIncorporationFieldIsVisibleEnabledAndClickable(data);

      break;
      
      case 'TC_CEDLE_35':

     await EntityDetails.TC_35_DateOfIncorporationAcceptsOnlyDDMMYYYY(data);

     break;
    
    
     case 'TC_CEDLE_36':

    await EntityDetails.TC_36_VerifyDateOfIncorporationFieldAcceptsBackdatedEntries(data);

    break;
        

    case 'TC_CEDLE_37':

    await EntityDetails.TC_37_VerifyDateOfIncorporationFieldAcceptsFutureEntries(data);
    break;

    case 'TC_CEDLE_38':

    await EntityDetails.TC_38_VerifyDateOfIncorporationFieldAcceptsCurrentEntries(data);

    break;
    

    case 'TC_CEDLE_39':

    await EntityDetails.TC_39_VerifyUserCanNavigateBetweenYears(data);
    break;
     
    case 'TC_CEDLE_40':

    await EntityDetails.TC_40_VerifyDateOfCommencementOfBusinessFieldIsVisibleEnabledAndClickable(data);
    break;

    case 'TC_CEDLE_41':

    await EntityDetails.TC_41_DateOfCommencementOfBusinessAcceptsOnlyDDMMYYYY(data);
    break;

    case 'TC_CEDLE_42':

    await EntityDetails.TC_42_VerifyDateOfCommencementOfBusinessFieldAcceptsBackdatedEntries(data);
    break;

     case 'TC_CEDLE_43':

    await EntityDetails.TC_43_VerifyDateOfCommencementOfBusinessFieldAcceptsFutureEntries(data);
    break;

    case 'TC_CEDLE_44':

    await EntityDetails.TC_44_VerifyDateOfCommencementOfBusinessAcceptsCurrentEntry(data);
    break;

    case 'TC_CEDLE_45':

    await EntityDetails.TC_45_VerifyUserCanNavigateBetweenYearsOnDateOfCommencementOfBusiness(data);
    break;

    case 'TC_CEDLE_46':
    
    await EntityDetails.TC_46_VerifyPlaceOfIncorporationFieldIsVisibleEnabledAndClickable(data);
    break;

    case 'TC_CEDLE_47':
    await EntityDetails.TC_47_VerifyPlaceOfIncorporationFieldAcceptsUppercaseAndLowercaseAlphabeticalCharacters(data);
    break;
    

    case 'TC_CEDLE_48':
    await EntityDetails.TC_48_VerifyPlaceOfIncorporationFieldIsMandatoryAndDoesNotAcceptBlankInput(data);
    break;   
    
    case 'TC_CEDLE_49':
    await EntityDetails.TC_49_VerifythatthePlaceofIncorporationfieldrejectsinputexceedingmaximumlengthof50(data);
    break;

    case 'TC_CEDLE_50':
    await EntityDetails.TC_50_VerifythatthePlaceofIncorporationfieldacceptswhitespacesbetweenmultiplewords(data);
    break;

     case 'TC_CEDLE_51':
    await EntityDetails.TC_51_VerifyCountryOfIncorporationDropdownIsVisibleEnabledAndClickable(data);
    break;

     case 'TC_CEDLE_52':
    await EntityDetails.TC_52_VerifyDefaultValueReflectedInCountryOfIncorporationDropdown(data);
    break;

     case 'TC_CEDLE_53':
    await EntityDetails.TC_53_VerifyUserCanSelectCountryOfIncorporation(data);
    break;

    case 'TC_CEDLE_54':
    await EntityDetails.TC_54_VerifyCountryOfIncorporationDropdownOptionsCanBeSearched(data);
    break;

     case 'TC_CEDLE_55':
    await EntityDetails.TC_55_VerifyCountryOfIncorporationMandatory(data);
    break;

    case 'TC_CEDLE_56':
    await EntityDetails.TC_56_VerifyTINIssuingCountryDropdownIsVisibleEnabledAndClickable(data);
    break;

     case 'TC_CEDLE_57':
    await EntityDetails.TC_57_VerifyDefaultTINIssuingCountryIsIndiaBasedOnCountryOfIncorporation(data);
    break;

    case 'TC_CEDLE_58':
    await EntityDetails.TC_58_VerifyTINIssuingCountryCanBeSelected(data);
    break;
    
    case 'TC_CEDLE_59':
    await EntityDetails.TC_59_VerifyTINIssuingCountryDropdownOptionsCanBeSearched(data);
    break;
    
    case 'TC_CEDLE_60':
    await EntityDetails.TC_60_VerifyTINIssuingCountryIsNonMandatoryAndDoesNotShowError(data);
    
    case 'TC_CEDLE_61':
    await EntityDetails.TC_61_VerifyTINGSTRegistrationNumberFieldIsVisibleEnabledAndClickable(data);
    break;

    case 'TC_CEDLE_62':
    await EntityDetails.TC_62_VerifyTINGSTRegistrationNumberAcceptsValid15AlphanumericCharacters(data);
    break;

    case 'TC_CEDLE_63':
    await EntityDetails.TC_63_VerifyTINGSTRegistrationNumberDoesNotAllowMoreThan15AlphanumericCharacters(data);
    break;

    case 'TC_CEDLE_64':
    await EntityDetails.TC_64_VerifyTINGSTRegistrationNumberRejectsLessThan15AlphanumericCharacters(data);
    break;

    case 'TC_CEDLE_65':
    await EntityDetails.TC_65_VerifyTINGSTINIsNotMandatory(data);
    break;

    case 'TC_CEDLE_66':
    await EntityDetails.TC_66_VerifyTINGSTFirstTwoCharactersAllowOnlyNumbers(data);
    break;

    case 'TC_CEDLE_67':
    await EntityDetails.TC_67_VerifyGSTINFirstTwoDigitsAreNumeric(data);
    break;

     case 'TC_CEDLE_68':
    await EntityDetails.TC_68_VerifyTINGSTRegistrationNumberRejectsSpecialCharacters(data);
    break;

      case 'TC_CEDLE_69':
    await EntityDetails.TC_69_VerifyTINGSTRegistrationNumberAcceptsValidGSTNumber(data);
    break;

     case 'TC_CEDLE_70':
    await EntityDetails.TC_70_VerifyGSTINContainsValidPANFormat(data);
    break;

    case 'TC_CEDLE_71':
    await EntityDetails.TC_71_VerifyTINGST13thCharacterAcceptsOnlyNumber(data)
    break;

    case 'TC_CEDLE_72':
    await EntityDetails.TC_72_VerifyGSTIN13thCharacterIsNumericEntityCode(data);
    break;

     case 'TC_CEDLE_73':
    await EntityDetails.TC_73_VerifyGSTIN14thCharacterIsUppercaseZ(data);
    break;

     case 'TC_CEDLE_74':
    await EntityDetails.TC_74_VerifyGSTIN14thCharacterRejectsLowercaseZ(data);
    break;

    case 'TC_CEDLE_75':
    await EntityDetails.TC_75_VerifyGSTIN14thCharacterRejectsNumeric(data);
    break;

    case 'TC_CEDLE_76':
    await EntityDetails.TC_76_VerifyGSTIN15thCharacterValidatesFormatNotChecksum(data);
    break;

    case 'TC_CEDLE_77':
    await EntityDetails.TC_77_VerifyPANOrForm60SectionIsMandatory(data);
    break;

    case 'TC_CEDLE_78':
    await EntityDetails.TC_78_VerifyPANCardRadioButtonDefaultSelected(data);
    break;


    case 'TC_CEDLE_79':
    await EntityDetails.TC_79_VerifyPANCardFieldVisibleEnabledClickable(data);
    break;


    case 'TC_CEDLE_80':
    await EntityDetails.TC_80_VerifyPANCardAcceptsValidFormat(data);
    break;

    case 'TC_CEDLE_81':
    await EntityDetails.TC_81_VerifyPANFirstFiveAlphabets(data);
    break;

    case 'TC_CEDLE_82':
    await EntityDetails.TC_82_VerifyPANNextFourCharactersAreNumeric(data);
    break;

    case 'TC_CEDLE_83':
    await EntityDetails.TC_83_VerifyPANLastCharacterIsAlphabet(data);
    break;

    case 'TC_CEDLE_84':
    await EntityDetails.TC_84_VerifyPANFourthCharacterForSoleProprietorship(data);
    break;

    case 'TC_CEDLE_85':
    await EntityDetails.TC_85_VerifyPANFourthCharacterBasedOnEntityType(data);
    break;

    case 'TC_CEDLE_86':
    await EntityDetails.TC_86_VerifyPANFourthCharacterPForNonSoleProprietorship(data);
    break;

     case 'TC_CEDLE_87':
    await EntityDetails.TC_87_VerifyPANFourthCharacterOtherThanPForSoleProprietorship(data);
    break;

    case 'TC_CEDLE_88':
    await EntityDetails.TC_88_VerifyPANVerifiedCanBeSetToYes(data);
    break;

    case 'TC_CEDLE_89':
    await EntityDetails.TC_89_VerifyPANVerifiedCanBeSetToNo(data);
    break;
    
    case 'TC_CEDLE_90':
    await EntityDetails.TC_90_VerifyPANVerifiedInformationIcon(data);
    break;

    case 'TC_CEDLE_91':
    await EntityDetails.TC_91_VerifySaveAndNextFunctionalityForPrefetchedLegalEntityDetails(data);
    break;
    
    case 'TC_CEDLE_92':
    await EntityDetails.TC_92_VerifySaveAndNextFunctionalityIfDataIsModified(data);
    break;

     case 'TC_CEDLE_93':
    await EntityDetails.TC_CEDLE_93_VerifySaveAndNextDisabledWhenFieldErrorPresent(data);
    break;

    case 'TC_CEDLE_94':
    await EntityDetails.TC_94_VerifyPANIsNotMandatoryForPartnershipFirm(data);
    break;

    case 'TC_CEDLE_95':
    await EntityDetails.TC_95_VerifyPANIsNotMandatoryForLLP(data);
    break;

     case 'TC_CEDLE_96':
    await EntityDetails.TC_96_VerifyPANIsNotMandatoryForPublicLimitedCompany(data);
    break;

    case 'TC_CEDLE_97':
    await EntityDetails.TC_97_VerifyPANIsNotMandatoryForPrivateLimitedCompany(data);
    break;


        // Example:
        // case 'TC_CEDLE_11_b':
        //
        //   await EntityDetails.someOtherMethod(data);
        //
        //   break;


        default:

          throw new Error(
            `Unknown TC_Num: ${data.TC_Num}`
          );
      }

    }
  );

}