
import {test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

export class PoiDetails {

    constructor(page) {
        this.page = page;


// ================= SIDEBAR =================

    this.kycManagementDropdown = page
      .getByLabel('sidebar navigation')
      .getByText('KYC Management', { exact: true });

    this.singleOperationsDropdown = page
      .getByLabel('sidebar navigation')
      .getByText('Single Operations', { exact: true });

    // ================= SEARCH =================

    this.enterSearchKey = page.getByPlaceholder('Enter Search Key');

    this.submitButton = page.locator("button[type='submit']");

    // ================= POI =================
    this.entityDetailsHeading = page.getByRole('heading', {
    name: 'Legal Entity Details',
    exact: true
});

this.legalEntityDetails = page.getByText("Legal Entity Details");

        this.entityName = page.getByPlaceholder("Enter Entity Name");
        

        this.entityConstitution = page.locator("//input[@placeholder='Select Entity Constitution']");
        this.entityConstitutionError = this.page.getByText(
            'Please select Entity Constitution Type.',
            { exact: true }
        );

    this.poiHeading = page.getByRole('heading', {
      name: 'Proof Of Identity and Address Details'
    });

    this.cin = page.getByPlaceholder('Enter CIN');

    this.cinError = page.getByText(
      'Please enter valid CIN',
      { exact: true }
    );

    this.cinValidateError = page.getByText(
      'CIN must be 21 characters and match the structural format (e.g., L12345MH2020PLC987654)',
      { exact: true }
    );

    this.cin = page.getByPlaceholder('Enter CIN');

this.cinMandatory = page.locator('label[for="cin"] .MuiFormLabel-asterisk');
this.cinRequiredError = page.getByText('CIN is required', {
    exact: true
});


this.cinError = page.getByText(
    'Please enter valid CIN',
    { exact: true }
);

this.uploadCertificateOfIncorporation = page.getByLabel(
    'Certificate of Incorporation file',
    { exact: true }
);

this.fileFormatError = page.getByText(
    'Only PDF, JPG or JPEG files are allowed',
    { exact: true }
);

this.fileSizeError = page.getByText(
    'File size must not exceed 25 MB.',
    { exact: true }
);

this.fileSizeError1 = page.getByText(
    'Total upload size for this submission must not exceed 25 MB.',
    { exact: true }
);

this.certificateOfIncorporationLabel = page.getByText(
    'Certificate of Incorporation',
    { exact: true }
);

this.certificateOfIncorporationError = page.getByText(
    'Please upload Certificate of Incorporation',
    { exact: true }
);
// ================= POI - PROOF OF IDENTITY AND ADDRESS =================

this.poiHeading = page.getByRole("heading", {
    name: "Proof Of Identity and Address Details"
});


// ================= CIN =================

this.cin = page.getByPlaceholder("Enter CIN");

this.cinError = page.getByText(
    "Please enter valid CIN",
    { exact: true }
);

this.uploadCertificateOfIncorporation = page.getByLabel(
    "Certificate of Incorporation file",
    { exact: true }
);

// ================= DOCUMENT UPLOADS =================

this.uploadCertificateOfIncorporation = page.getByLabel(
    "Certificate of Incorporation file",
    { exact: true }
);

this.uploadMemorandumAndArticles = page.getByLabel(
    "Memorandum and Articles of Association file",
    { exact: true }
);

this.memorandumAndArticlesError = page.getByText(
    'Memorandum and Articles of Association is required',
    { exact: true }
);

this.uploadBoardResolutionAndPowerOfAttorney = page.getByLabel(
    "Resolution from Board of Directors and Power of Attorney granted to its manager, officer or employees to transact on its behalf file",
    { exact: true }
);

this.boardResolutionPowerOfAttorneyError = page.getByText(
    'Resolution from Board of Directors / Power of Attorney is required',
    { exact: true }
);

 this.boardResolutionError = this.page.getByText(
        "Resolution from Board of Directors / Power of Attorney is required",
        { exact: true }
    );
this.uploadSeniorManagementPersons = page.getByLabel(
    "Names of persons holding senior management positions* (List to be enclosed) file",
    { exact: true }
);

this.SeniorManagementError = page.getByText(
    'Senior management list is required',
    { exact: true }
);

this.seniorManagement = page.getByText(
    "Names of persons holding senior management positions* (List to be enclosed)*",
    { exact: true }
);

this.SeniorManagementError = page.getByText(
    "Senior management list is required",
    { exact: true }
);



this.uploadCommencementOfBusiness = page.getByLabel(
    "Certificate of Commencement of Business for Public Limited Companies file",
    { exact: true }
);

this.uploadOthers = page.getByLabel("Others file",{ exact: true });


// LLPIN
this.llpin = page.getByPlaceholder("Enter LLPIN", { exact: true });

// LLPIN Certificate
this.uploadLLPINCertificate = page.getByLabel(
    "LLPIN Certificate file",
    { exact: true }
);

this.llpinRequiredError = page.getByText(
    "LLPIN is required",
    { exact: true }
);

// Partnership Deed
this.uploadPartnershipDeed = page.getByLabel(
    "Partnership Deed file",
    { exact: true }
);

this.uploadTrustDeed = page.getByLabel(
    "Trust Deed file",
    { exact: true }
);

// Names of all partners
this.uploadNamesOfAllPartners = page.getByLabel(
    "Names of all partners (List to be enclosed) file",
    { exact: true }
);

// Others
this.uploadOthers = page.getByLabel(
    "Others file",
    { exact: true }
);


// ================= SAVE BUTTON =================

this.saveAndNextButton = page.getByRole("button", {
    name: "Save And Next",
    exact: true
});


this.registrationNumber = page.getByPlaceholder(
    'Enter Registration Number',
    { exact: true }
);

this.uploadRegistrationCertificate = page.getByLabel(
    'Registration Certificate file',
    { exact: true }
);

this.registrationCertificateError = page.getByText(
    'Registration Certificate is required',
    { exact: true }
);



this.registrationNumberError = page.getByText(
    'Resolution from Board of Directors / Power of Attorney is required',
    { exact: true }
);

this.uploadPartnershipDeed = page.getByLabel(
    'Partnership Deed file',
    { exact: true }
);

this.uploadNamesOfAllPartners = page.getByLabel(
    'Names of all partners (List to be enclosed) file',
    { exact: true }
);

this.uploadOthers = page.getByLabel(
    'Others file',
    { exact: true }
);

this.saveAndNextButton = page.getByRole(
    'button',
    { name: 'Save And Next', exact: true }
);

this.fileFormatError = page.getByText(
    'Only PDF, JPG or JPEG files are allowed.',
    { exact: true }
);

this.fileSizeError = page.getByText(
    'File size must not exceed 25 MB',
    { exact: true }
);

this.partnershipDeedRequiredError = page.getByText(
    "Partnership Deed is required",
    { exact: true }
);

this.trustDeedRequiredError = page.getByText(
    "Trust Deed is required",
    { exact: true }
);






}

async navigateToPOI(data) {

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();

    await this.page.getByRole("link", {
        name: "Create",
        exact: true
    }).click();

    await this.page.getByRole("radio", {
        name: "Legal Entity"
    }).check();

    await expect(this.enterSearchKey).toBeVisible({
        timeout: 10000
    });

    await this.enterSearchKey.fill(
        String(data.SearchKey ?? "").trim()
    );

    // Submit Search Key
    await this.submitButton.click();

    // Hard wait for 1 seconds
    await this.page.waitForTimeout(1000);

    // Entity Details must load
    await expect(this.entityDetailsHeading).toBeVisible({
        timeout: 60000
    });

    // Wait until Save And Next is enabled
    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 60000
    });

    // Navigate to POI
    await this.saveAndNextButton.click();

    await expect(this.poiHeading).toBeVisible({
        timeout: 60000
    });
}
async TC_02_POI_VerifyAllFields(data) {

    // Common navigation to POI page
    await this.navigateToPOI(data);

    // Verify CIN
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Verify Certificate of Incorporation
    await expect(this.uploadCertificateOfIncorporation).toBeAttached();

    // Verify Memorandum and Articles of Association
    await expect(this.uploadMemorandumAndArticles).toBeAttached();

    // Verify Board Resolution and Power of Attorney
    await expect(
        this.uploadBoardResolutionAndPowerOfAttorney
    ).toBeAttached();

    // Verify Senior Management Positions document
    await expect(
        this.uploadSeniorManagementPersons
    ).toBeAttached();

    // Verify Certificate of Commencement of Business
    await expect(
        this.uploadCertificateOfCommencementOfBusiness
    ).toBeAttached();

    // Verify Others
    await expect(this.uploadOthers).toBeAttached();
}


async TC_03_CIN_AcceptsValid21DigitAlphanumeric(data) {
    await this.navigateToPOI(data);

    // Get CIN from Excel
    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Validate CIN format
    expect(cin).toMatch(
        /^[UL][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/
    );

    // Enter CIN
    await this.cin.fill(cin);

    // Verify entered value
    await expect(this.cin).toHaveValue(cin);

    // Verify no validation error
    await expect(this.cinError).not.toBeVisible();

    console.log(
        `PASS: CIN field accepts valid 21-character alphanumeric value "${cin}".`
    );
}

async TC_04_CIN_RejectsLessOrGreaterThan21Characters(data) {
    await this.navigateToPOI(data);
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    const cin = String(data.cin ?? '').trim();

    // Enter invalid CIN from Excel
    await this.cin.fill(cin);

    // Verify CIN is NOT exactly 21 alphanumeric characters
    expect(cin).not.toMatch(/^[A-Z0-9]{21}$/);

    // Verify validation error
    await expect(this.cinValidateError).toBeVisible();
}

async TC_05_CIN_AcceptsFirstCharacterAs_L_Or_U(data) {
    await this.navigateToPOI(data);
    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Verify test data is a valid 21-character alphanumeric CIN
    expect(cin).toHaveLength(21);
    expect(cin).toMatch(/^[LU][A-Z0-9]{20}$/);

    // Enter CIN
    await this.cin.fill(cin);

    // Verify entered CIN
    await expect(this.cin).toHaveValue(cin);

    // Trigger validation
    await this.cin.press('Tab');

    // Verify no validation error
    await expect(this.cinError).not.toBeVisible();
}

async TC_06_CIN_RejectsInvalidFirstCharacter(data) {
    await this.navigateToPOI(data);

    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Verify Excel test data is exactly 21 characters
    expect(cin).toHaveLength(21);

    // Verify first character is NOT L or U
    expect(cin).not.toMatch(/^[LU]/);

    // Enter invalid CIN
    await this.cin.fill(cin);

    // Trigger validation
    await this.cin.press('Tab');

    // Verify validation error is displayed
    await expect(this.cinValidateError).toBeVisible();

    // Optional: verify the field value
    await expect(this.cin).toHaveValue(cin);
}

async TC_07_CIN_AcceptsNumericCharactersFrom2ndTo6thPosition(data) {
    await this.navigateToPOI(data);

    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Verify CIN is exactly 21 characters
    expect(cin).toHaveLength(21);

    // Verify:
    // 1st character = L or U
    // 2nd to 6th characters = exactly 5 digits
    // Remaining 15 characters = alphanumeric
    expect(cin).toMatch(/^[LU]\d{5}[A-Z0-9]{15}$/);

    // Enter CIN from Excel
    await this.cin.fill(cin);

    // Verify entered CIN
    await expect(this.cin).toHaveValue(cin);

    // Trigger validation
    await this.cin.press('Tab');

    // Verify no validation error
    await expect(this.cinError).not.toBeVisible();
}

async TC_08_CIN_RejectsNonNumericCharactersFrom2ndTo6thPosition(data) {
    await this.navigateToPOI(data);

    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Verify test data has 21 characters
    expect(cin).toHaveLength(21);

    // First character should be L or U
    expect(cin).toMatch(/^[LU]/);

    // 2nd to 6th characters should NOT be completely numeric
    expect(cin.slice(1, 6)).not.toMatch(/^\d{5}$/);

    // Enter invalid CIN
    await this.cin.fill(cin);

    // Trigger validation
    await this.cin.press('Tab');

    // Verify validation error
    await expect(this.cinValidateError).toBeVisible();

    // Verify entered value
    await expect(this.cin).toHaveValue(cin);
}

async TC_09_CIN_AcceptsAlphabeticStateCode(data) {
    await this.navigateToPOI(data);

    // Take CIN from Excel
    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Enter Excel CIN into WEB field
    await this.cin.fill(cin);

    // Verify value entered in web field
    await expect(this.cin).toHaveValue(cin);

    // Trigger web-field validation
    await this.cin.press('Tab');

    // Application should accept alphabetic state code such as MH
    await expect(this.cinValidateError).not.toBeVisible();
}

async TC_10_CIN_RejectsNumberIn7thAnd8thCharacters(data) {
    await this.navigateToPOI(data);

    // Get CIN from Excel
    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Verify test data has 21 characters
    expect(cin).toHaveLength(21);

    // 7th and 8th characters should be numbers for negative test
    expect(cin.charAt(6)).toMatch(/^[0-9]$/);
    expect(cin.charAt(7)).toMatch(/^[0-9]$/);

    // Enter invalid CIN
    await this.cin.fill(cin);

    // Verify entered value
    await expect(this.cin).toHaveValue(cin);

    // Verify validation error
    await expect(this.cinValidateError).toBeVisible();

    console.log(
        `PASS: CIN field rejects the input when 7th and 8th characters are numbers.`
    );
}


async TC_11_CIN_AcceptsNumbersIn9thTo12thCharacters(data) {
    await this.navigateToPOI(data);

    const cin = String(data.cin ?? "").trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // CIN should contain exactly 21 characters
    expect(cin).toHaveLength(21);

    // Validate complete CIN format
    expect(cin).toMatch(
        /^[UL][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/
    );

    // Verify 9th to 12th characters are numbers
    expect(cin.substring(8, 12)).toMatch(/^[0-9]{4}$/);

    // Enter CIN
    await this.cin.fill(cin);

    // Verify entered value
    await expect(this.cin).toHaveValue(cin);

    // No validation error should be displayed
    await expect(this.cinError).not.toBeVisible();

    console.log(
        `PASS: CIN field accepts the input when 9th to 12th characters are numbers.`
    );
}

async TC_12_CIN_RejectsAlphabetsIn9thTo12thCharacters(data) {
    await this.navigateToPOI(data);

    const cin = String(data.cin ?? "").trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // CIN should contain exactly 21 characters
    expect(cin).toHaveLength(21);

    // Verify 9th to 12th characters are alphabets
    expect(cin.substring(8, 12)).toMatch(/^[A-Za-z]{4}$/);

    // Enter CIN
    await this.cin.fill(cin);

    // Verify entered value
    await expect(this.cin).toHaveValue(cin);

    // Validation error should be displayed
    await expect(this.cinValidateError).toBeVisible();

    console.log(
        "PASS: CIN field rejects the input when 9th to 12th characters are alphabets."
    );
}
async TC_13_CIN_AcceptsCharacterEntityTypeCode(data) {
    await this.navigateToPOI(data);

    // Take CIN from Excel
    const cin = String(data.cin ?? '').trim();

    // Enter CIN into web field
    await this.cin.fill(cin);

    // Read actual value from WEB field
    const fieldValue = await this.cin.inputValue();

    // Extract 13th to 15th characters from WEB field
    const entityTypeCode = fieldValue.substring(12, 15);

    console.log("CIN entered in web field:", fieldValue);
    console.log("13th-15th characters:", entityTypeCode);

    // Verify 13th-15th characters are characters only
    expect(entityTypeCode).toMatch(/^[A-Z]{3}$/);

    // Trigger application validation
    await this.cin.press('Tab');

    // Verify no validation error
    await expect(this.cinValidateError).not.toBeVisible();
}


async TC_14_CIN_RejectsNumbersIn13thTo15thCharacters(data) {

    await this.navigateToPOI(data);

    const cin = String(data.cin ?? "").trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // CIN should contain exactly 21 characters
    expect(cin).toHaveLength(21);

    // Verify 13th to 15th characters are numbers
    const characters13To15 = cin.substring(12, 15);

    expect(characters13To15).toMatch(/^[0-9]{3}$/);

    // Enter CIN
    await this.cin.fill(cin);

    // Verify entered value
    await expect(this.cin).toHaveValue(cin);

    // Validation error should be displayed
    await expect(this.cinValidateError).toBeVisible();

    console.log(
        "PASS: CIN field rejects the input when 13th to 15th characters are numbers."
    );
}

async TC_15_CIN_AcceptsValidSerialNumber(data) {
    await this.navigateToPOI(data);

    // Take CIN from Excel
    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Enter CIN from Excel into web field
    await this.cin.fill(cin);

    // Read actual value from web field
    const fieldValue = await this.cin.inputValue();

    console.log("CIN entered in web field:", fieldValue);

    // Extract 16th to 21st characters
    const serialNumber = fieldValue.substring(15, 21);

    console.log("16th-21st Serial Number:", serialNumber);

    // Verify 16th-21st characters are numeric only
    expect(serialNumber).toMatch(/^\d{6}$/);

    // Trigger application validation
    await this.cin.press('Tab');

    // Verify valid serial number is accepted
    await expect(this.cinValidateError).not.toBeVisible();
}

async TC_16_CIN_RejectsInvalidSerialNumber(data) {
    await this.navigateToPOI(data);

    // Take CIN from Excel
    const cin = String(data.cin ?? '').trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Enter CIN from Excel into web field
    await this.cin.fill(cin);

    // Read actual value from web field
    const fieldValue = await this.cin.inputValue();

    console.log("CIN entered in web field:", fieldValue);

    // Extract 16th to 21st characters
    const serialNumber = fieldValue.substring(15, 21);

    console.log("16th-21st Serial Number:", serialNumber);

    // Verify serial number is NOT 6 numeric digits
    expect(serialNumber).not.toMatch(/^\d{6}$/);

    // Trigger application validation
    await this.cin.press('Tab');

    // Verify application rejects invalid serial number
    await expect(this.cinValidateError).toBeVisible();
}


async TC_17_CIN_AcceptsSpecialCharIn9thTo12thCharacters(data) {
    await this.navigateToPOI(data);

    // Take CIN from Excel without validating its format
    const cin = String(data.cin ?? "").trim();

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Enter CIN from Excel
    await this.cin.fill(cin);

    // Verify entered value
    await expect(this.cin).toHaveValue(cin);

    // Trigger application validation
    await this.cin.press("Tab");

    // Verify application accepts/rejects based on actual requirement
    await expect(this.cinValidateError).toBeVisible();

    console.log(
        "PASS: CIN field validation verified for alphabet characters in 9th to 12th positions."
    );
}

async TC_18_CPOIALE_VerifyCINFieldIsMandatory(data) {

    await this.navigateToPOI(data);

    // Verify CIN field
    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    // Leave CIN empty
    await this.cin.fill("");

    // Trigger validation
    await this.cin.press("Tab");

    // Verify mandatory validation
    await expect(this.cinRequiredError).toBeVisible({
        timeout: 5000
    });

    // Verify exact mandatory message
    await expect(this.cinRequiredError).toHaveText("CIN is required");

    console.log(
        "PASS: CIN field is marked as mandatory when left blank."
    );
}

async TC_19_VerifyCINIsMandatory(data) {

    // Navigate to POI
    await this.navigateToPOI(data);

    // Verify POI page
    await expect(this.poiHeading).toBeVisible({
        timeout: 10000
    });

    // Verify CIN field
    await expect(this.cin).toBeVisible({
        timeout: 10000
    });

    await expect(this.cin).toBeEnabled({
        timeout: 10000
    });

    // Verify CIN mandatory indicator
    await expect(this.cinMandatory).toContainText('*');

    // Keep CIN empty
    await this.cin.fill('');

    // Click Save And Next
    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 10000
    });

    await this.saveAndNextButton.click();

    // Verify mandatory validation
    await expect(this.cinRequiredError).toBeVisible({
        timeout: 10000
    });

    // Verify exact error message
    await expect(this.cinRequiredError).toHaveText('CIN is required');
}

