import { expect } from '@playwright/test';

export class ContactDetails {

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

        // ================= CONTACT DETAILS =================

   this.entityDetailsHeading = page.getByRole('heading', {
    name: 'Legal Entity Details',
    exact: true
});

this.poiHeading = page.getByRole("heading", {
    name: "Proof Of Identity and Address Details"
});



        this.contactDetailsHeading = page.getByRole('heading', {
            name: 'Contact Details',
            exact: true
        });

        this.primaryEmailAddress = page.getByPlaceholder('Primary email');

this.primaryMobileNumber = page.getByPlaceholder('Mobile number');

this.primaryCountryCode = page.getByRole('combobox', {
    name: 'Country Code'
}).first();

this.secondaryCountryCode = page.getByRole('combobox', {
    name: 'Country Code'
}).nth(1);

this.secondaryMobileNumber = page.getByPlaceholder('Secondary mobile');

this.secondaryEmailAddress = page.getByPlaceholder('Secondary email');

this.telephoneOfficial = page.getByRole('textbox', {
    name: 'Telephone (official)'
});

this.fax = page.getByRole('textbox', {
    name: 'Fax'
});

this.primaryCountryCodeError = this.page.getByText('Please select Primary Country Code',{ exact: true });
this.primaryMobileNumberError = this.page.getByText(
    'Mobile number must have between 8 and 15 digits for the selected country',
    { exact: true }
);

this.primaryMobileNumberError1 = this.page.getByText(
    'Enter a valid 10-digit Indian mobile number starting from 6-9',
    { exact: true }
);

this.primaryEmailAddressError = this.page.getByText(
    'Email allows only alphanumeric characters and `~@#$%^&*()_+-=',
    { exact: true }
);

this.primaryEmailAddressError1 = this.page.getByText(
    "Email must include '@'", { exact: true }
);

this.primaryEmailAddressError2 = this.page.getByText(
    "Email must contain exactly one '@'", { exact: true }
);


this.primaryEmailAddressError3 = this.page.getByText(
    "Email domain must contain '.'", { exact: true }
);

this.primaryEmailAddressError4 = this.page.getByText(
    "Email must not contain consecutive dots", { exact: true }
);

this.primaryEmailAddressError5 = this.page.getByText(
    "Please enter Primary Email ID", { exact: true }
);



this.secondaryMobileNumberError = this.page.getByText(
    'Mobile number must have between 8 and 15 digits for the selected country',
    { exact: true }
);

this.primaryMobileNumberMandatoryError = this.page.getByText(
    'Please enter Primary Mobile Number',
    { exact: true }
);


this.secondaryCountryCodeError = this.page.getByText(
    'Please select Secondary Country Code',
    { exact: true }
);

this.nextButton = page.getByRole('button', {
    name: 'Save And Next',
    exact: true
});

this.nextPageHeading = page.getByRole('heading', {
    name: 'Related Party Details',
    exact: true
});



        // ================= ENTITY DETAILS =================

        this.addressDetailsHeading = page.getByRole('heading', {
            name: 'Address Details',
            exact: true
        });

        // ================= SAVE AND NEXT =================

        this.saveAndNextButton = page.getByRole('button', {
            name: 'Save And Next',
            exact: true
        });
    }


    async navigateToContactDetails(data) {

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
}

   async TC_02_VerifyContactDetailsFieldsAreVisibleEnabledAndClickable(data) {

    await this.navigateToContactDetails(data);

    // 1. Email Address
    await expect(this.primaryEmailAddress).toBeVisible();
    await expect(this.primaryEmailAddress).toBeEnabled();
    await this.primaryEmailAddress.click();

    // 2. Country Code
    await expect(this.primaryCountryCode).toBeVisible();
    await expect(this.primaryCountryCode).toBeEnabled();

    // 3. Mobile Number
    await expect(this.primaryMobileNumber).toBeVisible();
    await expect(this.primaryMobileNumber).toBeEnabled();
    await this.primaryMobileNumber.click();

    // 4. Telephone (Official)
    await expect(this.telephoneOfficial).toBeVisible();
    await expect(this.telephoneOfficial).toBeEnabled();
    await this.telephoneOfficial.click();

    // 5. FAX
    await expect(this.fax).toBeVisible();
    await expect(this.fax).toBeEnabled();
    await this.fax.click();
}

