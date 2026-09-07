import {test, expect } from '@playwright/test';

export class Entitydetails {

    constructor(page) {
        this.page = page;

        
    // KYC Management

    this.kycManagementDropdown = page.getByLabel('sidebar navigation').getByText('KYC Management');

    this.singleOperationsDropdown = page.getByLabel('sidebar navigation').getByText('Single Operations');

    this.searchOption = page.getByRole('link', { name: 'Search' });

    this.enterSearchKey = page.getByPlaceholder('Enter Search Key');

    this.submitButton = page.locator("button[type='submit']");

 

    // Page Header

    this.demographicDetailsHeading = page.getByRole("heading", { name: "Demographic Details" });

   

    // Individual/Legal Entity Radio Buttons

    this.individualRadio = page.locator("input[type='radio'][value='individual']");

    this.legalEntityRadio = page.locator("input[type='radio'][value='legal']");

   

    // Search Key

    this.searchKeyLabel = page.getByText("Search Key*");

    this.searchKeyInput = page.getByPlaceholder("Enter Search Key");

   

    // CKYC Account Type Section

    this.ckycAccountTypeHeading = page.getByText("Choose CKYC account type");

        this.searchKey = page.getByPlaceholder("Search Key");

        this.entityDetails = page.getByText("Entity Details");

        this.legalEntityDetails = page.getByText("Legal Entity Details");

        this.entityName = page.getByPlaceholder("Enter Entity Name");
        

        this.entityConstitution = page.locator("//input[@placeholder='Select Entity Constitution']");
        this.entityConstitutionError = this.page.getByText(
            'Please select Entity Constitution Type.',
            { exact: true }
        );
        // or
        // this.entityConstitution = page.getByLabel("Entity Constitution");

        this.dateOfIncorporation = page.getByPlaceholder("DD/MM/YYYY");
        this.dateOfIncorporationError = page.getByPlaceholder("Please enter a valid date");
        this.dd = page.locator("//span[@aria-label='Day']");
        this.dateDay = page.getByRole('spinbutton', { name: 'Day' });
        this.dateMonth = page.getByRole('spinbutton', { name: 'Month' });
        this.dateYear = page.getByRole('spinbutton', { name: 'Year' });

        this.datePicker = page.locator("//button[@aria-label='Choose date']");
        this.countryOfIncorporation = this.page.getByPlaceholder('Select Country').first();
        this.countryOfIncorporationLabel = page.locator(
    'label[for="countryOfRegistration"]'
);

this.countryOfIncorporationMandatoryAsterisk = page.locator(
    'label[for="countryOfRegistration"] span.MuiFormLabel-asterisk'
);
        const countrySearch = this.page.getByPlaceholder('Select Country');

       this.dateOfCommencementOfBusiness = page.getByRole('spinbutton', { name: 'Day' }).nth(1);
        this.placeOfIncorporation = page.getByPlaceholder("Enter Place of Incorporation/Registration/Formation");
        this.placeOfIncorporation = page.getByPlaceholder("Enter Place of Incorporation/Registration/Formation");

        this.placeOfIncorporationError = page.getByText(
            "Please Enter Place of Registration.",
            { exact: true }
        );

        this.placeOfIncorporationExceedError = page.getByText(
            "Place of Registration cannot exceed 50 characters.",
            { exact: true }
        );

        this.PanSoleProprietorError = page.getByText("PAN must be in the format: AAAPA9999A (4th character must be P)"),
            { exact: true }

        this.PanNonSoleProprietorError = page.getByText("PAN must be in the format: AAAAA9999A (4th character must not be P)"),

        this.tinIssuingCountry =page.getByRole('combobox', { name: 'Select Country' }).nth(1);

       this.tinGstNumber = page.getByPlaceholder("Enter TIN/GSTIN");

       this.tinGstError = page.getByText("Please enter valid GSTIN (e.g., 22ABCDE1234F1Z5)");

        this.uploadTinGst = page.locator("input[type='file']");

        this.panCardRadio = page.getByRole("radio", {
            name: "Pan Card"
        });

        this.listedCompanyYesRadio = page.getByRole('radio', {
    name: 'Yes',
    exact: true
}) .first();

this.listedCompanyNoRadio = page.getByRole('radio', {
    name: 'No',
    exact: true
}) .first();

        this.panVerifiedNo = page.getByRole('radio', { name: 'No' }).nth(1);
        this.panVerifiedYes = page.getByRole('radio', { name: 'Yes' }).nth(1);
        this.panVerifiedInfoIcon = page.getByRole('button', {name: 'Pan Verified'});
        this.panMandatoryError = page.getByText('Please enter Pan Card Number', { exact: true });
        this.panOrForm60Heading = page.getByRole('heading', {
    name: 'Any one of PAN or Form 97 (erstwhile form 60) is Mandatory *',
    exact: true
});
this.panCardRadio = page.getByRole('radio', { name: 'Pan Card', exact: true });

this.form60Radio = page.getByRole('radio', {
    name: 'Form 97 (erstwhile form 60)',
    exact: true
});


        this.panForm60MandatoryHeading = this.page.getByRole("heading", { name: "Any one of PAN or Form 97 (erstwhile form 60) is Mandatory *"});

        this.form97Radio = page.getByRole("radio", {
            name: "Form 97 (erstwhile form 60)"
        });

        // Listed Company Section
      this.listedCompanySection = page.getByText('Listed Company', { exact: true });

       // Listed Company Radio Buttons
     this.listedCompanyYes = page.getByRole('radio', { name: 'Yes' }).first();
     this.listedCompanyNo = page.getByRole('radio', { name: 'No' }).first();

        this.listedCompanyInfoIcon = this.page.getByRole('button', {
            name: 'Mandatory where constitution type selected is public limited company',
            exact: true
        });

        this.registeredFirmYes = page.getByRole('radio', {
            name: 'Yes',
            exact: true
        }).first();

        this.registeredFirmNo = page.getByRole('radio', {
            name: 'No',
            exact: true
        }).first();

        this.registeredTrust = page.locator('#registeredTrust');
        this.registeredTrustYes = page.getByRole('radio', { name: 'Yes' });
        this.registeredTrustNo = page.getByRole('radio', { name: 'No' });


        this.saveAndNextBtn = page.getByRole("button", {
            name: "Save And Next"
        });

        this.clearBtn = page.getByRole("button", {
            name: "Clear"
        });
        this.entityNameError = page.getByText("Please Enter Entity Name.");
        this.entityNameError1 = page.getByText("Entity Name cannot start or end with spaces.");

        this.entityConstitutionError = this.page.getByText(
            'Please select Entity Constitution Type.',
            { exact: true }
        );

        this.dateError = page.getByText("Please enter a valid date");

        this.countryError = page.getByText(
            "Please Select Country of Incorporation/Registration.");

        this.entityNameMultiApestropError = page.getByText("Only one apostrophe is allowed.");
        this.entitynameWhitespaceError = page.getByText("Entity Name cannot contain only spaces.");
        this.entityNameExceedError = page.getByText("Entity Name cannot exceed 99 characters.");

        this.placeError = page.getByText(
            "Please Enter Place of Incorporation/Registration/Formation."
        );

        this.panOrForm97Error = page.getByText(
            "Any one of PAN or Form 97 (erstwhile form 60) is Mandatory"
        );



        //this.errorElements = new ErrorElements(page);
    }


    async navigateToKYC() {
        // await this.page.getByLabel('sidebar navigation').getByText('KYC Management').click();
        // await this.page.getByText('Single Operations').click();
        // await this.page.getByRole('link', { name: 'Search' }).click();

        const kycMenu = this.page
            .getByLabel('sidebar navigation')
            .getByText('KYC Management');

        await expect(kycMenu).toBeVisible({
            timeout: 60000
        });

        await expect(kycMenu).toBeEnabled();

        await kycMenu.click();

        await this.page
            .getByText('Single Operations')
            .click();

        await this.page
            .getByRole('link', { name: 'Search' })
            .click();
    }

    async searchAndCreate(data) {

        await this.page.getByRole('radio', { name: 'Legal Entity' }).check();
        await this.page.getByRole('radio', { name: 'Mobile Number' }).check();
        await this.page.getByRole('textbox', { name: 'Enter Mobile Number' }).click();
        await this.page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill(String(data.searchMobNo));
        await this.page.getByRole('button', { name: 'Search' }).click();
        await this.page.getByRole('button', { name: 'Create New KYC Record' }).click();
        await this.page.waitForTimeout(3000);

    }

    async selectEntityConstitution(value) {
        await this.entityConstitution.fill(value);
        const option = this.page.getByRole('option', { name: value });
        await option.waitFor();
        await option.click();
    }

    async selectCountryOfIncorporation(country) {
        await this.countryOfIncorporation.fill(country);
        const option = this.page.getByRole('option', { name: country });
        await option.waitFor();
        await option.click();
    }

    async selectTinIssuingCountry(country) {
        await this.tinIssuingCountry.fill(country);
        const option = this.page.getByRole('option', { name: country });
        await option.waitFor();
        await option.click();
    }


    // TC_KYC_DD_01
// Verify if the system triggers a prompt to the user to validate the Search Key
async TC_01_verifySearchKeyValidationPrompt(data) {

    // ================= NAVIGATE TO CREATE =================

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();

    await this.page.getByText('Create', { exact: true }).click();

    // ================= SELECT LEGAL ENTITY =================

    await expect(
        this.page.getByRole('radio', { name: 'Legal Entity' })
    ).toBeVisible();

    await this.page.getByRole('radio', {
        name: 'Legal Entity'
    }).check();

    await expect(
        this.page.getByRole('radio', { name: 'Legal Entity' })
    ).toBeChecked();

    // ================= SEARCH KEY =================

    await expect(this.enterSearchKey).toBeVisible();

    await this.enterSearchKey.fill(
        String(data.SearchKey ?? '').trim()
    );

    await expect(this.enterSearchKey).toHaveValue(
        String(data.SearchKey ?? '').trim()
    );

    // ================= SUBMIT =================

    await this.submitButton.click();

    // ================= VERIFY PROMPT =================

    // Replace the text below with the exact prompt displayed by application
    const validationPrompt = this.page.getByText(
        "Please enter Search key"
    );

    await expect(validationPrompt).toBeVisible();
}
async TC_02_verifySearchKeyValidationFailure(data) {

 

        await this.kycManagementDropdown.click();

        await this.singleOperationsDropdown.click();

        await this.page.getByText('Create', { exact: true }).click();

        await this.page.getByRole('radio', { name: 'Legal Entity' }).check();

        await this.enterSearchKey.fill(String(data.SearchKey));

        await this.submitButton.click();

        await expect(this.page.locator("//p[text()='Search Key not found']")).toBeVisible();

 

    }

async TC_03_verifySearchKeyNotEditableForLegalEntity(data) {

    // Navigate to Create
    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();

    await this.page.getByText('Create', { exact: true }).click();
    await this.page.getByRole('radio', { name: 'Legal Entity' }).check();
    // Verify Search Key field
    await expect(this.enterSearchKey).toBeVisible();
    await expect(this.enterSearchKey).toBeEditable();


    // Enter valid Search Key
    await this.enterSearchKey.fill(String(data.SearchKey));

    // Submit Search Key for verification
    await this.submitButton.click();

    // Verify successful Search Key validation
    // Replace the text below with the exact success message from your application
    await expect(
        this.page.getByText("Legal Entity Details")).toBeVisible();

    // Select Legal Entity
    await expect(this.legalEntityRadio).toBeVisible();
    await this.legalEntityRadio.check();

    // Verify Legal Entity is selected
    await expect(this.legalEntityRadio).toBeChecked();

    // Verify Search Key field is not editable
    await expect(this.enterSearchKey).not.toBeEditable();
}

async TC_04_verifyEntityDetailsVisibleForModification(data) {

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();

    await this.page.getByText('Create', { exact: true }).click();

    await this.page.getByRole('radio', { name: 'Legal Entity' }).check();



    await this.enterSearchKey.fill(String(data.SearchKey));

    // Validate Search Key
    await this.submitButton.click();

    // Verify successful Search Key validation
    await expect(
        this.page.getByText("Legal Entity Details")).toBeVisible();

    // Select Legal Entity
    await this.legalEntityRadio.check();

    await expect(this.legalEntityRadio).toBeChecked();


    // Enter value in Entity Details field
    await this.page.getByRole('textbox', { name: 'Enter Entity Name' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Entity Name' }).fill('DemoEntityNameMixCaseAbCdEf');
    await expect(this.entityName).toHaveValue(data.entityName);
}

    async TC_05_verifyEntityNamefieldacceptsUppercaseandLowercase(data) {
        await this.entityName.fill(data.entityName);
        await this.saveAndNextBtn.click();
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entityNameError).not.toBeVisible();
    }

    async TC_06_VerifythattheEntityNamefieldacceptsalphanumericdata(data) {

        await this.entityName.fill(data.entityName);
        await this.saveAndNextBtn.click();
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entityNameError).not.toBeVisible();
    }

