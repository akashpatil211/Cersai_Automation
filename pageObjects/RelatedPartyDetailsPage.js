import { expect } from '@playwright/test';

export class RelatedPartyDetailsPage {

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

     this.saveAndNextButton = page.getByRole('button', {
            name: 'Save And Next',
            exact: true
        });

// Number of Related Persons
this.numberOfRelatedPersons = this.page.getByPlaceholder(
    'Number of Related Persons'
);

// Within which Number of Beneficial Owner
this.numberOfBeneficialOwner = this.page.getByPlaceholder(
    'Within which Number of Beneficial Owner'
);

// Relation
this.relation = this.page.getByPlaceholder(
    'Select any relation'
);

// CKYC Number
this.ckycNumber = this.page.getByPlaceholder(
    'CKYC number'
);

// Director Identification Number
this.directorIdentificationNumber = this.page.getByPlaceholder(
    'Director Identification Number'
);

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

        this.ckycNumberError = this.page.getByText(
    'CKYC Number must be 14 digits',
    { exact: true }
);

this.controllingInterestError = this.page.getByText(
    'Please select Controlling Interest',
    { exact: true }
);

this.percentageOwnershipError = this.page.getByText(
    'Please enter Percentage of ownership',
    { exact: true }
);

this.controllingInterest = this.page.getByRole('combobox', {
    name: 'Controlling Interest Value'
});

this.addButton = this.page.getByRole('button', {
    name: 'Add',
    exact: true
});

this.otherDetailsHeading = this.page.getByRole('heading', {
    name: 'Other Details',
    exact: true
});

this.relationshipWithOther = this.page.getByRole('textbox', {
    name: 'Relation Name *'
});

    }

async navigateToRelatedPartyDetails(data) {

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
    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 60000
    });
    await this.page.waitForTimeout(2000);
    await this.saveAndNextButton.click();

    await expect(this.relatedPartyDetailsHeading).toBeVisible({
        timeout: 60000
    });



  
}

async TC_01_VerifyREUserNavigatedToRelatedPartyDetailsAfterContactDetails(data) {

    await this.navigateToRelatedPartyDetails(data);


    // Verify navigation to Related Party Details section
    await expect(this.relatedPartyDetailsHeading).toBeVisible();
}

async TC_02_VerifyRelationDropdownOptions(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Click Relation dropdown
    await this.relation.click();

    // Verify all Relation options
    const relationOptions = [
        'Director',
        'Promoter',
        'Karta',
        'Trustee',
        'Partner',
        'Court Appointment Official',
        'Proprietor',
        'Beneficiary',
        'Authorized Signatory',
        'Beneficial Owner',
        'Power of Attorney Holder',
        'Others'
    ];

    for (const option of relationOptions) {
        await expect(
            this.page.getByRole('option', {
                name: option,
                exact: true
            })
        ).toBeVisible();
    }
}

async TC_03_VerifyREUserCanSelectRelation(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Click Relation dropdown
    await this.relation.click();

    // Select Relation value from Excel
    await this.page.getByRole('option', {
        name: String(data.relation).trim(),
        exact: true
    }).click();

    // Verify selected Relation value
    await expect(this.relation).toHaveValue(
        String(data.relation).trim()
    );
}

async TC_04_VerifyOnlyOneRelationCanBeSelected(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Open Relation dropdown
    await this.relation.click();

    // Select first Relation from Excel
    const firstRelation = String(data.relation).trim();

    await this.page.getByRole('option', {
        name: firstRelation,
        exact: true
    }).click();

    // Verify first Relation is selected
    await expect(this.relation).toHaveValue(firstRelation);

}

