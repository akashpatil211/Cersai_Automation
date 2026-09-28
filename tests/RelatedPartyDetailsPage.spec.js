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

const {
    getTestData
} = require('../utils/excelReader').default;


// ================= SCREENSHOT FOLDER =================

const SCREENSHOTS_DIR = path.join(
    process.cwd(),
    'AllScreenshots_RelatedPartyDetails'
);


// ================= TEST DATA =================

const testData = getTestData('RelatedPartyDetails').filter(
    data => String(data.run ?? '').toUpperCase() === 'Y'
);


// ================= CHECK TEST DATA =================

console.log('Related Party Details test data:', testData);


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

            const relatedPartyDetailsPage  = new RelatedPartyDetailsPage(page);


            // ================= LOGIN =================

            await login.navigate();

            await login.login(
                data.m_username,
                data.m_password,
                data.dscPath
            );


            // ================= TEST CASE SWITCH =================

            switch (String(data.TC_Num).trim()) {

            case 'TC_CRPDLE_01':
            await relatedPartyDetailsPage.TC_01_VerifyREUserNavigatedToRelatedPartyDetailsAfterContactDetails(data);
            break;

            case 'TC_CRPDLE_02':
            await relatedPartyDetailsPage.TC_02_VerifyRelationDropdownOptions(data);
            break;

            case 'TC_CRPDLE_03':
            await relatedPartyDetailsPage.TC_03_VerifyREUserCanSelectRelation(data);
            break;

            case 'TC_CRPDLE_04':
            await relatedPartyDetailsPage.TC_04_VerifyOnlyOneRelationCanBeSelected(data);
            break;

            case 'TC_CRPDLE_05':
            await relatedPartyDetailsPage.TC_05_VerifyValidCKYCNumberAcceptedForValidRelation(data);
            break;

            case 'TC_CRPDLE_07':
            await relatedPartyDetailsPage.TC_07_VerifyInvalidCKYCNumberRejectedForValidRelation(data);
            break;

            case 'TC_CRPDLE_09':
            await relatedPartyDetailsPage.TC_09_VerifyREUserCanViewCKYCDetails(data);
            break;

            case 'TC_CRPDLE_10':
            await relatedPartyDetailsPage.TC_10_VerifyCKYCViewMenuDisplaysNecessaryInformation(data);
            break;

            case 'TC_CRPDLE_11':
            await relatedPartyDetailsPage.TC_11_VerifyBeneficialOwnerRejectsLegalCKYCNumber(data);
            break;

            case 'TC_CRPDLE_12':
            await relatedPartyDetailsPage.TC_12_VerifyBeneficialOwnerSelectionIsMandatory(data);
            break;

            case 'TC_CRPDLE_13':
            await relatedPartyDetailsPage.TC_13_VerifyNumericValueAcceptedForOwnership(data);
            break;

            case 'TC_CRPDLE_14':
            await relatedPartyDetailsPage.TC_14_VerifyDirectorEnablesDirectorIdentificationNumber(data);
            break;

            case 'TC_CRPDLE_15':
            await relatedPartyDetailsPage.TC_15_VerifyOtherRelationEnablesRelationshipField(data);
            break;

            case 'TC_CRPDLE_16':
            await relatedPartyDetailsPage.TC_16_VerifySaveAndNextWithPrefetchedRelatedPartyDetails(data);
            break;

            case 'TC_CRPDLE_17':
            await relatedPartyDetailsPage.TC_17_VerifySaveAndNextWithModifiedRelatedPartyDetails(data);
            break;

            case 'TC_CRPDLE_18':
            await relatedPartyDetailsPage.TC_18_VerifyREUserCanSaveDetailsAndResumeProcess(data);
            break;

            case 'TC_CRPDLE_19':
            await relatedPartyDetailsPage.TC_19_VerifyDirectorRelationForPublicLimitedCompany(data);
            break;

            case 'TC_CRPDLE_20':
            await relatedPartyDetailsPage.TC_20_VerifyDirectorRelationForPrivateLimitedCompany(data);
            break;

            case 'TC_CRPDLE_21':
            await relatedPartyDetailsPage.TC_21_VerifyDirectorRelationForSection8Company(data);
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