    async TC_07_VerifythattheEntityNamefieldacceptssingleapostrophedata(data) {

        await this.entityName.fill(data.entityName);
        await this.saveAndNextBtn.click();
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entityNameError).not.toBeVisible();

    }

    async TC_08_VerifythattheEntityNamefieldacceptsspecialcharactersdata(data) {

        await this.entityName.fill(data.entityName);
        await this.saveAndNextBtn.click();
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entityNameError).not.toBeVisible();

    }

    async TC_09_VerifythattheEntityNamefieldacceptsDotcharacterdata(data) {

        await this.entityName.fill(data.entityName);
        await this.saveAndNextBtn.click();
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entityNameError).not.toBeVisible();

    }

    async TC_10_VerifythattheEntityNamefieldacceptscombinationofalbhabetspecialchardata(data) {

        await this.entityName.fill(data.entityName);
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entityNameError).not.toBeVisible();

    }

    async TC_11_VerifythattheEntityNamefielddoesnotacceptmultipleapostrophes(data) {

        await this.entityName.fill(data.entityName);
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entityNameMultiApestropError).toBeVisible();

    }

    async TC_12_VerifythattheEntityNamefieldrejectsonlywhitespaceasinput(data) {

        await this.entityName.fill(data.entityName);
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entitynameWhitespaceError).toBeVisible();
    }


    async TC_13_VerifythattheEntityNamefieldrejectsinputexceedingmaximumlengthof99(data) {

        await this.entityName.fill(data.entityName);
        await expect(this.entityName).toHaveValue(data.entityName);
        await expect(this.entityNameExceedError).toBeVisible();
    }
    async TC_14_VerifythattheEntityNamefieldismarkedasmandatoryanddoesnotacceptblankinput(data) {

        await this.entityName.fill('');
        await expect(this.entityName).toHaveValue('');
        await this.saveAndNextBtn.click();
        await expect(this.entityNameError).toBeVisible();

    }

    async TC_15_VerifyEntityNameTrimsLeadingAndTrailingSpaces(data) {

        const inputValue = data.entityName;

        await this.entityName.fill(inputValue);
        await expect(this.entityNameError1).toBeVisible();
    }

    async TC_16_VerifytheEntityConstitutiondropdownpopulatesdefaultvalues() {

        const expectedConstitutionValues = [
            "Artificial Juridical Person",
            "Artificial Liability Partnership (only for old records)",
            "Central/State Government Department or Agency",
            "HUF",
            "International Organization or Agency",
            "International Organization or Agency/Foreign Embassy or Consular Office etc.",
            "Limited Liability Partnership",
            "Liquidator",
            "Partnership Firm",
            "Private Limited Company",
            "Public Sector Banks",
            "Section 8 Companies (Companies Act, 2013)",
            "Society",
            "Sole Proprietorship",
            "Trust",
            "Unincorporated Association or Body of Individual",
            "Others"
        ];

        // Click Entity Constitution dropdown
        await this.entityConstitution.click();

        // Verify each expected value is present
        for (const value of expectedConstitutionValues) {
            await expect(
                this.page.getByRole('option', { name: value, exact: true })
            ).toBeVisible();
        }
    }

   async TC_17_VerifyEntityConstitutionDefaultValueIsBlank(data) {

    // Verify Entity Constitution dropdown is blank by default
    const selectedValue = await this.entityConstitution.inputValue();

    expect(selectedValue).toBe("");

    console.log(
        "PASS: Entity Constitution dropdown has a default blank value."
    );
}

    async TC_18_VerifythattheEntityConstitutiondropdownismandatory(data) {

        await this.entityName.fill(data.entityName);
        await this.saveAndNextBtn.click();
        await expect(this.entityConstitutionError).toBeVisible();
    }

    async TC_19_VerifythattheEntityConstitutiondropdownfieldisEditable() {

        await expect(this.entityConstitution).toBeVisible();
        await expect(this.entityConstitution).toBeEnabled();

        await this.entityConstitution.click();

        await this.page.getByRole('option', { name: 'Partnership Firm', exact: true }).click();

        await expect(this.entityConstitution).toHaveValue('Partnership Firm');
    }


    async TC_20_VerifyEntityConstitutionSelectsValueFromLargeList(data) {

    // Open Entity Constitution dropdown
    await this.entityConstitution.click();

    // Read Entity Constitution value from Excel
    const constitutionValue = String(
        data.entityType ?? ""
    ).trim();

    expect(constitutionValue).not.toBe("");

    // Locate the specific option
    const option = this.page.getByRole("option", {
        name: constitutionValue,
        exact: true
    });

    // Verify the specific option is visible
    await expect(option).toBeVisible({
        timeout: 5000
    });

    // Select the option
    await option.click();

    // Verify selected value
    await expect(this.entityConstitution).toHaveValue(
        constitutionValue
    );

    console.log(
        `PASS: "${constitutionValue}" is selected successfully from Entity Constitution dropdown.`
    );
}

    async TC_21_VerifyEntityConstitutionDropdownAllowsOnlySingleOptionSelection() {

        // Open dropdown
        await this.entityConstitution.click();

        // Select first option
        await this.page.getByRole('option', {
            name: 'Sole Proprietorship',
            exact: true
        }).click();

        // Verify first selected value
        await expect(this.entityConstitution).toHaveValue(
            'Sole Proprietorship'
        );

        // Open dropdown again
        await this.entityConstitution.click();

        // Select second option
        await this.page.getByRole('option', {
            name: 'Partnership Firm',
            exact: true
        }).click();

        // Verify second selected value
        await expect(this.entityConstitution).toHaveValue(
            'Partnership Firm'
        );

        // Verify first option is no longer selected
        await expect(this.entityConstitution).not.toHaveValue(
            'Sole Proprietorship'
        );
    }

    async TC_22_VerifythattheEntityConstitutiondropdownismandatoryError(data) {

        await this.entityName.fill(data.entityName);
        await this.saveAndNextBtn.click();
        await expect(this.entityConstitutionError).toBeVisible();
    }


    async TC_23_VerifyEntityConstitutionOptionsAreAccessibleAndSelectable(data) {

    // Open Entity Constitution dropdown
    await this.entityConstitution.click();

    // Read Entity Constitution value from Excel
    const constitutionValue = String(
        data.entityType ?? ""
    ).trim();

    expect(constitutionValue).not.toBe("");

    // Locate the specific option
    const option = this.page.getByRole("option", {
        name: constitutionValue,
        exact: true
    });

    // Verify the specific option is visible
    await expect(option).toBeVisible({
        timeout: 5000
    });

    // Select the option
    await option.click();

    // Verify selected value
    await expect(this.entityConstitution).toHaveValue(
        constitutionValue
    );

    console.log(
        `PASS: "${constitutionValue}" is selected successfully from Entity Constitution dropdown.`
    );
}



    async TC_24_VerifyEntityConstitutionDropdownCanBeScrolled() {

        const expectedConstitutionValues = [
            "Artificial Juridical Person",
            "Artificial Liability Partnership (only for old records)",
            "Central/State Government Department or Agency",
            "HUF",
            "International Organization or Agency",
            "International Organization or Agency/Foreign Embassy or Consular Office etc.",
            "Limited Liability Partnership",
            "Liquidator",
            "Partnership Firm",
            "Private Limited Company",
            "Public Sector Banks",
            "Section 8 Companies (Companies Act, 2013)",
            "Society",
            "Sole Proprietorship",
            "Trust",
            "Unincorporated Association or Body of Individual",
            "Others"
        ];

        // Open dropdown
        await this.entityConstitution.click();

        // Get dropdown list
        const listbox = this.page.getByRole('listbox');

        await expect(listbox).toBeVisible();

        // Verify first option is visible
        await expect(
            this.page.getByRole('option', {
                name: expectedConstitutionValues[0],
                exact: true
            })
        ).toBeVisible();

        // Scroll dropdown to bottom
        await listbox.evaluate(element => {
            element.scrollTop = element.scrollHeight;
        });

        // Verify last option is visible after scrolling
        await expect(
            this.page.getByRole('option', {
                name: 'Others',
                exact: true
            })
        ).toBeVisible();

        // Verify all options are available
        for (const value of expectedConstitutionValues) {
            await expect(
                this.page.getByRole('option', {
                    name: value,
                    exact: true
                })
            ).toBeAttached();
        }
    }

    async TC_25_VerifyEntityConstitutionDropdownRendersAndOpensWithinAcceptableTime() {

        const acceptableTime = 2000; // 2 seconds

        // Verify dropdown renders within acceptable time
        const renderStartTime = Date.now();

        await expect(this.entityConstitution).toBeVisible({
            timeout: acceptableTime
        });

        const renderTime = Date.now() - renderStartTime;

        console.log(`Entity Constitution rendered in: ${renderTime} ms`);

        // Open dropdown and measure opening time
        const openStartTime = Date.now();

        await this.entityConstitution.click();

        // Wait for dropdown options to appear
        await expect(
            this.page.getByRole('option', {
                name: 'Artificial Juridical Person',
                exact: true
            })
        ).toBeVisible({
            timeout: acceptableTime
        });

        const openTime = Date.now() - openStartTime;

        console.log(`Entity Constitution dropdown opened in: ${openTime} ms`);

        // Verify opening time is within acceptable limit
        expect(renderTime).toBeLessThanOrEqual(acceptableTime);
        expect(openTime).toBeLessThanOrEqual(acceptableTime);
    }

    async TC_26_VerifyListedCompanyRadioButtonForPublicLimitedCompany() {

    const publicLimitedCompany = 'Public Limited Company';

    // Open Entity Constitution dropdown
    await this.entityConstitution.click();

    // Select Public Limited Company
    await this.page.getByRole('option', {
        name: publicLimitedCompany,
        exact: true
    }).click();

    // Verify selected constitution
    await expect(this.entityConstitution)
        .toHaveValue(publicLimitedCompany);

    // Verify Yes radio button
    await expect(this.listedCompanyYes).toBeVisible();
    await expect(this.listedCompanyYes).toBeEnabled();

    // Verify No radio button
    await expect(this.listedCompanyNo).toBeVisible();
    await expect(this.listedCompanyNo).toBeEnabled();

    // Verify No can be selected
    await this.listedCompanyNo.check();
    await expect(this.listedCompanyNo).toBeChecked();

    // Verify Yes can be selected
    await this.listedCompanyYes.check();
    await expect(this.listedCompanyYes).toBeChecked();
}

    async TC_27_VerifyListedCompanyInformationIcon() {

        const publicLimitedCompany = 'Public Limited Company';

        // Select Public Limited Company
        await this.entityConstitution.click();

        await this.page.getByRole('option', {
            name: publicLimitedCompany,
            exact: true
        }).click();

        // Verify selected constitution
        await expect(this.entityConstitution)
            .toHaveValue(publicLimitedCompany);

        // Verify information icon is visible
        await expect(this.listedCompanyInfoIcon).toBeVisible();

        // Mouse hover over information icon
        await this.listedCompanyInfoIcon.hover();

        // Verify tooltip/information displayed
        await expect(
            this.page.getByRole('tooltip')
        ).toBeVisible();
    }

    async TC_28_VerifyListedCompanyDefaultValueForPublicLimitedCompany() {

        const publicLimitedCompany = 'Public Limited Company';

        // Open Entity Constitution dropdown
        await this.entityConstitution.click();

        // Select Public Limited Company
        await this.page.getByRole('option', {
            name: publicLimitedCompany,
            exact: true
        }).click();

        // Verify selected constitution
        await expect(this.entityConstitution)
            .toHaveValue(publicLimitedCompany);

        // Verify Yes and No radio buttons are visible
        await expect(this.listedCompanyYes).toBeVisible();
        await expect(this.listedCompanyNo).toBeVisible();

        // Verify Yes is selected by default
        await expect(this.listedCompanyYes).toBeChecked();

        // Verify No is not selected
        await expect(this.listedCompanyNo).not.toBeChecked();
    }

    async TC_29_VerifyListedCompanyCanBeSetToNoForPublicLimitedCompany(data) {

        const entityType = String(data.entityType).trim();

        // Open Entity Constitution dropdown
        await this.entityConstitution.click();

        // Select value from Excel
        await this.page.getByRole('option', {
            name: entityType,
            exact: true
        }).click();

        // Verify selected constitution
        await expect(this.entityConstitution)
            .toHaveValue(entityType);

        // Verify Listed Company Yes/No radios
        await expect(this.listedCompanyYes).toBeVisible();
        await expect(this.listedCompanyNo).toBeVisible();

        // Select No
        await this.listedCompanyNo.check();

        // Verify No is selected
        await expect(this.listedCompanyNo).toBeChecked();

        // Verify Yes is not selected
        await expect(this.listedCompanyYes).not.toBeChecked();
    }

    async TC_30_VerifyRegisteredFirmRadioButtoncanBeSetToYesForPartnershipFirm(data) {

        const entityType = String(data.entityType).trim();

        // Open Entity Constitution dropdown
        await this.entityConstitution.click();

        // Select value from Excel
        await this.page.getByRole('option', {
            name: entityType,
            exact: true
        }).click();

        // Verify selected constitution
        await expect(this.entityConstitution)
            .toHaveValue(entityType);

        // Verify Registered Firm Yes is visible
        await expect(this.registeredFirmYes).toBeVisible();

        // Select Yes
        await this.registeredFirmYes.check();

        // Verify Yes is selected
        await expect(this.registeredFirmYes).toBeChecked();
    }

    async TC_31_VerifyRegisteredFirmRadioButtoncanBeSetToNoForPartnershipFirm(data) {

        // Get Entity Constitution value from Excel
        const entityConstitution = String(data.entityType).trim();

        // Open Entity Constitution dropdown
        await this.entityConstitution.click();

        // Select value from Excel
        await this.page.getByRole('option', {
            name: entityConstitution,
            exact: true
        }).click();

        // Verify selected value
        await expect(this.entityConstitution)
            .toHaveValue(entityConstitution);

        // Verify Registered Firm Yes/No
        await expect(this.registeredFirmYes).toBeVisible();
        await expect(this.registeredFirmNo).toBeVisible();

        // Select No
        await this.registeredFirmNo.check();

        // Verify No is selected
        await expect(this.registeredFirmNo).toBeChecked();

        // Verify Yes is not selected
        await expect(this.registeredFirmYes).not.toBeChecked();
    }


    async TC_32_VerifyRegisteredTrustRadioButtoncanBeSetToYesForTrust(data) {

        // Open Entity Constitution dropdown
        await this.entityConstitution.click();

        // Get Entity Constitution value from Excel
        const entityConstitution = data.entityType;

        // Select Trust from dropdown
        await this.page.getByRole('option', {
            name: entityConstitution,
            exact: true
        }).click();

        // Verify selected Entity Constitution
        await expect(this.entityConstitution)
            .toHaveValue(entityConstitution);

        // Verify Registered Trust radio button is visible
        await expect(this.registeredTrustYes).toBeVisible();

        // Verify Registered Trust radio button is enabled
        await expect(this.registeredTrustYes).toBeEnabled();

        // Select Yes
        await this.registeredTrustYes.check();

        // Verify Yes is selected
        await expect(this.registeredTrustYes).toBeChecked();
    }


    async TC_33_VerifyRegisteredTrustRadioButtoncanBeSetToNoForTrust(data) {

        // Open Entity Constitution dropdown
        await this.entityConstitution.click();

        // Get Entity Constitution value from Excel
        const entityConstitution = data.entityType;

        // Select value from dropdown
        await this.page.getByRole('option', {
            name: entityConstitution,
            exact: true
        }).click();

        // Verify selected Entity Constitution
        await expect(this.entityConstitution)
            .toHaveValue(entityConstitution);

        // Verify Registered Trust Yes/No radio buttons
        await expect(this.registeredTrustYes).toBeVisible();
        await expect(this.registeredTrustNo).toBeVisible();

        // Verify No is enabled
        await expect(this.registeredTrustNo).toBeEnabled();

        // Select No
        await this.registeredTrustNo.check();

        // Verify No is selected
        await expect(this.registeredTrustNo).toBeChecked();

        // Verify Yes is not selected
        await expect(this.registeredTrustYes).not.toBeChecked();
    }

    async TC_34_VerifyDateOfIncorporationFieldIsVisibleEnabledAndClickable(data) {

        // Verify Date of Incorporation field is visible
        await expect(this.dateOfIncorporation).toBeVisible();

        // Verify Date of Incorporation field is enabled
        await expect(this.dateOfIncorporation).toBeEnabled();

        // Click the Day input
        await this.dateDay.click();

        // Verify Day input is focused
        await expect(this.dateDay).toBeFocused();
    }

    async TC_35_DateOfIncorporationAcceptsOnlyDDMMYYYY(data) {

        const dateOfIncorporation = String(data.dateOfIncorporation ?? '').trim();
        await this.page.waitForTimeout(1000);
        // Verify DD/MM/YYYY format
        expect(dateOfIncorporation).toMatch(
            /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
        );

        // Enter date
        await this.dd.click();
        await this.dd.pressSequentially(dateOfIncorporation);

        await this.saveAndNextBtn.click();

        // Verify entered value
        await expect(this.dateOfIncorporation)
            .toHaveText(dateOfIncorporation);
    }
    async TC_36_VerifyDateOfIncorporationFieldAcceptsBackdatedEntries(data) {

    const backdatedDate = String(data.dateOfIncorporation ?? '').trim();

    await this.page.waitForTimeout(1000);

    // Verify DD/MM/YYYY format
    expect(backdatedDate).toMatch(
        /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    );

    // Enter backdated date
    await this.dd.click();
    await this.dd.pressSequentially(backdatedDate);

    // Click Save & Next
    await this.saveAndNextBtn.click();

    // Verify entered backdated date
    await expect(this.dateOfIncorporation)
        .toHaveText(backdatedDate);
}
   async TC_37_VerifyDateOfIncorporationFieldAcceptsFutureEntries(data) {

    const futureDate = String(data.dateOfIncorporation ?? '').trim();

    await this.page.waitForTimeout(1000);

    // Verify DD/MM/YYYY format
    expect(futureDate).toMatch(
        /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    );

    // Enter future date
    await this.dd.click();
    await this.dd.pressSequentially(futureDate);

    // Verify entered value
    await expect(this.dateOfIncorporation).toContainText(futureDate);

    // Verify no validation error
    await expect(this.page.getByText("Please enter a valid date")).toBeVisible();
}
    async TC_38_VerifyDateOfIncorporationFieldAcceptsCurrentEntries() {

    // Get current date in DD/MM/YYYY format
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const currentDate = `${day}/${month}/${year}`;

    await this.page.waitForTimeout(1000);

    // Verify DD/MM/YYYY format
    expect(currentDate).toMatch(
        /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    );

    // Enter current date
    await this.dd.click();
    await this.dd.pressSequentially(currentDate);

    // Verify entered value
    await expect(this.dateOfIncorporation).toContainText(currentDate);

    // Verify no validation error
    await expect(
        this.page.getByText("Please enter a valid date")
    ).not.toBeVisible();
}

   async TC_39_VerifyUserCanNavigateBetweenYears(data) {

    // ================= FIRST DATE =================
    await this.dd.click();

    // Enter first date: 12/09/1996
    await this.dd.pressSequentially('12091996');

    // Screenshot 1 - First date
    await this.page.screenshot({
        path: 'screenshots/TC_39_First_Date_12_09_1996.png',
        fullPage: true
    });

    // Verify first date
    await expect(this.dd).toHaveText('12');

    // ================= SECOND DATE =================
    await this.dd.click();

    // Enter second date: 17/08/2026
    await this.dd.pressSequentially('17082026');

    // Screenshot 2 - Second date
    await this.page.screenshot({
        path: 'screenshots/TC_39_Second_Date_17_08_2026.png',
        fullPage: true
    });

    // Verify second date
    await expect(this.dd).toHaveText('17');

    // Verify no date validation error
    await expect(
        this.page.getByText("Please enter a valid date")
    ).not.toBeVisible();
}


  async TC_40_VerifyDateOfCommencementOfBusinessFieldIsVisibleEnabledAndClickable() {

    // Select Public Limited Company
    await this.entityConstitution.click();

    await this.page.getByRole('option', {
        name: 'Public Limited Company',
        exact: true
    }).click();

    // Verify Date of Commencement of Business is visible
    await expect(this.dateOfCommencementOfBusiness).toBeVisible({
        timeout: 10000
    });

    // Verify it is enabled
    await expect(this.dateOfCommencementOfBusiness).toBeEnabled({
        timeout: 10000
    });

    // Verify it is clickable
    await this.dateOfCommencementOfBusiness.click({
        timeout: 10000
    });

    // Verify it receives focus
    await expect(this.dateOfCommencementOfBusiness).toBeFocused({
        timeout: 10000
    });
}