async TC_05_VerifyValidCKYCNumberAcceptedForValidRelation(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Fill Number of Related Persons
    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // Fill Number of Beneficial Owners
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    // Select Relation
    await this.relation.click();

    await this.page.getByRole('option', {
        name: String(data.relation).trim(),
        exact: true
    }).click();

    // Fill CKYC Number
    await this.ckycNumber.fill(
        String(data.ckycNumber).trim()
    );

    // Select Controlling Interest Value
    await this.controllingInterest.click();

    await this.page.getByRole('option', {
        name: String(data.controllingInterest).trim(),
        exact: true
    }).click();

    // Click Add
    await this.addButton.click();

    // Verify Relation is added in the table
    await expect(
        this.page.getByText(
            String(data.relation).trim(),
            {
                exact: true
            }
        )
    ).toBeVisible({
        timeout: 60000
    });

    // Screenshot after adding Related Party
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_01_RelatedPartyAdded.png`,
        fullPage: true
    });

    // Verify Save And Next is enabled
    await expect(this.saveAndNextButton).toBeEnabled({
        timeout: 60000
    });

    // Click Save And Next
    await this.saveAndNextButton.click();

    // Verify navigation to Other Details page
    await expect(
        this.page.getByRole('heading', {
            name: 'Other Details',
            exact: true
        })
    ).toBeVisible({
        timeout: 60000
    });
}

async TC_07_VerifyInvalidCKYCNumberRejectedForValidRelation(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Select valid Relation
    await this.relation.click();

    await this.page.getByRole('option', {
        name: String(data.relation).trim(),
        exact: true
    }).click();

    // Fill invalid CKYC Number from Excel
    await this.ckycNumber.fill(
        String(data.ckycNumber).trim()
    );

    // Fill Director Identification Number
    await this.directorIdentificationNumber.fill(
        String(data.directorIdentificationNumber).trim()
    );

    // Click Add
    await this.addButton.click();

    // Verify error dialog
    await expect(
        this.page.getByRole('alertdialog')
    ).toBeVisible({
        timeout: 60000
    });

    // Verify incorrect CKYC number message
    await expect(
        this.page.getByText(
            `Incorrect CKYC number ${String(data.ckycNumber).trim()}`,
            { exact: true }
        )
    ).toBeVisible({
        timeout: 60000
    });

    // Screenshot of error
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_01_InvalidCKYCNumber.png`,
        fullPage: true
    });
}


async TC_09_VerifyREUserCanViewCKYCDetails(data) {

    await this.navigateToRelatedPartyDetails(data);

    const ckycNumber = String(data.ckycNumber).trim();

    // CKYC number is a button in the grid
    const ckycNumberButton = this.page.getByRole('button', {
        name: ckycNumber,
        exact: true
    });

    await expect(ckycNumberButton).toBeVisible({
        timeout: 60000
    });

    // Click CKYC number
    await ckycNumberButton.click();

    // Verify CKYC Details dialog is visible
    const ckycDetailsDialog = this.page.getByRole('dialog');

    await expect(ckycDetailsDialog).toBeVisible({
        timeout: 60000
    });

    // Verify CKYC Details dialog title
    await expect(
        ckycDetailsDialog.getByRole('heading', {
            name: 'CKYC Details',
            level: 2,
            exact: true
        })
    ).toBeVisible({
        timeout: 60000
    });
}

async TC_10_VerifyCKYCViewMenuDisplaysNecessaryInformation(data) {

    await this.navigateToRelatedPartyDetails(data);

    const ckycNumber = String(data.ckycNumber).trim();

    // Verify CKYC number is visible in the grid
    const ckycNumberButton = this.page.getByRole('button', {
        name: ckycNumber,
        exact: true
    });

    await expect(ckycNumberButton).toBeVisible({
        timeout: 60000
    });

    // Click CKYC number
    await ckycNumberButton.click();

    // Verify CKYC Details dialog is displayed
    const ckycDetailsDialog = this.page.getByRole('dialog');

    await expect(ckycDetailsDialog).toBeVisible({
        timeout: 60000
    });

    // Verify CKYC Details heading
    await expect(
        ckycDetailsDialog.getByRole('heading', {
            name: 'CKYC Details',
            level: 2,
            exact: true
        })
    ).toBeVisible();

    // Verify Name
    await expect(
        ckycDetailsDialog.getByText('Name', {
            exact: true
        })
    ).toBeVisible();

    // Verify CKYC Number
    await expect(
        ckycDetailsDialog.getByText('CKYC Number', {
            exact: true
        })
    ).toBeVisible();

    // Verify Mobile Number
    await expect(
        ckycDetailsDialog.getByText('Mobile Number', {
            exact: true
        })
    ).toBeVisible();

    // Verify Email
    await expect(
        ckycDetailsDialog.getByText('Email', {
            exact: true
        })
    ).toBeVisible();

    // Verify CIN
    await expect(
        ckycDetailsDialog.getByText('CIN', {
            exact: true
        })
    ).toBeVisible();

    // Verify Date of Registration
    await expect(
        ckycDetailsDialog.getByText('Date of Registration', {
            exact: true
        })
    ).toBeVisible();

    // Verify Last Updated On
    await expect(
        ckycDetailsDialog.getByText('Last Updated On', {
            exact: true
        })
    ).toBeVisible();

    // Verify Submitted Documents
    await expect(
        ckycDetailsDialog.getByText('Submitted Documents', {
            exact: true
        })
    ).toBeVisible();

    // Take screenshot
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_01_CKYCDetails.png`,
        fullPage: true
    });
}


async TC_11_VerifyBeneficialOwnerRejectsLegalCKYCNumber(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Select Relation from Excel
    await this.relation.click();

    await this.page.getByRole('option', {
        name: String(data.relation).trim(),
        exact: true
    }).click();

    // Enter Number of Beneficial Owner from Excel
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    // Enter Number of Related Person from Excel
    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // Enter Legal CKYC Number from Excel
    await this.ckycNumber.fill(
        String(data.ckycNumber).trim()
    );

    // Select Controlling Interest from Excel
    await this.controllingInterest.click();

    await this.page.getByRole('option', {
        name: String(data.controllingInterest).trim(),
        exact: true
    }).click();

    // Click Add
    await this.addButton.click();

    // Verify error message
    await expect(
        this.page.getByText(
            'Only individual CKYC numbers are allowed for related party',
            { exact: true }
        )
    ).toBeVisible({
        timeout: 60000
    });

    // Take screenshot
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_01_LegalCKYCNumberError.png`,
        fullPage: true
    });
}