async TC_03_VerifyCountryCodeAcceptsMaximum5Digits(data) {

    await this.navigateToContactDetails(data);

    // Open Country Code dropdown
    await this.primaryCountryCode.click();

    const options = this.page.getByRole('option');
    const count = await options.count();

    let maxOption = null;

    for (let i = 0; i < count; i++) {

        const option = options.nth(i);
        const text = (await option.textContent()).trim();

        // Extract digits from country code
        const digits = text.match(/\d+/)?.[0] || '';

        if (digits.length === 5) {
            maxOption = option;
            break;
        }
    }

    // Verify 5 digit country code is available
    expect(maxOption).not.toBeNull();

    // Select 5 digit country code
    await maxOption.click();

    // Verify selected country code
    await expect(this.primaryCountryCode).toBeVisible();
}

async TC_04_VerifyValidCountryCodeIsAccepted(data) {

    await this.navigateToContactDetails(data);

    await expect(this.primaryCountryCode).toBeVisible();
    await expect(this.primaryCountryCode).toBeEnabled();

    // Open Country Code dropdown
    await this.primaryCountryCode.click();

    // Select valid country code
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected country code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );
}



async TC_05_VerifyDefaultCountryCodeIsSelectedAsPlus91(data) {

    await this.navigateToContactDetails(data);

    // Verify Country Code field is visible
    await expect(this.primaryCountryCode).toBeVisible();

    // Verify default country code is +91
    await expect(this.primaryCountryCode).toContainText('India (+91)');
}

async TC_06_VerifySelectingCountryCodeFromDropdownWorksCorrectly(data) {

    await this.navigateToContactDetails(data);

    // Verify Country Code field is visible and enabled
    await expect(this.primaryCountryCode).toBeVisible();
    await expect(this.primaryCountryCode).toBeEnabled();

    // Open Country Code dropdown
    await this.primaryCountryCode.click();

    // Select country code from dropdown
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected country code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );
}

async TC_07_VerifyCountryCodeDropdownSearchFilterWorksCorrectly(data) {

    await this.navigateToContactDetails(data);

    // Verify Country Code field is visible and enabled
    await expect(this.primaryCountryCode).toBeVisible();
    await expect(this.primaryCountryCode).toBeEnabled();

    // Open Country Code dropdown
    await this.primaryCountryCode.click();

    // Select country code from dropdown
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected country code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );
}

async TC_08_VerifyCountryCodeMandatoryWhenMobileNumberEntered(data) {

    await this.navigateToContactDetails(data);

    // Enter Mobile Number
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );
    
     // Open Country Code dropdown
    await this.primaryCountryCode.click();

    // Select Country Code
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected Country Code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    // Verify Country Code mandatory error
    await expect(this.primaryCountryCodeError).toBeVisible();

    await expect(this.primaryCountryCodeError).toHaveText(
        'Please select Primary Country Code'
    );

   
}

async TC_09_VerifyCountryCode02NonMandatoryWhenMobileNumber02NotEntered(data) {

    await this.navigateToContactDetails(data);

    // Enter Primary Mobile Number
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    // Open Primary Country Code dropdown
    await this.primaryCountryCode.click();

    // Select Primary Country Code
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected Primary Country Code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    // Enter Primary Email Address
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1).trim()
    );

    // Do not enter Secondary Country Code
    // Do not enter Secondary Mobile Number

    // Click Next
    await this.nextButton.click();

    // Verify user is able to proceed to next page
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_10_VerifyValid10DigitIndianMobileNumberAccepted(data) {

    await this.navigateToContactDetails(data);

    // Click on Country Code dropdown
    await this.primaryCountryCode.click();

    // Select India (+91)
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected Country Code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    // Enter valid 10-digit Indian Mobile Number
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    // Verify Mobile Number is accepted
    await expect(this.primaryMobileNumber).toHaveValue(
        String(data.mobileNumber1).trim()
    );

    // Verify Mobile Number validation error is not displayed
    await expect(this.primaryMobileNumberError).not.toBeVisible();
}

