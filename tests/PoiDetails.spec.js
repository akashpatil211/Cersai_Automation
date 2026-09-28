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

  case 'TC_CPOIALE_01':
        await poiDetails.TC_01_VerifyNavigationToProofOfIdentityAndAddress(data);
        break;

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
        
        case 'TC_CPOIALE_113':
        await poiDetails.TC_113_VerifyPartnershipDeedRejectsOtherFormatGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_114':
        await poiDetails.TC_114_VerifyPartnershipDeedRejectsOtherFormatEqualTo25MB(data);
        break;

        
        case 'TC_CPOIALE_115':
        await poiDetails.TC_115_VerifyPartnershipDeedRejectsOtherFormatLessThan25MB(data);
        break;

        case 'TC_CPOIALE_116':
        await poiDetails.TC_116_VerifyPartnershipDeedRejectsOtherFormatGreaterThan25MB(data);
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

        case 'TC_CPOIALE_159':
        await poiDetails.TC_159_VerifyTrustDeedRejectsInvalidFormatFileEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_160':
        await poiDetails.TC_160_VerifyTrustDeedRejectsMultipleInvalidFormatFilesLessThan25MB(data);
        break;

        case 'TC_CPOIALE_161':
        await poiDetails.TC_161_VerifyTrustDeedRejectsInvalidFormatFileGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_162':
        await poiDetails.TC_162_VerifyNamesOfBeneficiariesTrusteesSettlorAuthorsFieldIsMandatoryForRegisteredTrust(data);
        break;

        
        case 'TC_CPOIALE_163':
        await poiDetails.TC_163_VerifyNamesOfBeneficiariesTrusteesSettlorAuthorsAcceptsOnlyPDFJPGJPEG(data);
        break;

        case 'TC_CPOIALE_164':
        await poiDetails.TC_164_VerifyNamesOfBeneficiariesTrusteesSettlorAuthorsAcceptsMaximum25MBAcrossAllFormats(data);
        break;

        
        case 'TC_CPOIALE_165':
        await poiDetails.TC_165_VerifyNamesOfBeneficiariesTrusteesSettlorAuthorsRejectsFilesGreaterThan25MB(data);
        break;

                
        case 'TC_CPOIALE_166':
        await poiDetails.TC_166_VerifyNamesBeneficiariesAcceptsPDFJPGJPEGEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_167':
        await poiDetails.TC_167_VerifyNamesBeneficiariesAcceptsMultipleSameFormatFilesLessThan25MB(data);
        break;

        case 'TC_CPOIALE_168':
        await poiDetails.TC_168_VerifyNamesBeneficiariesRejectsMultipleSameFormatFilesGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_169':
        await poiDetails.TC_169_VerifyNamesBeneficiariesRejectsMultipleInvalidFormatFilesEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_170':
        await poiDetails.TC_170_VerifyNamesBeneficiariesRejectsMultipleInvalidFormatFilesLessThan25MB(data);
        break;

         case 'TC_CPOIALE_171':
        await poiDetails.TC_171_VerifyNamesBeneficiariesRejectsMultipleInvalidFormatFilesGreaterThan25MB(data);
        break;

        
         case 'TC_CPOIALE_172':
        await poiDetails.TC_172_VerifyOthersFieldIsNonMandatoryForTrust(data);
        break;

        case 'TC_CPOIALE_173':
        await poiDetails.TC_173_VerifyOthersFieldRejectOtherThanPDFJPGJPEG(data);
        break;

        case 'TC_CPOIALE_174':
        await poiDetails.TC_174_VerifyOthersFieldAccepts25MBAllFormats(data);
        break;

        case 'TC_CPOIALE_175':
        await poiDetails.TC_175_VerifyOthersFieldRejectsMoreThan25MB(data);
        break;

        case 'TC_CPOIALE_176':
        await poiDetails.TC_176_VerifyOthersFieldForTrustAccepts25MBJPEG(data);
        break;
        
        case 'TC_CPOIALE_177':
        await poiDetails.TC_177_VerifyOthersFieldForTrustAcceptsJPEGLessThan25MB(data);
        break;

         case 'TC_CPOIALE_178':
        await poiDetails.TC_178_VerifyOthersFieldForTrustRejectsJPEGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_179':
        await poiDetails.TC_179_VerifyOthersFieldForTrustAcceptsJPGEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_180':
        await poiDetails.TC_180_VerifyOthersFieldForTrustAcceptsJPGLessThan25MB(data);
        break;

        
        case 'TC_CPOIALE_181':
        await poiDetails.TC_181_VerifyOthersFieldForTrustRejectsJPGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_182':
        await poiDetails.TC_182_VerifyResolutionOfManagingBodyFieldIsMandatory(data);
        break;

         case 'TC_CPOIALE_183':
        await poiDetails.TC_183_VerifyResolutionOfManagingBodyRejectsInvalidFormat(data);
        break;

        case 'TC_CPOIALE_184':
        await poiDetails.TC_184_VerifyResolutionOfManagingBodyAcceptsMaximum25MB(data);
        break;

        case 'TC_CPOIALE_185':
        await poiDetails.TC_185_VerifyResolutionOfManagingBodyRejectsMoreThan25MB(data);
        break;

        case 'TC_CPOIALE_186':
        await poiDetails.TC_186_VerifyResolutionOfManagingBodyAccepts25MBPDF(data);
        break;

        case 'TC_CPOIALE_187':
        await poiDetails.TC_187_VerifyResolutionOfManagingBodyAcceptsPDFLessThan25MB(data);
        break;

        case 'TC_CPOIALE_188':
        await poiDetails.TC_188_VerifyResolutionOfManagingBodyRejectsJPGAndJPEGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_189':
        await poiDetails.TC_189_VerifyResolutionOfManagingBodyRejectsInvalidFormatsEqualTo25MB(data);
        break;

        
        case 'TC_CPOIALE_190':
        await poiDetails.TC_190_VerifyResolutionOfManagingBodyRejectsInvalidFormatsLessThan25MB(data);
        break;

        case 'TC_CPOIALE_191':
        await poiDetails.TC_191_VerifyResolutionOfManagingBodyRejectsInvalidFormatsGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_192':
        await poiDetails.TC_192_VerifyPowerOfAttorneyFieldIsMandatory(data);
        break;

        case 'TC_CPOIALE_193':
        await poiDetails.TC_193_VerifyPowerOfAttorneyRejectsInvalidFormat(data);
        break;

        case 'TC_CPOIALE_194':
        await poiDetails.TC_194_VerifyPowerOfAttorneyAcceptsMaximum25MB(data);
        break;

          case 'TC_CPOIALE_195':
        await poiDetails.TC_195_VerifyPowerOfAttorneyRejectsMoreThan25MB(data);
        break;

        case 'TC_CPOIALE_196':
        await poiDetails.TC_196_VerifyPowerOfAttorneyAcceptsSameFormatFilesEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_197':
        await poiDetails.TC_197_VerifyPowerOfAttorneyAcceptsSameFormatFilesLessThan25MB(data);
        break;

        case 'TC_CPOIALE_198':
        await poiDetails.TC_198_VerifyPowerOfAttorneyRejectsSameFormatFilesGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_199':
        await poiDetails.TC_199_VerifyPowerOfAttorneyRejectsInvalidFormatFilesEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_200':
        await poiDetails.TC_200_VerifyPowerOfAttorneyRejectsInvalidFormatFilesLessThan25MB(data);
        break;

        case 'TC_CPOIALE_201':
        await poiDetails.TC_201_VerifyPowerOfAttorneyRejectsInvalidFormatFilesGreaterThan25MB(data);
        break;

         case 'TC_CPOIALE_202':
        await poiDetails.TC_202_VerifyOthersFieldIsNonMandatory(data);
        break;
        
        case 'TC_CPOIALE_203':
        await poiDetails.TC_203_VerifyOthersRejectsInvalidFormatFile(data);
        break;

        case 'TC_CPOIALE_204':
        await poiDetails.TC_204_VerifyOthersAcceptsFilesEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_205':
        await poiDetails.TC_205_VerifyOthersRejectsFilesGreaterThan25MB(data);
        break;
        
        
        case 'TC_CPOIALE_206':
        await poiDetails.TC_206_VerifyOthersAcceptsMultipleJpgFilesEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_207':
        await poiDetails.TC_207_VerifyOthersAcceptsMultipleJpgFilesLessThan25MB(data);
        break;

        case 'TC_CPOIALE_208':
        await poiDetails.TC_208_VerifyOthersRejectsMultipleJpgFilesGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_209':
        await poiDetails.TC_209_VerifyOthersRejectsInvalidFormatFileEqualTo25MB(data);
        break;

        case 'TC_CPOIALE_210':
        await poiDetails.TC_210_VerifyOthersRejectsInvalidFormatFileLessThan25MB(data);
        break;

        case 'TC_CPOIALE_211':
        await poiDetails.TC_211_VerifyOthersRejectsInvalidFormatFileGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_212':
        await poiDetails.TC_212_VerifySupportingDocumentsForPoIMandatory(data);
        break;

        case 'TC_CPOIALE_213':
        await poiDetails.TC_213_VerifySupportingDocumentsForPoIAcceptsOnlyValidFormats(data);
        break;

        case 'TC_CPOIALE_214':
        await poiDetails.TC_214_VerifySupportingDocumentsForPoIAcceptsMaximum25MB(data);
        break;

        case 'TC_CPOIALE_214':
        await poiDetails.TC_215_VerifySupportingDocumentsForPoIRejectsMoreThan25MB(data);
        break;
        
        case 'TC_CPOIALE_215':
        await poiDetails.TC_215_VerifySupportingDocumentsForPoIRejectsMoreThan25MB(data);
        break;

        case 'TC_CPOIALE_216':
        await poiDetails.TC_216_VerifyTrustSupportingDocumentsForPoIAccepts25MBJPEG(data);
        break;

        case 'TC_CPOIALE_217':
        await poiDetails.TC_217_VerifyTrustSupportingDocumentsForPoIAcceptsJPEGLessThan25MB(data);
        break;

        case 'TC_CPOIALE_218':
        await poiDetails.TC_218_VerifyTrustSupportingDocumentsForPoIRejectsJPEGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_219':
        await poiDetails.TC_219_VerifyTrustSupportingDocumentsForPoIAcceptsJPG25MB(data);
        break;

        case 'TC_CPOIALE_220':
        await poiDetails.TC_220_VerifyTrustSupportingDocumentsForPoIAcceptsJPGLessThan25MB(data);
        break;

        case 'TC_CPOIALE_221':
        await poiDetails.TC_221_VerifyTrustSupportingDocumentsForPoIRejectsJPGGreaterThan25MB(data);
        break;
        
        case 'TC_CPOIALE_221':
        await poiDetails.TC_221_VerifyTrustSupportingDocumentsForPoIRejectsJPGGreaterThan25MB(data);
        break;

        case 'TC_CPOIALE_222':
        await poiDetails.TC_222_VerifyRegistrationCertificateIsNonMandatoryForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_223':
        await poiDetails.TC_223_VerifyRegistrationCertificateAcceptsOnlyValidFormats(data);
        break;

        case 'TC_CPOIALE_224':
        await poiDetails.TC_224_VerifyRegistrationCertificateAcceptsMaximum25MB(data);
        break;

        case 'TC_CPOIALE_225':
        await poiDetails.TC_225_VerifyRegistrationCertificateRejectsMoreThan25MB(data);
        break;

        case 'TC_CPOIALE_226':
        await poiDetails.TC_226_VerifyRegistrationCertificateAccepts25MBJPEGForOtherConstitutionTypes(data);
        break;
 
        case 'TC_CPOIALE_227':
        await poiDetails.TC_227_VerifyRegistrationCertificateAcceptsJPEGLessThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_228':
        await poiDetails.TC_228_VerifyRegistrationCertificateRejectsJPEGGreaterThan25MBForOtherConstitutionTypes(data);
        break;

         case 'TC_CPOIALE_229':
        await poiDetails.TC_229_VerifyRegistrationCertificateAcceptsJPGEqualTo25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_230':
        await poiDetails.TC_230_VerifyRegistrationCertificateAcceptsJPGLessThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_231':
        await poiDetails.TC_231_VerifyRegistrationCertificateRejectsJPGGreaterThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_232':
        await poiDetails.TC_232_VerifyPowerOfAttorneyIsNonMandatoryForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_233':
        await poiDetails.TC_233_VerifyPowerOfAttorneyAcceptsOnlyValidFormats(data);
        break;

        
        case 'TC_CPOIALE_234':
        await poiDetails.TC_234_VerifyPowerOfAttorneyAcceptsMaximum25MB(data);
        break;

        case 'TC_CPOIALE_235':
        await poiDetails.TC_235_VerifyPowerOfAttorneyRejectsMoreThan25MB(data);
        break;

        case 'TC_CPOIALE_236':
        await poiDetails.TC_236_VerifyPowerOfAttorneyAccepts25MBJPEGForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_237':
        await poiDetails.TC_237_VerifyPowerOfAttorneyAcceptsJPEGLessThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_238':
        await poiDetails.TC_238_VerifyPowerOfAttorneyRejectsJPEGGreaterThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_239':
        await poiDetails.TC_239_VerifyPowerOfAttorneyAcceptsJPGEqualTo25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_240':
        await poiDetails.TC_240_VerifyPowerOfAttorneyAcceptsJPGLessThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_241':
        await poiDetails.TC_241_VerifyPowerOfAttorneyRejectsJPGGreaterThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_242':
        await poiDetails.TC_242_VerifyOthersFieldIsNonMandatoryForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_243':
        await poiDetails.TC_243_VerifyOthersFieldAcceptsOnlyValidFormats(data);
        break;

        case 'TC_CPOIALE_244':
        await poiDetails.TC_244_VerifyOthersFieldAcceptsMaximum25MB(data);
        break;

        case 'TC_CPOIALE_245':
        await poiDetails.TC_245_VerifyOthersFieldRejectsMoreThan25MB(data);
        break;

        case 'TC_CPOIALE_246':
        await poiDetails.TC_246_VerifyOthersFieldAcceptsJPEGEqualTo25MBForOtherConstitutionTypes(data);
        break;
        
        case 'TC_CPOIALE_247':
        await poiDetails.TC_247_VerifyOthersFieldAcceptsJPEGLessThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_248':
        await poiDetails.TC_248_VerifyOthersFieldRejectsJPEGGreaterThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_249':
        await poiDetails.TC_249_VerifyOthersFieldAcceptsJPGEqualTo25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_250':
        await poiDetails.TC_250_VerifyOthersFieldAcceptsJPGLessThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_251':
        await poiDetails.TC_251_VerifyOthersFieldRejectsJPGGreaterThan25MBForOtherConstitutionTypes(data);
        break;

        case 'TC_CPOIALE_252':
        await poiDetails.TC_252_VerifySaveAndNextFunctionalityForPrefetchedPOIAddressDetails(data);
        break;

        case 'TC_CPOIALE_253':
        await poiDetails.TC_253_VerifySaveAndNextSavesModifiedPOIData(data);
        break;

          case 'TC_CPOIALE_254':
        await poiDetails.TC_254_VerifyREUserCanSavePOIAddressDetailsAndResumeProcess(data);
        break;



    default:
        throw new Error(
            `Unknown TC_Num: ${data.TC_Num}`
        );
}

    }
  );

}