async TC_12_VerifyBeneficialOwnerSelectionIsMandatory(data) {
      await this.navigateToRelatedPartyDetails(data);

    // Enter Number of Related Persons from Excel
    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // Enter Number of Beneficial Owner from Excel
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    await this.relation.click();
    await this.page.getByRole('option', {
        name: String(data.relation).trim(),
        exact: true
    }).click();

    // Enter CKYC Number from Excel
    await this.ckycNumber.fill(
        String(data.ckycNumber).trim()
    );

    // Select Controlling Interest from Excel
   
    await this.addButton.click();

    // Keep Relation field unselected

    // Click Save And Next
    await this.page.getByRole('button', {
        name: 'Save And Next',
        exact: true
    }).click();

    // Verify Beneficial Owner mandatory error message
    await expect(
        this.page.getByText(
            'Beneficial Owner selection is mandatory.',
            { exact: true }
        )
    ).toBeVisible({
        timeout: 60000
    });


}

async TC_13_VerifyNumericValueAcceptedForOwnership(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Enter Number of Related Persons from Excel
    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // Enter Number of Beneficial Owner from Excel
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    await this.ckycNumber.fill(
        String(data.ckycNumber).trim()
    );

    // Select Relation from Excel
    await this.relation.click();

    await this.page.getByRole('option', {
        name: String(data.relation).trim(),
        exact: true
    }).click();

    // Select Controlling Interest from Excel
    await this.controllingInterest.click();

    await this.page.getByRole('option', {
        name: String(data.controllingInterest).trim(),
        exact: true
    }).click();

    // Enter Percentage of Ownership / Exercise from Excel
    const percentageOfOwnership = this.page.getByRole('textbox', {
        name: 'Percentage of Ownership/exercise *'
    });

    await percentageOfOwnership.fill(
        String(data.percentageOfOwnership).trim()
    );

    // Verify numeric value is entered
    await expect(
        percentageOfOwnership
    ).toHaveValue(
        String(data.percentageOfOwnership).trim()
    );

}

async TC_14_VerifyDirectorEnablesDirectorIdentificationNumber(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Enter Number of Related Persons from Excel
    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // Enter Number of Beneficial Owner from Excel
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    // Select Relation from Excel
    await this.relation.click();

    await this.page.getByRole('option', {
        name: String(data.relation).trim(),
        exact: true
    }).click();

    await this.ckycNumber.fill(
        String(data.ckycNumber).trim()
    );

    // Verify Director Identification Number field is enabled
    await expect(
        this.directorIdentificationNumber
    ).toBeEnabled({
        timeout: 60000
    });

    // Enter Director Identification Number from Excel
    await this.directorIdentificationNumber.fill(
        String(data.directorIdentificationNumber).trim()
    );

    // Verify value is entered
    await expect(
        this.directorIdentificationNumber
    ).toHaveValue(
        String(data.directorIdentificationNumber).trim()
    );
}


async TC_15_VerifyOtherRelationEnablesRelationshipField(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Enter Number of Related Persons from Excel
    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // Enter Number of Beneficial Owner from Excel
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    // Select Relation from Excel
    await this.relation.click();

    await this.page.getByRole('option', {
        name: String(data.relation).trim(),
        exact: true
    }).click();

    // Verify Relation Name field is enabled
    await expect(
        this.relationshipWithOther
    ).toBeEnabled({
        timeout: 60000
    });

    // Enter Relation Name from Excel
    await this.relationshipWithOther.fill(
        String(data.relationshipWithOther).trim()
    );

    // Verify value is entered
    await expect(
        this.relationshipWithOther
    ).toHaveValue(
        String(data.relationshipWithOther).trim()
    );

}