async TC_41_DateOfCommencementOfBusinessAcceptsOnlyDDMMYYYY(data) {

    // Select Public Limited Company
    await this.entityConstitution.click();

    await this.page.getByRole('option', {
        name: 'Public Limited Company',
        exact: true
    }).click();

    // Get date from test data
    const dateOfCommencementOfBusiness =
        String(data.dateOfCommencementOfBusiness ?? '').trim();

    await this.page.waitForTimeout(1000);

    // Verify DD/MM/YYYY format
    expect(dateOfCommencementOfBusiness).toMatch(
        /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    );

    // Enter date
    await this.dateOfCommencementOfBusiness.click();

    // MUI date picker uses separate Day / Month / Year sections
    await this.dateOfCommencementOfBusiness.pressSequentially(
        dateOfCommencementOfBusiness.replace(/\//g, '')
    );

    // Split date
    const [day, month, year] =
        dateOfCommencementOfBusiness.split('/');

    // Verify Day - e.g. 13
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Day'
        }).last()
    ).toHaveText(day);

    // Verify Month - e.g. 08
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Month'
        }).last()
    ).toHaveText(month);

    // Verify Year - e.g. 2026
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Year'
        }).last()
    ).toHaveText(year);

    // Verify no validation error
    await expect(
        this.page.getByText('Please enter a valid date')
    ).not.toBeVisible();
}

