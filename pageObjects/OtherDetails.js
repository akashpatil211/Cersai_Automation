import { expect } from '@playwright/test';

export class OtherDetails {

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

        // ================= OTHERS DETAILS =================

   this.entityDetailsHeading = page.getByRole('heading', {
    name: 'Legal Entity Details',
    exact: true
});

     this.saveAndNextButton = page.getByRole('button', {
            name: 'Save And Next'
        });


this.relatedPartyDetailsHeading = this.page.getByRole('heading',
    {
        name: 'Related Party Details',
        exact: true
    }
);

   this.addressDetailsHeading = page.getByRole('heading', {
            name: 'Address Details',
            exact: true
        });


this.poiHeading = page.getByRole("heading", {
    name: "Proof Of Identity and Address Details"
});

this.contactDetailsHeading = page.getByRole('heading', {
            name: 'Contact Details',
            exact: true
        });


this.otherDetailsHeading = this.page.getByRole('heading', {
    name: 'Other Details',
    exact: true
});

this.remarks = this.page.getByPlaceholder('Enter Remarks here');

this.certifiedCopiesYes = this.page.locator(
    'input[name="certifiedCopies"][value="Yes"]'
);

this.certifiedCopiesNo = this.page.locator(
    'input[name="certifiedCopies"][value="No"]'
);

this.equivalentEDocYes = this.page.locator(
    'input[name="equivalentEDoc"][value="Yes"]'
);

this.equivalentEDocNo = this.page.locator(
    'input[name="equivalentEDoc"][value="No"]'
);

this.verificationFromDigilockerYes = this.page.locator(
    'input[name="verificationFromDigilocker"][value="Yes"]'
);

this.verificationFromDigilockerNo = this.page.locator(
    'input[name="verificationFromDigilocker"][value="No"]'
);
this.kycVerificationDate = this.page.getByRole('textbox', {
    name: 'DD/MM/YYYY'
}).first();

this.employeeName = this.page.getByPlaceholder('Employee Name');

this.employeeCode = this.page.getByPlaceholder('Employee Code');

this.employeeDesignation = this.page.getByPlaceholder('Employee Designation');

this.clientConsent = this.page.getByLabel('Client Consent file');

this.declarationPlace = this.page.getByPlaceholder('Enter Place');

this.declarationDate = this.page.locator(
    'input[id="declarationDate"]'
);
this.employeeCKYCId = this.page.getByPlaceholder('Employee CKYC Id');

this.institutionName = this.page.getByPlaceholder('Institution Name');
this.institutionCode = this.page.getByPlaceholder('Institution Code');

this.declarationCheckbox = this.page.getByRole('checkbox');

this.remarksError = this.page.getByText(
    'Remarks allows only alphanumeric characters and spaces',
    { exact: true }
);
this.employeeCKYCIdError = this.page.getByText(
    'Employee CKYC Id must be 14 digits',
    { exact: true }
);

this.kycVerificationDateError = this.page.getByText(
    'Please select KYC verification date',
    { exact: true }
);

this.employeeCodeError = this.page.getByText('Please enter Employee Code', { exact: true });
this.employeeDesignationError = this.page.getByText('Please enter Employee Designation', { exact: true });
this.employeeBranchError = this.page.getByText('Please enter Employee Branch', { exact: true });
this.employeeBranch = this.page.getByPlaceholder('Employee Branch');
this.employeeCKYCIdError = this.page.getByText('Employee CKYC Id must be 14 digits', { exact: true });
this.employeeCKYCIdError1 = this.page.getByText('Please enter Employee Branch', { exact: true });   
}



async navigateToOthersDetails(data) {

    await this.kycManagementDropdown.click();

    await this.singleOperationsDropdown.click();

    await this.page.getByRole('link', {
        name: 'Create',
        exact: true
    }).click();

    await this.page.getByRole('radio', {
        name: 'Legal Entity'
    }).check();

    await expect(this.enterSearchKey).toBeVisible({
        timeout: 10000
    });

    await this.enterSearchKey.fill(
        String(data.SearchKey ?? '').trim()
    );

    await this.submitButton.click();

    // Entity Details
    await expect(this.entityDetailsHeading).toBeVisible({
        timeout: 60000
    });

    await this.page.waitForTimeout(2000);
    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 60000
    });

    await this.page.waitForTimeout(2000);
    await this.saveAndNextButton.click();


    // POI Details
    await expect(this.poiHeading).toBeVisible({
        timeout: 60000
    });

    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 60000
    });

    await this.page.waitForTimeout(2000);
    await this.saveAndNextButton.click();


    // Address Details
    await expect(this.addressDetailsHeading).toBeVisible({
        timeout: 60000
    });

    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 60000
    });

    await this.page.waitForTimeout(2000);
    await this.saveAndNextButton.click();


    // Contact Details
    await expect(this.contactDetailsHeading).toBeVisible({
        timeout: 60000
    });
    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 60000
    });
    await this.page.waitForTimeout(2000);
    await this.saveAndNextButton.click();

    await expect(this.relatedPartyDetailsHeading).toBeVisible({
        timeout: 60000
    });
    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 60000
    });
    await this.page.waitForTimeout(2000);
    await this.saveAndNextButton.click();

    await expect(this.otherDetailsHeading ).toBeVisible({
        timeout: 60000
    });
    
}