async TC_16_VerifySaveAndNextWithPrefetchedRelatedPartyDetails(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Get expected values from Excel
    const relation = String(data.relation).trim();
    const ckycNumber = String(data.ckycNumber).trim();
    const controllingInterest = String(data.controllingInterest).trim();

    // Locate the prefetched row in Related Party Details grid
    const relatedPartyRow = this.page.getByRole('row').filter({
        hasText: ckycNumber
    });

    // Verify row is displayed
    await expect(relatedPartyRow).toBeVisible({
        timeout: 60000
    });

    // Verify Relation
    await expect(
        relatedPartyRow.getByText(relation, {
            exact: true
        })
    ).toBeVisible();

    // Verify CKYC Number
    await expect(
        relatedPartyRow.getByRole('button', {
            name: ckycNumber,
            exact: true
        })
    ).toBeVisible();

    // Verify Controlling Interest
    await expect(
        relatedPartyRow.getByText(controllingInterest, {
            exact: true
        })
    ).toBeVisible();

    // Screenshot before Save And Next
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_01_PrefetchedDataGrid.png`,
        fullPage: true
    });

    // Click Save And Next
    await this.page.getByRole('button', {
        name: 'Save And Next',
        exact: true
    }).click();

    // Verify navigation to next section
    await expect(
        this.page.getByRole('heading', {
            name: 'Review and Submit',
            exact: true
        })
    ).toBeVisible({
        timeout: 60000
    });

    // Screenshot after Save And Next
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_02_AfterSaveAndNext.png`,
        fullPage: true
    });
}


async TC_17_VerifySaveAndNextWithModifiedRelatedPartyDetails(data) {

    await this.navigateToRelatedPartyDetails(data);

    // Take screenshot of existing data
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_01_ExistingRelatedPartyDetails.png`,
        fullPage: true
    });

    // Get modified values from Excel
    const relation = String(data.relation).trim();
    const ckycNumber = String(data.ckycNumber).trim();

    // -----------------------------------------
    // Modify Number of Related Persons
    // -----------------------------------------
    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // -----------------------------------------
    // Modify Number of Beneficial Owner
    // -----------------------------------------
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    // -----------------------------------------
    // Select Relation from Excel
    // -----------------------------------------
    await this.relation.click();

    await this.page.getByRole('option', {
        name: relation,
        exact: true
    }).click();

    // -----------------------------------------
    // Modify CKYC Number
    // -----------------------------------------
    await this.ckycNumber.fill(ckycNumber);

    // -----------------------------------------
    // Click Add
    // -----------------------------------------
    await this.addButton.click();

    // Screenshot after modification
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_02_ModifiedRelatedPartyDetails.png`,
        fullPage: true
    });

    // -----------------------------------------
    // Click Save And Next
    // -----------------------------------------
    await this.page.getByRole('button', {
        name: 'Save And Next',
        exact: true
    }).click();

    // -----------------------------------------
    // Verify navigation to Other Details
    // -----------------------------------------
    await expect(
        this.page.getByRole('heading', {
            name: 'Other Details',
            exact: true
        })
    ).toBeVisible({
        timeout: 60000
    });
}


async TC_18_VerifyREUserCanSaveDetailsAndResumeProcess(data) {

    await this.kycManagementDropdown.click();
    await this.singleOperationsDropdown.click();

    await this.page.getByText('Create-Draft', {
        exact: true
    }).click();

    await this.page.getByRole('radio', {
        name: 'Legal Entity'
    }).check();

    await this.page.getByRole('textbox', {
        name: 'Enter Search Key'
    }).fill(
        String(data.SearchKey).trim()
    );

    await this.page.locator('button').filter({
        hasText: 'Search'
    }).first().click();

    await this.page.getByText(
        String(data.SearchKey).trim(),
        {
            exact: true
        }
    ).click();

    // Move through Entity Details, POI, Address Details
    // and Contact Details to reach Related Party Details
    for (let i = 0; i < 4; i++) {
        await this.page.waitForTimeout(2000);
        await this.saveAndNextButton.click();
    }

    // -----------------------------------------
    // Verify saved CKYC Number in grid
    // -----------------------------------------
    const ckycNumber = String(data.ckycNumber).trim();

    const ckycNumberButton = this.page.getByRole('button', {
        name: ckycNumber,
        exact: true
    });

    await expect(ckycNumberButton.first()).toBeVisible({
        timeout: 60000
    });

    // Screenshot of retained Related Party Details
    await this.page.screenshot({
        path: `AllScreenshots_RelatedPartyDetails/${data.TC_Num}_01_SavedCKYCNumber.png`,
        fullPage: true
    });

    // -----------------------------------------
    // Resume the process
    // -----------------------------------------
    await this.saveAndNextButton.click();

    // -----------------------------------------
    // Verify navigation to Other Details
    // -----------------------------------------
    await expect(
        this.page.getByRole('heading', {
            name: 'Other Details',
            exact: true
        })
    ).toBeVisible({
        timeout: 60000
    });
}


