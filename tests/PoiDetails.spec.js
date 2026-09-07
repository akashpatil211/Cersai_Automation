import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';
import { excelReader } from '../utils/excelReader';
import { LoginPage } from '../pageObjects/LoginPage';
import { Entitydetails } from '../pageObjects/Entitydetails';
import { PoiDetails } from '../pageObjects/PoiDetails';
const {
  getTestData,
  writeCellData
} = require('../utils/excelReader').default;


// ================= SCREENSHOT FOLDER =================

const SCREENSHOTS_DIR = path.join(
  process.cwd(),
  'AllScreenshots_PoiDetails'
);


// ================= TEST DATA =================

const testData = getTestData('POI').filter(
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
const poiDetails = new PoiDetails(page);

await login.navigate();

await login.login(
    data.m_username,
    data.m_password,
    data.dscPath
);

switch (data.TC_Num) {

    case 'TC_CPOIALE_02':
        await poiDetails.TC_02_POI_VerifyAllFields(data);
        break;

      case 'TC_CPOIALE_03':
        await poiDetails.TC_03_CIN_AcceptsValid21DigitAlphanumeric(data);
        break;
    
      case 'TC_CPOIALE_04':
        await poiDetails.TC_04_CIN_RejectsLessOrGreaterThan21Characters(data);
        break;
      
      case 'TC_CPOIALE_05':
        await poiDetails.TC_05_CIN_AcceptsFirstCharacterAs_L_Or_U(data);
        break;

       case 'TC_CPOIALE_06':
        await poiDetails.TC_06_CIN_RejectsInvalidFirstCharacter(data);
        break;

         case 'TC_CPOIALE_07':
        await poiDetails.TC_07_CIN_AcceptsNumericCharactersFrom2ndTo6thPosition(data);
        break;
         case 'TC_CPOIALE_08':
        await poiDetails.TC_08_CIN_RejectsNonNumericCharactersFrom2ndTo6thPosition(data);
        break;
      
        case 'TC_CPOIALE_09':
        await poiDetails.TC_09_CIN_AcceptsAlphabeticStateCode(data);
        break;

        case 'TC_CPOIALE_10':
        await poiDetails.TC_10_CIN_RejectsNumberIn7thAnd8thCharacters(data);
        break;

         case 'TC_CPOIALE_11':
        await poiDetails.TC_11_CIN_AcceptsNumbersIn9thTo12thCharacters(data);
        break;
        
         case 'TC_CPOIALE_12':
        await poiDetails.TC_12_CIN_RejectsAlphabetsIn9thTo12thCharacters(data);
        break;

         case 'TC_CPOIALE_13':
        await poiDetails.TC_13_CIN_AcceptsCharacterEntityTypeCode(data);
        break;

         case 'TC_CPOIALE_14':
        await poiDetails.TC_14_CIN_RejectsNumbersIn13thTo15thCharacters(data);
        break;

        case 'TC_CPOIALE_15':
        await poiDetails.TC_15_CIN_AcceptsValidSerialNumber(data);
        break;

          case 'TC_CPOIALE_16':
        await poiDetails.TC_16_CIN_RejectsInvalidSerialNumber(data);
        break;

         case 'TC_CPOIALE_17':
        await poiDetails.TC_17_CIN_AcceptsSpecialCharIn9thTo12thCharacters(data);
        break;

        case 'TC_CPOIALE_18':
        await poiDetails.TC_18_CPOIALE_VerifyCINFieldIsMandatory(data);
        break;
    
        
        case 'TC_CPOIALE_19':
        await poiDetails.TC_19_VerifyCINIsMandatory(data);
        break;

         case 'TC_CPOIALE_20':
        await poiDetails.TC_20_verifyCertificateOfIncorporationAcceptsOnlyPDFJPGJPEG(data);
        break;

        case 'TC_CPOIALE_21':
        await poiDetails.TC_21_CPOIALE_VerifyCertificateOfIncorporationAllowsFileUpload(data);
        break;

         case 'TC_CPOIALE_22':
        await poiDetails.TC_22_verifyCertificateOfIncorporationRejectsMoreThan25MB(data);
        break;

          case 'TC_CPOIALE_23':
        await poiDetails.TC_23_verifyCertificateOfIncorporationAccepts25MBJPEG(data);
        break;

            case 'TC_CPOIALE_24':
        await poiDetails.TC_24_verifyCertificateOfIncorporationAcceptsJPEGLessThan25MB(data);
        break;

            case 'TC_CPOIALE_25':
        await poiDetails.TC_25_verifyCertificateOfIncorporationRejectsJPEGGreaterThan25MB(data);
        break;
       

           case 'TC_CPOIALE_26':
        await poiDetails.TC_26_verifyCertificateOfIncorporationAcceptsJPGEqual25MB(data);
        break;

           case 'TC_CPOIALE_27':
        await poiDetails.TC_27_verifyCertificateOfIncorporationAcceptsJPGLessThan25MB(data);
        break;

           case 'TC_CPOIALE_28':
        await poiDetails.TC_28_verifyCertificateOfIncorporationRejectsJPGGreaterThan25MB(data);
        break;

          case 'TC_CPOIALE_29':
        await poiDetails.TC_29_verifyMemorandumAndArticlesOfAssociationIsMandatory(data);
        break;

           case 'TC_CPOIALE_30':
        await poiDetails.TC_30_verifyMemorandumAndArticlesAcceptsOnlyPDFJPGJPEG(data);
        break;

          case 'TC_CPOIALE_31':
        await poiDetails.TC_CPOIALE_31_MemorandumArticles_AcceptsMaximum25MB(data);
        break;

          case 'TC_CPOIALE_32':
        await poiDetails.TC_CPOIALE_32_MemorandumArticles_RejectsMoreThan25MB(data);
        break;

          case 'TC_CPOIALE_33':
        await poiDetails.TC_CPOIALE_33_MemorandumArticles_Accepts25MBJPEG(data);
        break;

        case 'TC_CPOIALE_34':
        await poiDetails.TC_CPOIALE_34_MemorandumArticles_AcceptsJPEGLessThan25MB(data);
        break;

        case 'TC_CPOIALE_35':
        await poiDetails.TC_CPOIALE_35_MemorandumArticles_RejectsJPEGGreaterThan25MB(data);
        break;

          case 'TC_CPOIALE_36':
        await poiDetails.TC_CPOIALE_36_MemorandumArticles_AcceptsJPGEqualTo25MB(data);
        break;
        
          case 'TC_CPOIALE_37':
        await poiDetails.TC_CPOIALE_37_MemorandumArticles_AcceptsJPGLessThan25MB(data);
        break;

          case 'TC_CPOIALE_38':
        await poiDetails.TC_CPOIALE_38_MemorandumArticles_RejectsJPGGreaterThan25MB(data);
        break;

         case 'TC_CPOIALE_39':
        await poiDetails.TC_CPOIALE_39_BoardResolutionPowerOfAttorney_IsMandatory(data);
        break;

          case 'TC_CPOIALE_40':
        await poiDetails.TC_CPOIALE_40_BoardResolutionPowerOfAttorney_RejectsInvalidFormat(data);
        break;

          case 'TC_CPOIALE_41':
        await poiDetails.TC_41_CPOIALE_VerifyResolutionOfManagingBodyAllowsFileUpload(data);
        break;
        
           case 'TC_CPOIALE_42':
        await poiDetails.TC_CPOIALE_42_BoardResolutionPowerOfAttorney_RejectsMoreThan25MB(data);
        break;

           case 'TC_CPOIALE_43':
        await poiDetails.TC_CPOIALE_43_BoardResolutionPowerOfAttorney_Accepts25MBJPEG(data);
        break;

            case 'TC_CPOIALE_44':
        await poiDetails.TC_CPOIALE_44_BoardResolutionPowerOfAttorney_AcceptsJPEGLessThan25MB(data);
        break;

              case 'TC_CPOIALE_45':
        await poiDetails.TC_CPOIALE_45_BoardResolutionPowerOfAttorney_RejectsJPEGGreaterThan25MB(data);
        break;

            case 'TC_CPOIALE_46':
        await poiDetails.TC_CPOIALE_46_BoardResolutionPowerOfAttorney_AcceptsJPGEqualTo25MB(data);
        break;

          case 'TC_CPOIALE_47':
        await poiDetails.TC_CPOIALE_47_BoardResolutionPowerOfAttorney_AcceptsJPGLessThan25MB(data);
        break;

            case 'TC_CPOIALE_48':
        await poiDetails.TC_CPOIALE_48_BoardResolutionPowerOfAttorney_RejectsJPGGreaterThan25MB(data);
        break;

             case 'TC_CPOIALE_49':
        await poiDetails.TC_CPOIALE_49_VerifySeniorManagementFieldIsMandatory(data);
        break;

              case 'TC_CPOIALE_50':
        await poiDetails.TC_CPOIALE_50_SeniorManagementAcceptsOnlyPDFJPGJPEG(data);
        break;

               case 'TC_CPOIALE_51':
        await poiDetails.TC_51_CPOIALE_VerifySeniorManagementAcceptsPDFJPGJPEG(data);
        break;

               case 'TC_CPOIALE_52':
        await poiDetails.TC_52_CPOIALE_VerifySeniorManagementRejectsMoreThan25MB(data);
        break;

               case 'TC_CPOIALE_53':
        await poiDetails.TC_53_CPOIALE_VerifySeniorManagementAccepts25MBJPEG(data);
        break;
       

               case 'TC_CPOIALE_54':
        await poiDetails.TC_54_CPOIALE_VerifySeniorManagementAcceptsJPEGLessThan25MB(data);
        break;

        TC_55_CPOIALE_VerifySeniorManagementRejectsJPEGGreaterThan25MB


        case 'TC_CPOIALE_55':
        await poiDetails.TC_55_CPOIALE_VerifySeniorManagementRejectsJPEGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_56':
        await poiDetails.TC_56_CPOIALE_VerifySeniorManagementAcceptsJPGEqualTo25MB(data);
        break;
       
         case 'TC_CPOIALE_57':
        await poiDetails.TC_57_CPOIALE_VerifySeniorManagementAcceptsJPGLessThan25MB(data);
        break;

           case 'TC_CPOIALE_58':
        await poiDetails.TC_58_CPOIALE_VerifySeniorManagementRejectsJPGGreaterThan25MB(data);
        break;
        
        
           case 'TC_CPOIALE_59':
        await poiDetails.TC_59_CPOIALE_VerifyCommencementOfBusinessMandatoryForPublicLimitedCompany(data);
        break;

         case 'TC_CPOIALE_60':
        await poiDetails.TC_60_CPOIALE_VerifyCommencementOfBusinessAcceptsOnlyPDFJPGJPEG(data);
        break;

         case 'TC_CPOIALE_61':
        await poiDetails.TC_61_CPOIALE_VerifyCommencementOfBusinessAcceptsPDFJPGJPEG(data);
        break; 

          case 'TC_CPOIALE_62':
        await poiDetails.TC_62_CPOIALE_VerifyCommencementOfBusinessRejectsMoreThan25MB(data);
        break;

          case 'TC_CPOIALE_63':
        await poiDetails.TC_63_CPOIALE_VerifyCommencementOfBusinessAcceptsJPEGEqualTo25MB(data);
        break;

          case 'TC_CPOIALE_64':
        await poiDetails.TC_64_CPOIALE_VerifyCommencementOfBusinessAcceptsJPEGLessThan25MB(data);
        break;
         
        
          case 'TC_CPOIALE_65':
        await poiDetails.TC_65_CPOIALE_VerifyCommencementOfBusinessRejectsJPEGGreaterThan25MB(data);
        break;

         case 'TC_CPOIALE_66':
        await poiDetails.TC_66_CPOIALE_VerifyCommencementOfBusinessAcceptsJPGEqualTo25MB(data);
        break;

         case 'TC_CPOIALE_67':
        await poiDetails.TC_67_CPOIALE_VerifyCommencementOfBusinessAcceptsJPGLessThan25MB(data);
        break;

         case 'TC_CPOIALE_68':
        await poiDetails.TC_68_CPOIALE_VerifyCommencementOfBusinessRejectsJPGGreaterThan25MB(data);
        break;

           case 'TC_CPOIALE_69':
        await poiDetails.TC_69_CPOIALE_VerifyOthersFieldIsNonMandatory(data);
        break;


         case 'TC_CPOIALE_70':
        await poiDetails.TC_70_CPOIALE_VerifyOthersFieldAcceptsOnlyPDFJPGJPEG(data);
        break;

        case 'TC_CPOIALE_71':
        await poiDetails.TC_71_CPOIALE_VerifyOthersAcceptsPDFJPGJPEG(data);
        break;

        
         case 'TC_CPOIALE_72':
        await poiDetails.TC_72_CPOIALE_VerifyOthersRejectsFileGreaterThan25MB(data);
        break;

         case 'TC_CPOIALE_73':
        await poiDetails.TC_73_CPOIALE_VerifyOthersAcceptsJPEGEqualTo25MB(data);
        break;

         case 'TC_CPOIALE_74':
        await poiDetails.TC_74_CPOIALE_VerifyOthersFieldAcceptsJPEGLessThan25MB(data);
        break;

          case 'TC_CPOIALE_75':
        await poiDetails.TC_75_CPOIALE_VerifyOthersRejectsJPEGGreaterThan25MB(data);
        break;

          case 'TC_CPOIALE_76':
        await poiDetails.TC_76_CPOIALE_VerifyOthersAcceptsJPGEequalTo25MB(data);
        break;

          case 'TC_CPOIALE_77':
        await poiDetails.TC_77_CPOIALE_VerifyOthersAcceptsJPGLessThan25MB(data);
        break;

         case 'TC_CPOIALE_78':
        await poiDetails.TC_78_CPOIALE_VerifyOthersRejectsJPGForPublicLimitedCompanyGreaterThan25MB(data);
        break;

        
         case 'TC_CPOIALE_79':
        await poiDetails.TC_79_VerifyRegistrationCertificateMandatory(data);
        break;

         case 'TC_CPOIALE_80':
        await poiDetails.TC_80_VerifyRegistrationCertificateRejectsInvalidFileFormat(data);
        break;
        
           case 'TC_CPOIALE_81':
        await poiDetails.TC_81_VerifyRegistrationCertificateAcceptsPDFJPGJPEG(data);
        break;

          case 'TC_CPOIALE_82':
        await poiDetails.TC_82_VerifyRegistrationCertificateRejectsMoreThan25MB(data);
        break;

          case 'TC_CPOIALE_83':
        await poiDetails.TC_83_VerifyRegistrationCertificateAcceptsJPEG25MB(data);
        break;

          case 'TC_CPOIALE_84':
        await poiDetails.TC_84_VerifyRegistrationCertificateAcceptsJPEGLessThan25MB(data);
        break;

          case 'TC_CPOIALE_85':
        await poiDetails.TC_85_VerifyRegistrationCertificateRejectsJPEGGreaterThan25MB(data);
        break;

          case 'TC_CPOIALE_86':
        await poiDetails.TC_86_VerifyRegistrationCertificateAcceptsJPG25MB(data);
        break;

            case 'TC_CPOIALE_87':
        await poiDetails.TC_87_VerifyRegistrationCertificateAcceptsJPGLessThan25MB(data);
        break;

          case 'TC_CPOIALE_88':
        await poiDetails.TC_88_VerifyRegistrationCertificateRejectsJPGGreaterThan25MB(data);
        break;

          case 'TC_CPOIALE_89':
        await poiDetails.TC_89_VerifyRegistrationNumberAcceptsMaximum50Characters(data);
        break;

           case 'TC_CPOIALE_90':
        await poiDetails.TC_90_VerifyRegistrationNumberAcceptsAlphanumericCharacters(data);
        break;

          case 'TC_CPOIALE_91':
        await poiDetails.TC_91_VerifyRegistrationNumberAcceptsSpecialCharactersAlongWithAlphanumeric(data);
        break;

          case 'TC_CPOIALE_92':
        await poiDetails.TC_92_VerifyRegistrationNumberMandatoryForRegisteredPartnershipFirm(data);
        break;

          case 'TC_CPOIALE_93':
        await poiDetails.TC_93_VerifyRegistrationNumberAcceptsRegistrationCertificateFormat(data);
        break;

          case 'TC_CPOIALE_95':
        await poiDetails.TC_95_VerifyRegistrationCertificateAcceptsOnlyPDFJPGJPEG(data);
        break;

         case 'TC_CPOIALE_96':
        await poiDetails.TC_96_VerifyRegistrationCertificateIsEditableAndAcceptsFileUpload(data);
        break;

          case 'TC_CPOIALE_97':
        await poiDetails.TC_97_VerifyRegistrationCertificateRejectsFileMoreThan25MB(data);
        break;
        
          case 'TC_CPOIALE_98':
        await poiDetails.TC_98_VerifyRegistrationCertificateRejectsInvalidFileFormats(data);
        break;

          case 'TC_CPOIALE_99':
        await poiDetails.TC_99_VerifyRegistrationCertificateAcceptsPDFJPGJPEGLessThan25mb(data);
        break;

        case 'TC_CPOIALE_100':
        await poiDetails.TC_100_VerifyRegistrationCertificateRejectsMultiplePDFJPGJPEGGreaterThan25mb(data);
        break;

        case 'TC_CPOIALE_101':
        await poiDetails.TC_101_VerifyLLPINCertificateAcceptsMultiplePDFJPGJPEGEqualTo25mb(data);
        break;

        case 'TC_CPOIALE_102':
        await poiDetails.TC_102_VerifyLLPINCertificateAcceptsPDFJPGJPEGLessThan25MB(data);
        break;

            case 'TC_CPOIALE_103':
        await poiDetails.TC_103_VerifyLLPINCertificateRejectsPDFJPGJPEGGreaterThan25MB(data);
        break;

          case 'TC_CPOIALE_104':
        await poiDetails.TC_104_VerifyLLPINAcceptsMaximum7Characters(data);
        break;

          case 'TC_CPOIALE_105':
        await poiDetails.TC_105_VerifyLLPINAcceptsOnlyAlphanumericCharacters(data);
        break;
        
        case 'TC_CPOIALE_106':
        await poiDetails.TC_106_VerifyLLPINFieldIsMandatory(data);
        break;

        case 'TC_CPOIALE_107':
        await poiDetails.TC_107_VerifyPartnershipDeedFieldIsMandatory(data);
        break;

        case 'TC_CPOIALE_108':
        await poiDetails.TC_107_VerifyPartnershipDeedFieldIsMandatory(data);
        break;

        case 'TC_CPOIALE_109':
        await poiDetails.TC_109_VerifyPartnershipDeedFieldIsEnabledForFileUpload(data);
        break;
        
           case 'TC_CPOIALE_110':
        await poiDetails.TC_110_VerifyPartnershipDeedRejectsMoreThan25MB(data);
        break;

        case 'TC_CPOIALE_111':
        await poiDetails.TC_111_VerifyPartnershipDeedAcceptsFilesEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_112':
        await poiDetails.TC_112_VerifyPartnershipDeedAcceptsPDFJPGJPEGLessThan25MB(data);
        break;

        
        case 'TC_CPOIALE_117':
        await poiDetails.TC_117_VerifyNamesOfAllPartnersMandatoryForPartnershipFirm(data);
        break;

        case 'TC_CPOIALE_118':
        await poiDetails.TC_118_VerifyNamesOfAllPartnersRejectsInvalidFormat(data);
        break;

            case 'TC_CPOIALE_119':
        await poiDetails.TC_119_VerifyNamesOfAllPartnersAcceptsMaximum25MB(data);
        break;

               case 'TC_CPOIALE_120':
        await poiDetails.TC_120_VerifyNamesOfAllPartnersRejectsMoreThan25MB(data);
        break;

               case 'TC_CPOIALE_121':
        await poiDetails.TC_121_VerifyNamesOfAllPartnersAcceptsJPGExactly25MB(data);
        break;

            case 'TC_CPOIALE_122':
        await poiDetails.TC_122_VerifyNamesOfAllPartnersAcceptsJPGLessThan25MB(data);
        break;

          case 'TC_CPOIALE_123':
        await poiDetails.TC_123_VerifyNamesOfAllPartnersRejectsJPGGreaterThan25MB(data);
        break;

          case 'TC_CPOIALE_124':
        await poiDetails.TC_124_VerifyNamesOfAllPartnersAcceptsPDFExactly25MB(data);
        break;

          case 'TC_CPOIALE_125':
        await poiDetails.TC_125_VerifyNamesOfAllPartnersAcceptsPDFLessThan25MB(data);
        break;

          case 'TC_CPOIALE_126':
        await poiDetails.TC_126_VerifyNamesOfAllPartnersRejectsPDFGreaterThan25MB(data);
        break;

        
          case 'TC_CPOIALE_127':
        await poiDetails.TC_127_VerifyOthersFieldIsNonMandatory(data);
        break;

        case 'TC_CPOIALE_128':
        await poiDetails.TC_128_VerifyOthersRejectsInvalidFormat(data);
        break;

         case 'TC_CPOIALE_129':
        await poiDetails.TC_129_VerifyOthersAcceptsMaximum25MB(data);
        break;

           case 'TC_CPOIALE_130':
        await poiDetails.TC_130_VerifyOthersRejectsPDFJPGJPEGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_131':
        await poiDetails.TC_131_VerifyOthersAcceptsMultiplePDFJPGJPEGExactly25MB(data);
        break;

          case 'TC_CPOIALE_132':
        await poiDetails.TC_132_VerifyOthersAcceptsMultiplePDFJPGJPEGLessThan25MB(data);
        break;

          case 'TC_CPOIALE_133':
        await poiDetails.TC_133_VerifyOthersRejectsMultiplePDFJPGJPEGGreaterThan25MB(data);
        break;

        
          case 'TC_CPOIALE_134':
        await poiDetails.TC_134_VerifyOthersRejectsUnsupportedFormatExactly25MB(data);
        break;

          case 'TC_CPOIALE_135':
        await poiDetails.TC_135_VerifyOthersRejectsUnsupportedFormatLessThan25MB(data);
        break;

        case 'TC_CPOIALE_136':
        await poiDetails.TC_136_VerifyOthersRejectsMultipleUnsupportedFormatsGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_137':
        await poiDetails.TC_137_VerifyRegistrationCertificateFieldIsMandatory(data);
        break;

          case 'TC_CPOIALE_138':
        await poiDetails.TC_138_VerifyRegistrationCertificateRejectsInvalidFormat(data);
        break;

        case 'TC_CPOIALE_139':
        await poiDetails.TC_139_VerifyRegistrationCertificateAcceptsAllPDFJPGJPEGFormats(data);
        break;

        case 'TC_CPOIALE_140':
        await poiDetails.TC_140_VerifyRegistrationCertificateRejectsPDFJPGJPEGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_141':
        await poiDetails.TC_141_VerifyRegistrationCertificateAcceptsPDFJPGJPEGEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_142':
        await poiDetails.TC_142_VerifyRegistrationCertificateAcceptsPDFJPGJPEGLessThan25MB(data);
        break;

        case 'TC_CPOIALE_143':
        await poiDetails.TC_143_VerifyRegistrationCertificateRejectsPDFJPGJPEGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_144':
        await poiDetails.TC_144_VerifyRegistrationCertificateRejectsInvalidFormatFilesEqualTo25MB(data);
        break;

        
        case 'TC_CPOIALE_145':
        await poiDetails.TC_145_VerifyRegistrationCertificateRejectsMultipleInvalidFormatFilesLessThan25MB(data);
        break;

        case 'TC_CPOIALE_146':
        await poiDetails.TC_146_VerifyRegistrationCertificateRejectsInvalidFormatFilesGreaterThan25MB(data);
        break;

             case 'TC_CPOIALE_147':
        await poiDetails.TC_147_VerifyRegistrationNumberFieldIsMandatory(data);
        break;
        
          case 'TC_CPOIALE_148':
        await poiDetails.TC_148_VerifyRegistrationNumberAcceptsMaximum50Characters(data);
        break;

        case 'TC_CPOIALE_149':
        await poiDetails.TC_149_VerifyRegistrationNumberAcceptsAlphanumericCharacters(data);
        break;

        case 'TC_CPOIALE_150':
        await poiDetails.TC_150_VerifyRegistrationNumberAcceptsSpecialCharactersAlongWithAlphanumericData(data);
        break;

        case 'TC_CPOIALE_151':
        await poiDetails.TC_151_VerifyRegistrationNumberAcceptsCertificateFormat(data);
        break;

        case 'TC_CPOIALE_152':
        await poiDetails.TC_152_VerifyTrustDeedFieldIsMandatory(data);
        break;

        case 'TC_CPOIALE_153':
        await poiDetails.TC_153_VerifyTrustDeedRejectsInvalidFileFormat(data);
        break;

        case 'TC_CPOIALE_154':
        await poiDetails.TC_154_VerifyTrustDeedAcceptsMaximum25MBAllFormats(data);
        break;

        case 'TC_CPOIALE_155':
        await poiDetails.TC_155_VerifyTrustDeedRejectsMoreThan25MBAllFormats(data);
        break;
        
        case 'TC_CPOIALE_156':
        await poiDetails.TC_156_VerifyTrustDeedAcceptsMultipleSameFormatFilesEqual25MB(data);
        break;

        case 'TC_CPOIALE_157':
        await poiDetails.TC_157_VerifyTrustDeedAcceptsMultipleSameFormatFilesLessThan25MB(data);
        break;

        case 'TC_CPOIALE_158':
        await poiDetails.TC_158_VerifyTrustDeedRejectsMultipleFilesGreaterThan25MB(data);
        break;

    default:
        throw new Error(
            `Unknown TC_Num: ${data.TC_Num}`
        );
}

    }
  );

}