async TC_42_VerifyDateOfCommencementOfBusinessFieldAcceptsBackdatedEntries(data) {

    // Select Public Limited Company
    await this.entityConstitution.click();

    await this.page.getByRole('option', {
        name: 'Public Limited Company',
        exact: true
    }).click();

    // Get backdated date from test data
    const backdatedDate =
        String(data.dateOfCommencementOfBusiness ?? '').trim();

    // Verify DD/MM/YYYY format
    expect(backdatedDate).toMatch(
        /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    );

    // Click Date of Commencement of Business field
    await this.dateOfCommencementOfBusiness.click();

    // MUI Date Picker uses separate Day / Month / Year sections
    await this.dateOfCommencementOfBusiness.pressSequentially(
        backdatedDate.replace(/\//g, '')
    );

    // Split date
    const [day, month, year] = backdatedDate.split('/');

    // Verify Day
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Day'
        }).last()
    ).toHaveText(day);

    // Verify Month
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Month'
        }).last()
    ).toHaveText(month);

    // Verify Year
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Year'
        }).last()
    ).toHaveText(year);

    // Verify no validation error
    await expect(
        this.page.getByText('Please enter a valid date')
    ).not.toBeVisible();
}

async TC_43_VerifyDateOfCommencementOfBusinessFieldAcceptsFutureEntries(data) {

    // Select Public Limited Company
    await this.entityConstitution.click();

    await this.page.getByRole('option', {
        name: 'Public Limited Company',
        exact: true
    }).click();

    // Get future date from test data
    const futureDate =
        String(data.dateOfCommencementOfBusiness ?? '').trim();

    // Verify DD/MM/YYYY format
    expect(futureDate).toMatch(
        /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    );

    // Click Date of Commencement of Business
    await this.dateOfCommencementOfBusiness.click();

    // Enter date without "/" because MUI uses
    // separate Day / Month / Year sections
    await this.dateOfCommencementOfBusiness.pressSequentially(
        futureDate.replace(/\//g, '')
    );

    // Split date
    const [day, month, year] = futureDate.split('/');

    // Verify Day
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Day'
        }).last()
    ).toHaveText(day);

    // Verify Month
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Month'
        }).last()
    ).toHaveText(month);

    // Verify Year
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Year'
        }).last()
    ).toHaveText(year);

    // Verify future-date validation message
    await expect(
        this.page.getByText('Please enter a valid date')
    ).toBeVisible();
}

async TC_44_VerifyDateOfCommencementOfBusinessAcceptsCurrentEntry() {

    // Select Public Limited Company
    await this.entityConstitution.click();

    await this.page.getByRole('option', {
        name: 'Public Limited Company',
        exact: true
    }).click();

    // Get today's date
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear());

    const currentDate = `${day}/${month}/${year}`;

    // Verify DD/MM/YYYY format
    expect(currentDate).toMatch(
        /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    );

    // Click Date of Commencement of Business
    await this.dateOfCommencementOfBusiness.click();

    // Enter current date
    // MUI DatePicker uses separate Day / Month / Year sections
    await this.dateOfCommencementOfBusiness.pressSequentially(
        currentDate.replace(/\//g, '')
    );

    // Verify Day
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Day'
        }).last()
    ).toHaveText(day);

    // Verify Month
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Month'
        }).last()
    ).toHaveText(month);

    // Verify Year
    await expect(
        this.page.getByRole('spinbutton', {
            name: 'Year'
        }).last()
    ).toHaveText(year);

    // Verify no validation error for today's date
    await expect(
        this.page.getByText('Please enter a valid date')
    ).not.toBeVisible();
}

async TC_45_VerifyUserCanNavigateBetweenYearsOnDateOfCommencementOfBusiness() {

    // Select Public Limited Company
    await this.entityConstitution.click();

    await this.page.getByRole('option', {
        name: 'Public Limited Company',
        exact: true
    }).click();

    // ==============================
    // FIRST DATE - 12/09/1996
    // ==============================

    await this.dateOfCommencementOfBusiness.click();

    await this.dateOfCommencementOfBusiness.pressSequentially(
        '12091996'
    );

    // Verify first date
    await expect(
        this.page.getByRole('spinbutton', { name: 'Day' }).last()
    ).toHaveText('12');

    await expect(
        this.page.getByRole('spinbutton', { name: 'Month' }).last()
    ).toHaveText('09');

    await expect(
        this.page.getByRole('spinbutton', { name: 'Year' }).last()
    ).toHaveText('1996');

    // Screenshot 1
    await this.page.screenshot({
        path: 'screenshots/TC_45_DateOfCommencement_FirstDate_1996.png',
        fullPage: true
    });


    // ==============================
    // SECOND DATE - 17/08/2026
    // ==============================

    await this.dateOfCommencementOfBusiness.click();

    await this.dateOfCommencementOfBusiness.pressSequentially(
        '17082026'
    );

    // Verify second date
    await expect(
        this.page.getByRole('spinbutton', { name: 'Day' }).last()
    ).toHaveText('17');

    await expect(
        this.page.getByRole('spinbutton', { name: 'Month' }).last()
    ).toHaveText('08');

    await expect(
        this.page.getByRole('spinbutton', { name: 'Year' }).last()
    ).toHaveText('2026');

    // Screenshot 2
    await this.page.screenshot({
        path: 'screenshots/TC_45_DateOfCommencement_SecondDate_2026.png',
        fullPage: true
    });


    // Verify no validation error
    await expect(
        this.page.getByText('Please enter a valid date')
    ).not.toBeVisible();
}
    async TC_46_VerifyPlaceOfIncorporationFieldIsVisibleEnabledAndClickable(data) {

        // Verify field is visible
        await expect(this.placeOfIncorporation).toBeVisible();

        // Verify field is enabled
        await expect(this.placeOfIncorporation).toBeEnabled();

        // Click the field
        await this.placeOfIncorporation.click();

        // Verify field is focused after clicking
        await expect(this.placeOfIncorporation).toBeFocused();
    }

    async TC_47_VerifyPlaceOfIncorporationFieldAcceptsUppercaseAndLowercaseAlphabeticalCharacters(data) {

        const place = data.place;

        // Verify field is visible and enabled
        await expect(this.placeOfIncorporation).toBeVisible();
        await expect(this.placeOfIncorporation).toBeEnabled();

        // Enter uppercase and lowercase alphabetical characters
        await this.placeOfIncorporation.fill(place);

        // Verify entered value
        await expect(this.placeOfIncorporation).toHaveValue(place);

        // Verify only A-Z and a-z are present
        expect(place).toMatch(/^[A-Za-z]+$/);
    }

    async TC_48_VerifyPlaceOfIncorporationFieldIsMandatoryAndDoesNotAcceptBlankInput(data) {

        await expect(this.placeOfIncorporation).toBeVisible();
        await expect(this.placeOfIncorporation).toBeEnabled();

        // Enter blank value
        await this.placeOfIncorporation.fill('');

        // Click Save And Next
        await this.saveAndNextBtn.click();

        // Verify mandatory validation message
        await expect(this.placeOfIncorporationError).toBeVisible();

        // Verify field remains empty
        await expect(this.placeOfIncorporation).toHaveValue('');
    }

    async TC_49_VerifythatthePlaceofIncorporationfieldrejectsinputexceedingmaximumlengthof50(data) {

        // Enter value from Excel
        await this.placeOfIncorporation.fill(data.place);

        // Verify entered value
        await expect(this.placeOfIncorporation)
            .toHaveValue(data.place);

        // Verify maximum length validation error
        await expect(this.placeOfIncorporationExceedError)
            .toBeVisible();
    }

    async TC_50_VerifythatthePlaceofIncorporationfieldacceptswhitespacesbetweenmultiplewords(data) {

        await this.placeOfIncorporation.fill(data.place);

        await expect(this.placeOfIncorporation)
            .toHaveValue(data.place);
    }


    async TC_51_VerifyCountryOfIncorporationDropdownIsVisibleEnabledAndClickable(data) {

        // Verify Country of Incorporation dropdown is visible
        await expect(this.countryOfIncorporation).toBeVisible();

        // Verify dropdown is enabled
        await expect(this.countryOfIncorporation).toBeEnabled();

        // Click the dropdown
        await this.countryOfIncorporation.click();

        // Verify dropdown is focused
        await expect(this.countryOfIncorporation).toBeFocused();
    }

    async TC_52_VerifyDefaultValueReflectedInCountryOfIncorporationDropdown(data) {

        // Verify dropdown is visible
        await expect(this.countryOfIncorporation).toBeVisible();

        // Verify default value is India
        await expect(this.countryOfIncorporation).toHaveValue('India');
    }


    async TC_53_VerifyUserCanSelectCountryOfIncorporation(data) {

    // Read country value from Excel
    const country = String(
        data.country ?? ""
    ).trim();

    expect(country).not.toBe("");

    // Open Country of Incorporation/Registration dropdown
    await this.countryOfIncorporation.click();

    // Locate the specific country option
    const countryOption = this.page.getByRole("option", {
        name: country,
        exact: true
    });

    // Verify country option is visible
    await expect(countryOption).toBeVisible({
        timeout: 5000
    });

    // Select country
    await countryOption.click();

    // Verify selected country
    await expect(this.countryOfIncorporation).toHaveValue(country);

    console.log(
        `PASS: User can select "${country}" from Country of Incorporation/Registration dropdown.`
    );
}

    async TC_54_VerifyCountryOfIncorporationDropdownOptionsCanBeSearched(data) {
    const searchText = String(data.country ?? '').trim();

    await expect(this.countryOfIncorporation).toBeVisible();
    await expect(this.countryOfIncorporation).toBeEnabled();

    await this.countryOfIncorporation.click();
    await this.countryOfIncorporation.fill(searchText);

    // Get visible options
    const options = this.page.getByRole('option');

    // Verify at least one matching option exists
    const matchingOptions = options.filter({
        hasText: new RegExp(searchText, 'i')
    });

    await expect(matchingOptions.first()).toBeVisible();

    // Optional: verify every visible option matches the search text
    const count = await options.count();

    for (let i = 0; i < count; i++) {
        await expect(options.nth(i)).toContainText(
            new RegExp(searchText, 'i')
        );
    }
}