async TC_01_VerifyNavigationToOtherDetails(data) {
    await this.navigateToOthersDetails(data);
    await expect(this.otherDetailsHeading).toBeVisible();
}


async TC_02_VerifyRemarksAcceptsAlphanumericInput(data) {

    await this.navigateToOthersDetails(data);
    const remarks = String(data.remarks ?? '').trim();
    await this.remarks.fill(remarks);
    await expect(this.remarks).toHaveValue(remarks);
    await expect(this.remarksError).not.toBeVisible();
}

async TC_03_VerifyRemarksAcceptsMaximum200Characters(data) {
    await this.navigateToOthersDetails(data);
    await expect(this.otherDetailsHeading).toBeVisible();

    const remarks = String(data.remarks ?? '').trim();

    await this.remarks.fill(remarks);

    await expect(this.remarks).toHaveValue(remarks);
}

async TC_04_VerifyRemarksDoesNotAllowMoreThan200Characters(data) {

    await this.navigateToOthersDetails(data);

    const remarks = String(data.remarks ?? '').trim();

    await this.remarks.click();
    await this.remarks.pressSequentially(remarks);

    const enteredRemarks = await this.remarks.inputValue();

    expect(enteredRemarks.length).toBe(200);
}

async TC_05_VerifyRemarksRestrictsInvalidInput(data) {

    await this.navigateToOthersDetails(data);

    const remarks = String(data.remarks ?? '').trim();

    await this.remarks.fill(remarks);

    await expect(this.remarksError).toBeVisible();
}

async TC_06_VerifyRemarksRestrictsSpecialCharacters(data) {

    await this.navigateToOthersDetails(data);

    const remarks = String(data.remarks ?? '').trim();

    await this.remarks.fill(remarks);

    await expect(this.remarksError).toBeVisible();
}

async TC_07_VerifyCharacterCountDisplayedForRemarks(data) {

    await this.navigateToOthersDetails(data);

    const remarks = String(data.remarks ?? '').trim();

    await this.remarks.fill(remarks);

    const expectedCount = remarks.length;

    await expect(
        this.page.getByText(`${expectedCount}/200`, { exact: true })
    ).toBeVisible();
}

async TC_08_VerifyMaxCharacterReachedForRemarks(data) {

    await this.navigateToOthersDetails(data);

    const remarks = String(data.remarks ?? '').trim();

     await this.remarks.pressSequentially(remarks);
    await expect(
        this.page.getByText('200/200', { exact: true })
    ).toBeVisible();

}

async TC_09_VerifyRemarksAllowsSpacesBetweenWords(data) {

    await this.navigateToOthersDetails(data);

    const remarks = String(data.remarks ?? '').trim();

    await this.remarks.fill(remarks);

    await expect(this.remarksError).not.toBeVisible();
}

async TC_10_VerifyRemarksFieldIsOptional(data) {

    await this.navigateToOthersDetails(data);

    const remarksLabel = this.page.getByText('Remarks', { exact: true });

    await expect(remarksLabel).toBeVisible();
    await expect(remarksLabel).not.toContainText('*');
}

