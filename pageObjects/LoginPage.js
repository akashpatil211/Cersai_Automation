export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    //await this.page.goto('https://preprod.ckycindia.dev/ckyc/login');
    await this.page.goto('https://uat.ckycindia.dev/ckyc/login');
  }

  async login(userId, password, dscPath) {
    await this.page.getByRole('textbox', { name: 'Enter your User ID' }).fill(userId);
    await this.page.getByRole('textbox', { name: 'Enter your Password' }).fill(password);
    await this.page.getByRole('textbox', { name: 'Enter captch from image' }).fill('00000');

    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.getByRole('button', { name: 'Upload' }).click();
    await this.page.getByRole('button', { name: 'Close' }).click();
    await this.page.locator('input[type="file"]').setInputFiles(dscPath);
    
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.waitForTimeout(1000);
    const btn = this.page.getByRole('button', { name: 'Yes, continue here' });
    if (await btn.count() > 0) {
      await btn.click();
      }
    }
  }