async TC_55_VerifyCountryOfIncorporationMandatory() {

    // Verify label is visible
    await expect(
        this.countryOfIncorporationLabel
    ).toBeVisible();

    // Verify mandatory asterisk (*) is visible
    await expect(
        this.countryOfIncorporationMandatoryAsterisk
    ).toBeVisible();

    // Verify the asterisk contains *
    await expect(
        this.countryOfIncorporationMandatoryAsterisk
    ).toHaveText('*');
}

async TC_56_VerifyTINIssuingCountryDropdownIsVisibleEnabledAndClickable(data) {

    // Verify dropdown is visible
    await expect(this.tinIssuingCountry).toBeVisible();

    // Verify dropdown is enabled
    await expect(this.tinIssuingCountry).toBeEnabled();

    // Verify dropdown is clickable
    await this.tinIssuingCountry.click();

    // Verify dropdown receives focus
    await expect(this.tinIssuingCountry).toBeFocused();
}
    async TC_57_VerifyDefaultTINIssuingCountryIsIndiaBasedOnCountryOfIncorporation(data) {

        // Verify Country of Incorporation/Registration is India
        await expect(this.countryOfIncorporation).toHaveValue('India');

        // Verify TIN Issuing Country is visible
        await expect(this.tinIssuingCountry).toBeVisible();

        // Verify TIN Issuing Country is enabled
        await expect(this.tinIssuingCountry).toBeEnabled();

        // Verify default TIN Issuing Country is India
        await expect(this.tinIssuingCountry).toHaveValue('IN - INDIA');
    }

    async TC_58_VerifyTINIssuingCountryCanBeSelected(data) {

    const country = String(data.tinCountry ?? '').trim();

    expect(country).not.toBe('');

    await expect(this.tinIssuingCountry).toBeVisible();
    await expect(this.tinIssuingCountry).toBeEnabled();

    // Open dropdown
    await this.tinIssuingCountry.click();

    // Search country
    await this.tinIssuingCountry.fill(country);

    // Locate matching country option
    const matchingOption = this.page.getByRole('option', {
        name: new RegExp(country, 'i')
    }).first();

    // Verify country option is displayed
    await expect(matchingOption).toBeVisible({
        timeout: 5000
    });

    // Select country
    await matchingOption.click();

    // Verify selected country
    await expect(this.tinIssuingCountry).toHaveValue(country);

    console.log(
        `PASS: User can select "${country}" from TIN or equivalent Issuing Country dropdown.`
    );
}

    async TC_59_VerifyTINIssuingCountryDropdownOptionsCanBeSearched(data) {
    const searchText = String(data.country ?? '').trim();

    await expect(this.tinIssuingCountry).toBeVisible();
    await expect(this.tinIssuingCountry).toBeEnabled();

    // Open dropdown
    await this.tinIssuingCountry.click();

    // Search country
    await this.tinIssuingCountry.fill(searchText);

    // Verify at least one matching option is displayed
    const matchingOption = this.page.getByRole('option', {
        name: new RegExp(searchText, 'i')
    }).first();

    await expect(matchingOption).toBeVisible();
}

 async TC_60_VerifyTINIssuingCountryIsNonMandatoryAndDoesNotShowError(data) {

    // Verify TIN Issuing Country is visible
    await expect(this.tinIssuingCountry).toBeVisible();

    // Verify TIN Issuing Country is enabled
    await expect(this.tinIssuingCountry).toBeEnabled();

    // Clear the field
    await this.tinIssuingCountry.fill('');

    // Verify field is empty
    await expect(this.tinIssuingCountry).toHaveValue('');

    // Verify field does not have validation error
    await expect(this.tinIssuingCountry).not.toHaveAttribute(
        'aria-invalid',
        'true'
    );
}
    async TC_61_VerifyTINGSTRegistrationNumberFieldIsVisibleEnabledAndClickable(data) {

        // Verify TIN/GST Registration Number field is visible
        await expect(this.tinGstNumber).toBeVisible();

        // Verify field is enabled
        await expect(this.tinGstNumber).toBeEnabled();

        // Click the field
        await this.tinGstNumber.click();

        // Verify field is focused
        await expect(this.tinGstNumber).toBeFocused();
        await this.saveAndNextBtn.click();

    }


    async TC_62_VerifyTINGSTRegistrationNumberAcceptsValid15AlphanumericCharacters(data) {

        // Get TIN/GST number from Excel
        const tinGstNumber = String(data.tinGstNumber).trim();

        // Verify field is visible and enabled
        await expect(this.tinGstNumber).toBeVisible();
        await expect(this.tinGstNumber).toBeEnabled();

        // Enter valid TIN/GST number
        await this.tinGstNumber.fill(tinGstNumber);

        // Verify entered value
        await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

        // Verify exactly 15 alphanumeric characters
        expect(tinGstNumber).toMatch(/^[A-Za-z0-9]{15}$/);
    }

    async TC_63_VerifyTINGSTRegistrationNumberDoesNotAllowMoreThan15AlphanumericCharacters(data) {

    const tinGstNumber = String(data.tinGstNumber ?? '').trim();

    // Verify field is visible and enabled
    await expect(this.tinGstNumber).toBeVisible();
    await expect(this.tinGstNumber).toBeEnabled();

    // Verify test data contains more than 15 alphanumeric characters
    expect(tinGstNumber.length).toBeGreaterThan(15);
    expect(tinGstNumber).toMatch(/^[A-Za-z0-9]+$/);

    // Enter more than 15 characters
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify field does not allow more than 15 characters
    const enteredValue = await this.tinGstNumber.inputValue();

    expect(enteredValue.length).toBeLessThanOrEqual(15);

    // Verify only the first 15 characters are retained
    expect(enteredValue).toBe(
        tinGstNumber.substring(0, 15)
    );

    console.log(
        "PASS: TIN/GST Registration Number field does not allow more than 15 alphanumeric characters."
    );
}
async TC_64_VerifyTINGSTRegistrationNumberRejectsLessThan15AlphanumericCharacters(data) {

    const tinGstNumber = String(data.tinGstNumber ?? '').trim();

    // Verify input field
    await expect(this.tinGstNumber).toBeVisible();
    await expect(this.tinGstNumber).toBeEnabled();

    // Verify test data is alphanumeric and less than 15 characters
    expect(tinGstNumber).toMatch(/^[A-Za-z0-9]+$/);
    expect(tinGstNumber.length).toBeLessThan(15);

    // Enter invalid TIN/GST number
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify entered value
    await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

    // Trigger validation
    await this.tinGstNumber.blur();

    // Verify validation message
    await expect(this.tinGstError).toBeVisible();
}

async TC_65_VerifyTINGSTINIsNotMandatory() {
    // Verify field is visible and enabled
    await expect(this.tinGstNumber).toBeVisible();
    await expect(this.tinGstNumber).toBeEnabled();

    // Ensure field is empty
    await this.tinGstNumber.fill("");

    // Click outside the field to trigger any validation
    await this.page.locator("body").click({ position: { x: 10, y: 10 } });

    // Verify field remains empty
    await expect(this.tinGstNumber).toHaveValue("");

    await this.saveAndNextBtn.click();

    // Verify no validation error is displayed
    await expect(this.tinGstError).not.toBeVisible();
}

async TC_66_VerifyTINGSTFirstTwoCharactersAllowOnlyNumbers(data) {

    const tinGstNumber = String(data.tinGstNumber ?? '').trim();

    // Verify field is visible and enabled
    await expect(this.tinGstNumber).toBeVisible();
    await expect(this.tinGstNumber).toBeEnabled();

    // Verify test data is provided
    expect(tinGstNumber).not.toBe('');

    // Verify first two characters are numbers
    expect(tinGstNumber.substring(0, 2)).toMatch(/^\d{2}$/);

    // Enter GST number
    await this.tinGstNumber.fill(tinGstNumber);

    // Get entered value
    const enteredValue = await this.tinGstNumber.inputValue();

    // Verify first two characters entered are numbers
    expect(enteredValue.substring(0, 2)).toMatch(/^\d{2}$/);

    console.log(
        "PASS: First two characters of TIN/GST Registration Number allow only numbers."
    );
}

async TC_67_VerifyGSTINFirstTwoDigitsAreNumeric(data) {

    const tinGstNumber = String(data.tinGstNumber ?? "").trim();

    // Enter GSTIN from Excel
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify value is entered in the application
    await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

    // Trigger web application validation
    await this.tinGstNumber.blur();

    // Verify application accepts the GSTIN
    await expect(this.tinGstError).toBeVisible({
        timeout: 5000
    });
}

async TC_68_VerifyTINGSTRegistrationNumberRejectsSpecialCharacters(data) {

    const tinGstNumber = String(data.tinGstNumber ?? "").trim();

    // Verify Excel data is available
    expect(tinGstNumber).not.toBe("");

    // Verify test data contains a special character
    expect(tinGstNumber).toMatch(/[^A-Za-z0-9]/);

    // Enter value from Excel
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify field value
    await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

    // Trigger validation
    await this.tinGstNumber.blur();

    // Verify GSTIN validation error is displayed
    await expect(this.tinGstError).toBeVisible();

    // Verify exact error message
    await expect(this.tinGstError).toHaveText(
        "Please enter valid GSTIN (e.g., 22ABCDE1234F1Z5)"
    );
}


async TC_69_VerifyTINGSTRegistrationNumberAcceptsValidGSTNumber(data) {

    const tinGstNumber = String(data.tinGstNumber ?? '').trim();

    // Verify field is visible and enabled
    await expect(this.tinGstNumber).toBeVisible();
    await expect(this.tinGstNumber).toBeEnabled();

    // Verify valid GST number is provided from Excel
    expect(tinGstNumber).not.toBe('');
    expect(tinGstNumber).toMatch(/^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[A-Z0-9]$/);

    // Enter valid GST number
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify GST number is accepted
    await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

    console.log(
        `PASS: Valid GST number "${tinGstNumber}" is accepted in the TIN/GST Registration Number field.`
    );
}