async TC_19_VerifyDirectorRelationForPublicLimitedCompany(data) {

    await this.navigateToRelatedPartyDetails(data);

    const relation = String(data.relation).trim();
    const ckycNumber = String(data.ckycNumber).trim();

    // Select Relation from Excel
    await this.relation.click();

    await this.page.getByRole('option', {
        name: relation,
        exact: true
    }).click();

    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // -----------------------------------------
    // Modify Number of Beneficial Owner
    // -----------------------------------------
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    // Verify Director Identification Number field is enabled
    await expect(this.directorIdentificationNumber).toBeEnabled({
        timeout: 60000
    });

    // Enter CKYC Number from Excel
    await this.ckycNumber.fill(ckycNumber);

    // Enter Director Identification Number from Excel
    const directorIdentificationNumber =
        String(data.directorIdentificationNumber).trim();

    await this.directorIdentificationNumber.fill(
        directorIdentificationNumber
    );

    // Add Director relation
    await this.addButton.click();

    // Verify Director record is added in grid
    const directorRow = this.page.getByRole('row')
        .filter({ hasText: relation })
        .filter({
            has: this.page.getByRole('button', {
                name: ckycNumber,
                exact: true
            })
        });

    await expect(directorRow).toBeVisible({
        timeout: 60000
    });
}


async TC_20_VerifyDirectorRelationForPrivateLimitedCompany(data) {

    await this.navigateToRelatedPartyDetails(data);

    const relation = String(data.relation).trim();
    const ckycNumber = String(data.ckycNumber).trim();

    // Select Relation from Excel
    await this.relation.click();

    await this.page.getByRole('option', {
        name: relation,
        exact: true
    }).click();

    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // -----------------------------------------
    // Modify Number of Beneficial Owner
    // -----------------------------------------
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    // Verify Director Identification Number field is enabled
    await expect(this.directorIdentificationNumber).toBeEnabled({
        timeout: 60000
    });

    // Enter CKYC Number from Excel
    await this.ckycNumber.fill(ckycNumber);

    // Enter Director Identification Number from Excel
    const directorIdentificationNumber =
        String(data.directorIdentificationNumber).trim();

    await this.directorIdentificationNumber.fill(
        directorIdentificationNumber
    );

    // Add Director relation
    await this.addButton.click();

    // Verify Director record is added in grid
    const directorRow = this.page.getByRole('row')
        .filter({ hasText: relation })
        .filter({
            has: this.page.getByRole('button', {
                name: ckycNumber,
                exact: true
            })
        });

    await expect(directorRow).toBeVisible({
        timeout: 60000
    });
}

async TC_21_VerifyDirectorRelationForSection8Company(data) {

    await this.navigateToRelatedPartyDetails(data);

    const relation = String(data.relation).trim();
    const ckycNumber = String(data.ckycNumber).trim();

    // Select Relation from Excel
    await this.relation.click();

    await this.page.getByRole('option', {
        name: relation,
        exact: true
    }).click();

    await this.numberOfRelatedPersons.fill(
        String(data.numberOfRelatedPerson).trim()
    );

    // -----------------------------------------
    // Modify Number of Beneficial Owner
    // -----------------------------------------
    await this.numberOfBeneficialOwner.fill(
        String(data.numberOfBenefialOwner).trim()
    );

    // Verify Director Identification Number field is enabled
    await expect(this.directorIdentificationNumber).toBeEnabled({
        timeout: 60000
    });

    // Enter CKYC Number from Excel
    await this.ckycNumber.fill(ckycNumber);

    // Enter Director Identification Number from Excel
    const directorIdentificationNumber =
        String(data.directorIdentificationNumber).trim();

    await this.directorIdentificationNumber.fill(
        directorIdentificationNumber
    );

    // Add Director relation
    await this.addButton.click();

    // Verify Director record is added in grid
    const directorRow = this.page.getByRole('row')
        .filter({ hasText: relation })
        .filter({
            has: this.page.getByRole('button', {
                name: ckycNumber,
                exact: true
            })
        });

    await expect(directorRow).toBeVisible({
        timeout: 60000
    });
}


}
module.exports = {RelatedPartyDetailsPage};