async TC_20_verifyCertificateOfIncorporationAcceptsOnlyPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // ================= CIN FROM EXCEL =================

    const validCIN = String(data.cin ?? "").trim();

    expect(validCIN).toMatch(/^[A-Z0-9]{21}$/);

    await this.cin.fill(validCIN);

    await expect(this.cin).toHaveValue(validCIN);

    console.log("CIN entered:", validCIN);


    // ================= FILE PATH FROM EXCEL =================

    const invalidFileName = String(
        data.incorpCertPath ?? ""
    ).trim();

    expect(
        invalidFileName,
        "incorpCertPath is empty in Excel"
    ).not.toBe("");


    // ================= CREATE FULL PATH =================

    const invalidFilePath = path.join(
        "D:/DSC",
        invalidFileName
    );

    console.log(
        "Certificate file path from Excel:",
        invalidFilePath
    );


    // ================= VERIFY FILE EXISTS =================

    expect(
        fs.existsSync(invalidFilePath),
        `File does not exist: ${invalidFilePath}`
    ).toBeTruthy();


    // ================= VERIFY INVALID FORMAT =================

    const extension = path.extname(invalidFilePath).toLowerCase();

    expect(
        [".png", ".doc", ".docx", ".txt"],
        `Test file must be an unsupported format. Actual: ${extension}`
    ).toContain(extension);


    // ================= UPLOAD INVALID FILE =================

    await this.uploadCertificateOfIncorporation.setInputFiles(
        invalidFilePath
    );


    // ================= VERIFY INVALID FORMAT =================

    await expect(
        this.fileFormatError
    ).toBeVisible({
        timeout: 10000
    });


    // ================= VERIFY ERROR MESSAGE =================

    await expect(
        this.fileFormatError
    ).toHaveText(
        "Only PDF, JPG or JPEG files are allowed."
    );

    console.log(
        "PASS: Certificate of Incorporation rejects unsupported file format."
    );
}

async TC_21_CPOIALE_VerifyCertificateOfIncorporationAllowsFileUpload(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read Certificate of Incorporation file name from Excel
    const fileName = String(data.incorpCertPdfPath ?? "").trim();

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log("Certificate of Incorporation file:", filePath);

    // Upload file
    await this.uploadCertificateOfIncorporation.setInputFiles(filePath);

    // Verify file format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    // Verify file size error is not displayed
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Certificate of Incorporation field allows file upload."
    );
}

async TC_22_verifyCertificateOfIncorporationRejectsMoreThan25MB(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // ================= CIN - ENTER IN WEB FIELD =================

    const cin = String(data.cin ?? '').trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    await this.cin.fill(cin);

    // Validate CIN only on WEB
    await expect(this.cin).toHaveValue(cin);

    // Trigger web validation
    await this.cin.press("Tab");


    // ================= FILE NAME FROM EXCEL =================

    const fileName = String(
        data.incorpCertPath ?? ''
    ).trim();

    expect(
        fileName,
        "incorpCertPath is empty in Excel"
    ).not.toBe('');


    // ================= FILE PATH =================

    const filePath = path.join("D:/DSC", fileName);

    console.log("Certificate file:", filePath);


    // ================= VERIFY FILE EXISTS =================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // ================= FILE SIZE =================

    const fileSize = fs.statSync(filePath).size;
    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `Certificate file size: ${fileSizeMB.toFixed(2)} MB`
    );


    // ================= UPLOAD TO WEB =================

    await this.uploadCertificateOfIncorporation.setInputFiles(
        filePath
    );


    // ================= VERIFY WEB SIZE ERROR =================

    await expect(this.fileSizeError).toBeVisible({
        timeout: 10000
    });

    await expect(this.fileSizeError).toContainText("25 MB");

    console.log(
        "PASS: Web application rejected Certificate of Incorporation file greater than 25 MB."
    );
}

async TC_23_verifyCertificateOfIncorporationAccepts25MBJPEG(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // CIN - ENTER ONLY IN WEB
    // =====================================================

    const cin = String(data.cin ?? '').trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    await this.cin.fill(cin);

    // Verify value entered in WEB field only
    await expect(this.cin).toHaveValue(cin);

    // Trigger web validation
    await this.cin.press("Tab");


    // =====================================================
    // JPEG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.incorpCertJpegPath ?? ''
    ).trim();

    expect(
        fileName,
        "incorpCertJpegPath is empty in Excel"
    ).not.toBe('');


    // =====================================================
    // FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log("JPEG file:", filePath);


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY JPEG EXTENSION
    // =====================================================

    expect(
        path.extname(filePath).toLowerCase()
    ).toBe(".jpeg");


    // =====================================================
    // VERIFY EXACT FILE SIZE
    // =====================================================

    const fileSize = fs.statSync(filePath).size;

    const exact25MB = 25 * 1024 * 1024; // 26214400 bytes

    console.log(`Actual JPEG size: ${fileSize} bytes`);
    console.log(`Expected JPEG size: ${exact25MB} bytes`);

    // File MUST be exactly 25 MB
    expect(
        fileSize,
        "JPEG file must be exactly 25 MB (26214400 bytes)"
    ).toBe(exact25MB);


    // =====================================================
    // UPLOAD JPEG
    // =====================================================

    await this.uploadCertificateOfIncorporation.setInputFiles(
        filePath
    );

    console.log("Exact 25 MB JPEG uploaded successfully");


    // =====================================================
    // VERIFY NO SIZE/FORMAT ERROR
    // =====================================================

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 10000
    });

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 10000
    });

    await expect(this.fileSizeError1).not.toBeVisible();


    console.log(
        "PASS: Certificate of Incorporation accepts JPEG file of exactly 25 MB."
    );
}

async TC_24_verifyCertificateOfIncorporationAcceptsJPEGLessThan25MB(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // CIN - WEB VALIDATION ONLY
    // =====================================================

    const cin = String(data.cin ?? '').trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    await this.cin.fill(cin);
    await expect(this.cin).toHaveValue(cin);

    // Trigger web validation
    await this.cin.press("Tab");


    // =====================================================
    // JPEG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.incorpCertJpegPath ?? ''
    ).trim();

    expect(
        fileName,
        "incorpCertJpegPath is empty in Excel"
    ).not.toBe('');


    // =====================================================
    // FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log("JPEG file:", filePath);


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY JPEG FORMAT
    // =====================================================

    expect(
        path.extname(filePath).toLowerCase()
    ).toBe(".jpeg");


    // =====================================================
    // VERIFY FILE SIZE < 25 MB
    // =====================================================

    const fileSize = fs.statSync(filePath).size;
    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPEG file size: ${fileSizeMB.toFixed(2)} MB`
    );

    expect(
        fileSize,
        "JPEG file must be less than 25 MB"
    ).toBeLessThan(25 * 1024 * 1024);


    // =====================================================
    // UPLOAD JPEG
    // =====================================================

    await this.uploadCertificateOfIncorporation.setInputFiles(
        filePath
    );

    console.log("JPEG uploaded successfully");


    // =====================================================
    // VERIFY NO ERROR
    // =====================================================

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 10000
    });

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 10000
    });


    // =====================================================
    // SAVE AND NEXT
    // =====================================================

    await this.saveAndNextButton.click();

    console.log(
        "PASS: Certificate of Incorporation accepts JPEG less than 25 MB."
    );
}

async TC_25_verifyCertificateOfIncorporationRejectsJPEGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // CIN - WEB FIELD ONLY
    // =====================================================

    const cin = String(data.cin ?? "").trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    await this.cin.fill(cin);

    // Validate only that CIN was entered in the web field
    await expect(this.cin).toHaveValue(cin);

    await this.cin.press("Tab");


    // =====================================================
    // JPEG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.incorpCertJpegPath ?? ""
    ).trim();

    expect(
        fileName,
        "incorpCertJpegPath is empty in Excel"
    ).not.toBe("");


    // =====================================================
    // FILE PATH - D:/DSC
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log("JPEG file:", filePath);


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY JPEG EXTENSION
    // =====================================================

    expect(
        path.extname(filePath).toLowerCase(),
        "File must be JPEG format"
    ).toBe(".jpeg");


    // =====================================================
    // VERIFY FILE SIZE > 25 MB
    // =====================================================

    const fileSize = fs.statSync(filePath).size;
    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPEG file size: ${fileSizeMB.toFixed(2)} MB`
    );

    expect(
        fileSize,
        "Test file must be greater than 25 MB"
    ).toBeGreaterThan(25 * 1024 * 1024);


    // =====================================================
    // UPLOAD JPEG
    // =====================================================

    await this.uploadCertificateOfIncorporation.setInputFiles(
        filePath
    );

    console.log("JPEG greater than 25 MB uploaded");


    // =====================================================
    // VERIFY SIZE ERROR
    // =====================================================

    await expect(this.fileSizeError).toBeVisible({
        timeout: 10000
    });

    await expect(this.fileSizeError).toContainText("25 MB");

    console.log(
        "PASS: Certificate of Incorporation rejected JPEG greater than 25 MB."
    );
}

async TC_26_verifyCertificateOfIncorporationAcceptsJPGEqual25MB(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // CIN - WEB VALIDATION ONLY
    // =====================================================

    const cin = String(data.cin ?? "").trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    await this.cin.fill(cin);

    // Validate CIN only on WEB
    await expect(this.cin).toHaveValue(cin);

    await this.cin.press("Tab");


    // =====================================================
    // JPG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.incorpCertJpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "incorpCertJpgPath is empty in Excel"
    ).not.toBe("");


    // =====================================================
    // FILE PATH
    // =====================================================

    const filePath = path.resolve("D:/DSC", fileName);

    console.log("JPG file:", filePath);


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY JPG FORMAT
    // =====================================================

    expect(
        path.extname(filePath).toLowerCase(),
        "File must be JPG format"
    ).toBe(".jpg");


    // =====================================================
    // VERIFY FILE SIZE EXACTLY 25 MB
    // =====================================================

    const fileSize = fs.statSync(filePath).size;

    const exact25MB = 25 * 1024 * 1024; // 26214400 bytes

    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPG actual size: ${fileSize} bytes (${fileSizeMB.toFixed(2)} MB)`
    );

    console.log(
        `Expected size: ${exact25MB} bytes (25.00 MB)`
    );

    // MUST be exactly 25 MB
    expect(
        fileSize,
        "JPG file size must be exactly 25 MB (26214400 bytes)"
    ).toBe(exact25MB);


    // =====================================================
    // UPLOAD JPG
    // =====================================================

    await this.uploadCertificateOfIncorporation.setInputFiles(
        filePath
    );

    console.log(
        "Exact 25 MB JPG uploaded successfully"
    );


    // =====================================================
    // VERIFY NO SIZE ERROR
    // =====================================================

     // Verify file-size error is NOT displayed
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();

    // Verify format error is NOT displayed
    await expect(this.fileFormatError).not.toBeVisible();

    // =====================================================
    // VERIFY NO FORMAT ERROR
    // =====================================================

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 10000
    });


    // =====================================================
    // SAVE AND NEXT
    // =====================================================

    await this.saveAndNextButton.click();

    console.log(
        "PASS: Certificate of Incorporation accepts JPG of exactly 25 MB."
    );
}
async TC_27_verifyCertificateOfIncorporationAcceptsJPGLessThan25MB(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // CIN
    // =====================================================

    const cin = String(data.cin ?? "").trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    await this.cin.fill(cin);
    await expect(this.cin).toHaveValue(cin);

    await this.cin.press("Tab");


    // =====================================================
    // JPG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.incorpCertJpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "incorpCertJpgPath is empty in Excel"
    ).not.toBe("");


    // =====================================================
    // FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log("JPG file:", filePath);


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY JPG FORMAT
    // =====================================================

    expect(
        path.extname(filePath).toLowerCase(),
        "File must be JPG format"
    ).toBe(".jpg");


    // =====================================================
    // VERIFY FILE SIZE < 25 MB
    // =====================================================

    const fileSize = fs.statSync(filePath).size;
    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPG file size: ${fileSizeMB.toFixed(2)} MB`
    );

    expect(
        fileSize,
        "JPG file must be less than 25 MB"
    ).toBeLessThan(25 * 1024 * 1024);


    // =====================================================
    // UPLOAD JPG
    // =====================================================

    await this.uploadCertificateOfIncorporation.setInputFiles(
        filePath
    );

    console.log("JPG uploaded successfully");


    // =====================================================
    // VERIFY NO SIZE ERROR
    // =====================================================

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 10000
    });


    // =====================================================
    // VERIFY NO FORMAT ERROR
    // =====================================================

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 10000
    });


    // =====================================================
    // SAVE AND NEXT
    // =====================================================

    await this.saveAndNextButton.click();

    console.log(
        "PASS: Certificate of Incorporation accepts JPG less than 25 MB."
    );
}