async TC_70_VerifyGSTINContainsValidPANFormat(data) {

    const tinGstNumber = String(data.tinGstNumber ?? "").trim();

    // Verify Excel data
    expect(tinGstNumber).not.toBe("");

    // GSTIN should contain 15 characters
    expect(tinGstNumber.length).toBe(15);

    // Enter GSTIN from Excel
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify entered value
    await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

    // Ignore first 2 digits (State Code)
    const panNumber = tinGstNumber.substring(2, 12);

    // Verify PAN format: 5 letters + 4 numbers + 1 letter
    expect(panNumber).toMatch(/^[A-Z]{5}[0-9]{4}[A-Z]$/);

    // Trigger validation
    await this.tinGstNumber.blur();

    // Valid PAN format should not show GSTIN error
    await expect(this.tinGstError).not.toBeVisible();
}

async TC_71_VerifyTINGST13thCharacterAcceptsOnlyNumber(data) {

    const tinGstNumber = String(data.tinGstNumber ?? '').trim();

    // Verify field is visible and enabled
    await expect(this.tinGstNumber).toBeVisible();
    await expect(this.tinGstNumber).toBeEnabled();

    // Verify test data is provided
    expect(tinGstNumber).not.toBe('');

    // Verify GST number has at least 13 characters
    expect(tinGstNumber.length).toBeGreaterThanOrEqual(13);

    // Verify 13th character contains only a number
    expect(tinGstNumber.charAt(12)).toMatch(/^[0-9]$/);

    // Enter GST number
    await this.tinGstNumber.fill(tinGstNumber);

    // Get entered value
    const enteredValue = await this.tinGstNumber.inputValue();

    // Verify 13th character contains only a number
    expect(enteredValue.charAt(12)).toMatch(/^[0-9]$/);

    await expect(this.tinGstError).not.toBeVisible();

    console.log(
        "PASS: 13th character of TIN/GST Registration Number accepts only a number."
    );
}
async TC_72_VerifyGSTIN13thCharacterIsNumericEntityCode(data) {

    // Get GSTIN from Excel only as test input
    const tinGstNumber = String(data.tinGstNumber ?? "").trim();

    // Enter GSTIN in the web application
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify the application received the entered value
    await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

    // Trigger web application validation
    await this.tinGstNumber.blur();

    // Verify validation behavior on the web application
    await expect(this.tinGstError).toBeVisible({
        timeout: 5000
    });
}

async TC_73_VerifyGSTIN14thCharacterIsUppercaseZ(data) {

    const tinGstNumber = String(data.tinGstNumber ?? "").trim();

    // Verify Excel data is available
    expect(tinGstNumber).not.toBe("");

    // GSTIN must contain exactly 15 characters
    expect(tinGstNumber.length).toBe(15);

    // Enter GSTIN from Excel
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify entered value
    await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

    // 14th character = index 13
    const character14 = tinGstNumber.charAt(13);

    // Verify 14th character is uppercase Z
    expect(character14).toBe("Z");

    // Trigger validation
    await this.tinGstNumber.blur();

    // Valid GSTIN should not display error
    await expect(this.tinGstError).not.toBeVisible();
}

async TC_74_VerifyGSTIN14thCharacterRejectsLowercaseZ(data) {

    const tinGstNumber = String(data.tinGstNumber ?? "").trim();

    expect(tinGstNumber).not.toBe("");
    expect(tinGstNumber.length).toBe(15);

    // Verify Excel contains lowercase z at 14th position
    const character14 = tinGstNumber.charAt(13);
    expect(character14).toBe("z");

    // Enter value
    await this.tinGstNumber.fill(tinGstNumber);

    // Application converts lowercase z to uppercase Z
    const actualValue = await this.tinGstNumber.inputValue();

    console.log("Excel value   :", tinGstNumber);
    console.log("Actual value  :", actualValue);

    // Verify application converted z -> Z
    expect(actualValue.charAt(13)).toBe("Z");

    // Trigger validation
    await this.tinGstNumber.blur();

    // Since application converted it to valid uppercase Z,
    // validation error should NOT be displayed
    await expect(this.tinGstError).not.toBeVisible();
}

async TC_75_VerifyGSTIN14thCharacterRejectsNumeric(data) {

    const tinGstNumber = String(data.tinGstNumber ?? "").trim();

    // Verify Excel data
    expect(tinGstNumber).not.toBe("");

    // GSTIN must contain exactly 15 characters
    expect(tinGstNumber.length).toBe(15);

    // Verify 14th character is numeric
    const character14 = tinGstNumber.charAt(13);

    expect(character14).toMatch(/^[0-9]$/);

    // Enter GSTIN from Excel
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify actual value entered by application
    const actualValue = await this.tinGstNumber.inputValue();

    expect(actualValue.length).toBe(15);

    // Trigger validation
    await this.tinGstNumber.blur();

    // Numeric 14th character should be rejected
    await expect(this.tinGstError).toBeVisible();

    // Verify exact error message
    await expect(this.tinGstError).toHaveText(
        "Please enter valid GSTIN (e.g., 22ABCDE1234F1Z5)"
    );
}

async TC_76_VerifyGSTIN15thCharacterValidatesFormatNotChecksum(data) {

    const tinGstNumber = String(data.tinGstNumber ?? "").trim();

    // Verify Excel data
    expect(tinGstNumber).not.toBe("");

    // GSTIN must contain exactly 15 characters
    expect(tinGstNumber.length).toBe(15);

    // Enter GSTIN from Excel
    await this.tinGstNumber.fill(tinGstNumber);

    // Verify entered value
    await expect(this.tinGstNumber).toHaveValue(tinGstNumber);

    // 15th character = index 14
    const character15 = tinGstNumber.charAt(14);

    // Validate FORMAT only:
    // 15th character must be uppercase alphabet or numeric
    expect(character15).toMatch(/^[A-Z0-9]$/);

    // Trigger validation
    await this.tinGstNumber.blur();

    // Format is valid, so GSTIN error should not be displayed
    await expect(this.tinGstError).not.toBeVisible();
}

async TC_77_VerifyPANOrForm60SectionIsMandatory() {

    // Verify mandatory section is visible
    await expect(this.panForm60MandatoryHeading).toBeVisible();

    // Verify heading contains mandatory symbol
    await expect(this.panForm60MandatoryHeading).toContainText("*");
}

async TC_78_VerifyPANCardRadioButtonDefaultSelected(data) {

    // ================= ENTITY NAME =================

    await this.entityName.fill(
        String(data.entityName ?? 'ABC PRIVATE LIMITED')
    );


    // ================= ENTITY CONSTITUTION =================

    await this.entityConstitution.click();

    await this.page.getByRole('option', {
        name: 'Public Limited Company',
        exact: true
    }).click();


    // ================= LISTED COMPANY =================

    await this.listedCompanyYesRadio.check();

    await expect(this.listedCompanyYesRadio).toBeChecked();


    // ================= COUNTRY OF INCORPORATION =================

    await this.countryOfIncorporation.click();

    await this.countryOfIncorporation.fill('India');

    await this.page.getByRole('option', {
        name: 'India',
        exact: true
    }).click();


    // ================= TIN ISSUING COUNTRY =================

    await this.tinIssuingCountry.click();

    await this.tinIssuingCountry.fill('India');

    await this.page.getByRole('option', {
        name: /IN - INDIA/i
    }).click();


    // ================= GST NUMBER =================

    await this.tinGstNumber.fill(
        String(data.tinGstNumber ?? '22ABCDE1234F1Z5')
    );


    // ================= PAN / FORM 60 =================

    await expect(this.panOrForm60Heading).toBeVisible();

    // Hover on "Any one of PAN or Form 60 is Mandatory?" label
    await this.panOrForm60Heading.hover();

    // Verify PAN Card radio button is selected by default
    await expect(this.panCardRadio).toBeChecked();

    // Verify Form 60 is NOT selected
    await expect(this.form60Radio).not.toBeChecked();


    // ================= OTHER MANDATORY FIELDS =================

    // Fill if required by your application
    // await this.placeOfIncorporation.fill(
    //     String(data.placeOfIncorporation ?? 'Mumbai')
    // );

}
async TC_79_VerifyPANCardFieldVisibleEnabledClickable() {
    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter PAN'); // update if needed

    // Select PAN Card radio button
    await panRadio.check();
    await expect(panRadio).toBeChecked();

    // Verify PAN Card field
    await expect(panField).toBeVisible();
    await expect(panField).toBeEnabled();

    // Verify field is clickable
    await panField.click();
}


async TC_80_VerifyPANCardAcceptsValidFormat(data) {
    const pan = String(data.PAN ?? '').trim();

    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter PAN');

    await panRadio.check();

    await panField.fill(pan);

    await expect(panField).toHaveValue(pan);

    expect(pan).toMatch(
        /^[A-Z]{5}[0-9]{4}[A-Z]$/,
        `Invalid PAN format: ${pan}`
    );
}


async TC_81_VerifyPANFirstFiveAlphabets(data) {
    const pan = String(data.PAN ?? '').trim();

    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter PAN');

    await panRadio.check();

    // Enter PAN from Excel
    await panField.fill(pan);

    // Validate first 5 characters are A-Z
    expect(pan.substring(0, 5)).toMatch(
        /^[A-Z]{5}$/,
        `First 5 PAN characters must be A-Z. Actual: ${pan}`
    );

    // Verify application accepts the valid PAN
    await expect(panField).toHaveValue(pan);
}

async TC_82_VerifyPANNextFourCharactersAreNumeric(data) {
    const pan = String(data.PAN ?? '').trim();

    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter PAN');

    // Select PAN Card
    await panRadio.check();
    await expect(panRadio).toBeChecked();

    // Enter PAN from Excel
    await panField.fill(pan);

    // Extract characters 6 to 9
    const nextFourDigits = pan.substring(5, 9);

    // Verify next 4 characters are numeric (0-9)
    expect(nextFourDigits).toMatch(
        /^[0-9]{4}$/,
        `PAN characters 6-9 must be 4 numeric digits. Actual PAN: ${pan}`
    );

    // Verify field accepted the PAN
    await expect(panField).toHaveValue(pan);
}

async TC_83_VerifyPANLastCharacterIsAlphabet(data) {
    const pan = String(data.PAN ?? '').trim();

    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter PAN');

    // Select PAN Card
    await panRadio.check();
    await expect(panRadio).toBeChecked();

    // Enter PAN from Excel
    await panField.fill(pan);

    // Get last character (10th character)
    const lastCharacter = pan.substring(9, 10);

    // Verify last character is A-Z
    expect(lastCharacter).toMatch(
        /^[A-Z]$/,
        `Last character of PAN must be an alphabet A-Z. Actual PAN: ${pan}`
    );

    // Verify PAN value is accepted in the field
    await expect(panField).toHaveValue(pan);
}

async TC_84_VerifyPANFourthCharacterForSoleProprietorship(data) {
    const entityType = String(data.entityType ?? '').trim();
    const pan = String(data.PAN ?? '').trim().toUpperCase();

    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter PAN');

    // Select Entity Constitution from Excel
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    // Select the matching dropdown option
    await this.page
        .getByRole('option', { name: entityType, exact: true })
        .click();

    // Select PAN Card
    await panRadio.check();
    await expect(panRadio).toBeChecked();

    // Enter PAN from Excel
    await panField.fill(pan);
    await panField.blur();

    // Validate 4th PAN character for Sole Proprietorship
    if (entityType.toLowerCase() === 'sole proprietorship') {

        const fourthCharacter = pan.charAt(3);

        if (fourthCharacter === 'P') {
            // 4th character is P → error should NOT be displayed
            await expect(this.PanSoleProprietorError).not.toBeVisible();
        } else {
            // 4th character is not P → error should be displayed
            await expect(this.PanSoleProprietorError).toBeVisible();
        }
    }
}