async TC_11_VerifyAttestationDetailsSubSectionsVisible(data) {
    await this.navigateToOthersDetails(data);

    await expect(this.page.getByRole('heading', { name: 'Document Received', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'KYC verification carried out by', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Institutional details', exact: true })).toBeVisible();
}

async TC_12_VerifyCertifiedCopiesCanBeSetToYes(data) {
    await this.navigateToOthersDetails(data);
    await this.certifiedCopiesYes.click();
    await expect(this.certifiedCopiesYes).toBeChecked();
}

async TC_13_VerifyCertifiedCopiesCanBeSetToNo(data) {
    await this.navigateToOthersDetails(data);
    await this.certifiedCopiesNo.click();
    await expect(this.certifiedCopiesNo).toBeChecked();
}

async TC_14_VerifyCertifiedCopiesIsMandatory(data) {
    await this.navigateToOthersDetails(data);
    const label = this.page.getByText('Certified Copies *', { exact: true });
    await expect(label).toBeVisible();
}

async TC_15_VerifyEquivalentEDocCanBeSetToYes(data) {
    await this.navigateToOthersDetails(data);
    await this.equivalentEDocYes.click();
    await expect(this.equivalentEDocYes).toBeChecked();
}

async TC_16_VerifyEquivalentEDocCanBeSetToNo(data) {
    await this.navigateToOthersDetails(data);
    await this.equivalentEDocNo.click();
    await expect(this.equivalentEDocNo).toBeChecked();
}

async TC_17_VerifyEquivalentEDocIsMandatory(data) {
    await this.navigateToOthersDetails(data);
    const label = this.page.getByText('Equivalent Electronic Document (E-Doc) *', { exact: true });
    await expect(label).toBeVisible();
}

async TC_18_VerifyVerificationFromDigilockerCanBeSetToYes(data) {
    await this.navigateToOthersDetails(data);
    await this.verificationFromDigilockerYes.click();
    await expect(this.verificationFromDigilockerYes).toBeChecked();
}

async TC_19_VerifyVerificationFromDigilockerCanBeSetToNo(data) {
    await this.navigateToOthersDetails(data);
    await this.verificationFromDigilockerNo.click();
    await expect(this.verificationFromDigilockerNo).toBeChecked();
}

async TC_20_VerifyVerificationFromDigilockerIsMandatory(data) {
    await this.navigateToOthersDetails(data);
    const label = this.page.getByText('Verification from Digilocker *', { exact: true });
    await expect(label).toBeVisible();
}



async TC_21_VerifyKYCVerificationDateFromCalendar(data) {
    await this.navigateToOthersDetails(data);
    const date = String(data.kycVerificationDate ?? '').trim();
    await this.page.getByRole('button', { name: 'Choose date', exact: true }).click();
    await this.page.screenshot({ path: 'AllScreenshots_OthersDetails/TC_CODALE_21.png' });
    await this.page.getByRole('button', { name: 'calendar view is open, switch' }).click();
    await this.page.getByRole('radio', { name: '2005' }).click();
    await expect(this.kycVerificationDate).toHaveValue(date);
}

async TC_22_VerifyKYCVerificationDateSelection(data) {
    await this.navigateToOthersDetails(data);
    const date = String(data.kycVerificationDate ?? '').trim();

    await this.kycVerificationDate.fill(date);

    await expect(this.kycVerificationDate).toHaveValue(date);
}

async TC_23_VerifyKYCVerificationDateAcceptsLeapYearDate(data) {
    await this.navigateToOthersDetails(data);
    const date = String(data.kycVerificationDate ?? '').trim();
    await this.kycVerificationDate.fill(date);
    await expect(this.kycVerificationDate).toHaveValue(date);
}

async TC_24_VerifyKYCVerificationDateHasNoDefaultValue(data) {
    await this.navigateToOthersDetails(data);
    await expect(this.kycVerificationDate).toHaveValue('');
}

async TC_25_VerifyKYCVerificationDateAcceptsCurrentDate(data) {
    await this.navigateToOthersDetails(data);

    const today = new Date();
    const date = String(today.getDate()).padStart(2, '0') + '/' +
        String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();

    await this.kycVerificationDate.fill(date);
    await expect(this.kycVerificationDate).toHaveValue(date);
}

async TC_26_VerifyKYCVerificationDateAcceptsPastDate(data) {
    await this.navigateToOthersDetails(data);
    const date = String(data.kycVerificationDate ?? '').trim();
    await this.kycVerificationDate.fill(date);
    await expect(this.kycVerificationDate).toHaveValue(date);
}

async TC_27_VerifyKYCVerificationDateDoesNotAcceptFutureDate(data) {
    await this.navigateToOthersDetails(data);
    const date = String(data.kycVerificationDate ?? '').trim();

    await this.kycVerificationDate.fill(date);
    await this.employeeName.click();

    await expect(this.kycVerificationDate).not.toHaveValue(date);
    await expect(this.kycVerificationDateError).toBeVisible();
}

async TC_28_VerifyKYCVerificationDateAcceptsSeparator(data) {
    await this.navigateToOthersDetails(data);
    const date = String(data.kycVerificationDate ?? '').trim();

    await this.kycVerificationDate.fill(date);

    await expect(this.kycVerificationDate).toHaveValue(date);
}

async TC_29_VerifyKYCVerificationDateAutoSanitizes(data) {
    await this.navigateToOthersDetails(data);
    const date = String(data.kycVerificationDate ?? '').trim();

    await this.kycVerificationDate.fill(date);
    await this.kycVerificationDate.press('Tab');

    await expect(this.kycVerificationDate).toHaveValue(expectedDate);
}

async TC_30_VerifyKYCVerificationDateRejectsInvalidDay(data) {
    await this.navigateToOthersDetails(data);
    const date = String(data.kycVerificationDate ?? '').trim();

    await this.kycVerificationDate.fill(date);
    await this.kycVerificationDate.press('Tab');
    await this.employeeName.click();

    await expect(this.kycVerificationDate).not.toHaveValue(date);

}

async TC_31_VerifyKYCVerificationDateThrowsErrorIfLeftBlank(data) {
await this.navigateToOthersDetails(data);

await this.declarationCheckbox.click();
await this.saveAndNextButton.click();

await expect(this.kycVerificationDateError).toBeVisible();


}

async TC_32_VerifyKYCVerificationDateRestrictsAlphanumericAndSpecialCharacters(data) {
await this.navigateToOthersDetails(data);
await this.declarationCheckbox.click();
await this.saveAndNextButton.click();
await expect(this.kycVerificationDateError).toBeVisible();
}

async TC_33_VerifyKYCVerificationDateFormatsSingleDigitDayOrMonth(data) {

await this.navigateToOthersDetails(data);
const date = String(data.kycVerificationDate ?? '').trim();
await this.kycVerificationDate.fill(date);
await this.employeeName.click();
const formattedDate = await this.kycVerificationDate.inputValue();
expect(formattedDate).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);

}

async TC_34_VerifyKYCVerificationDateTrimsLeadingAndTrailingSpaces(data) {
await this.navigateToOthersDetails(data);

const date = String(data.kycVerificationDate ?? '');
const trimmedDate = date.trim();

await this.kycVerificationDate.fill(date);
await this.employeeName.click();

await expect(this.kycVerificationDate).toHaveValue(trimmedDate);

}

async TC_35_VerifyKYCVerificationDateConvertsDDMMYYYYToDDMMYYYY(data) {
await this.navigateToOthersDetails(data);

const date = String(data.kycVerificationDate ?? '').trim();

await this.kycVerificationDate.fill(date);
await this.employeeName.click();

const formattedDate = await this.kycVerificationDate.inputValue();
expect(formattedDate).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);


}

async TC_36_VerifyEmployeeNameAcceptsValidAlphabeticInput(data) {

await this.navigateToOthersDetails(data);

const employeeName = String(data.employeeName ?? '').trim();

await this.employeeName.fill(employeeName);

await expect(this.employeeName).toHaveValue(employeeName);


}


async TC_37_VerifyEmployeeNameAcceptsMax99Characters(data) {
    await this.navigateToOthersDetails(data);

    const employeeName = String(data.employeeName ?? '').trim();

    await this.employeeName.fill(employeeName);

    await expect(this.employeeName).toHaveValue(employeeName);
    expect(await this.employeeName.inputValue()).toHaveLength(99);
}

async TC_38_VerifyEmployeeNameAcceptsMin1Character(data) {
await this.navigateToOthersDetails(data);


const employeeName = String(data.employeeName ?? '').trim();

await this.employeeName.fill(employeeName);

await expect(this.employeeName).toHaveValue(employeeName);
expect((await this.employeeName.inputValue()).length).toBeGreaterThanOrEqual(1);


}

async TC_39_VerifyEmployeeNameAcceptsUppercaseAndLowercaseLetters(data) {
await this.navigateToOthersDetails(data);

const employeeName = String(data.employeeName ?? '').trim();

await this.employeeName.fill(employeeName);

await expect(this.employeeName).toHaveValue(employeeName);

}

async TC_40_VerifyEmployeeNameTrimsLeadingAndTrailingSpaces(data) {
    await this.navigateToOthersDetails(data);

    const employeeName = String(data.employeeName ?? '');

    await this.employeeName.fill(employeeName);
    await this.employeeName.blur();

    await expect(
        this.page.getByText('Employee Name allows only letters, spaces, and single apostrophes', { exact: true })
    ).toBeVisible();
}

async TC_41_VerifyEmployeeNameRejectsNumericCharacters(data) {
    await this.navigateToOthersDetails(data);

    const employeeName = String(data.employeeName ?? '').trim();

    await this.employeeName.fill(employeeName);
    await this.employeeName.blur();

    await expect(
        this.page.getByText('Please enter Employee Name', { exact: true })
    ).toBeVisible();
}


async TC_42_VerifyEmployeeNameRejectsSpecialCharactersExceptSingleApostrophe(data) {
    await this.navigateToOthersDetails(data);

    const employeeName = String(data.employeeName ?? '').trim();

    await this.employeeName.fill(employeeName);

    await expect(this.employeeName).not.toHaveValue(employeeName);
}

async TC_43_VerifyEmployeeCodeAcceptsValidAlphanumericInput(data) {
    await this.navigateToOthersDetails(data);

    const employeeCode = String(data.employeeCode ?? '').trim();

    await this.employeeCode.fill(employeeCode);

    await expect(this.employeeCode).toHaveValue(employeeCode);
}

async TC_44_VerifyEmployeeCodeAcceptsExactly50AlphanumericCharacters(data) {
    await this.navigateToOthersDetails(data);

    const employeeCode = String(data.employeeCode ?? '').trim();

    await this.employeeCode.fill(employeeCode);

    await expect(this.employeeCode).toHaveValue(employeeCode);
    expect(await this.employeeCode.inputValue()).toHaveLength(50);
}

async TC_45_VerifyEmployeeCodeAcceptsMinimum1Character(data) {
    await this.navigateToOthersDetails(data);

    const employeeCode = String(data.employeeCode ?? '').trim();

    await this.employeeCode.fill(employeeCode);

    await expect(this.employeeCode).toHaveValue(employeeCode);
}


async TC_46_VerifyEmployeeCodeTrimsLeadingAndTrailingSpaces(data) {
    await this.navigateToOthersDetails(data);

    const employeeCode = String(data.employeeCode ?? '');
    const expectedValue = employeeCode.trim();

    await this.employeeCode.fill(employeeCode);
    await this.employeeCode.blur();

    await expect(this.employeeCode).toHaveValue(expectedValue);
}


async TC_47_VerifyEmployeeCodeRejectsSpacesBetweenCharacters(data) {
    await this.navigateToOthersDetails(data);

    const employeeCode = String(data.employeeCode ?? '').trim();

    await this.employeeCode.fill(employeeCode);
    await this.employeeCode.blur();

    await expect(this.employeeCode).not.toHaveValue(employeeCode);
}


async TC_48_VerifyEmployeeCodeDoesNotAcceptEmptyInput(data) {
    await this.navigateToOthersDetails(data);

    await this.employeeCode.fill(String(data.employeeCode ?? '').trim());
    await this.employeeName.click();
    await this.declarationCheckbox.click();
    await this.saveAndNextButton.click();
    await expect(this.employeeCodeError).toBeVisible();
}


async TC_49_VerifyEmployeeCodeRejectsOnlySpecialCharacters(data) {
    await this.navigateToOthersDetails(data);

    const employeeCode = String(data.employeeCode ?? '').trim();

    await this.employeeCode.fill(employeeCode);
    await this.employeeCode.blur();

    await expect(this.employeeCodeError).toBeVisible();
}


async TC_50_VerifyEmployeeDesignationAcceptsValidAlphanumericInput(data) {
    await this.navigateToOthersDetails(data);

    const employeeDesignation = String(data.employeeDesignation ?? '').trim();

    await this.employeeDesignation.fill(employeeDesignation);

    await expect(this.employeeDesignation).toHaveValue(employeeDesignation);

}

async TC_51_VerifyEmployeeDesignationAcceptsExactly50AlphanumericCharacters(data) {
    await this.navigateToOthersDetails(data);

    const employeeDesignation = String(data.employeeDesignation ?? '').trim();

    await this.employeeDesignation.fill(employeeDesignation);

    await expect(this.employeeDesignation).toHaveValue(employeeDesignation);
}

async TC_52_VerifyEmployeeDesignationAcceptsMinimum1Character(data) {
    await this.navigateToOthersDetails(data);

    const employeeDesignation = String(data.employeeDesignation ?? '').trim();

    await this.employeeDesignation.fill(employeeDesignation);

    await expect(this.employeeDesignation).toHaveValue(employeeDesignation);
}

async TC_53_VerifyEmployeeDesignationTrimsLeadingAndTrailingSpaces(data) {
    await this.navigateToOthersDetails(data);

    const employeeDesignation = String(data.employeeDesignation ?? '');
    const expectedValue = employeeDesignation.trim();

    await this.employeeDesignation.fill(employeeDesignation);
    await this.employeeDesignation.blur();

    await expect(this.employeeDesignation).toHaveValue(expectedValue);
}

async TC_54_VerifyEmployeeDesignationRejectsSpacesBetweenCharacters(data) {
    await this.navigateToOthersDetails(data);

    const employeeDesignation = String(data.employeeDesignation ?? '').trim();

    await this.employeeDesignation.fill(employeeDesignation);
    await this.employeeDesignation.blur();

    await expect(this.employeeDesignation).not.toHaveValue(employeeDesignation);
}

async TC_55_VerifyEmployeeDesignationDoesNotAcceptEmptyInput(data) {
    await this.navigateToOthersDetails(data);

    await this.employeeDesignation.fill(String(data.employeeDesignation ?? '').trim());
    await this.employeeName.click();
    await this.declarationCheckbox.click();
    await this.saveAndNextButton.click();
    await expect(this.employeeDesignationError).toBeVisible();
}

async TC_56_VerifyEmployeeDesignationRejectsOnlySpecialCharacters(data) {
    await this.navigateToOthersDetails(data);
    const employeeDesignation = String(data.employeeDesignation ?? '').trim();
    await this.employeeDesignation.fill(employeeDesignation);
    await this.employeeDesignation.blur();
    await expect(this.employeeDesignation).not.toHaveValue(employeeDesignation);
     await this.declarationCheckbox.click();
    await this.saveAndNextButton.click();
    await expect(this.employeeDesignationError).toBeVisible();
}

async TC_57_VerifyEmployeeBranchAcceptsValidAlphanumericInput(data) {
    await this.navigateToOthersDetails(data);
    const employeeBranch = String(data.employeeBranch ?? '').trim();
    await this.employeeBranch.fill(employeeBranch);
    await expect(this.employeeBranch).toHaveValue(employeeBranch);
}

async TC_58_VerifyEmployeeBranchAcceptsExactly50AlphanumericCharacters(data) {
    await this.navigateToOthersDetails(data);
    const employeeBranch = String(data.employeeBranch ?? '').trim();
    await this.employeeBranch.fill(employeeBranch);
    await expect(this.employeeBranch).toHaveValue(employeeBranch);
}

async TC_59_VerifyEmployeeBranchAcceptsMinimum1Character(data) {
    await this.navigateToOthersDetails(data);
    const employeeBranch = String(data.employeeBranch ?? '').trim();
    await this.employeeBranch.fill(employeeBranch);
    await expect(this.employeeBranch).toHaveValue(employeeBranch);
}

async TC_60_VerifyEmployeeBranchTrimsLeadingAndTrailingSpaces(data) {
    await this.navigateToOthersDetails(data);
    const employeeBranch = String(data.employeeBranch ?? '');
    await this.employeeBranch.fill(employeeBranch);
    await this.employeeBranch.blur();
    await expect(this.employeeBranch).toHaveValue(employeeBranch.trim());
}

async TC_61_VerifyEmployeeBranchRejectsSpacesBetweenCharacters(data) {
    await this.navigateToOthersDetails(data);
    const employeeBranch = String(data.employeeBranch ?? '').trim();
    await this.employeeBranch.fill(employeeBranch);
    await expect(this.employeeBranch).not.toHaveValue(employeeBranch);
}

async TC_62_VerifyEmployeeBranchDoesNotAcceptEmptyInput(data) {
    await this.navigateToOthersDetails(data);
    await this.employeeBranch.fill('');
    await this.employeeName.click();
    await this.declarationCheckbox.click();
    await this.saveAndNextButton.click();
    await expect(this.employeeBranchError).toBeVisible();
}

async TC_63_VerifyEmployeeBranchRejectsOnlySpecialCharacters(data) {
    await this.navigateToOthersDetails(data);
    const employeeBranch = String(data.employeeBranch ?? '').trim();
    await this.employeeBranch.fill(employeeBranch);
    await expect(this.employeeBranch).not.toHaveValue(employeeBranch);
}

async TC_64_VerifyEmployeeCKYCIdAcceptsValidNumericInput(data) {
    await this.navigateToOthersDetails(data);
    const employeeCKYCId = String(data.employeeCKYCId ?? '').trim();
    await this.employeeCKYCId.fill(employeeCKYCId);
    await expect(this.employeeCKYCId).toHaveValue(employeeCKYCId);
}

async TC_65_VerifyEmployeeCKYCIdAcceptsExactly14NumericCharacters(data) {
    await this.navigateToOthersDetails(data);
    const employeeCKYCId = String(data.employeeCKYCId ?? '').trim();
    await this.employeeCKYCId.fill(employeeCKYCId);
    await expect(this.employeeCKYCId).toHaveValue(employeeCKYCId);
}

async TC_66_VerifyEmployeeCKYCIdDoesNotAcceptLessThan14Characters(data) {
    await this.navigateToOthersDetails(data);
    const employeeCKYCId = String(data.employeeCKYCId ?? '').trim();
    await this.employeeCKYCId.fill(employeeCKYCId);
    await this.employeeCKYCId.blur();
    await expect(this.employeeCKYCIdError).toBeVisible();

}

async TC_67_VerifyEmployeeCKYCIdTrimsLeadingAndTrailingSpaces(data) {
    await this.navigateToOthersDetails(data);
    const employeeCKYCId = String(data.employeeCKYCId ?? '');
    await this.employeeCKYCId.fill(employeeCKYCId);
    await this.employeeCKYCId.blur();
    await expect(this.employeeCKYCIdError).toBeVisible();
}

async TC_68_VerifyEmployeeCKYCIdRejectsSpacesBetween14Digits(data) {
    await this.navigateToOthersDetails(data);
    const employeeCKYCId = String(data.employeeCKYCId ?? '');
    await this.employeeCKYCId.fill(employeeCKYCId);
    await this.employeeCKYCId.blur();
    await expect(this.employeeCKYCId).toHaveValue(employeeCKYCId.replace(/\s/g, ''));
    await expect(this.employeeCKYCIdError).toBeVisible();
}

async TC_69_VerifyEmployeeCKYCIdDoesNotAcceptEmptyInput(data) {
    await this.navigateToOthersDetails(data);
    await this.employeeCKYCId.fill('');
    await this.employeeName.click();
    await this.declarationCheckbox.click();
    await this.saveAndNextButton.click();
    await expect(this.employeeCKYCIdError1).toBeVisible();
}

async TC_70_VerifyEmployeeCKYCIdRejectsAlphanumericAndSpecialCharacters(data) {
    await this.navigateToOthersDetails(data);
    const employeeCKYCId = String(data.employeeCKYCId ?? '').trim();
    await this.employeeCKYCId.fill(employeeCKYCId);
    await this.employeeCKYCId.blur();
    await expect(this.employeeCKYCIdError).toBeVisible();
}

async TC_71_VerifyInstitutionalDetailsFields(data) {
    await this.navigateToOthersDetails(data);

    await expect(this.institutionName).toBeVisible();
    await expect(this.institutionCode).toBeVisible();
}

async TC_72_VerifyInstitutionNameReflectsValidAlphabeticalData(data) {
    await this.navigateToOthersDetails(data);
    const institutionName = String(data.institutionName ?? '').trim();

    await expect(this.institutionName).toHaveValue(institutionName);
}

async TC_73_VerifyInstitutionNameMax99Characters(data) {
    await this.navigateToOthersDetails(data);
    const institutionName = String(data.institutionName ?? '').trim();

    await expect(this.institutionName).toHaveValue(institutionName);
    expect(institutionName.length).toBeLessThanOrEqual(99);
}

async TC_74_VerifyInstitutionNameReflectsSpacesBetweenCharacters(data) {
    await this.navigateToOthersDetails(data);
    const institutionName = String(data.institutionName ?? '').trim();

    await expect(this.institutionName).toHaveValue(institutionName);
}

async TC_75_VerifyInstitutionNameReflectsMixedCase(data) {
    await this.navigateToOthersDetails(data);
    const institutionName = String(data.institutionName ?? '').trim();

    await expect(this.institutionName).toHaveValue(institutionName);
}

async TC_76_VerifyInstitutionNameReflectsAlphanumericData(data) {
    await this.navigateToOthersDetails(data);
    const institutionName = String(data.institutionName ?? '').trim();

    await expect(this.institutionName).toHaveValue(institutionName);
}

async TC_77_VerifyInstitutionCodeFetchesBasedOnInstitutionName(data) {
    await this.navigateToOthersDetails(data);
    const institutionCode = String(data.institutionCode ?? '').trim();

    await expect(this.institutionCode).toHaveValue(institutionCode);
}

async TC_78_VerifyInstitutionCodeFetches50CharacterAlphanumericData(data) {
    await this.navigateToOthersDetails(data);
    const institutionCode = String(data.institutionCode ?? '').trim();

    await expect(this.institutionCode).toHaveValue(institutionCode);
    expect(institutionCode.length).toBeLessThanOrEqual(50);
    expect(institutionCode).toMatch(/^[a-zA-Z0-9]+$/);
}

async TC_79_VerifyInstitutionCodeFetchesMinimum1Character(data) {
    await this.navigateToOthersDetails(data);
    const institutionCode = String(data.institutionCode ?? '').trim();

    await expect(this.institutionCode).toHaveValue(institutionCode);
    expect(institutionCode.length).toBeGreaterThanOrEqual(1);
}

async TC_80_VerifyInstitutionFieldsAreNonEditable(data) {
    await this.navigateToOthersDetails(data);

    await expect(this.institutionName).toBeDisabled();
    await expect(this.institutionCode).toBeDisabled();
}

async TC_82_VerifyInstitutionCodeDoesNotShowErrorForNumericData(data) {
    await this.navigateToOthersDetails(data);
    const institutionCode = String(data.institutionCode ?? '').trim();

    await expect(this.institutionCode).toHaveValue(institutionCode);
    await expect(this.institutionCodeError).not.toBeVisible();
}

async TC_CODALE_83_VerifySaveAndNextFunctionalityForPrefetchedOtherDetails(data) {

    await this.navigateToOthersDetails(data);

    await expect(this.otherDetailsHeading).toBeVisible();

    await expect(this.remarks).toHaveValue(String(data.remarks ?? '').trim());
    await expect(this.kycVerificationDate).toHaveValue(String(data.kycVerificationDate ?? '').trim());
    await expect(this.employeeCode).toHaveValue(String(data.employeeCode ?? '').trim());
    await expect(this.employeeDesignation).toHaveValue(String(data.employeeDesignation ?? '').trim());
    await expect(this.employeeBranch).toHaveValue(String(data.employeeBranch ?? '').trim());
    await expect(this.employeeCKYCId).toHaveValue(String(data.employeeCKYCId ?? '').trim());
    await expect(this.institutionName).toHaveValue(String(data.institutionName ?? '').trim());
    await expect(this.institutionCode).toHaveValue(String(data.institutionCode ?? '').trim());

}
async TC_CODALE_84_VerifySaveAndNextFunctionalityForModifiedOtherDetails(data) {

    await this.navigateToOthersDetails(data);

    const remarks = String(data.remarks ?? '').trim();
    const modifyRemark = String(data.modifyRemark ?? '').trim();

    // Validate existing prefetched Remarks from Excel
    await expect(this.remarks).toHaveValue(remarks);

    // Screenshot before modification
    await this.page.screenshot({
        path: 'AllScreenshots_OthersDetails/TC_CODALE_84_BeforeModification.png',
        fullPage: true
    });

    // Modify Remarks using modifyRemark from Excel
    await this.remarks.fill(modifyRemark);

    // Validate modified Remarks from Excel
    await expect(this.remarks).toHaveValue(modifyRemark);

    // Screenshot after modification
    await this.page.screenshot({
        path: 'AllScreenshots_OthersDetails/TC_CODALE_84_AfterModification.png',
        fullPage: true
    });

    // Click Save And Next
    await this.saveAndNextButton.click();

    // Verify navigation to next section
    await expect(this.page.locator('h5:has-text("Entity Details")')).toBeVisible();
}

async TC_CODALE_85_VerifyREUserCanSaveAndResumeOtherDetails(data) {

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();
    await this.page.getByText('Create-Draft').click();
    await this.page.getByRole('radio', { name: 'Legal Entity' }).check();

    await this.page.getByRole('textbox', { name: 'Enter Search Key' }).fill(data.SearchKey);
    await this.page.locator('button').filter({ hasText: 'Search' }).first().click();
    await this.page.getByText(data.SearchKey, { exact: true }).click();

    // Navigate to Other Details section
    for (let i = 0; i < 5; i++) {
        await this.page.waitForTimeout(2000);
        await this.saveAndNextButton.click();
    }

    // Verify saved Remarks is retained
    await expect(this.remarks).toHaveValue(String(data.remarks).trim());

    // Verify user can resume the process
    await this.saveAndNextButton.click();


}





}
module.exports = {OtherDetails};