async TC_11_VerifyMobileNumberRejects10DigitsWithCountryCode(data) {

    await this.navigateToContactDetails(data);

    // Open Country Code dropdown
    await this.primaryCountryCode.click();

    // Select India (+91)
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected Country Code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    // Enter 10-digit mobile number along with +91
    await this.primaryMobileNumber.fill( String(data.mobileNumber1).trim()
    );

    // Verify Mobile Number field does not accept +91
    await expect(this.primaryMobileNumber).not.toHaveValue(
        '+91' + String(data.mobileNumber1).trim()
    );
}

async TC_12_VerifyMobileNumberDoesNotAcceptSpaces(data) {

    await this.navigateToContactDetails(data);

    // Open Country Code dropdown
    await this.primaryCountryCode.click();

    // Select India (+91)
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected Country Code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    // Enter Mobile Number with space in between
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    // Verify Mobile Number field does not accept the space
    await expect(this.primaryMobileNumber).not.toHaveValue(
        String(data.mobileNumber1).trim()
    );
}

async TC_13_VerifyMobileNumberAutoSanitizesSpaces(data) {

    await this.navigateToContactDetails(data);

    // Select Primary Country Code from Excel
    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Take Mobile Number exactly as present in Excel
    const mobileNumber = String(data.mobileNumber1).trim();

    // Enter Mobile Number with space from Excel
    await this.primaryMobileNumber.fill(mobileNumber);

    
    await expect(this.primaryMobileNumber).not.toHaveValue(
        String(data.mobileNumber1).trim())
}

async TC_14_VerifyMobileNumberMaximum10DigitsForIndianNationality(data) {

    await this.navigateToContactDetails(data);

    // Open Country Code dropdown
    await this.primaryCountryCode.click();

    // Select India (+91)
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected Country Code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    // Enter 11-digit Mobile Number from Excel
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    // Verify Mobile Number field accepts maximum 10 digits only
    await expect(this.primaryMobileNumber).toHaveValue(
        String(data.mobileNumber1).trim().substring(0, 10)
    );
}

async TC_15_VerifyMobileNumberDoesNotAcceptNonNumericInput(data) {

    await this.navigateToContactDetails(data);

    // Open Country Code dropdown
    await this.primaryCountryCode.click();

    // Select India (+91)
    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Verify selected Country Code
    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    // Enter non-numeric Mobile Number from Excel
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    // Verify Mobile Number field does not accept non-numeric input
    await expect(this.primaryMobileNumber).not.toHaveValue(
        String(data.mobileNumber1).trim()
    );
}

async TC_16_VerifyExistingMobileNumbersAccepted(data) {

    await this.navigateToContactDetails(data);

    // Select Primary Country Code (+91)
    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Enter Primary Mobile Number
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    // Enter Primary Email Address
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1).trim()
    );

    // Select Secondary Country Code (+91)
    await this.secondaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Enter Secondary Mobile Number
    await this.secondaryMobileNumber.fill(
        String(data.mobileNumber2).trim()
    );

    // Verify Primary Mobile Number is accepted
    await expect(this.primaryMobileNumber).toHaveValue(
        String(data.mobileNumber1).trim()
    );

    // Verify Secondary Mobile Number is accepted
    await expect(this.secondaryMobileNumber).toHaveValue(
        String(data.mobileNumber2).trim()
    );

    // Verify no Mobile Number validation errors
    await expect(this.primaryMobileNumberError).not.toBeVisible();
}