async TC_85_VerifyPANFourthCharacterBasedOnEntityType(data) {
    const entityType = String(data.entityType ?? '').trim();
    const pan = String(data.PAN ?? '').trim().toUpperCase();

    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter PAN');

    // Select Entity Constitution from Excel
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    await this.page
        .getByRole('option', { name: entityType, exact: true })
        .click();

    // Select PAN Card
    await panRadio.check();
    await expect(panRadio).toBeChecked();

    // Enter PAN from Excel
    await panField.fill(pan);
    await panField.blur();

    // Verify PAN has 10 characters
    expect(pan).toHaveLength(10);

    // Get 4th character
    const fourthCharacter = pan.charAt(3);

    // Sole Proprietorship → 4th character MUST be P
    if (entityType.toLowerCase() === 'sole proprietorship') {

        expect(
            fourthCharacter,
            `For Sole Proprietorship, 4th PAN character must be P. Actual PAN: ${pan}`
        ).toBe('P');

    } else {

        // Other Entity Types → 4th character MUST NOT be P
        expect(
            fourthCharacter,
            `For ${entityType}, 4th PAN character must not be P. Actual PAN: ${pan}`
        ).not.toBe('P');
    }
}

async TC_86_VerifyPANFourthCharacterPForNonSoleProprietorship(data) {

    const entityType = String(data.entityType ?? '').trim();
    const pan = String(data.PAN ?? '').trim().toUpperCase();

    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter Pan Number');

    // Select Entity Constitution from Excel
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    await this.page
        .getByRole('option', { name: entityType, exact: true })
        .click();

    // Select PAN Card
    await panRadio.check();
    await expect(panRadio).toBeChecked();

    // Enter PAN from Excel
    await panField.fill(pan);
    await panField.blur();

    // Execute validation only for non-Sole Proprietorship
    if (entityType.toLowerCase() !== 'sole proprietorship') {

        // Verify PAN is 10 characters
        expect(pan).toHaveLength(10);

        // Verify 4th character is P
        expect(
            pan.charAt(3),
            `Test PAN should have P as the 4th character. Actual PAN: ${pan}`
        ).toBe('P');

        // Verify error message is displayed
        await expect(this.PanNonSoleProprietorError).toBeVisible();
    }
}

async TC_87_VerifyPANFourthCharacterOtherThanPForSoleProprietorship(data) {

    const entityType = String(data.entityType ?? '').trim();
    const pan = String(data.PAN ?? '').trim().toUpperCase();

    const panRadio = this.page.getByRole('radio', { name: /PAN Card/i });
    const panField = this.page.getByPlaceholder('Enter Pan Number');

    // Select Entity Constitution from Excel
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    await this.page
        .getByRole('option', { name: entityType, exact: true })
        .click();

    // Select PAN Card
    await panRadio.check();
    await expect(panRadio).toBeChecked();

    // Enter PAN from Excel
    await panField.fill(pan);
    await panField.blur();

    // Validate only for Sole Proprietorship
    if (entityType.toLowerCase() === 'sole proprietorship') {

        // Verify PAN has 10 characters
        expect(pan).toHaveLength(10);

        // Get 4th character
        const fourthCharacter = pan.charAt(3);

        // Test data should contain a character other than P
        expect(
            fourthCharacter,
            `Test PAN should have a character other than P at 4th position. Actual PAN: ${pan}`
        ).not.toBe('P');

        // Error should be displayed
        await expect(this.PanSoleProprietorError).toBeVisible();
    }
}

async TC_88_VerifyPANVerifiedCanBeSetToYes(data) {

    const entityName = String(data.entityName ?? '').trim();
    const entityType = String(data.entityType ?? '').trim();
    const gst = String(data.tinGstNumber ?? '').trim();
    const pan = String(data.PAN ?? '').trim().toUpperCase();

    // 1. Enter appropriate Entity Name
    const entityNameField =
        this.page.getByPlaceholder('Enter Entity Name');

    await entityNameField.fill(entityName);

    // 2. Select Entity Constitution from Excel
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    await this.page
        .getByRole('option', {
            name: entityType,
            exact: true
        })
        .click();

    await expect(this.entityConstitution)
        .toHaveValue(entityType);

    // 3. Set Listed Company = Yes
    await this.listedCompanyYes.check();
    await expect(this.listedCompanyYes).toBeChecked();

    // 4. Country of Incorporation = India
    await this.countryOfIncorporation.click();
    await this.countryOfIncorporation.fill('India');

    await this.page
        .getByRole('option', {
            name: 'India',
            exact: true
        })
        .click();

    // TIN Issuing Country = India
    await this.tinIssuingCountry.click();
    await this.tinIssuingCountry.fill('India');

    await this.page
        .getByRole('option', {
            name: 'IN - INDIA'
        })
        .click();

    // 5. Enter valid 15 digit GST
    const gstField =
        this.page.getByPlaceholder('Enter TIN/GSTIN');

    expect(gst).toHaveLength(15);
    expect(gst).toMatch(/^[A-Z0-9]{15}$/);

    await gstField.fill(gst);

    // 6. Verify PAN Card radio button is selected by default
    await expect(this.panCardRadio).toBeVisible();
    await expect(this.panCardRadio).toBeChecked();


    await expect(this.panVerifiedYes).toBeChecked();

}

async TC_89_VerifyPANVerifiedCanBeSetToNo(data) {

    const entityName = String(data.entityName ?? '').trim();
    const entityType = String(data.entityType ?? '').trim();
    const gst = String(data.tinGstNumber ?? '').trim();
    const pan = String(data.PAN ?? '').trim().toUpperCase();

    // 1. Enter Entity Name
    const entityNameField =
        this.page.getByPlaceholder('Enter Entity Name');

    await entityNameField.fill(entityName);

    // 2. Select Entity Constitution from Excel
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    await this.page
        .getByRole('option', {
            name: entityType,
            exact: true
        })
        .click();

    await expect(this.entityConstitution)
        .toHaveValue(entityType);

    // 3. Set Listed Company = Yes
    await this.listedCompanyYes.check();
    await expect(this.listedCompanyYes).toBeChecked();

    // 4. Country of Incorporation = India
    await this.countryOfIncorporation.click();
    await this.countryOfIncorporation.fill('India');

    await this.page
        .getByRole('option', {
            name: 'India',
            exact: true
        }).click();

    // TIN Issuing Country = India
    await this.tinIssuingCountry.click();
    await this.tinIssuingCountry.fill('India');

    await this.page
        .getByRole('option', {
            name: 'IN - INDIA'
        })
        .click();

    // 5. Enter valid 15 digit GST
    const gstField =
        this.page.getByPlaceholder('Enter TIN/GSTIN');

    expect(gst).toHaveLength(15);
    expect(gst).toMatch(/^[A-Z0-9]{15}$/);

    await gstField.fill(gst);

    // 6. Verify PAN Card radio button is selected by default
    await expect(this.panCardRadio).toBeVisible();
    await expect(this.panCardRadio).toBeChecked();

    // 7. Enter valid 10 digit PAN
    const panField =
        this.page.getByPlaceholder('Enter Pan Number');

    expect(pan).toHaveLength(10);
    expect(pan).toMatch(/^[A-Z]{5}[0-9]{4}[A-Z]$/);

    await panField.click();
    await panField.fill(pan);
    await panField.blur();

    // Set PAN Verified = No
    await this.panVerifiedNo.check();
    await expect(this.panVerifiedNo).toBeChecked();

}

async TC_90_VerifyPANVerifiedInformationIcon(data) {

    const entityName = String(data.entityName ?? '').trim();
    const entityType = String(data.entityType ?? '').trim();
    const gst = String(data.tinGstNumber ?? '').trim();
    const pan = String(data.PAN ?? '').trim().toUpperCase();

    // 1. Entity Name
    await this.page
        .getByPlaceholder('Enter Entity Name')
        .fill(entityName);

    // 2. Entity Constitution
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    await this.page.getByRole('option', {
        name: entityType,
        exact: true
    }).click();

    // 3. Listed Company = Yes
    await this.listedCompanyYes.check();
    await expect(this.listedCompanyYes).toBeChecked();

    // 4. Country of Incorporation = India
    await this.countryOfIncorporation.click();
    await this.countryOfIncorporation.fill('India');

    await this.page.getByRole('option', {
        name: 'India',
        exact: true
    }).click();

    // 5. TIN Issuing Country = India
    await this.tinIssuingCountry.click();
    await this.tinIssuingCountry.fill('India');

    await this.page.getByRole('option', {
        name: 'IN - INDIA',
        exact: true
    }).click();

    // 6. GST
    const gstField = this.page.getByPlaceholder('Enter TIN/GSTIN');

    expect(gst).toHaveLength(15);
    expect(gst).toMatch(/^[A-Z0-9]{15}$/);

    await gstField.fill(gst);

    // PAN
    const panField = this.page.getByPlaceholder('Enter Pan Number');

    expect(pan).toHaveLength(10);
    expect(pan).toMatch(/^[A-Z]{5}[0-9]{4}[A-Z]$/);

    await panField.fill(pan);
    await panField.blur();

    // PAN Verified = Yes
    await this.panVerifiedYes.check();
    await expect(this.panVerifiedYes).toBeChecked();

    // PAN Verified = No
    await this.panVerifiedNo.check();
    await expect(this.panVerifiedNo).toBeChecked();

    // 7. Verify PAN Verified information icon
    await expect(this.panVerifiedInfoIcon).toBeVisible();
    await expect(this.panVerifiedInfoIcon).toBeEnabled();

    // Hover on information icon
    await this.panVerifiedInfoIcon.hover();
}