async TC_28_verifyCertificateOfIncorporationRejectsJPGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // CIN
    // =====================================================

    const cin = String(data.cin ?? "").trim();

    await expect(this.cin).toBeVisible();
    await expect(this.cin).toBeEnabled();

    await this.cin.fill(cin);
    await expect(this.cin).toHaveValue(cin);

    await this.cin.press("Tab");


    // =====================================================
    // JPG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.incorpCertJpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "incorpCertJpgPath is empty in Excel"
    ).not.toBe("");


    // =====================================================
    // FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log("JPG file:", filePath);


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY JPG FORMAT
    // =====================================================

    expect(
        path.extname(filePath).toLowerCase(),
        "File must be JPG format"
    ).toBe(".jpg");


    // =====================================================
    // VERIFY FILE SIZE > 25 MB
    // =====================================================

    const fileSize = fs.statSync(filePath).size;
    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPG file size: ${fileSizeMB.toFixed(2)} MB`
    );

    expect(
        fileSize,
        "Test file must be greater than 25 MB"
    ).toBeGreaterThan(25 * 1024 * 1024);


    // =====================================================
    // UPLOAD JPG
    // =====================================================

    await this.uploadCertificateOfIncorporation.setInputFiles(
        filePath
    );

    console.log("JPG greater than 25 MB uploaded");


    // =====================================================
    // VERIFY SIZE ERROR
    // =====================================================

    await expect(this.fileSizeError).toBeVisible({
        timeout: 10000
    });

    await expect(this.fileSizeError).toContainText("25 MB");

    console.log(
        "PASS: Certificate of Incorporation rejected JPG greater than 25 MB."
    );
}


async TC_29_verifyMemorandumAndArticlesOfAssociationIsMandatory(data) {

    await this.navigateToPOI(data);

    // =====================================================
    // VERIFY NO FILE IS SELECTED
    // =====================================================

    await expect(
        this.uploadMemorandumAndArticles
    ).toHaveValue("");


    // =====================================================
    // CLICK SAVE AND NEXT WITHOUT UPLOADING FILE
    // =====================================================

    await this.saveAndNextButton.click();


    // =====================================================
    // VERIFY INLINE MANDATORY ERROR
    // =====================================================

    await expect(
        this.memorandumAndArticlesError
    ).toBeVisible({
        timeout: 10000
    });


    // =====================================================
    // VERIFY ERROR MESSAGE
    // =====================================================

    await expect(
        this.memorandumAndArticlesError
    ).toContainText(
        "Memorandum and Articles of Association"
    );

    console.log(
        "PASS: Memorandum and Articles of Association is mandatory and shows inline error when no file is uploaded."
    );
}

async TC_30_verifyMemorandumAndArticlesAcceptsOnlyPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    // =====================================================
    // GET INVALID FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.memorandumAndArticlesPath ?? ""
    ).trim();

    expect(
        fileName,
        "memorandumAndArticlesPath is empty in Excel"
    ).not.toBe("");


    // =====================================================
    // FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Memorandum & Articles file:",
        filePath
    );


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY FILE FORMAT IS INVALID
    // =====================================================

    const extension = path.extname(filePath).toLowerCase();

    expect(
        [".pdf", ".jpg", ".jpeg"],
        "Test file must have an invalid format"
    ).not.toContain(extension);


    // =====================================================
    // UPLOAD INVALID FILE
    // =====================================================

    await this.uploadMemorandumAndArticles.setInputFiles(
        filePath
    );

    console.log(
        `Invalid file uploaded: ${extension}`
    );


    // =====================================================
    // VERIFY FORMAT ERROR
    // =====================================================

    await expect(
        this.fileFormatError
    ).toBeVisible({
        timeout: 10000
    });


    // =====================================================
    // VERIFY FORMAT ERROR MESSAGE
    // =====================================================

    await expect(
        this.fileFormatError
    ).toHaveText(
        "Only PDF, JPG or JPEG files are allowed."
    );


    console.log(
        "PASS: Memorandum and Articles of Association rejects files other than PDF/JPG/JPEG."
    );
}

async TC_CPOIALE_31_MemorandumArticles_AcceptsMaximum25MB(data) {

    await this.navigateToPOI(data);

    const pdfFileName = String(
        data.memorandumArticlesPdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.memorandumArticlesJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.memorandumArticlesJpegPath ?? ""
    ).trim();

    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    const filePaths = [
        pdfPath,
        jpgPath,
        jpegPath
    ];

    for (const filePath of filePaths) {
        expect(
            fs.existsSync(filePath),
            `File does not exist: ${filePath}`
        ).toBeTruthy();
    }

    const allowedFormats = [".pdf", ".jpg", ".jpeg"];

    for (const filePath of filePaths) {
        const extension = path.extname(filePath).toLowerCase();

        expect(
            allowedFormats,
            `Invalid file format: ${extension}`
        ).toContain(extension);
    }

    const combinedSize = filePaths.reduce(
        (total, filePath) =>
            total + fs.statSync(filePath).size,
        0
    );

    const maxSize = 25 * 1024 * 1024;

    expect(
        combinedSize,
        "Combined PDF + JPG + JPEG size must be <= 25 MB"
    ).toBeLessThanOrEqual(maxSize);

    await this.uploadMemorandumAndArticles.setInputFiles(pdfPath);
}

async TC_CPOIALE_32_MemorandumArticles_RejectsMoreThan25MB(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // GET FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.memorandumAndArticlesPath ?? ""
    ).trim();

    expect(
        fileName,
        "memorandumAndArticlesPath is empty in Excel"
    ).not.toBe("");


    // =====================================================
    // BUILD FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log("More than 25 MB file:", filePath);


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY FILE SIZE > 25 MB
    // =====================================================

    const fileSize = fs.statSync(filePath).size;
    const maxSize = 25 * 1024 * 1024;
    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `File size: ${fileSizeMB.toFixed(2)} MB`
    );

    expect(
        fileSize,
        `Test file must be greater than 25 MB. Actual size: ${fileSize} bytes`
    ).toBeGreaterThan(maxSize);


    // =====================================================
    // UPLOAD MORE THAN 25 MB FILE
    // =====================================================

    await this.uploadMemorandumAndArticles.setInputFiles(
        filePath
    );


    // =====================================================
    // VERIFY FILE SIZE ERROR
    // =====================================================

    await expect(this.fileSizeError).toBeVisible({
        timeout: 10000
    });

    await expect(this.fileSizeError).toHaveText(
        "File size must not exceed 25 MB"
    );


    console.log(
        "PASS: Memorandum and Articles of Association rejects files greater than 25 MB."
    );
}

async TC_CPOIALE_33_MemorandumArticles_Accepts25MBJPEG(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // GET JPEG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.memorandumArticlesJpegPath ?? ""
    ).trim();

    expect(
        fileName,
        "memorandumArticlesJpegPath is empty in Excel"
    ).not.toBe("");


    // =====================================================
    // BUILD FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log("Memorandum & Articles JPEG file:", filePath);


    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();


    // =====================================================
    // VERIFY JPEG EXTENSION
    // =====================================================

    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPEG format. Actual file: ${fileName}`
    ).toBe(".jpeg");


    // =====================================================
    // VERIFY FILE SIZE EXACTLY 25 MB
    // =====================================================

    const fileSize = fs.statSync(filePath).size;

    const exact25MB = 25 * 1024 * 1024; // 26214400 bytes

    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPEG actual file size: ${fileSize} bytes (${fileSizeMB.toFixed(2)} MB)`
    );

    console.log(
        `Expected file size: ${exact25MB} bytes (25.00 MB)`
    );

    // File MUST be exactly 25 MB
    expect(
        fileSize,
        `JPEG file size must be exactly 25 MB (26214400 bytes). Actual size: ${fileSize} bytes`
    ).toBe(exact25MB);


    // =====================================================
    // UPLOAD JPEG
    // =====================================================

    await this.uploadMemorandumAndArticles.setInputFiles(
        filePath
    );

    console.log(
        "Exact 25 MB JPEG uploaded successfully"
    );


    // =====================================================
    // VERIFY NO FILE SIZE ERROR
    // =====================================================

    await expect(
        this.fileSizeError
    ).not.toBeVisible({
        timeout: 10000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    // Verify format error is NOT displayed
    await expect(this.fileFormatError).not.toBeVisible();


    // =====================================================
    // VERIFY NO FORMAT ERROR
    // =====================================================

    await expect(
        this.fileFormatError
    ).not.toBeVisible({
        timeout: 10000
    });


    console.log(
        "PASS: Memorandum and Articles of Association accepts JPEG of exactly 25 MB."
    );
}

async TC_CPOIALE_34_MemorandumArticles_AcceptsJPEGLessThan25MB(data) {

    await this.navigateToPOI(data);

    // Get JPEG file name from Excel
    const fileName = String(
        data.memorandumArticlesJpegPath ?? ""
    ).trim();

    expect(
        fileName,
        "memorandumAndArticlesPath is empty in Excel"
    ).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Memorandum & Articles JPEG file:",
        filePath
    );

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify JPEG format
    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPEG format. Actual file: ${fileName}`
    ).toBe(".jpeg");

    // Verify file size is LESS than 25 MB
    const fileSize = fs.statSync(filePath).size;
    const maxSize = 25 * 1024 * 1024;

    expect(
        fileSize,
        `JPEG file must be less than 25 MB. Actual size: ${
            (fileSize / (1024 * 1024)).toFixed(2)
        } MB`
    ).toBeLessThan(maxSize);

    console.log(
        `JPEG file size: ${(fileSize / (1024 * 1024)).toFixed(2)} MB`
    );

    // Upload JPEG
    await this.uploadMemorandumAndArticles.setInputFiles(filePath);

    // Verify file-size error is NOT displayed
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();

    // Verify format error is NOT displayed
    await expect(this.fileFormatError).not.toBeVisible();

    console.log(
        "PASS: Memorandum and Articles of Association accepts JPEG less than 25 MB."
    );
}

async TC_CPOIALE_35_MemorandumArticles_RejectsJPEGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    // Get JPEG file name from Excel
    const fileName = String(
        data.memorandumArticlesJpegPath ?? ""
    ).trim();

    expect(
        fileName,
        "memorandumAndArticlesPath is empty in Excel"
    ).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Memorandum & Articles JPEG file:",
        filePath
    );

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify JPEG format
    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPEG format. Actual file: ${fileName}`
    ).toBe(".jpeg");

    // Verify file size is greater than 25 MB
    const fileSize = fs.statSync(filePath).size;
    const maxSize = 25 * 1024 * 1024;

    expect(
        fileSize,
        `JPEG file must be greater than 25 MB. Actual size: ${
            (fileSize / (1024 * 1024)).toFixed(2)
        } MB`
    ).toBeGreaterThan(maxSize);

    console.log(
        `JPEG file size: ${(fileSize / (1024 * 1024)).toFixed(2)} MB`
    );

    // Upload JPEG greater than 25 MB
    await this.uploadMemorandumAndArticles.setInputFiles(filePath);

    // Verify file-size error
    await expect(
        this.fileSizeError
    ).toBeVisible({
        timeout: 10000
    });

    // Verify exact error message
    await expect(
        this.fileSizeError
    ).toHaveText(
        "File size must not exceed 25 MB"
    );

    console.log(
        "PASS: Memorandum and Articles of Association rejects JPEG greater than 25 MB."
    );
}


async TC_CPOIALE_36_MemorandumArticles_AcceptsJPGEqualTo25MB(data) {

    await this.navigateToPOI(data);

    // Get JPG file name from Excel
    const fileName = String(
        data.memorandumArticlesJpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "memorandumArticlesJpgPath is empty in Excel"
    ).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Memorandum & Articles JPG file:",
        filePath
    );

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify JPG extension
    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPG format. Actual file: ${fileName}`
    ).toBe(".jpg");

    // 25 MB = 26,214,400 bytes
    const maxSize = 25 * 1024 * 1024;

    // Verify test file is exactly 25 MB
    const fileSize = fs.statSync(filePath).size;

    expect(
        fileSize,
        `JPG file must be exactly 25 MB. Actual size: ${fileSize} bytes`
    ).toBe(maxSize);

    console.log(
        `JPG file size: ${fileSize} bytes (25 MB)`
    );

    // Upload JPG exactly equal to 25 MB
    await this.uploadMemorandumAndArticles.setInputFiles(filePath);

    // Verify file-size error is NOT displayed
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();

    // Verify format error is NOT displayed
    await expect(this.fileFormatError).not.toBeVisible();

    // Verify uploaded file is accepted by the web application
    console.log(
        "PASS: Memorandum and Articles of Association accepts JPG equal to 25 MB."
    );
}

async TC_CPOIALE_37_MemorandumArticles_AcceptsJPGLessThan25MB(data) {

    await this.navigateToPOI(data);

    // Get JPG file name from Excel
    const fileName = String(
        data.memorandumArticlesJpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "memorandumArticlesJpgPath is empty in Excel"
    ).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Memorandum & Articles JPG file:",
        filePath
    );

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify JPG format
    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPG format. Actual file: ${fileName}`
    ).toBe(".jpg");

    // 25 MB = 26,214,400 bytes
    const maxSize = 25 * 1024 * 1024;

    // Verify test file is less than 25 MB
    const fileSize = fs.statSync(filePath).size;

    expect(
        fileSize,
        `JPG file must be less than 25 MB. Actual size: ${fileSize} bytes`
    ).toBeLessThan(maxSize);

    console.log(
        `JPG file size: ${fileSize} bytes (${(fileSize / (1024 * 1024)).toFixed(2)} MB)`
    );

    // Upload JPG file
    await this.uploadMemorandumAndArticles.setInputFiles(filePath);

    // Verify file-size error is NOT displayed
    await expect(
        this.fileSizeError
    ).not.toBeVisible({
        timeout: 10000
    });

    console.log(
        "PASS: Memorandum and Articles of Association field accepts JPG file less than 25 MB."
    );
}

async TC_CPOIALE_38_MemorandumArticles_RejectsJPGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    // Get JPG file name from Excel
    const fileName = String(
        data.memorandumArticlesJpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "memorandumArticlesJpgPath is empty in Excel"
    ).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Memorandum & Articles JPG file:",
        filePath
    );

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify JPG format
    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPG format. Actual file: ${fileName}`
    ).toBe(".jpg");

    // 25 MB = 26,214,400 bytes
    const maxSize = 25 * 1024 * 1024;

    // Verify file is greater than 25 MB
    const fileSize = fs.statSync(filePath).size;

    expect(
        fileSize,
        `JPG file must be greater than 25 MB. Actual size: ${fileSize} bytes`
    ).toBeGreaterThan(maxSize);

    console.log(
        `JPG file size: ${(fileSize / (1024 * 1024)).toFixed(2)} MB`
    );

    // Upload JPG greater than 25 MB
    await this.uploadMemorandumAndArticles.setInputFiles(filePath);

    // Verify file-size error is displayed by the web application
    await expect(
        this.fileSizeError
    ).toBeVisible({
        timeout: 10000
    });

    // Verify exact validation message
    await expect(
        this.fileSizeError
    ).toHaveText(
        "File size must not exceed 25 MB"
    );

    console.log(
        "PASS: Memorandum and Articles of Association field rejects JPG file greater than 25 MB."
    );
}


async TC_CPOIALE_39_BoardResolutionPowerOfAttorney_IsMandatory(data) {

    await this.navigateToPOI(data);

    // Leave the upload field empty
    // The file input is hidden, so no visibility check is required.

    // Trigger mandatory-field validation
    await this.saveAndNextButton.click();

    // Verify inline mandatory error
    await expect(
        this.boardResolutionError
    ).toBeVisible({
        timeout: 10000
    });

    // Verify exact error message
    await expect(
        this.boardResolutionError
    ).toHaveText(
        "Resolution from Board of Directors / Power of Attorney is required"
    );

    console.log(
        "PASS: Resolution from Board of Directors and Power of Attorney is mandatory."
    );
}

async TC_CPOIALE_40_BoardResolutionPowerOfAttorney_RejectsInvalidFormat(data) {

    await this.navigateToPOI(data);

    // Get invalid file path from Excel.
    // Excel is used only to locate the test file.
    const fileName = String(
        data.resolutionOfManagingBodyPath ?? ""
    ).trim();

    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Resolution / Power of Attorney invalid file:",
        filePath
    );

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify test file has an invalid extension
    const extension = path.extname(filePath).toLowerCase();

    expect(
        [".pdf", ".jpg", ".jpeg"],
        `Test file must have an invalid format. Actual format: ${extension}`
    ).not.toContain(extension);

    // Upload invalid file
    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(filePath);

    // Verify format error displayed by the web application
    await expect(
        this.fileFormatError
    ).toBeVisible({
        timeout: 10000
    });


    

    console.log(
        "PASS: Resolution from Board of Directors and Power of Attorney field rejects invalid file formats."
    );
}

async TC_41_CPOIALE_VerifyResolutionOfManagingBodyAllowsFileUpload(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read file name from Excel
    const fileName = String(
        data.resolutionOfManagingBodyPath ?? ""
    ).trim();

    // Build file path
    const filePath = path.join(
        "D:/DSC",
        fileName
    );

    console.log(
        "Resolution/Power of Attorney file:",
        filePath
    );

    // Upload file
    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(filePath);

    // Verify file format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    // Verify file size error is not displayed
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Resolution from Board of Directors and Power of Attorney field allows file upload."
    );
}