async TC_17_VerifyPrimaryMobileNumberMandatory(data) {

    await this.navigateToContactDetails(data);

    // Select Primary Country Code
    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Enter Primary Email Address
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1).trim()
    );

    // Leave Primary Mobile Number empty

    // Click Save And Next
    await this.nextButton.click();

    // Verify Mobile Number mandatory validation
    await expect(this.primaryMobileNumberMandatoryError).toBeVisible();
}

async TC_18_VerifySecondaryMobileNumberNonMandatory(data) {

    await this.navigateToContactDetails(data);

    // Select Primary Country Code
    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Enter Primary Mobile Number
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    // Enter Primary Email Address
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1).trim()
    );

    // Leave Secondary Mobile Number empty
    // Leave Secondary Country Code empty

    // Click Save And Next
    await this.nextButton.click();

    // Verify user can proceed to Related Party Details
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_19_VerifyForeignMobileNumberMinimum8DigitsAccepted(data) {
    await this.navigateToContactDetails(data);

    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    await expect(this.primaryMobileNumber).toHaveValue(
        String(data.mobileNumber1).trim()
    );

    await expect(this.primaryMobileNumberError).not.toBeVisible();
}

async TC_20_VerifyForeignMobileNumberMaximumOf15DigitsAccepted(data) {
    await this.navigateToContactDetails(data);

    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    await expect(this.primaryMobileNumber).toHaveValue(
        String(data.mobileNumber1).trim()
    );

    await expect(this.primaryMobileNumberError).not.toBeVisible();
}

async TC_21_VerifyMobileNumberAcceptsOnly8To15DigitsWithoutCountryCode(data) {
    await this.navigateToContactDetails(data);

    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    await expect(this.primaryMobileNumber).toHaveValue(
        String(data.mobileNumber1).trim()
    );

    await expect(this.primaryMobileNumberError).not.toBeVisible();
}

async TC_22_VerifyMobileNumberDoesNotAcceptSpacesBetween8To15Digits(data) {
    await this.navigateToContactDetails(data);

    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    await expect(this.primaryCountryCode).toContainText(
        String(data.countryCode1).trim()
    );

    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1).trim()
    );

    await expect(this.primaryMobileNumber).not.toHaveValue(
        String(data.mobileNumber1).trim()
    );
}

async TC_23_VerifyMobileNumber8to15DigitAutoSanitizesSpaces(data) {

    await this.navigateToContactDetails(data);

    // Select Primary Country Code from Excel
    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode1).trim(),
        exact: true
    }).click();

    // Take Mobile Number exactly as present in Excel
    const mobileNumber = String(data.mobileNumber1).trim();

    // Enter Mobile Number with space from Excel
    await this.primaryMobileNumber.fill(mobileNumber);

    // Verify Mobile Number field removes spaces
    await expect(this.primaryMobileNumber).not.toHaveValue(
        String(data.mobileNumber1).trim()
    );
}

async TC_24_VerifySecondaryMobileNumberMaximum15DigitsForForeignNationality(data) {
    await this.navigateToContactDetails(data);

    await this.secondaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode2).trim(),
        exact: true
    }).click();

    await expect(this.secondaryCountryCode).toContainText(
        String(data.countryCode2).trim()
    );

    await this.secondaryMobileNumber.fill(
        String(data.mobileNumber2).trim()
    );

    await expect(this.secondaryMobileNumber).toHaveAttribute(
        'maxlength',
        '15'
    );
}


async TC_25_VerifySecondaryMobileNumberMinimum8DigitsForForeignNationality(data) {
    await this.navigateToContactDetails(data);

    await this.secondaryCountryCode.click();

    await this.page.getByRole('option', {
        name: String(data.countryCode2).trim(),
        exact: true
    }).click();

    await expect(this.secondaryCountryCode).toContainText(
        String(data.countryCode2).trim()
    );

    await this.secondaryMobileNumber.fill(
        String(data.mobileNumber2).trim()
    );

    await expect(this.primaryMobileNumberError).not.toBeVisible();
}