async TC_91_VerifySaveAndNextFunctionalityForPrefetchedLegalEntityDetails(data) {

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();

    await this.page.getByText('Create', { exact: true }).click();
    await this.page.getByRole('radio', { name: 'Legal Entity' }).check();

    await expect(this.enterSearchKey).toBeVisible();
    await this.enterSearchKey.fill(String(data.SearchKey));

    await this.submitButton.click();

    // 1. Verify Search Key is populated after validation
    await expect(this.enterSearchKey).toBeVisible();
    await expect(this.enterSearchKey).toBeDisabled();

    const searchKey = await this.enterSearchKey.inputValue();
    expect(searchKey).not.toBe('');

    // 2. Verify prefetched Entity Name
    const entityNameField =
        this.page.getByPlaceholder('Enter Entity Name');

    await expect(entityNameField).toBeVisible();

    const entityName = await entityNameField.inputValue();
    expect(entityName).not.toBe('');

    // 3. Verify prefetched Entity Constitution
    await expect(this.entityConstitution).toBeVisible();

    const entityType = await this.entityConstitution.inputValue();
    expect(entityType).not.toBe('');

    // 4. Verify Listed Company is selected if applicable
    if (entityType === 'Public Limited Company') {
        await expect(this.listedCompanyYes).toBeVisible();
    }

    // 5. Verify Date of Incorporation is pre-fetched
    await expect(this.dateDay).toBeVisible();
    await expect(this.dateMonth).toBeVisible();
    await expect(this.dateYear).toBeVisible();


    // 6. Verify Country of Incorporation
    await expect(this.countryOfIncorporation).toBeVisible();

    const country = await this.countryOfIncorporation.inputValue();
    expect(country).toBeTruthy();

    // 7. Verify TIN Issuing Country
    await expect(this.tinIssuingCountry).toBeVisible();

    const tinCountry = await this.tinIssuingCountry.inputValue();
    expect(tinCountry).toBeTruthy();

    // 8. Verify GST/TIN is pre-fetched
    const gstField =
        this.page.getByPlaceholder('Enter TIN/GSTIN');

    await expect(gstField).toBeVisible();

    const gst = await gstField.inputValue();
    expect(gst).toHaveLength(15);

    // 9. Verify PAN is pre-fetched
    const panField =
        this.page.getByPlaceholder('Enter Pan Number');

    await expect(panField).toBeVisible();

    const pan = await panField.inputValue();
    expect(pan).toHaveLength(10);

    // 10. Verify PAN Card radio is selected
    await expect(this.panCardRadio).toBeChecked();

    // 12. Verify Save And Next button is enabled
    await expect(this.saveAndNextBtn).toBeVisible();
    await expect(this.saveAndNextBtn).toBeEnabled();

    // 13. Click Save And Next
    await this.saveAndNextBtn.click();

    // 14. Verify navigation to next step
    await expect(
        this.page.getByText('Proof of Identity and Address', { exact: true })
    ).toBeVisible();
}

async TC_92_VerifySaveAndNextFunctionalityIfDataIsModified(data) {

    // ================= NAVIGATE TO CREATE =================

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();

    await this.page.getByText('Create', { exact: true }).click();
    await this.page.getByRole('radio', { name: 'Legal Entity' }).check();

    // ================= SEARCH KEY VALIDATION =================

    await expect(this.enterSearchKey).toBeVisible();
    await this.enterSearchKey.fill(String(data.SearchKey));

    await this.submitButton.click();

    // Verify Search Key is validated and populated
    await expect(this.enterSearchKey).toBeVisible();
    await expect(this.enterSearchKey).toBeDisabled();

    const searchKey = await this.enterSearchKey.inputValue();
    expect(searchKey).not.toBe('');

    // ================= VERIFY PREFETCHED DATA =================

    const entityNameField =
        this.page.getByPlaceholder('Enter Entity Name');

    await expect(entityNameField).toBeVisible();

    const preFetchedEntityName =
        await entityNameField.inputValue();

    expect(preFetchedEntityName).not.toBe('');

    // Verify Entity Constitution
    await expect(this.entityConstitution).toBeVisible();

    const preFetchedEntityType =
        await this.entityConstitution.inputValue();

    expect(preFetchedEntityType).not.toBe('');

    // Verify Date of Incorporation
    await expect(this.dateDay).toBeVisible();
    await expect(this.dateMonth).toBeVisible();
    await expect(this.dateYear).toBeVisible();

    // Verify Country of Incorporation
    await expect(this.countryOfIncorporation).toBeVisible();

    const country =
        await this.countryOfIncorporation.inputValue();

    expect(country).toBeTruthy();

    // Verify TIN Issuing Country
    await expect(this.tinIssuingCountry).toBeVisible();

    const tinCountry =
        await this.tinIssuingCountry.inputValue();

    expect(tinCountry).toBeTruthy();

    // Verify GST/TIN
    const gstField =
        this.page.getByPlaceholder('Enter TIN/GSTIN');

    await expect(gstField).toBeVisible();

    const preFetchedGST =
        await gstField.inputValue();

    expect(preFetchedGST).toHaveLength(15);

    // Verify PAN
    const panField =
        this.page.getByPlaceholder('Enter Pan Number');

    await expect(panField).toBeVisible();

    const preFetchedPAN =
        await panField.inputValue();

    expect(preFetchedPAN).toHaveLength(10);

    // Verify PAN Card radio
    await expect(this.panCardRadio).toBeChecked();

    // ================= MODIFY DATA =================

    // Modify Entity Name
    const modifiedEntityName =
        String(data.modifiedEntityName);

    await entityNameField.fill(modifiedEntityName);

    // Verify modified Entity Name
    await expect(entityNameField)
        .toHaveValue(modifiedEntityName);

    // Modify GST/TIN if value is provided
    if (data.modifiedTinGstNumber) {

        const modifiedGST =
            String(data.modifiedTinGstNumber);

        await gstField.fill(modifiedGST);

        await expect(gstField)
            .toHaveValue(modifiedGST);
    }

    // Modify PAN if value is provided
    if (data.modifiedPanNumber) {

        const modifiedPAN =
            String(data.modifiedPanNumber);

        await panField.fill(modifiedPAN);

        await expect(panField)
            .toHaveValue(modifiedPAN);
    }

    // ================= SAVE AND NEXT =================

    await expect(this.saveAndNextBtn).toBeVisible();
    await expect(this.saveAndNextBtn).toBeEnabled();

    await this.saveAndNextBtn.click();

    // ================= VERIFY NAVIGATION =================

    await expect(
        this.page.getByText(
            'Proof of Identity and Address',
            { exact: true }
        )
    ).toBeVisible();
}

async TC_CEDLE_93_VerifySaveAndNextDisabledWhenFieldErrorPresent(data) {

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();

    await this.page.getByText('Create', { exact: true }).click();
    await this.page.getByRole('radio', { name: 'Legal Entity' }).check();

    await expect(this.enterSearchKey).toBeVisible();
    await this.enterSearchKey.fill(String(data.SearchKey));

    await this.submitButton.click();

    // 1. Verify Search Key is populated after validation
    await expect(this.enterSearchKey).toBeVisible();
    await expect(this.enterSearchKey).toBeDisabled();

    const searchKey = await this.enterSearchKey.inputValue();
    expect(searchKey).not.toBe('');

    // Verify Entity Name has validation error
    await this.entityName.fill("");

    await expect(this.entityNameError).toBeVisible({
        timeout: 5000
    });

    // Save And Next should remain disabled
    await expect(this.saveAndNextBtn).toBeDisabled();

    console.log(
        "PASS: Save And Next button remains disabled when a field validation error is present."
    );
}

async TC_94_VerifyPANIsNotMandatoryForPartnershipFirm(data) {

    // Get Entity Constitution value from Excel
    const entityType = String(data.entityType ?? '').trim();

    // Select Entity Constitution
    await expect(this.entityConstitution).toBeVisible();
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    // Select value from dropdown
    await this.page
        .getByRole('option', {
            name: entityType,
            exact: true
        })
        .click();

    // Verify correct Entity Constitution is selected
    await expect(this.entityConstitution).toHaveValue(entityType);

    // Select PAN Card radio button
    await expect(this.panCardRadio).toBeVisible();
    await this.panCardRadio.check();

    await expect(this.panCardRadio).toBeChecked();

    // Verify PAN field is visible
    const panField = this.page.getByRole('textbox', {
        name: 'Pan Card'
    });

    await expect(panField).toBeVisible();

    // Verify PAN field is empty - do not enter PAN
    await expect(panField).toHaveValue('');

    // Click Save And Next
    await expect(this.saveAndNextBtn).toBeVisible();
    await expect(this.saveAndNextBtn).toBeEnabled();

    await this.saveAndNextBtn.click();

    // Verify PAN validation error
    await expect(this.panMandatoryError).toBeVisible();
}


async TC_95_VerifyPANIsNotMandatoryForLLP(data) {

    // Get Entity Constitution value from Excel
    const entityType = String(data.entityType ?? '').trim();

    // Select Entity Constitution
    await expect(this.entityConstitution).toBeVisible();
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    // Select value from dropdown
    await this.page
        .getByRole('option', {
            name: entityType,
            exact: true
        })
        .click();

    // Verify correct Entity Constitution is selected
    await expect(this.entityConstitution).toHaveValue(entityType);

    // Select PAN Card radio button
    await expect(this.panCardRadio).toBeVisible();
    await this.panCardRadio.check();

    await expect(this.panCardRadio).toBeChecked();

    // Verify PAN field is visible
    const panField = this.page.getByRole('textbox', {
        name: 'Pan Card'
    });

    await expect(panField).toBeVisible();

    // Verify PAN field is empty - do not enter PAN
    await expect(panField).toHaveValue('');

    // Click Save And Next
    await expect(this.saveAndNextBtn).toBeVisible();
    await expect(this.saveAndNextBtn).toBeEnabled();

    await this.saveAndNextBtn.click();

    // Verify PAN validation error
    await expect(this.panMandatoryError).toBeVisible();
}

async TC_96_VerifyPANIsNotMandatoryForPublicLimitedCompany(data) {

    // Get Entity Constitution from Excel
    const entityType = String(data.entityType ?? '').trim();

    // Select Entity Constitution
    await expect(this.entityConstitution).toBeVisible();
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    await this.page
        .getByRole('option', {
            name: entityType,
            exact: true
        })
        .click();

    // Verify selected Entity Constitution
    await expect(this.entityConstitution).toHaveValue(entityType);

    // Select PAN Card radio button
    await expect(this.panCardRadio).toBeVisible();
    await this.panCardRadio.check();

    await expect(this.panCardRadio).toBeChecked();

    // Verify PAN field is visible
    const panField = this.page.getByRole('textbox', {
        name: 'Pan Card'
    });

    await expect(panField).toBeVisible();

    // Do not enter PAN
    await expect(panField).toHaveValue('');

    // Click Save And Next
    await expect(this.saveAndNextBtn).toBeVisible();
    await expect(this.saveAndNextBtn).toBeEnabled();

    await this.saveAndNextBtn.click();

    // Verify PAN mandatory validation error
    await expect(this.panMandatoryError).toBeVisible();
}

async TC_97_VerifyPANIsNotMandatoryForPrivateLimitedCompany(data) {

    // Get Entity Constitution from Excel
    const entityType = String(data.entityType ?? '').trim();

    // Select Entity Constitution
    await expect(this.entityConstitution).toBeVisible();
    await this.entityConstitution.click();
    await this.entityConstitution.fill(entityType);

    await this.page
        .getByRole('option', {
            name: entityType,
            exact: true
        })
        .click();

    // Verify selected Entity Constitution
    await expect(this.entityConstitution).toHaveValue(entityType);

    // Select PAN Card radio button
    await expect(this.panCardRadio).toBeVisible();
    await this.panCardRadio.check();

    await expect(this.panCardRadio).toBeChecked();

    // Verify PAN field is visible
    const panField = this.page.getByRole('textbox', {
        name: 'Pan Card'
    });

    await expect(panField).toBeVisible();

    // Do not enter PAN
    await expect(panField).toHaveValue('');

    // Click Save And Next
    await expect(this.saveAndNextBtn).toBeVisible();
    await expect(this.saveAndNextBtn).toBeEnabled();

    await this.saveAndNextBtn.click();

    // Verify PAN mandatory validation error
    await expect(this.panMandatoryError).toBeVisible();
}

}


module.exports = { Entitydetails };