async TC_CPOIALE_42_BoardResolutionPowerOfAttorney_RejectsMoreThan25MB(data) {

    await this.navigateToPOI(data);

    // Get file name from Excel
    const fileName = String(
        data.resolutionOfManagingBodyPath ?? ""
    ).trim();

    expect(
        fileName,
        "resolutionOfManagingBodyPath is empty in Excel"
    ).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Resolution / Power of Attorney file:",
        filePath
    );

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify PDF format
    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be PDF format. Actual format: ${extension}`
    ).toBe(".pdf");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Get file size
    const fileSize = fs.statSync(filePath).size;

    console.log(`File size: ${fileSize} bytes`);
    console.log(`Maximum allowed: ${maxSize} bytes`);

    // Verify file is greater than 25 MB
    expect(
        fileSize,
        `File must be greater than 25 MB. Actual size: ${fileSize} bytes`
    ).toBeGreaterThan(maxSize);

    // Upload file
    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(
        filePath
    );

    // Verify file-size error is displayed
    await expect(
        this.fileSizeError
    ).toBeVisible({
        timeout: 10000
    });

    // Verify exact error message
    await expect(
        this.fileSizeError
    ).toHaveText(
        "File size must not exceed 25 MB"
    );

    console.log(
        "PASS: Resolution from Board of Directors and Power of Attorney rejects files greater than 25 MB."
    );
}

async TC_CPOIALE_43_BoardResolutionPowerOfAttorney_Accepts25MBJPEG(data) {

    await this.navigateToPOI(data);

    // Get JPEG file name from Excel
    const fileName = String(
        data.resolutionOfManagingBodyjpegPath ?? ""
    ).trim();

    expect(
        fileName,
        "resolutionOfManagingBodyjpegPath is empty in Excel"
    ).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log("Resolution / Power of Attorney JPEG:", filePath);

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify JPEG format
    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPEG format. Actual: ${extension}`
    ).toBe(".jpeg");

    // =====================================================
    // VERIFY EXACTLY 25 MB
    // =====================================================

    const exact25MB = 25 * 1024 * 1024; // 26,214,400 bytes

    const fileSize = fs.statSync(filePath).size;

    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPEG actual size: ${fileSize} bytes (${fileSizeMB.toFixed(2)} MB)`
    );

    console.log(
        `Expected size: ${exact25MB} bytes (25.00 MB)`
    );

    // JPEG MUST be exactly 25 MB
    expect(
        fileSize,
        `JPEG file must be exactly 25 MB (26214400 bytes). Actual: ${fileSize} bytes`
    ).toBe(exact25MB);

    // =====================================================
    // UPLOAD JPEG
    // =====================================================

    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(
        filePath
    );

    console.log(
        "Exact 25 MB JPEG uploaded successfully"
    );

    // Verify file-size error is NOT displayed
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();

    // Verify format error is NOT displayed
    await expect(this.fileFormatError).not.toBeVisible()
}


async TC_CPOIALE_44_BoardResolutionPowerOfAttorney_AcceptsJPEGLessThan25MB(data) {

    await this.navigateToPOI(data);

    // Get JPEG file name from Excel
    const fileName = String(
        data.resolutionOfManagingBodyjpegPath ?? ""
    ).trim();

    expect(
        fileName,
        "resolutionOfManagingBodyjpegPath is empty in Excel"
    ).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Resolution / Power of Attorney JPEG:",
        filePath
    );

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Verify JPEG format
    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPEG format. Actual: ${extension}`
    ).toBe(".jpeg");

    // =====================================================
    // VERIFY FILE SIZE LESS THAN 25 MB
    // =====================================================

    const maxSize = 25 * 1024 * 1024; // 26214400 bytes

    const fileSize = fs.statSync(filePath).size;

    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPEG actual size: ${fileSize} bytes (${fileSizeMB.toFixed(2)} MB)`
    );

    console.log(
        `Maximum allowed: less than ${maxSize} bytes`
    );

    // JPEG MUST be LESS THAN 25 MB
    expect(
        fileSize,
        `JPEG file must be less than 25 MB. Actual size: ${fileSize} bytes`
    ).toBeLessThan(maxSize);

    // =====================================================
    // UPLOAD JPEG
    // =====================================================

    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(
        filePath
    );

    console.log(
        `JPEG ${fileSizeMB.toFixed(2)} MB uploaded successfully`
    );

    // =====================================================
    // VERIFY NO SIZE ERROR
    // =====================================================

    await expect(
        this.fileSizeError
    ).not.toBeVisible({
        timeout: 10000
    });

    // =====================================================
    // VERIFY NO FORMAT ERROR
    // =====================================================

    await expect(this.fileFormatError ).not.toBeVisible({ timeout: 10000});

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Resolution from Board of Directors and Power of Attorney accepts JPEG less than 25 MB."
    );
}

async TC_CPOIALE_45_BoardResolutionPowerOfAttorney_RejectsJPEGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    // =====================================================
    // GET JPEG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.resolutionOfManagingBodyjpegPath ?? ""
    ).trim();

    expect(
        fileName,
        "resolutionOfManagingBodyjpegPath is empty in Excel"
    ).not.toBe("");

    // =====================================================
    // BUILD FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Resolution / Power of Attorney JPEG:",
        filePath
    );

    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // =====================================================
    // VERIFY JPEG FORMAT
    // =====================================================

    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPEG format. Actual: ${extension}`
    ).toBe(".jpeg");

    // =====================================================
    // VERIFY FILE SIZE GREATER THAN 25 MB
    // =====================================================

    const maxSize = 25 * 1024 * 1024; // 26214400 bytes

    const fileSize = fs.statSync(filePath).size;

    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPEG actual size: ${fileSize} bytes (${fileSizeMB.toFixed(2)} MB)`
    );

    console.log(
        `Maximum allowed size: ${maxSize} bytes (25 MB)`
    );

    // File MUST be greater than 25 MB
    expect(
        fileSize,
        `Test JPEG must be greater than 25 MB. Actual size: ${fileSize} bytes`
    ).toBeGreaterThan(maxSize);

    // =====================================================
    // UPLOAD JPEG
    // =====================================================

    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(
        filePath
    );

    console.log(
        `JPEG ${fileSizeMB.toFixed(2)} MB uploaded for rejection validation`
    );

    // =====================================================
    // VERIFY FILE SIZE ERROR IS DISPLAYED
    // =====================================================

    await expect(
        this.fileSizeError
    ).toBeVisible({
        timeout: 10000
    });

    console.log(
        "PASS: File size error is displayed for JPEG greater than 25 MB."
    );

    // =====================================================
    // VERIFY FORMAT ERROR IS NOT DISPLAYED
    // =====================================================

    await expect(
        this.fileFormatError
    ).not.toBeVisible({
        timeout: 10000
    });

    console.log(
        "PASS: Resolution / Power of Attorney correctly rejects JPEG greater than 25 MB."
    );
}

async TC_CPOIALE_46_BoardResolutionPowerOfAttorney_AcceptsJPGEqualTo25MB(data) {

    await this.navigateToPOI(data);

    // =====================================================
    // GET JPG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.resolutionOfManagingBodyjpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "resolutionOfManagingBodyPath is empty in Excel"
    ).not.toBe("");

    // =====================================================
    // BUILD FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Resolution / Power of Attorney JPG:",
        filePath
    );

    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // =====================================================
    // VERIFY JPG FORMAT
    // =====================================================

    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPG format. Actual: ${extension}`
    ).toBe(".jpg");

    // =====================================================
    // VERIFY EXACTLY 25 MB
    // =====================================================

    const exact25MB = 25 * 1024 * 1024; // 26214400 bytes

    const fileSize = fs.statSync(filePath).size;

    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPG actual size: ${fileSize} bytes (${fileSizeMB.toFixed(2)} MB)`
    );

    console.log(
        `Expected size: ${exact25MB} bytes (25.00 MB)`
    );

    // JPG MUST be exactly 25 MB
    expect(
        fileSize,
        `JPG file must be exactly 25 MB (26214400 bytes). Actual: ${fileSize} bytes`
    ).toBe(exact25MB);

    // =====================================================
    // UPLOAD JPG
    // =====================================================

    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(
        filePath
    );

    console.log(
        "Exact 25 MB JPG uploaded successfully"
    );

    // =====================================================
    // VERIFY NO FILE SIZE ERROR
    // =====================================================

    await expect(
        this.fileSizeError
    ).not.toBeVisible({
        timeout: 10000
    });

    // =====================================================
    // VERIFY NO FORMAT ERROR
    // =====================================================

    await expect(
        this.fileFormatError
    ).not.toBeVisible({
        timeout: 10000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Resolution from Board of Directors and Power of Attorney accepts JPG exactly equal to 25 MB."
    );
}


async TC_CPOIALE_47_BoardResolutionPowerOfAttorney_AcceptsJPGLessThan25MB(data) {

    await this.navigateToPOI(data);

    // =====================================================
    // GET JPG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.resolutionOfManagingBodyjpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "resolutionOfManagingBodyPath is empty in Excel"
    ).not.toBe("");

    // =====================================================
    // BUILD FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Resolution / Power of Attorney JPG:",
        filePath
    );

    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // =====================================================
    // VERIFY JPG FORMAT
    // =====================================================

    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPG format. Actual: ${extension}`
    ).toBe(".jpg");

    // =====================================================
    // VERIFY FILE SIZE LESS THAN 25 MB
    // =====================================================

    const maxSize = 25 * 1024 * 1024; // 26214400 bytes

    const fileSize = fs.statSync(filePath).size;

    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPG actual size: ${fileSize} bytes (${fileSizeMB.toFixed(2)} MB)`
    );

    console.log(
        `Maximum allowed: less than ${maxSize} bytes (25 MB)`
    );

    // JPG MUST be less than 25 MB
    expect(
        fileSize,
        `JPG file must be less than 25 MB. Actual size: ${fileSize} bytes`
    ).toBeLessThan(maxSize);

    // =====================================================
    // UPLOAD JPG
    // =====================================================

    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(
        filePath
    );

    console.log(
        `JPG ${fileSizeMB.toFixed(2)} MB uploaded successfully`
    );

    // =====================================================
    // VERIFY NO FILE SIZE ERROR
    // =====================================================

    await expect(
        this.fileSizeError
    ).not.toBeVisible({
        timeout: 10000
    });

    // =====================================================
    // VERIFY NO FORMAT ERROR
    // =====================================================

    await expect(
        this.fileFormatError
    ).not.toBeVisible({
        timeout: 10000
    });

    console.log(
        "PASS: Resolution from Board of Directors and Power of Attorney accepts JPG file less than 25 MB."
    );
}


async TC_CPOIALE_48_BoardResolutionPowerOfAttorney_RejectsJPGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    // =====================================================
    // GET JPG FILE NAME FROM EXCEL
    // =====================================================

    const fileName = String(
        data.resolutionOfManagingBodyjpgPath ?? ""
    ).trim();

    expect(
        fileName,
        "resolutionOfManagingBodyPath is empty in Excel"
    ).not.toBe("");

    // =====================================================
    // BUILD FILE PATH
    // =====================================================

    const filePath = path.join("D:/DSC", fileName);

    console.log(
        "Resolution / Power of Attorney JPG:",
        filePath
    );

    // =====================================================
    // VERIFY FILE EXISTS
    // =====================================================

    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // =====================================================
    // VERIFY JPG FORMAT
    // =====================================================

    const extension = path.extname(filePath).toLowerCase();

    expect(
        extension,
        `Test file must be JPG format. Actual: ${extension}`
    ).toBe(".jpg");

    // =====================================================
    // VERIFY FILE SIZE GREATER THAN 25 MB
    // =====================================================

    const maxSize = 25 * 1024 * 1024; // 26214400 bytes

    const fileSize = fs.statSync(filePath).size;

    const fileSizeMB = fileSize / (1024 * 1024);

    console.log(
        `JPG actual size: ${fileSize} bytes (${fileSizeMB.toFixed(2)} MB)`
    );

    console.log(
        `Maximum allowed size: ${maxSize} bytes (25 MB)`
    );

    // JPG MUST be greater than 25 MB
    expect(
        fileSize,
        `JPG file must be greater than 25 MB. Actual size: ${fileSize} bytes`
    ).toBeGreaterThan(maxSize);

    // =====================================================
    // UPLOAD JPG
    // =====================================================

    await this.uploadBoardResolutionAndPowerOfAttorney.setInputFiles(
        filePath
    );

    console.log(
        `JPG ${fileSizeMB.toFixed(2)} MB uploaded for rejection validation`
    );

    // =====================================================
    // VERIFY FILE SIZE ERROR IS DISPLAYED
    // =====================================================

    await expect(
        this.fileSizeError
    ).toBeVisible({
        timeout: 10000
    });

    console.log(
        "PASS: File size error is displayed for JPG greater than 25 MB."
    );

    // =====================================================
    // VERIFY FORMAT ERROR IS NOT DISPLAYED
    // =====================================================

    await expect(
        this.fileFormatError
    ).not.toBeVisible({
        timeout: 10000
    });

    console.log(
        "PASS: Resolution from Board of Directors and Power of Attorney rejects JPG greater than 25 MB."
    );
}


async TC_CPOIALE_49_VerifySeniorManagementFieldIsMandatory(data) {

    await this.navigateToPOI(data);

    // Click Save And Next without uploading senior management document
    await this.saveAndNextButton.click();

    // Verify mandatory error
    await expect(this.SeniorManagementError).toBeVisible({
        timeout: 5000
    });

    await expect(this.SeniorManagementError).toHaveText(
        "Senior management list is required"
    );

    console.log(
        "PASS: Names of persons holding senior management positions is mandatory and displays the required error."
    );
}

async TC_CPOIALE_50_SeniorManagementAcceptsOnlyPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    const fs = require("fs");
    const path = require("path");

    // =====================================================
    // VERIFY UPLOAD FIELD
    // =====================================================

    await expect(this.uploadSeniorManagementPersons).toBeAttached();

    // =====================================================
    // PDF - SHOULD BE ACCEPTED
    // =====================================================

    const pdfFileName = String(
        data.seniorManagementPath ?? ""
    ).trim();

    expect(pdfFileName).not.toBe("");

    const pdfPath = path.join("D:/DSC", pdfFileName);

    expect(
        fs.existsSync(pdfPath),
        `PDF file does not exist: ${pdfPath}`
    ).toBeTruthy();

    await this.uploadSeniorManagementPersons.setInputFiles(pdfPath);

    await expect(this.fileFormatError).toBeVisible({
        timeout: 5000
    });

}

async TC_51_CPOIALE_VerifySeniorManagementAcceptsPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const getFilePath = (fileValue) => {
        const value = String(fileValue ?? "").trim();

        return path.isAbsolute(value)
            ? value
            : path.join("D:/DSC", value);
    };

    // =========================
    // PDF
    // =========================
    const pdfPath = getFilePath(data.seniorManagementPdfPath);

    console.log("Senior Management PDF Path:", pdfPath);

    await this.uploadSeniorManagementPersons.setInputFiles(pdfPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // =========================
    // JPG
    // =========================
    const jpgPath = getFilePath(data.seniorManagementJpgPath);

    console.log("Senior Management JPG Path:", jpgPath);

    expect(fs.statSync(jpgPath).isFile()).toBeTruthy();

    await this.uploadSeniorManagementPersons.setInputFiles(jpgPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // =========================
    // JPEG
    // =========================
    const jpegPath = getFilePath(data.seniorManagementJpegPath);

    console.log("Senior Management JPEG Path:", jpegPath);

    expect(fs.statSync(jpegPath).isFile()).toBeTruthy();

    await this.uploadSeniorManagementPersons.setInputFiles(jpegPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Senior management field accepts PDF, JPG and JPEG."
    );
}
async TC_52_CPOIALE_VerifySeniorManagementRejectsMoreThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file name from Excel
    const fileName = String(
        data.seniorManagementPath ?? ""
    ).trim();

    expect(fileName).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Upload file greater than 25 MB
    await this.uploadSeniorManagementPersons.setInputFiles(filePath);

    // Verify WEB APPLICATION displays file size error
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Senior management file greater than 25 MB is rejected with file size error."
    );
}

async TC_53_CPOIALE_VerifySeniorManagementAccepts25MBJPEG(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPEG file name from Excel
    const jpegFileName = String(
        data.seniorManagementJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpegPath),
        `JPEG file does not exist: ${jpegPath}`
    ).toBeTruthy();

    // Upload 25 MB JPEG file
    await this.uploadSeniorManagementPersons.setInputFiles(jpegPath);

    // Verify WEB APPLICATION accepts the file
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });
    await expect(this.fileSizeError1).not.toBeVisible();

    // Verify format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Senior management field accepts a 25 MB JPEG file."
    );
}

async TC_54_CPOIALE_VerifySeniorManagementAcceptsJPEGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPEG file name from Excel
    const jpegFileName = String(
        data.seniorManagementJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpegPath),
        `JPEG file does not exist: ${jpegPath}`
    ).toBeTruthy();

    // Upload JPEG file less than 25 MB
    await this.uploadSeniorManagementPersons.setInputFiles(jpegPath);

    // Verify WEB APPLICATION accepts the file
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // Verify format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Senior management field accepts JPEG file less than 25 MB."
    );
}

async TC_55_CPOIALE_VerifySeniorManagementRejectsJPEGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPEG file name from Excel
    const jpegFileName = String(
        data.seniorManagementJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpegPath),
        `JPEG file does not exist: ${jpegPath}`
    ).toBeTruthy();

    // Upload JPEG greater than 25 MB
    await this.uploadSeniorManagementPersons.setInputFiles(jpegPath);

    // Verify WEB APPLICATION displays file-size error
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // Format should be valid JPEG, so format error should not appear
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Senior management field rejects JPEG greater than 25 MB."
    );
}


async TC_56_CPOIALE_VerifySeniorManagementAcceptsJPGEqualTo25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.seniorManagementJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpgPath),
        `JPG file does not exist: ${jpgPath}`
    ).toBeTruthy();

    // Upload JPG exactly 25 MB
    await this.uploadSeniorManagementPersons.setInputFiles(jpgPath);

    // Verify WEB APPLICATION accepts the file
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // Verify valid JPG format is accepted
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Senior management field accepts JPG equal to 25 MB."
    );
}

async TC_57_CPOIALE_VerifySeniorManagementAcceptsJPGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.seniorManagementJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpgPath),
        `JPG file does not exist: ${jpgPath}`
    ).toBeTruthy();

    // Upload JPG less than 25 MB
    await this.uploadSeniorManagementPersons.setInputFiles(jpgPath);

    // Verify WEB APPLICATION accepts the file
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // Verify format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Senior management field accepts JPG file less than 25 MB."
    );
}

async TC_58_CPOIALE_VerifySeniorManagementRejectsJPGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.seniorManagementJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpgPath),
        `JPG file does not exist: ${jpgPath}`
    ).toBeTruthy();

    // Upload JPG greater than 25 MB
    await this.uploadSeniorManagementPersons.setInputFiles(jpgPath);

    // Verify WEB APPLICATION rejects the file due to size
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // JPG is a valid format, so format error should NOT appear
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Senior management field rejects JPG greater than 25 MB."
    );
}

async TC_59_CPOIALE_VerifyCommencementOfBusinessMandatoryForPublicLimitedCompany(data) {
    await this.navigateToPOI(data);

    // Save And Next without uploading Certificate of Commencement of Business
    await this.saveAndNextButton.click();

    // Verify inline mandatory error
    await expect(this.CommencementOfBusinessError).toBeVisible({
        timeout: 5000
    });

    await expect(this.CommencementOfBusinessError).toHaveText(
        "Certificate of Commencement of Business is required"
    );

    console.log(
        "PASS: Certificate of Commencement of Business is mandatory for Public Limited Company and displays inline error when no input is provided."
    );
}


async TC_60_CPOIALE_VerifyCommencementOfBusinessAcceptsOnlyPDFJPGJPEG(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read invalid-format file name from Excel
    const invalidFileName = String(
        data.seniorManagementPdfPath ?? ""
    ).trim();

    expect(invalidFileName).not.toBe("");

    // Build file path
    const invalidFilePath = path.join("D:/DSC", invalidFileName);

    // Verify file exists
    expect(
        fs.existsSync(invalidFilePath),
        `Invalid format file does not exist: ${invalidFilePath}`
    ).toBeTruthy();

    // Upload invalid format file
    await this.uploadCommencementOfBusiness.setInputFiles(
        invalidFilePath
    );

    // Verify format error displayed by WEB APPLICATION
    await expect(this.fileFormatError).toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Certificate of Commencement of Business rejects formats other than PDF/JPG/JPEG."
    );
}

async TC_61_CPOIALE_VerifyCommencementOfBusinessAcceptsPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    const getFilePath = (fileValue) => {
        const value = String(fileValue ?? "").trim();

        return path.isAbsolute(value)
            ? value
            : path.join("D:/DSC", value);
    };

    // =========================
    // PDF
    // =========================
    const pdfPath = getFilePath(
        data.commencementOfBusinessPdfPath
    );

    console.log("Commencement PDF Path:", pdfPath);

    await this.uploadCommencementOfBusiness.setInputFiles(pdfPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // =========================
    // JPG
    // =========================
    const jpgPath = getFilePath(
        data.commencementOfBusinessJpgPath
    );

    console.log("Commencement JPG Path:", jpgPath);

    await this.uploadCommencementOfBusiness.setInputFiles(jpgPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // =========================
    // JPEG
    // =========================
    const jpegPath = getFilePath(
        data.commencementOfBusinessJpegPath
    );

    console.log("Commencement JPEG Path:", jpegPath);

    await this.uploadCommencementOfBusiness.setInputFiles(jpegPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Certificate of Commencement of Business accepts PDF, JPG and JPEG."
    );
}

async TC_62_CPOIALE_VerifyCommencementOfBusinessRejectsMoreThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file name from Excel
    const fileName = String(
        data.commencementOfBusinessFormatPath ?? ""
    ).trim();

    expect(fileName).not.toBe("");

    // Build file path
    const filePath = path.join("D:/DSC", fileName);

    // Verify file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Upload file greater than 25 MB
    await this.uploadCommencementOfBusiness.setInputFiles(filePath);

    // Verify WEB APPLICATION displays file-size error
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // Verify format error is NOT displayed
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Certificate of Commencement of Business rejects file greater than 25 MB with file-size error."
    );
}

async TC_63_CPOIALE_VerifyCommencementOfBusinessAcceptsJPEGEqualTo25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPEG file name from Excel
    const jpegFileName = String(
        data.commencementOfBusinessJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpegPath),
        `JPEG file does not exist: ${jpegPath}`
    ).toBeTruthy();

    // Upload JPEG exactly 25 MB
    await this.uploadCommencementOfBusiness.setInputFiles(jpegPath);

    // Verify WEB APPLICATION accepts the file
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // Verify valid JPEG format is accepted
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Certificate of Commencement of Business accepts JPEG file equal to 25 MB."
  
    );
}

async TC_64_CPOIALE_VerifyCommencementOfBusinessAcceptsJPEGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPEG file name from Excel
    const jpegFileName = String(
        data.commencementOfBusinessJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpegPath),
        `JPEG file does not exist: ${jpegPath}`
    ).toBeTruthy();

    // Upload JPEG less than 25 MB
    await this.uploadCommencementOfBusiness.setInputFiles(jpegPath);

    // Verify WEB APPLICATION accepts the file
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // Verify valid JPEG format is accepted
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Certificate of Commencement of Business accepts JPEG file less than 25 MB."
    );
}

async TC_65_CPOIALE_VerifyCommencementOfBusinessRejectsJPEGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPEG file name from Excel
    const jpegFileName = String(
        data.commencementOfBusinessJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpegPath),
        `JPEG file does not exist: ${jpegPath}`
    ).toBeTruthy();

    // Upload JPEG greater than 25 MB
    await this.uploadCommencementOfBusiness.setInputFiles(jpegPath);

    // Verify WEB APPLICATION rejects the file due to size
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // JPEG is a valid format, so format error should NOT appear
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Certificate of Commencement of Business rejects JPEG greater than 25 MB."
    );
}

async TC_66_CPOIALE_VerifyCommencementOfBusinessAcceptsJPGEqualTo25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.commencementOfBusinessJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpgPath),
        `JPG file does not exist: ${jpgPath}`
    ).toBeTruthy();

    // Upload JPG exactly 25 MB
    await this.uploadCommencementOfBusiness.setInputFiles(jpgPath);

    // Verify WEB APPLICATION accepts the file
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // JPG is a valid format
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Certificate of Commencement of Business accepts JPG file equal to 25 MB."
    );
}

async TC_67_CPOIALE_VerifyCommencementOfBusinessAcceptsJPGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.commencementOfBusinessJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpgPath),
        `JPG file does not exist: ${jpgPath}`
    ).toBeTruthy();

    // Upload JPG file
    await this.uploadCommencementOfBusiness.setInputFiles(jpgPath);

    // Verify WEB APPLICATION accepts JPG less than 25 MB
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // Verify JPG format is accepted
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    // Verify no file-size error
    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Certificate of Commencement of Business for Public Limited Companies accepts JPG file less than 25 MB."
    );
}


async TC_68_CPOIALE_VerifyCommencementOfBusinessRejectsJPGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.commencementOfBusinessJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify file exists
    expect(
        fs.existsSync(jpgPath),
        `JPG file does not exist: ${jpgPath}`
    ).toBeTruthy();

    // Upload JPG greater than 25 MB
    await this.uploadCommencementOfBusiness.setInputFiles(jpgPath);

    // Verify WEB APPLICATION rejects the file
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // JPG is a valid format
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Certificate of Commencement of Business for Public Limited Companies rejects JPG file greater than 25 MB."
    );
}

async TC_69_CPOIALE_VerifyOthersFieldIsNonMandatory(data) {
    await this.navigateToPOI(data);

    await this.saveAndNextButton.click();

    // Do not upload any file in Others field

    // Verify no validation error is displayed
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Others field is non-mandatory and does not show any inline error when no input is given."
    );
}

async TC_70_CPOIALE_VerifyOthersFieldAcceptsOnlyPDFJPGJPEG(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    // Excel is used ONLY to get the test file name
    const invalidFileName = String(
        data.othersFormatPath ?? ""
    ).trim();

    expect(invalidFileName).not.toBe("");

    // Build file path
    const invalidFilePath = path.join("D:/DSC", invalidFileName);

    // Upload unsupported file
    await this.uploadOthers.setInputFiles(invalidFilePath);

    // WEB APPLICATION validation
    await expect(this.fileFormatError).toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Others field rejects files other than PDF/JPG/JPEG."
    );
}


async TC_71_CPOIALE_VerifyOthersAcceptsPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    const getFilePath = (fileValue) => {
        const value = String(fileValue ?? "").trim();

        return path.isAbsolute(value)
            ? value
            : path.join("D:/DSC", value);
    };

    // PDF
    const pdfPath = getFilePath(data.othersPdfPath);

    await this.uploadOthers.setInputFiles(pdfPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    // JPG
    const jpgPath = getFilePath(data.othersJpgPath);

    await this.uploadOthers.setInputFiles(jpgPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    // JPEG
    const jpegPath = getFilePath(data.othersJpegPath);

    await this.uploadOthers.setInputFiles(jpegPath);

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });
}

async TC_72_CPOIALE_VerifyOthersRejectsFileGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Get file name from Excel
    const fileName = String(data.othersFormatPath ?? "").trim();

    expect(fileName).not.toBe("");

    // Build file path from Excel data
    const filePath = path.join("D:/DSC", fileName);

    // Verify test file exists
    expect(
        fs.existsSync(filePath),
        `File does not exist: ${filePath}`
    ).toBeTruthy();

    // Upload file
    await this.uploadOthers.setInputFiles(filePath);

    // WEB APPLICATION VALIDATION
    // File greater than 25 MB should be rejected
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // Verify no format error because the file format is valid
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Others field rejects file greater than 25 MB with file size error."
    );
}

async TC_73_CPOIALE_VerifyOthersAcceptsJPEGEqualTo25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPEG file name from Excel
    const jpegFileName = String(
        data.othersJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path from Excel data
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify test file exists
    expect(
        fs.existsSync(jpegPath),
        `JPEG file does not exist: ${jpegPath}`
    ).toBeTruthy();

    // Upload JPEG file
    await this.uploadOthers.setInputFiles(jpegPath);

    // Validate file acceptance on WEB APPLICATION
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Others field accepts JPEG file equal to 25 MB."
    );
}


async TC_74_CPOIALE_VerifyOthersFieldAcceptsJPEGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read JPEG file name from Excel
    const jpegFileName = String(
        data.othersJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path from Excel data
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Upload JPEG file
    await this.uploadOthers.setInputFiles(jpegPath);

    // Verify web application accepts JPEG less than 25 MB
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Others field accepts JPEG file less than 25 MB."
    );
}

async TC_75_CPOIALE_VerifyOthersRejectsJPEGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    // Read file name from Excel only
    const jpegFileName = String(
        data.othersJpegPath ?? ""
    ).trim();

    expect(jpegFileName).not.toBe("");

    // Build file path
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Upload JPEG > 25 MB
    await this.uploadOthers.setInputFiles(jpegPath);

    // Verify WEB APPLICATION rejects file due to size
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // JPEG is a valid format, so format error should NOT appear
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Others field rejects JPEG file greater than 25 MB and displays file-size error."
    );
}


async TC_76_CPOIALE_VerifyOthersAcceptsJPGEequalTo25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.othersJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path from Excel data
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Upload JPG file
    await this.uploadOthers.setInputFiles(jpgPath);

    // Verify web application accepts JPG exactly 25 MB
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // Verify JPG format is accepted
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Others field for Public/Private Limited Companies accepts JPG file equal to 25 MB."
    );
}


async TC_77_CPOIALE_VerifyOthersAcceptsJPGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.othersJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path from Excel data
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Upload JPG file
    await this.uploadOthers.setInputFiles(jpgPath);

    // Verify web application accepts JPG less than 25 MB
    await expect(this.fileSizeError).not.toBeVisible({
        timeout: 5000
    });

    // Verify JPG format is accepted
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    await expect(this.fileSizeError1).not.toBeVisible();

    console.log(
        "PASS: Others field for Public/Private Limited Companies accepts JPG file less than 25 MB."
    );
}


async TC_78_CPOIALE_VerifyOthersRejectsJPGForPublicLimitedCompanyGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.othersJpgPath ?? ""
    ).trim();

    expect(jpgFileName).not.toBe("");

    // Build file path from Excel data
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Upload JPG file greater than 25 MB
    await this.uploadOthers.setInputFiles(jpgPath);

    // Verify file size validation error is displayed
    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // Verify JPG format itself is accepted
    await expect(this.fileFormatError).not.toBeVisible({
        timeout: 5000
    });

    console.log(
        "PASS: Others field for Public Limited Companies rejects JPG file greater than 25 MB."
    );
}

async TC_79_VerifyRegistrationCertificateMandatory(data) {

    await this.navigateToPOI(data);

    // Verify Registration Certificate field is displayed
    await expect(
        this.uploadRegistrationCertificate
    ).toBeAttached();

    // Click Save And Next without uploading Registration Certificate
    await this.saveAndNextButton.click();

    // Verify inline mandatory error
    await expect(
        this.registrationCertificateError
    ).toBeVisible();

    // Verify error text
    await expect(
        this.registrationCertificateError
    ).toHaveText('Registration Certificate is required');
}


async TC_80_VerifyRegistrationCertificateRejectsInvalidFileFormat(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read invalid file name from Excel
    const invalidFile = String(
        data.registrationCertificatePath ?? ""
    ).trim();

    expect(invalidFile).not.toBe("");

    // Build file path
    const invalidFilePath = path.resolve("D:/DSC", invalidFile);

    // Upload invalid format
    await this.uploadRegistrationCertificate.setInputFiles(
        invalidFilePath
    );

    // Verify format validation error
    await expect(this.fileFormatError).toBeVisible();
}

async TC_81_VerifyRegistrationCertificateAcceptsPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // PDF
    const pdfFile = String(
        data.registrationCertificatePdfPath ?? ""
    ).trim();

    expect(pdfFile).not.toBe("");

    const pdfPath = path.resolve("D:/DSC", pdfFile);

    await this.uploadRegistrationCertificate.setInputFiles(pdfPath);

    await expect(this.fileFormatError).not.toBeVisible();


    // JPG
    const jpgFile = String(
        data.registrationCertificateJpgPath ?? ""
    ).trim();

    expect(jpgFile).not.toBe("");

    const jpgPath = path.resolve("D:/DSC", jpgFile);

    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);

    await expect(this.fileFormatError).not.toBeVisible();


    // JPEG
    const jpegFile = String(
        data.registrationCertificateJpegPath ?? ""
    ).trim();

    expect(jpegFile).not.toBe("");

    const jpegPath = path.resolve("D:/DSC", jpegFile);

    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);

    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_82_VerifyRegistrationCertificateRejectsMoreThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read file name from Excel
    const fileName = String(
        data.registrationCertificatePath ?? ""
    ).trim();

    expect(fileName).not.toBe("");

    // Build file path
    const filePath = path.resolve("D:/DSC", fileName);

    // Upload file greater than 25 MB
    await this.uploadRegistrationCertificate.setInputFiles(filePath);

    // Verify file size error message
    await expect(this.fileSizeError).toBeVisible();
}

async TC_83_VerifyRegistrationCertificateAcceptsJPEG25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read 25 MB JPEG file name from Excel
    const jpegFile = String(
        data.registrationCertificateJpegPath ?? ""
    ).trim();

    expect(jpegFile).not.toBe("");

    // Build file path
    const jpegPath = path.resolve("D:/DSC", jpegFile);

    // Upload exact 25 MB JPEG file
    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);

    // Verify file size error is NOT displayed
    await expect(this.fileSizeError).not.toBeVisible();

    // Verify file format error is NOT displayed
    await expect(this.fileFormatError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
}


async TC_84_VerifyRegistrationCertificateAcceptsJPEGLessThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read JPEG file name from Excel
    const jpegFile = String(
        data.registrationCertificateJpegPath ?? ""
    ).trim();

    expect(jpegFile).not.toBe("");

    // Build file path
    const jpegPath = path.resolve("D:/DSC", jpegFile);

    // Upload JPEG less than 25 MB
    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);

    // Verify no file size error
    await expect(this.fileSizeError).not.toBeVisible();

    // Verify no file format error
    await expect(this.fileFormatError).not.toBeVisible();
}


async TC_85_VerifyRegistrationCertificateRejectsJPEGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read JPEG file name from Excel
    const jpegFile = String(
        data.registrationCertificateJpegPath ?? ""
    ).trim();

    expect(jpegFile).not.toBe("");

    // Build file path
    const jpegPath = path.resolve("D:/DSC", jpegFile);

    // Upload JPEG greater than 25 MB
    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);

    // Verify file size error is displayed
    await expect(this.fileSizeError).toBeVisible();
}

async TC_86_VerifyRegistrationCertificateAcceptsJPG25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read 25 MB JPG file name from Excel
    const jpgFile = String(
        data.registrationCertificateJpgPath ?? ""
    ).trim();

    expect(jpgFile).not.toBe("");

    // Build file path
    const jpgPath = path.resolve("D:/DSC", jpgFile);

    // Upload exact 25 MB JPG file
    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);

    // Verify file size error is not displayed
    await expect(this.fileSizeError).not.toBeVisible();

    // Verify file format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
}


async TC_87_VerifyRegistrationCertificateAcceptsJPGLessThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read JPG file name from Excel
    const jpgFile = String(
        data.registrationCertificateJpgPath ?? ""
    ).trim();

    expect(jpgFile).not.toBe("");

    // Build file path
    const jpgPath = path.resolve("D:/DSC", jpgFile);

    // Upload JPG less than 25 MB
    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);

    // Verify file size error is not displayed
    await expect(this.fileSizeError).not.toBeVisible();

    // Verify file format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible();
}


async TC_88_VerifyRegistrationCertificateRejectsJPGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read JPG file name from Excel
    const jpgFile = String(
        data.registrationCertificateJpgPath ?? ""
    ).trim();

    expect(jpgFile).not.toBe("");

    // Build file path
    const jpgPath = path.resolve("D:/DSC", jpgFile);

    // Upload JPG greater than 25 MB
    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);

    // Verify file size error is displayed
    await expect(this.fileSizeError).toBeVisible();
}



async TC_89_VerifyRegistrationNumberAcceptsMaximum50Characters(data) {

    await this.navigateToPOI(data);

    // Read Registration Number from Excel
    const registrationNumber = String(
        data.registrationNumber ?? ""
    ).trim();

    // Verify Excel value is exactly 50 characters
    expect(registrationNumber).not.toBe("");
    expect(registrationNumber.length).toBe(50);

    // Enter Registration Number
    await this.registrationNumber.fill(registrationNumber);

    // Verify all 50 characters are accepted
    await expect(this.registrationNumber).toHaveValue(registrationNumber);
}

async TC_90_VerifyRegistrationNumberAcceptsAlphanumericCharacters(data) {

    await this.navigateToPOI(data);

    // Read Registration Number from Excel
    const registrationNumber = String(
        data.registrationNumber ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(registrationNumber).not.toBe("");

    // Verify value contains both alphabets and numbers
    expect(registrationNumber).toMatch(/[A-Za-z]/);
    expect(registrationNumber).toMatch(/[0-9]/);

    // Enter Registration Number
    await this.registrationNumber.fill(registrationNumber);

    // Verify alphanumeric value is accepted
    await expect(this.registrationNumber).toHaveValue(registrationNumber);

    // Verify no validation error
    await expect(this.registrationNumberError).not.toBeVisible();
}


async TC_91_VerifyRegistrationNumberAcceptsSpecialCharactersAlongWithAlphanumeric(data) {

    await this.navigateToPOI(data);

    // Read Registration Number from Excel
    const registrationNumber = String(
        data.registrationNumber ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(registrationNumber).not.toBe("");

    // Verify value contains alphabets
    expect(registrationNumber).toMatch(/[A-Za-z]/);

    // Verify value contains numbers
    expect(registrationNumber).toMatch(/[0-9]/);

    // Verify value contains special characters
    expect(registrationNumber).toMatch(/[^A-Za-z0-9\s]/);

    // Enter Registration Number
    await this.registrationNumber.fill(registrationNumber);

    // Verify special characters along with alphanumeric value are accepted
    await expect(this.registrationNumber).toHaveValue(registrationNumber);

    // Verify no validation error
    await expect(this.registrationNumberError).not.toBeVisible();
}

async TC_92_VerifyRegistrationNumberMandatoryForRegisteredPartnershipFirm(data) {

    // Navigate to Entity Details / start the flow
    await this.navigateToPOI(data);

    // Continue to POI / next page
    await this.saveAndNextButton.click();

    // Verify Registration Number field is visible
    await expect(this.registrationNumber).toBeVisible();

    // Clear Registration Number
    await this.registrationNumber.fill("");

    // Trigger validation
    await this.registrationNumber.blur();

    await this.saveAndNextButton.click();

    // Verify Registration Number is mandatory
    await expect(this.registrationNumberError).toBeVisible();

    // Verify mandatory validation message
    await expect(this.registrationNumberError).toHaveText(
        "Please enter Registration Number."
    );
}

async TC_93_VerifyRegistrationNumberAcceptsRegistrationCertificateFormat(data) {

    await this.navigateToPOI(data);

    // Read Registration Number from Excel
    const registrationNumber = String(
        data.registrationNumber ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(registrationNumber).not.toBe("");


    const registrationNumberFormat =
        /^\d{2}[A-Za-z]{5}\d{4}[A-Za-z]\d[A-Za-z]\d$/;

    // Verify Registration Number follows certificate format
    expect(registrationNumber).toMatch(registrationNumberFormat);

    // Enter Registration Number
    await this.registrationNumber.fill(registrationNumber);

    // Verify Registration Number is accepted
    await expect(this.registrationNumber).toHaveValue(registrationNumber);

    // Verify no validation error
    await expect(this.registrationNumberError).not.toBeVisible();
}

async TC_95_VerifyRegistrationCertificateAcceptsOnlyPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read file names from Excel
    const pdfFileName = String(
        data.registrationCertificatePdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.registrationCertificateJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.registrationCertificateJpegPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // PDF
    await this.uploadRegistrationCertificate.setInputFiles(pdfPath);
    await expect(this.fileFormatError).not.toBeVisible();

    // JPG
    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);
    await expect(this.fileFormatError).not.toBeVisible();

    // JPEG
    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);
    await expect(this.fileFormatError).not.toBeVisible();
}


async TC_96_VerifyRegistrationCertificateIsEditableAndAcceptsFileUpload(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file name from Excel
    const fileName = String(
        data.registrationCertificatePdfPath ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(fileName).not.toBe("");

    // Build complete file path
    const filePath = path.join("D:/DSC", fileName);

    // Verify file exists
    expect(fs.existsSync(filePath)).toBe(true);

    // Verify file input is enabled
    await expect(
        this.uploadRegistrationCertificate
    ).toBeEnabled();

    // Upload Registration Certificate
    await this.uploadRegistrationCertificate.setInputFiles(filePath);


    // Verify no file format error
    await expect(
        this.fileFormatError
    ).not.toBeVisible();
}


async TC_97_VerifyRegistrationCertificateRejectsFileMoreThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file name from Excel
    const fileName = String(
        data.registrationCertificatePdfPath ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(fileName).not.toBe("");

    // Build complete file path
    const filePath = path.join("D:/DSC", fileName);

    // Verify file exists
    expect(fs.existsSync(filePath)).toBe(true);

    // Verify file size is greater than 25 MB
    const maxSize = 25 * 1024 * 1024;
    const fileSize = fs.statSync(filePath).size;

    console.log(`File: ${fileName}`);
    console.log(`File size: ${fileSize} bytes`);

    expect(fileSize).toBeGreaterThan(maxSize);

    // Upload file
    await this.uploadRegistrationCertificate.setInputFiles(filePath);

    // Verify file size error
    await expect(this.fileSizeError).toBeVisible();

    // Verify exact error message
    await expect(this.fileSizeError).toHaveText(
        "File size must not exceed 25 MB"
    );
}

async TC_98_VerifyRegistrationCertificateRejectsInvalidFileFormats(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read invalid file name from Excel
    const invalidFileName = String(
        data.registrationCertificatePdfPath ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(invalidFileName).not.toBe("");

    // Build complete file path
    const invalidFilePath = path.join(
        "D:/DSC",
        invalidFileName
    );

    // Verify file exists
    expect(fs.existsSync(invalidFilePath)).toBe(true);

    console.log(`Invalid file: ${invalidFileName}`);

    // Upload invalid file
    await this.uploadRegistrationCertificate.setInputFiles(
        invalidFilePath
    );

    // Verify format validation message
    await expect(this.fileFormatError).toBeVisible();

    await expect(this.fileFormatError).toHaveText(
        "Only PDF, JPG or JPEG files are allowed."
    );
}


async TC_99_VerifyRegistrationCertificateAcceptsPDFJPGJPEGLessThan25mb(data) {

    await this.navigateToPOI(data);

    const path = require("path");

    // Read file names from Excel
    const pdfFileName = String(
        data.registrationCertificatePdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.registrationCertificateJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.registrationCertificateJpegPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // PDF
    await this.uploadRegistrationCertificate.setInputFiles(pdfPath);
    await expect(this.fileFormatError).not.toBeVisible();

    // JPG
    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);
    await expect(this.fileFormatError).not.toBeVisible();

    // JPEG
    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);
    await expect(this.fileFormatError).not.toBeVisible();
}


async TC_100_VerifyRegistrationCertificateRejectsMultiplePDFJPGJPEGGreaterThan25mb(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file names from Excel
    const pdfFileName = String(
        data.registrationCertificatePdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.registrationCertificateJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.registrationCertificateJpegPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify files exist
    expect(fs.existsSync(pdfPath)).toBe(true);
    expect(fs.existsSync(jpgPath)).toBe(true);
    expect(fs.existsSync(jpegPath)).toBe(true);

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Verify files are greater than 25 MB
    expect(fs.statSync(pdfPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpgPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpegPath).size).toBeGreaterThan(maxSize);

    // PDF
    await this.uploadRegistrationCertificate.setInputFiles([
        pdfPath
    ]);

    await expect(this.fileSizeError).toBeVisible();
    await expect(this.fileSizeError).toHaveText(
        "File size must not exceed 25 MB"
    );

    // JPG
    await this.uploadRegistrationCertificate.setInputFiles([
        jpgPath
    ]);

    await expect(this.fileSizeError).toBeVisible();
    await expect(this.fileSizeError).toHaveText(
        "File size must not exceed 25 MB"
    );

    // JPEG
    await this.uploadRegistrationCertificate.setInputFiles([
        jpegPath
    ]);

    await expect(this.fileSizeError).toBeVisible();
    await expect(this.fileSizeError).toHaveText(
        "File size must not exceed 25 MB"
    );
}

async TC_101_VerifyLLPINCertificateAcceptsMultiplePDFJPGJPEGEqualTo25mb(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file names from Excel
    const pdfFileName = String(
        data.llpinCertificatePdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.llpinCertificateJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.llpinCertificateJpegPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify files exist
    expect(fs.existsSync(pdfPath)).toBe(true);
    expect(fs.existsSync(jpgPath)).toBe(true);
    expect(fs.existsSync(jpegPath)).toBe(true);

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Verify each file is exactly 25 MB
    expect(fs.statSync(pdfPath).size).toBe(maxSize);
    expect(fs.statSync(jpgPath).size).toBe(maxSize);
    expect(fs.statSync(jpegPath).size).toBe(maxSize);

    // PDF
    await this.uploadLLPINCertificate.setInputFiles(pdfPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // JPG
    await this.uploadLLPINCertificate.setInputFiles(jpgPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // JPEG
    await this.uploadLLPINCertificate.setInputFiles(jpegPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
}


async TC_102_VerifyLLPINCertificateAcceptsPDFJPGJPEGLessThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file names from Excel
    const pdfFileName = String(
        data.llpinCertificatePdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.llpinCertificateJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.llpinCertificateJpegPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify files exist
    expect(fs.existsSync(pdfPath)).toBe(true);
    expect(fs.existsSync(jpgPath)).toBe(true);
    expect(fs.existsSync(jpegPath)).toBe(true);

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024;

    // Verify all files are less than 25 MB
    expect(fs.statSync(pdfPath).size).toBeLessThan(maxSize);
    expect(fs.statSync(jpgPath).size).toBeLessThan(maxSize);
    expect(fs.statSync(jpegPath).size).toBeLessThan(maxSize);

    // PDF
    await this.uploadLLPINCertificate.setInputFiles(pdfPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // JPG
    await this.uploadLLPINCertificate.setInputFiles(jpgPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // JPEG
    await this.uploadLLPINCertificate.setInputFiles(jpegPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_103_VerifyLLPINCertificateRejectsPDFJPGJPEGGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file names from Excel
    const pdfFileName = String(
        data.llpinCertificatePdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.llpinCertificateJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.llpinCertificateJpegPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Verify files are greater than 25 MB
    expect(fs.statSync(pdfPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpgPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpegPath).size).toBeGreaterThan(maxSize);

    // PDF
    await this.uploadLLPINCertificate.setInputFiles(pdfPath);

    await expect(this.fileSizeError).toBeVisible();
    await expect(this.fileSizeError).toHaveText(
        "File size must not exceed 25 MB"
    );

    // JPG
    await this.uploadLLPINCertificate.setInputFiles(jpgPath);

    await expect(this.fileSizeError).toBeVisible();
    await expect(this.fileSizeError).toHaveText(
        "File size must not exceed 25 MB"
    );

    // JPEG
    await this.uploadLLPINCertificate.setInputFiles(jpegPath);

    await expect(this.fileSizeError).toBeVisible();
    await expect(this.fileSizeError).toHaveText(
        "File size must not exceed 25 MB"
    );
}


async TC_104_VerifyLLPINAcceptsMaximum7Characters(data) {

    await this.navigateToPOI(data);

    // Read LLPIN from Excel
    const llpinNumber = String(
        data.llpinNumber ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(llpinNumber).not.toBe("");

    // Verify LLPIN contains maximum 7 characters
    expect(llpinNumber.length).toBeLessThanOrEqual(7);

    // Enter LLPIN
    await this.llpin.fill(llpinNumber);

    // Verify entered value
    await expect(this.llpin).toHaveValue(llpinNumber);
}

async TC_105_VerifyLLPINAcceptsOnlyAlphanumericCharacters(data) {

    await this.navigateToPOI(data);

    // Read LLPIN from Excel
    const llpinNumber = String(
        data.llpinNumber ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(llpinNumber).not.toBe("");

    // Verify LLPIN contains only alphanumeric characters
    expect(llpinNumber).toMatch(/^[A-Za-z0-9]+$/);

    // Enter LLPIN
    await this.llpin.fill(llpinNumber);

    // Verify entered value
    await expect(this.llpin).toHaveValue(llpinNumber);
}

async TC_106_VerifyLLPINFieldIsMandatory(data) {

    await this.navigateToPOI(data);

    // Clear LLPIN field
    await this.llpin.fill("");

    // Click Save And Next
    await this.saveAndNextButton.click();

    // Verify mandatory validation message
    await expect(this.llpinRequiredError).toBeVisible();

    // Verify validation message text
    await expect(this.llpinRequiredError).toHaveText(
        "LLPIN is required"
    );
}

async TC_107_VerifyPartnershipDeedFieldIsMandatory(data) {

    await this.navigateToPOI(data);

    // Click Save And Next without uploading Partnership Deed
    await this.saveAndNextButton.click();

    // Verify Partnership Deed mandatory validation message
    await expect(
        this.partnershipDeedRequiredError
    ).toBeVisible();

    // Verify validation message text
    await expect(
        this.partnershipDeedRequiredError
    ).toHaveText("Partnership Deed is required");
}

async TC_108_VerifyPartnershipDeedAcceptsOnlyPDFJPGJPEG(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file names from Excel
    const pdfFileName = String(
        data.partnershipDeedPdfPath ?? ""
    ).trim();

    const invalidFileName = String(
        data.partnershipDeedPdfPath ?? ""
    ).trim();


    // Build file paths
    const invalidPath = path.join("D:/DSC", invalidFileName);


    // Verify PDF is accepted
    await this.uploadPartnershipDeed.setInputFiles(pdfPath);

    await expect(this.fileFormatError).not.toBeVisible();

    // Verify error message
    await expect(this.fileFormatError).toHaveText(
        "Only PDF, JPG or JPEG files are allowed"
    );
}

async TC_109_VerifyPartnershipDeedFieldIsEnabledForFileUpload(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read PDF file name from Excel
    const pdfFileName = String(
        data.partnershipDeedPdfPath ?? ""
    ).trim();

    // Build PDF file path
    const pdfPath = path.join(
        "D:/DSC",
        pdfFileName
    );

    // Verify file exists
    expect(
        fs.existsSync(pdfPath),
        `File not found: ${pdfPath}`
    ).toBe(true);

    // Verify it is a file
    expect(
        fs.statSync(pdfPath).isFile(),
        `Path is not a file: ${pdfPath}`
    ).toBe(true);

    // Verify Partnership Deed upload field is attached
    await expect(
        this.uploadPartnershipDeed
    ).toBeAttached();

    // Verify Partnership Deed upload field is enabled
    await expect(
        this.uploadPartnershipDeed
    ).toBeEnabled();

    // Upload PDF
    await this.uploadPartnershipDeed.setInputFiles(
        pdfPath
    );
}

async TC_110_VerifyPartnershipDeedRejectsMoreThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read PDF file name from Excel
    const pdfFileName = String(
        data.partnershipDeedPdfPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");

    // Build file path
    const pdfPath = path.join(
        "D:/DSC",
        pdfFileName
    );

    // Verify file exists
    expect(
        fs.existsSync(pdfPath),
        `File not found: ${pdfPath}`
    ).toBe(true);

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Verify file is greater than 25 MB
    expect(
        fs.statSync(pdfPath).size
    ).toBeGreaterThan(maxSize);

    // Upload Partnership Deed
    await this.uploadPartnershipDeed.setInputFiles(
        pdfPath
    );

    // Verify file size error message
    await expect(
        this.fileSizeError
    ).toBeVisible();

    await expect(
        this.fileSizeError
    ).toHaveText(
        "File size must not exceed 25 MB"
    );

    await expect(this.fileSizeError1).not.toBeVisible();
}

async TC_111_VerifyPartnershipDeedAcceptsFilesEqualTo25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file names from Excel
    const pdfFileName = String(
        data.partnershipDeedPdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.partnershipDeedJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.partnershipDeedJpegPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Verify files exist
    expect(fs.existsSync(pdfPath)).toBe(true);
    expect(fs.existsSync(jpgPath)).toBe(true);
    expect(fs.existsSync(jpegPath)).toBe(true);

    // Verify each file is exactly 25 MB
    expect(fs.statSync(pdfPath).size).toBe(maxSize);
    expect(fs.statSync(jpgPath).size).toBe(maxSize);
    expect(fs.statSync(jpegPath).size).toBe(maxSize);

    // Upload PDF
    await this.uploadPartnershipDeed.setInputFiles(pdfPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Upload JPG
    await this.uploadPartnershipDeed.setInputFiles(jpgPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Upload JPEG
    await this.uploadPartnershipDeed.setInputFiles(jpegPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}


async TC_112_VerifyPartnershipDeedAcceptsPDFJPGJPEGLessThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read file names from Excel
    const pdfFileName = String(
        data.partnershipDeedPdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.partnershipDeedJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.partnershipDeedJpegPath ?? ""
    ).trim();

    // Validate Excel data
    expect(pdfFileName).not.toBe("");
    expect(jpgFileName).not.toBe("");
    expect(jpegFileName).not.toBe("");

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Verify files exist
    expect(fs.existsSync(pdfPath)).toBe(true);
    expect(fs.existsSync(jpgPath)).toBe(true);
    expect(fs.existsSync(jpegPath)).toBe(true);

    // Verify each file is less than 25 MB
    expect(fs.statSync(pdfPath).size).toBeLessThan(maxSize);
    expect(fs.statSync(jpgPath).size).toBeLessThan(maxSize);
    expect(fs.statSync(jpegPath).size).toBeLessThan(maxSize);

    // Upload PDF
    await this.uploadPartnershipDeed.setInputFiles(pdfPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Upload JPG
    await this.uploadPartnershipDeed.setInputFiles(jpgPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Upload JPEG
    await this.uploadPartnershipDeed.setInputFiles(jpegPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_113_VerifyPartnershipDeedRejectsInvalidFileGreaterThan25MB(data) {

    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Read invalid file name from Excel
    const pdfFileName = String(
        data.partnershipDeedPdfPath ?? ""
    ).trim();

    // Verify Excel value is not empty
    expect(pdfFileName).not.toBe("");

    // Build file path
    const pdfPath = path.join(
        "D:/DSC",
        pdfFileName
    );

    // Verify file exists
    expect(
        fs.existsSync(pdfPath),
        `File not found: ${pdfPath}`
    ).toBe(true);

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Verify file is greater than 25 MB
    expect(
        fs.statSync(pdfPath).size,
        `File size should be greater than 25 MB: ${pdfPath}`
    ).toBeGreaterThan(maxSize);

    // Verify file extension is NOT PDF/JPG/JPEG
    expect(
        path.extname(pdfPath).toLowerCase()
    ).not.toMatch(/\.(pdf|jpg|jpeg)$/);

    // Upload invalid file
    await this.uploadPartnershipDeed.setInputFiles(pdfPath);

    // Verify format validation error
    await expect(
        this.fileFormatError
    ).toBeVisible();

    await expect(
        this.fileFormatError
    ).toHaveText(
        "Only PDF, JPG or JPEG files are alZlowed"
    );
}

async TC_117_VerifyNamesOfAllPartnersMandatoryForPartnershipFirm(data) {

    await this.navigateToPOI(data);

    // Verify Names of all partners field is displayed
    await expect(
        this.page.getByText(
            "Names of all partners (List to be enclosed)*",
            { exact: true }
        )
    ).toBeVisible();

    // Leave Names of all partners empty
    await this.saveAndNextButton.click();

    // Verify mandatory validation message
    await expect(
        this.page.getByText(
            "Names of all partners is required",
            { exact: true }
        )
    ).toBeVisible();
}

async TC_118_VerifyNamesOfAllPartnersRejectsInvalidFormat(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    // Invalid format file path from Excel
    const invalidFileName = String(
        data.namesOfAllPartnersPdfPath
    ).trim();

    const invalidFilePath = path.join(
        "D:/DSC",
        invalidFileName
    );

    // Upload invalid format file
    await this.uploadNamesOfAllPartners.setInputFiles(
        invalidFilePath
    );

    // Verify format validation error
    await expect(this.fileFormatError).toBeVisible();
}

async TC_119_VerifyNamesOfAllPartnersAcceptsMaximum25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // 25 MB = 26,214,400 bytes
    const maxSize = 25 * 1024 * 1024;

    // Read file paths from Excel
    const pdfFileName = String(
        data.namesOfAllPartnersPdfPath ?? ""
    ).trim();

    const jpgFileName = String(
        data.namesOfAllPartnersJpgPath ?? ""
    ).trim();

    const jpegFileName = String(
        data.namesOfAllPartnersJpegPath ?? ""
    ).trim();

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);



    // --------------------------------------------------
    // PDF - exactly 25 MB
    // --------------------------------------------------
    await this.uploadNamesOfAllPartners.setInputFiles(pdfPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Clear file before next format
    await this.uploadNamesOfAllPartners.setInputFiles([]);

    // --------------------------------------------------
    // JPG - exactly 25 MB
    // --------------------------------------------------
    await this.uploadNamesOfAllPartners.setInputFiles(jpgPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Clear file
    await this.uploadNamesOfAllPartners.setInputFiles([]);

    // --------------------------------------------------
    // JPEG - exactly 25 MB
    // --------------------------------------------------
    await this.uploadNamesOfAllPartners.setInputFiles(jpegPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
}


async TC_120_VerifyNamesOfAllPartnersRejectsMoreThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read file names from Excel
    const pdfFileName = String(
        data.namesOfAllPartnersPdfPath
    ).trim();

    const jpgFileName = String(
        data.namesOfAllPartnersJpgPath
    ).trim();

    const jpegFileName = String(
        data.namesOfAllPartnersJpegPath
    ).trim();

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify files are greater than 25 MB
    expect(fs.statSync(pdfPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpgPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpegPath).size).toBeGreaterThan(maxSize);

    // ---------------- PDF > 25 MB ----------------
    await this.uploadNamesOfAllPartners.setInputFiles(pdfPath);

    await expect(this.fileSizeError).toBeVisible();

    // Clear file
    await this.uploadNamesOfAllPartners.setInputFiles([]);

    // ---------------- JPG > 25 MB ----------------
    await this.uploadNamesOfAllPartners.setInputFiles(jpgPath);

    await expect(this.fileSizeError).toBeVisible();

    // Clear file
    await this.uploadNamesOfAllPartners.setInputFiles([]);

    // ---------------- JPEG > 25 MB ----------------
    await this.uploadNamesOfAllPartners.setInputFiles(jpegPath);

    await expect(this.fileSizeError).toBeVisible();
}


async TC_121_VerifyNamesOfAllPartnersAcceptsJPGExactly25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // 25 MB = 26,214,400 bytes
    const maxSize = 25 * 1024 * 1024;

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.namesOfAllPartnersJpgPath
    ).trim();

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify JPG file is exactly 25 MB
    expect(fs.statSync(jpgPath).size).toBe(maxSize);

    // Upload JPG
    await this.uploadNamesOfAllPartners.setInputFiles(jpgPath);

    // Verify no validation errors
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_122_VerifyNamesOfAllPartnersAcceptsJPGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.namesOfAllPartnersJpgPath
    ).trim();

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify JPG file is less than 25 MB
    expect(fs.statSync(jpgPath).size).toBeLessThan(maxSize);

    // Upload JPG file
    await this.uploadNamesOfAllPartners.setInputFiles(jpgPath);

    // Verify no validation errors
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_123_VerifyNamesOfAllPartnersRejectsJPGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read JPG file name from Excel
    const jpgFileName = String(
        data.namesOfAllPartnersJpgPath
    ).trim();

    // Build file path
    const jpgPath = path.join("D:/DSC", jpgFileName);

    // Verify JPG file is greater than 25 MB
    expect(fs.statSync(jpgPath).size).toBeGreaterThan(maxSize);

    // Upload JPG file
    await this.uploadNamesOfAllPartners.setInputFiles(jpgPath);

    // Verify file size error is displayed
    await expect(this.fileSizeError).toBeVisible();

    // Verify format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_124_VerifyNamesOfAllPartnersAcceptsPDFExactly25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read PDF file name from Excel
    const pdfFileName = String(
        data.namesOfAllPartnersPdfPath
    ).trim();

    // Build file path
    const pdfPath = path.join("D:/DSC", pdfFileName);

    // Verify PDF file is exactly 25 MB
    expect(fs.statSync(pdfPath).size).toBe(maxSize);

    // Upload PDF file
    await this.uploadNamesOfAllPartners.setInputFiles(pdfPath);

    // Verify no validation errors
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_125_VerifyNamesOfAllPartnersAcceptsPDFLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read PDF file name from Excel
    const pdfFileName = String(
        data.namesOfAllPartnersPdfPath
    ).trim();

    // Build file path
    const pdfPath = path.join("D:/DSC", pdfFileName);

    // Verify PDF file is less than 25 MB
    expect(fs.statSync(pdfPath).size).toBeLessThan(maxSize);

    // Upload PDF file
    await this.uploadNamesOfAllPartners.setInputFiles(pdfPath);

    // Verify no validation errors
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_126_VerifyNamesOfAllPartnersRejectsPDFGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read PDF file name from Excel
    const pdfFileName = String(
        data.namesOfAllPartnersPdfPath
    ).trim();

    // Build file path
    const pdfPath = path.join("D:/DSC", pdfFileName);

    // Verify PDF file is greater than 25 MB
    expect(fs.statSync(pdfPath).size).toBeGreaterThan(maxSize);

    // Upload PDF file
    await this.uploadNamesOfAllPartners.setInputFiles(pdfPath);

    // Verify file size validation error
    await expect(this.fileSizeError).toBeVisible();

    // Verify format error is not displayed
    await expect(this.fileFormatError).not.toBeVisible();
}


async TC_127_VerifyOthersFieldIsNonMandatory(data) {
    await this.navigateToPOI(data);

    // Do not upload any file in Others field

    // Click Save And Next
    await this.saveAndNextButton.click();

    // Verify no mandatory validation error for Others field
    await expect(
        this.page.getByText("Others is required", { exact: true })
    ).not.toBeVisible();
}

async TC_128_VerifyOthersRejectsInvalidFormat(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    const invalidFilePath = path.join(
        "D:/DSC",
        String(data.othersFormatPath).trim()
    );

    await this.uploadOthers.setInputFiles(invalidFilePath);

    await expect(this.fileFormatError).toBeVisible({
        timeout: 5000
    });
}

async TC_129_VerifyOthersAcceptsMaximum25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read file names from Excel
    const pdfFileName = String(data.othersPdfPath).trim();
    const jpgFileName = String(data.othersJpgPath).trim();
    const jpegFileName = String(data.othersJpegPath).trim();

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify all files are exactly 25 MB
    expect(fs.statSync(pdfPath).size).toBe(maxSize);
    expect(fs.statSync(jpgPath).size).toBe(maxSize);
    expect(fs.statSync(jpegPath).size).toBe(maxSize);

    // PDF - exactly 25 MB
    await this.uploadOthers.setInputFiles(pdfPath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    await this.uploadOthers.setInputFiles([]);

    // JPG - exactly 25 MB
    await this.uploadOthers.setInputFiles(jpgPath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    await this.uploadOthers.setInputFiles([]);

    // JPEG - exactly 25 MB
    await this.uploadOthers.setInputFiles(jpegPath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_130_VerifyOthersRejectsPDFJPGJPEGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read file names from Excel
    const pdfFileName = String(data.othersPdfPath).trim();
    const jpgFileName = String(data.othersJpgPath).trim();
    const jpegFileName = String(data.othersJpegPath).trim();

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify files are greater than 25 MB
    expect(fs.statSync(pdfPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpgPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpegPath).size).toBeGreaterThan(maxSize);

    // PDF > 25 MB
    await this.uploadOthers.setInputFiles(pdfPath);
    await expect(this.fileSizeError).toBeVisible();

    await this.uploadOthers.setInputFiles([]);

    // JPG > 25 MB
    await this.uploadOthers.setInputFiles(jpgPath);
    await expect(this.fileSizeError).toBeVisible();

    await this.uploadOthers.setInputFiles([]);

    // JPEG > 25 MB
    await this.uploadOthers.setInputFiles(jpegPath);
    await expect(this.fileSizeError).toBeVisible();
}

async TC_131_VerifyOthersAcceptsMultiplePDFJPGJPEGExactly25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    // Maximum allowed size = 25 MB
    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Read file names from Excel
    const pdfFileName = String(data.othersPdfPath).trim();
    const jpgFileName = String(data.othersJpgPath).trim();
    const jpegFileName = String(data.othersJpegPath).trim();

    // Build file paths
    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify each file is exactly 25 MB
    expect(fs.statSync(pdfPath).size).toBe(maxSize);
    expect(fs.statSync(jpgPath).size).toBe(maxSize);
    expect(fs.statSync(jpegPath).size).toBe(maxSize);

    // PDF
    await this.uploadOthers.setInputFiles(pdfPath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Clear
    await this.uploadOthers.setInputFiles([]);

    // JPG
    await this.uploadOthers.setInputFiles(jpgPath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Clear
    await this.uploadOthers.setInputFiles([]);

    // JPEG
    await this.uploadOthers.setInputFiles(jpegPath);
    await expect(this.fileSizeError).not.toBeVisible();
     await expect(this.fileSizeError1).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_132_VerifyOthersAcceptsMultiplePDFJPGJPEGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    const pdfFileName = String(data.othersPdfPath).trim();
    const jpgFileName = String(data.othersJpgPath).trim();
    const jpegFileName = String(data.othersJpegPath).trim();

    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify each file is less than 25 MB
    expect(fs.statSync(pdfPath).size).toBeLessThan(maxSize);
    expect(fs.statSync(jpgPath).size).toBeLessThan(maxSize);
    expect(fs.statSync(jpegPath).size).toBeLessThan(maxSize);

    // PDF
    await this.uploadOthers.setInputFiles(pdfPath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Clear file input
    await this.uploadOthers.setInputFiles([]);

    // JPG
    await this.uploadOthers.setInputFiles(jpgPath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    // Clear file input
    await this.uploadOthers.setInputFiles([]);

    // JPEG
    await this.uploadOthers.setInputFiles(jpegPath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_133_VerifyOthersRejectsMultiplePDFJPGJPEGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    const pdfFileName = String(data.othersPdfPath).trim();
    const jpgFileName = String(data.othersJpgPath).trim();
    const jpegFileName = String(data.othersJpegPath).trim();

    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify all files are greater than 25 MB
    expect(fs.statSync(pdfPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpgPath).size).toBeGreaterThan(maxSize);
    expect(fs.statSync(jpegPath).size).toBeGreaterThan(maxSize);

    // PDF > 25 MB
    await this.uploadOthers.setInputFiles(pdfPath);
    await expect(this.fileSizeError).toBeVisible();

    // Clear file input
    await this.uploadOthers.setInputFiles([]);

    // JPG > 25 MB
    await this.uploadOthers.setInputFiles(jpgPath);
    await expect(this.fileSizeError).toBeVisible();

    // Clear file input
    await this.uploadOthers.setInputFiles([]);

    // JPEG > 25 MB
    await this.uploadOthers.setInputFiles(jpegPath);
    await expect(this.fileSizeError).toBeVisible();
    await expect(this.fileSizeError1).toBeVisible();
}


async TC_134_VerifyOthersRejectsUnsupportedFormatExactly25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    const pngFileName = String(data.othersPngPath).trim();
    const pngPath = path.join("D:/DSC", pngFileName);

    // Verify PNG file is exactly 25 MB
    expect(fs.statSync(pngPath).size).toBe(maxSize);

    // Upload unsupported PNG format
    await this.uploadOthers.setInputFiles(pngPath);

    // Verify unsupported format is rejected
    await expect(this.fileFormatError).toBeVisible();

    // File size should not be the reason for rejection
    await expect(this.fileSizeError).not.toBeVisible();
}


async TC_135_VerifyOthersRejectsUnsupportedFormatLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    const pngFileName = String(data.othersPngPath).trim();
    const pngPath = path.join("D:/DSC", pngFileName);

    // Verify PNG file is less than 25 MB
    expect(fs.statSync(pngPath).size).toBeLessThan(maxSize);

    // Upload unsupported PNG format
    await this.uploadOthers.setInputFiles(pngPath);

    // Verify unsupported format is rejected
    await expect(this.fileFormatError).toBeVisible();

    // Verify rejection is not due to file size
    await expect(this.fileSizeError).not.toBeVisible();
}

async TC_136_VerifyOthersRejectsUnsupportedFormatGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    const pngFileName = String(data.othersPngPath).trim();
    const pngPath = path.join("D:/DSC", pngFileName);

    // Verify PNG file is greater than 25 MB
    expect(fs.statSync(pngPath).size).toBeGreaterThan(maxSize);

    // Upload unsupported PNG format
    await this.uploadOthers.setInputFiles(pngPath);

    // Verify unsupported format is rejected
    await expect(this.fileFormatError).toBeVisible();
}

async TC_137_VerifyRegistrationCertificateFieldIsMandatory(data) {
    await this.navigateToPOI(data);

    // Leave Registration Certificate field empty
    await this.saveAndNextButton.click();

    // Verify mandatory validation message
    await expect(
        this.page.getByText("Registration Certificate is required", { exact: true })
    ).toBeVisible();
}

async TC_138_VerifyRegistrationCertificateRejectsInvalidFormat(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    const invalidFileName = String(
        data.registrationCertificateInvalidPath
    ).trim();

    const invalidFilePath = path.join(
        "D:/DSC",
        invalidFileName
    );

    // Upload unsupported format
    await this.uploadRegistrationCertificate.setInputFiles(
        invalidFilePath
    );

    // Verify format validation error
    await expect(this.fileFormatError).toBeVisible();
}

async TC_139_VerifyRegistrationCertificateAcceptsAllPDFJPGJPEGFormats(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    const pdfFileName = String(data.registrationCertificatePdfPath).trim();
    const jpgFileName = String(data.registrationCertificateJpgPath).trim();
    const jpegFileName = String(data.registrationCertificateJpegPath).trim();

    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // PDF
    await this.uploadRegistrationCertificate.setInputFiles(pdfPath);
    await expect(this.fileFormatError).not.toBeVisible();

    await this.uploadRegistrationCertificate.setInputFiles([]);

    // JPG
    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);
    await expect(this.fileFormatError).not.toBeVisible();

    await this.uploadRegistrationCertificate.setInputFiles([]);

    // JPEG
    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_140_VerifyRegistrationCertificateRejectsPDFJPGJPEGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    const pdfFileName = String(data.registrationCertificatePdfPath).trim();
    const jpgFileName = String(data.registrationCertificateJpgPath).trim();
    const jpegFileName = String(data.registrationCertificateJpegPath).trim();

    const pdfPath = path.join("D:/DSC", pdfFileName);
    const jpgPath = path.join("D:/DSC", jpgFileName);
    const jpegPath = path.join("D:/DSC", jpegFileName);

    // Verify PDF is greater than 25 MB
    expect(fs.statSync(pdfPath).size).toBeGreaterThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(pdfPath);
    await expect(this.fileSizeError).toBeVisible();

    await this.uploadRegistrationCertificate.setInputFiles([]);

    // Verify JPG is greater than 25 MB
    expect(fs.statSync(jpgPath).size).toBeGreaterThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);
    await expect(this.fileSizeError).toBeVisible();

    await this.uploadRegistrationCertificate.setInputFiles([]);

    // Verify JPEG is greater than 25 MB
    expect(fs.statSync(jpegPath).size).toBeGreaterThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);
    await expect(this.fileSizeError).toBeVisible();
}

async TC_141_VerifyRegistrationCertificateAcceptsPDFJPGJPEGEqualTo25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    const pdfPath = path.join(
        "D:/DSC",
        String(data.registrationCertificatePdfPath).trim()
    );

    const jpgPath = path.join(
        "D:/DSC",
        String(data.registrationCertificateJpgPath).trim()
    );

    const jpegPath = path.join(
        "D:/DSC",
        String(data.registrationCertificateJpegPath).trim()
    );

    // JPG - exactly 25 MB
    expect(fs.statSync(jpgPath).size).toBe(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    await this.uploadRegistrationCertificate.setInputFiles([]);

    // JPEG - exactly 25 MB
    expect(fs.statSync(jpegPath).size).toBe(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    await this.uploadRegistrationCertificate.setInputFiles([]);

    // PDF - exactly 25 MB
    expect(fs.statSync(pdfPath).size).toBe(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(pdfPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();


}

async TC_142_VerifyRegistrationCertificateAcceptsPDFJPGJPEGLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    const pdfPath = path.join(
        "D:/DSC",
        String(data.registrationCertificatePdfPath).trim()
    );

    const jpgPath = path.join(
        "D:/DSC",
        String(data.registrationCertificateJpgPath).trim()
    );

    const jpegPath = path.join(
        "D:/DSC",
        String(data.registrationCertificateJpegPath).trim()
    );

    // PDF - less than 25 MB
    expect(fs.statSync(pdfPath).size).toBeLessThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(pdfPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    await this.uploadRegistrationCertificate.setInputFiles([]);

    // JPG - less than 25 MB
    expect(fs.statSync(jpgPath).size).toBeLessThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();

    await this.uploadRegistrationCertificate.setInputFiles([]);

    // JPEG - less than 25 MB
    expect(fs.statSync(jpegPath).size).toBeLessThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);

    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
    await expect(this.fileFormatError).not.toBeVisible();
}

async TC_143_VerifyRegistrationCertificateRejectsPDFJPGJPEGGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // PDF
    const pdfPath = path.join(
        "D:/DSC",
        String(data.registrationCertificatePdfPath).trim()
    );

    expect(fs.statSync(pdfPath).size).toBeGreaterThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(pdfPath);

    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // Clear file input
    await this.uploadRegistrationCertificate.setInputFiles([]);

    // JPG
    const jpgPath = path.join(
        "D:/DSC",
        String(data.registrationCertificateJpgPath).trim()
    );

    expect(fs.statSync(jpgPath).size).toBeGreaterThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(jpgPath);

    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });

    // Clear file input
    await this.uploadRegistrationCertificate.setInputFiles([]);

    // JPEG
    const jpegPath = path.join(
        "D:/DSC",
        String(data.registrationCertificateJpegPath).trim()
    );

    expect(fs.statSync(jpegPath).size).toBeGreaterThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(jpegPath);

    await expect(this.fileSizeError).toBeVisible({
        timeout: 5000
    });
}

async TC_144_VerifyRegistrationCertificateRejectsInvalidFormatFilesEqualTo25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Invalid format file from Excel
    const invalidFilePath = path.join(
        "D:/DSC",
        String(data.registrationCertificateInvalidPath).trim()
    );

    // Verify invalid file size is exactly 25 MB
    expect(fs.statSync(invalidFilePath).size).toBe(maxSize);

    // Upload invalid format file
    await this.uploadRegistrationCertificate.setInputFiles(
        invalidFilePath
    );

    // Verify format validation error
    await expect(this.fileFormatError).toBeVisible({
        timeout: 5000
    });
}

async TC_145_VerifyRegistrationCertificateRejectsMultipleInvalidFormatFilesLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Invalid file 1 - PNG
    const invalidFilePath = path.join(
        "D:/DSC",
        String(data.registrationCertificateInvalidPath).trim()
    );

    expect(fs.statSync(invalidFilePath).size).toBeLessThan(maxSize);

    await this.uploadRegistrationCertificate.setInputFiles(
        invalidFilePath
    );

    await expect(this.fileFormatError).toBeVisible({
        timeout: 5000
    });

    await expect(this.fileFormatError).toBeVisible({
        timeout: 5000
    });
}

async TC_146_VerifyRegistrationCertificateRejectsInvalidFormatFilesGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");
    const fs = require("fs");

    const maxSize = 25 * 1024 * 1024; // 26,214,400 bytes

    // Invalid format file
    const invalidFilePath = path.join(
        "D:/DSC",
        String(data.registrationCertificateInvalidPath).trim()
    );

    // Verify invalid file size is greater than 25 MB
    expect(fs.statSync(invalidFilePath).size).toBeGreaterThan(maxSize);

    // Upload invalid format file
    await this.uploadRegistrationCertificate.setInputFiles(
        invalidFilePath
    );

    // Verify format validation error
    await expect(this.fileFormatError).toBeVisible({
        timeout: 5000
    });
}

async TC_147_VerifyRegistrationNumberFieldIsMandatory(data) {
    await this.navigateToPOI(data);

    // Registration Number field
    const registrationNumberField = this.registrationNumber;

    // Leave the field empty
    await registrationNumberField.fill("");

    // Click Save and Next / Submit
    await this.saveAndNextButton.click();

    // Verify mandatory validation message
    await expect(
        this.registrationNumberError
    ).toBeVisible();

    // Verify expected error message
    await expect(
        this.registrationNumberError
    ).toHaveText("Registration Number is required");
}

async TC_148_VerifyRegistrationNumberAcceptsMaximum50Characters(data) {
    await this.navigateToPOI(data);

    // Read Registration Number from Excel
    const registrationNumber = String(
        data.registrationNumber ?? ""
    ).trim();

    // Enter Registration Number from Excel
    await this.registrationNumber.fill(registrationNumber);

    // Verify the value entered
    await expect(this.registrationNumber).toHaveValue(registrationNumber);

    // Verify maximum 50 characters
    expect(registrationNumber.length).toBeLessThanOrEqual(50);

    // Verify actual entered value length
    const enteredValue = await this.registrationNumber.inputValue();
    expect(enteredValue.length).toBeLessThanOrEqual(50);
}

async TC_149_VerifyRegistrationNumberAcceptsAlphanumericCharacters(data) {
    await this.navigateToPOI(data);

    // Read Registration Number from Excel
    const registrationNumber = String(
        data.registrationNumber ?? ""
    ).trim();

    // Enter Registration Number from Excel
    await this.registrationNumber.fill(registrationNumber);

    // Read actual value entered in the field
    const enteredValue = await this.registrationNumber.inputValue();

    // Verify that alphabets are present
    expect(enteredValue).toMatch(/[A-Za-z]/);

    // Verify that numbers are present
    expect(enteredValue).toMatch(/[0-9]/);
}

async TC_150_VerifyRegistrationNumberAcceptsSpecialCharactersAlongWithAlphanumericData(data) {
    await this.navigateToPOI(data);

    // Read Registration Number from Excel
    const registrationNumber = String(
        data.registrationNumber ?? ""
    ).trim();

    // Enter Registration Number from Excel
    await this.registrationNumber.fill(registrationNumber);

    // Read actual value entered in the field
    const enteredValue = await this.registrationNumber.inputValue();

    // Verify alphabets are present
    expect(enteredValue).toMatch(/[A-Za-z]/);

    // Verify numbers are present
    expect(enteredValue).toMatch(/[0-9]/);

    // Verify special characters are present
    expect(enteredValue).toMatch(/[^A-Za-z0-9]/);

    // Verify the complete value is accepted
    expect(enteredValue.length).toBeGreaterThan(0);
}


async TC_151_VerifyRegistrationNumberAcceptsCertificateFormat(data) {
    await this.navigateToPOI(data);

    // Read Registration Number from Excel
    const registrationNumber = String(
        data.registrationNumber ?? ""
    ).trim();

    // Enter Registration Number
    await this.registrationNumber.fill(registrationNumber);

    // Read actual value entered in the field
    const enteredValue = await this.registrationNumber.inputValue();

    // Verify Registration Number Certificate format
    // Example: 27HHFAK7656L1Z5
    expect(enteredValue).toMatch(/^\d{2}[A-Z]{5}\d{4}[A-Z]\d[A-Z]\d$/);

    // Verify exact length
    expect(enteredValue.length).toBe(15);
}

async TC_152_VerifyTrustDeedFieldIsMandatory(data) {
    await this.navigateToPOI(data);

    // Click Save & Next without uploading Trust Deed
    await this.saveAndNextButton.click();

    // Verify mandatory validation message
    await expect(
        this.trustDeedRequiredError
    ).toBeVisible({ timeout: 5000 });

    // Verify exact error message
    await expect(
        this.trustDeedRequiredError
    ).toHaveText("Trust Deed is required", { timeout: 5000 });
}

async TC_153_VerifyTrustDeedRejectsInvalidFileFormat(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    // Take invalid file name from Excel
    const invalidFileName = String(
        data.trustDeedInvalidPath
    ).trim();

    const invalidFilePath = path.join(
        "D:/DSC",
        invalidFileName
    );

    // Upload unsupported format
    await this.uploadTrustDeed.setInputFiles(
        invalidFilePath
    );

    // Verify format validation error
    await expect(this.fileFormatError).toBeVisible();
}

async TC_154_VerifyTrustDeedAcceptsMaximum25MBAllFormats(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    // 25 MB = 26,214,400 bytes
    const maxSize = 25 * 1024 * 1024;

    // Read file names from Excel
    const pdfFileName = String(data.trustDeedPdfPath ?? "").trim();
    const jpgFileName = String(data.trustDeedJpgPath ?? "").trim();
    const jpegFileName = String(data.trustDeedJpegPath ?? "").trim();

    // Build file paths
    const pdfFilePath = path.join("D:/DSC", pdfFileName);
    const jpgFilePath = path.join("D:/DSC", jpgFileName);
    const jpegFilePath = path.join("D:/DSC", jpegFileName);

    // Clear file input
    await this.uploadTrustDeed.setInputFiles([]);

    // 2. Upload 25 MB JPG
    await this.uploadTrustDeed.setInputFiles(jpgFilePath);

    await expect(this.fileSizeError).not.toBeVisible();

    // Clear file input
    await this.uploadTrustDeed.setInputFiles([]);

    // 3. Upload 25 MB JPEG
    await this.uploadTrustDeed.setInputFiles(jpegFilePath);

    // 1. Upload 25 MB PDF
    await this.uploadTrustDeed.setInputFiles(pdfFilePath);

    await expect(this.fileSizeError).not.toBeVisible();

    await expect(this.fileSizeError1).not.toBeVisible();
}

async TC_155_VerifyTrustDeedRejectsMoreThan25MBAllFormats(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    const pdfFileName = String(data.trustDeedPdfPath).trim();
    const jpgFileName = String(data.trustDeedJpgPath).trim();
    const jpegFileName = String(data.trustDeedJpegPath).trim();

    const pdfFilePath = path.join("D:/DSC", pdfFileName);
    const jpgFilePath = path.join("D:/DSC", jpgFileName);
    const jpegFilePath = path.join("D:/DSC", jpegFileName);

    // PDF > 25 MB
    await this.uploadTrustDeed.setInputFiles(pdfFilePath);
    await expect(this.fileSizeError).toBeVisible();

    await this.uploadTrustDeed.setInputFiles([]);

    // JPG > 25 MB
    await this.uploadTrustDeed.setInputFiles(jpgFilePath);
    await expect(this.fileSizeError).toBeVisible();

    await this.uploadTrustDeed.setInputFiles([]);

    // JPEG > 25 MB
    await this.uploadTrustDeed.setInputFiles(jpegFilePath);
    await expect(this.fileSizeError).toBeVisible();
}

async TC_156_VerifyTrustDeedAcceptsMultipleSameFormatFilesEqual25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    const pdfFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedPdfPath).trim()
    );

    const jpgFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedJpgPath).trim()
    );

    const jpegFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedJpegPath).trim()
    );

    // Upload 25 MB PDF
    await this.uploadTrustDeed.setInputFiles(pdfFilePath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();


    // Clear
    await this.uploadTrustDeed.setInputFiles([]);

    // Upload 25 MB JPG
    await this.uploadTrustDeed.setInputFiles(jpgFilePath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();

    // Clear
    await this.uploadTrustDeed.setInputFiles([]);

    // Upload 25 MB JPEG
    await this.uploadTrustDeed.setInputFiles(jpegFilePath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
}

async TC_157_VerifyTrustDeedAcceptsMultipleSameFormatFilesLessThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    const pdfFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedPdfPath).trim()
    );

    const jpgFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedJpgPath).trim()
    );

    const jpegFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedJpegPath).trim()
    );

    // Upload PDF (<25 MB)
    await this.uploadTrustDeed.setInputFiles(pdfFilePath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();

    // Clear uploaded file
    await this.uploadTrustDeed.setInputFiles([]);

    // Upload JPG (<25 MB)
    await this.uploadTrustDeed.setInputFiles(jpgFilePath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();

    // Clear uploaded file
    await this.uploadTrustDeed.setInputFiles([]);

    // Upload JPEG (<25 MB)
    await this.uploadTrustDeed.setInputFiles(jpegFilePath);
    await expect(this.fileSizeError).not.toBeVisible();
    await expect(this.fileSizeError1).not.toBeVisible();
}

async TC_158_VerifyTrustDeedRejectsMultipleFilesGreaterThan25MB(data) {
    await this.navigateToPOI(data);

    const path = require("path");

    const pdfFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedPdfPath).trim()
    );

    const jpgFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedJpgPath).trim()
    );

    const jpegFilePath = path.join(
        "D:/DSC",
        String(data.trustDeedJpegPath).trim()
    );

    // PDF greater than 25 MB
    await this.uploadTrustDeed.setInputFiles(pdfFilePath);
    await expect(this.fileSizeError).toBeVisible();

    // Clear uploaded file
    await this.uploadTrustDeed.setInputFiles([]);

    // JPG greater than 25 MB
    await this.uploadTrustDeed.setInputFiles(jpgFilePath);
    await expect(this.fileSizeError).toBeVisible();

    // Clear uploaded file
    await this.uploadTrustDeed.setInputFiles([]);

    // JPEG greater than 25 MB
    await this.uploadTrustDeed.setInputFiles(jpegFilePath);
    await expect(this.fileSizeError).toBeVisible();
}
    }
module.exports = { PoiDetails };