async TC_26_VerifySecondaryMobileNumberDoesNotAcceptNonNumericInput(data) {
    await this.navigateToContactDetails(data);

    await this.secondaryMobileNumber.fill(
        String(data.mobileNumber2).trim()
    );

    await expect(this.secondaryMobileNumber).not.toHaveValue(
        String(data.mobileNumber2).trim()
    );
}

async TC_27_VerifyPrimaryMobileNumberMandatoryForForeignNationality(data) {

    await this.navigateToContactDetails(data);

    // Select Foreign Country Code
    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {name: data.countryCode1 }).click();

    // Fill Primary Email
    await this.primaryEmailAddress.fill(data.emailAddress1);

    // Keep Mobile Number (01) blank
    await this.primaryMobileNumber.fill('');

    // Verify Mobile Number (01) mandatory validation
    await expect(this.primaryMobileNumberMandatoryError).toBeVisible();
}

async TC_28_VerifySecondaryMobileNumberNonMandatoryForForeignNationality(data) {

    await this.navigateToContactDetails(data);

    // Select Foreign Country Code
    await this.primaryCountryCode.click();

    await this.page.getByRole('option', {
        name: data.countryCode1
    }).click();

    // Fill mandatory Mobile Number (01)
    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1)
    );

    // Keep Mobile Number (02) blank
    await this.secondaryMobileNumber.fill('');

    // Click Save And Next
    await this.nextButton.click();

    // Verify user can navigate to next page
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_29_VerifyValidEmailIdFormatAccepted(data) {

    await this.navigateToContactDetails(data);

    // Enter valid Email ID
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next
    await this.nextButton.click();

    // Verify navigation to next page
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_30_VerifyEmailIdRejectsUnallowedSpecialCharacters(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID containing unallowed special character
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError).toBeVisible();
}

async TC_31_VerifyEmailIdRejectsOnlyNumericCharacters(data) {

    await this.navigateToContactDetails(data);

    // Enter only numeric characters in Email ID
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError1).toBeVisible();
}

async TC_32_VerifyEmailIdRejectsOnlyCharacters(data) {

    await this.navigateToContactDetails(data);

    // Enter only characters in Email ID
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError1).toBeVisible();
}

async TC_33_VerifyEmailIdRejectsOnlySpecialCharacters(data) {

    await this.navigateToContactDetails(data);

    // Enter only special characters in Email ID
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError1).toBeVisible();
}

async TC_34_VerifyEmailIdRejectsDoubleAtSymbol(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID with double @@
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError2).toBeVisible();
}

async TC_35_VerifyEmailIdRejectsMissingAtSymbol(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID without @ symbol
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError1).toBeVisible();
}

async TC_36_VerifyEmailIdAcceptsPlusSign(data) {

    await this.navigateToContactDetails(data);

    await this.primaryMobileNumber.fill(
        String(data.mobileNumber1)
    );


    // Enter Email ID containing plus (+) sign
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

   

    // Verify navigation to next page
    await expect(this.primaryEmailAddressError1).not.toBeVisible();
}

async TC_37_VerifyEmailIdAcceptsNumericDomain(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID with numeric domain
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Enter Email ID containing plus (+) sign
     // Verify navigation to next page
    await expect(this.primaryEmailAddressError1).not.toBeVisible();
}

async TC_38_VerifyEmailIdRejectsMissingDomainName(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID without domain name
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError3).toBeVisible();
}

async TC_39_VerifyEmailIdRejectsMultipleDots(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID with multiple dots
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError).toBeVisible();
}

async TC_40_VerifyEmailIdRejectsTrailingDotInDomain(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID with trailing dot in domain
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email validation error
    await expect(this.primaryEmailAddressError4).toBeVisible();
}

async TC_41_VerifyEmailIdRejectsMultipleSpaces(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID with multiple spaces
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Verify Email validation error
    await expect(this.primaryEmailAddressError).toBeVisible();
}

async TC_42_VerifyEmailIdAccepts254Characters(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID with 254 characters
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );


    // Verify Email validation error
    await expect(this.primaryEmailAddressError).not.toBeVisible();
}

async TC_43_VerifyEmailIdDoesNotAllowMoreThan254Characters(data) {

    await this.navigateToContactDetails(data);

    // Enter Email ID with 254 characters
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

}

async TC_44_VerifyPrimaryEmailIdIsMandatory(data) {

    await this.navigateToContactDetails(data);

    // Keep Email ID (01) blank
    await this.primaryEmailAddress.fill('');

    // Click Save And Next to trigger validation
    await this.nextButton.click();

    // Verify Email ID mandatory validation
    await expect(this.primaryEmailAddressError5).toBeVisible();

}

async TC_45_VerifySecondaryEmailIdIsNonMandatory(data) {

    await this.navigateToContactDetails(data);

    // Fill mandatory Email ID (01)
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Keep Email ID (02) blank
    await this.secondaryEmailAddress.fill('');

    // Click Save And Next
    await this.nextButton.click();

    // Verify navigation to next page
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_46_VerifyTelephoneOfficialAcceptsMaximum12Characters(data) {

    await this.navigateToContactDetails(data);

    // Enter Telephone (official) with 12 characters
    await this.telephoneOfficial.fill(
        String(data.telePhone)
    );

    // Verify 12 characters are accepted
    await expect(this.telephoneOfficial).toHaveValue(
        String(data.telePhone)
    );
}

async TC_47_VerifyTelephoneOfficialAcceptsNumericValues(data) {

    await this.navigateToContactDetails(data);

    // Enter numeric value in Telephone (official)
    await this.telephoneOfficial.fill(
        String(data.telePhone)
    );

    // Verify numeric value is accepted
    await expect(this.telephoneOfficial).toHaveValue(
        String(data.telePhone)
    );
}

async TC_48_VerifyTelephoneOfficialAcceptsHyphen(data) {

    await this.navigateToContactDetails(data);

    // Enter Telephone (official) with '-' character
    await this.telephoneOfficial.fill(
        String(data.telePhone)
    );

    // Verify '-' character is accepted
    await expect(this.telephoneOfficial).toHaveValue(
        String(data.telePhone)
    );
}

async TC_49_VerifyTelephoneOfficialIsNonMandatory(data) {

    await this.navigateToContactDetails(data);

    // Fill mandatory Email ID (01)
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Keep Telephone (official) blank
    await this.telephoneOfficial.fill('');

    // Click Save And Next
    await this.nextButton.click();

    // Verify navigation to next page
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_50_VerifyFaxAcceptsMaximum12Characters(data) {

    await this.navigateToContactDetails(data);

    // Enter FAX with 12 characters
    await this.fax.fill(
        String(data.fax)
    );

    // Verify 12 characters are accepted
    await expect(this.fax).toHaveValue(
        String(data.fax)
    );
}

async TC_51_VerifyFaxAcceptsNumericValues(data) {

    await this.navigateToContactDetails(data);

    // Enter numeric value in FAX
    await this.fax.fill(
        String(data.fax)
    );

    // Verify numeric value is accepted
    await expect(this.fax).toHaveValue(
        String(data.fax)
    );
}

async TC_52_VerifyFaxAcceptsHyphen(data) {

    await this.navigateToContactDetails(data);

    // Enter FAX with '-' character
    await this.fax.fill(
        String(data.fax)
    );

    // Verify '-' character is accepted
    await expect(this.fax).toHaveValue(
        String(data.fax)
    );
}

async TC_53_VerifyFaxIsNonMandatory(data) {

    await this.navigateToContactDetails(data);

    // Fill mandatory Email ID (01)
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1)
    );

    // Keep FAX field blank
    await this.fax.fill('');

    // Click Save And Next
    await this.nextButton.click();

    // Verify navigation to next page
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_54_VerifySaveAndNextFunctionalityForPrefetchedContactDetails(data) {

    await this.navigateToContactDetails(data);

    // Verify Contact Details section is displayed
    await expect(this.page.getByRole('heading', {
        name: 'Contact Details'
    })).toBeVisible();

    // Verify prefetched Mobile Number is not empty
    await expect(this.primaryMobileNumber).not.toHaveValue('');

    // Verify prefetched Email Address is not empty
    await expect(this.primaryEmailAddress).not.toHaveValue('');

    // Take screenshot of Contact Details page
    await this.page.screenshot({
        path: 'AllScreenshots_ContactDetails/Create Legal Categories - TC_CCDLE_54.png',
        fullPage: true
    });

    // Click Save And Next
    await this.nextButton.click();

    // Verify navigation to next section
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_55_VerifySaveAndNextFunctionalityForModifiedContactDetails(data) {

    await this.navigateToContactDetails(data);

    // Verify prefetched Mobile Number is not empty
    await expect(this.primaryMobileNumber).not.toHaveValue('');

    // Verify prefetched Email Address is not empty
    await expect(this.primaryEmailAddress).not.toHaveValue('');

    // Screenshot before modifying Contact Details
    await this.page.screenshot({
        path: 'AllScreenshots_ContactDetails/Create Legal Categories - TC_CCDLE_55.png',
        fullPage: true
    });

    // Modify only Mobile Number
    await this.primaryEmailAddress.fill(
        String(data.emailAddress1).trim()
    );

    // Verify modified Mobile Number
    await expect(this.primaryEmailAddress).toHaveValue(
        String(data.emailAddress1).trim()
    );

    // Screenshot after modifying Mobile Number
    await this.page.screenshot({
        path: 'AllScreenshots_ContactDetails/Create Legal Categories - TC_CCDLE_55.png',
        fullPage: true
    });

    // Click Save And Next
    await this.nextButton.click();

    // Verify navigation to next section
    await expect(this.nextPageHeading).toBeVisible();
}

async TC_56_VerifyREUserCanSaveDetailsAndResumeProcess(data) {

    // await this.navigateToContactDetails(data);

    // // Verify prefetched Mobile Number is not empty
    // await expect(this.primaryMobileNumber).not.toHaveValue('');

    // // Verify prefetched Email Address is not empty
    // await expect(this.primaryEmailAddress).not.toHaveValue('');

    // // Screenshot before saving Contact Details
    // await this.page.screenshot({
    //     path: 'AllScreenshots_ContactDetails/Create Legal Categories - TC_CCDLE_56.png',
    //     fullPage: true
    // });

    // // Click Save And Next
    // await this.nextButton.click();

    // // Verify navigation to next section
    // await expect(this.nextPageHeading).toBeVisible();

    // // Screenshot of next section
    // await this.page.screenshot({
    //     path: 'AllScreenshots_ContactDetails/Create Legal Categories - TC_CCDLE_56.png',
    //     fullPage: true
    // });

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();
    await this.page.getByText('Create-Draft').click();
    await this.page.getByRole('radio', {name: 'Legal Entity'}).check();

    await this.page.getByRole('textbox', { name : 'Enter Search Key' }).fill(data.SearchKey);
    await this.page.locator('button').filter({hasText: 'Search'}).first().click();
    await this.page.getByText(data.SearchKey, {exact : true}).click();

    for(let i=0;i<3;i++){
        await this.page.waitForTimeout(2000);
        await this.nextButton.click();
    }

    // Verify saved Email Address is retained
    await expect(this.primaryEmailAddress).toHaveValue(
        String(data.emailAddress1).trim()
    );

    // Verify user can resume the process
    await this.nextButton.click();

    // Verify navigation to next section
    await expect(this.nextPageHeading).toBeVisible();
}

}


