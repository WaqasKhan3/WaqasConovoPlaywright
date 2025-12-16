const { expect } = require('@playwright/test');

class TextLetterPage {
  constructor(page, envData) {
    this.page = page;
    this.envData = envData;
  }

  async openApp() {
    await this.page.goto(this.envData.BASE_URL, { waitUntil: 'domcontentloaded' });
  }

  async login(username, password) {
    const loginLink = this.page.getByRole('link', { name: 'Login', exact: true });
    await loginLink.click();

    await this.page.getByRole('textbox', { name: 'Enter Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'LOGIN' }).click();

    await this.page.waitForSelector('text=Create New', { timeout: 20000 });
  }

  async navigateToTextLetter() {
    await this.page.getByRole('tab', { name: 'Create New' }).click();
    await this.page.getByRole('link', { name: 'Text Letter' }).click();
    await this.page.waitForSelector('label:has-text("Click here to select from")', { timeout: 10000 });
  }

  async selectRecipient(name) {
    await this.page.getByLabel('Click here to select from').click();
    await this.page.getByRole('searchbox').fill(name);
    await this.page.getByRole('option', { name: new RegExp(name, 'i') }).click();
  }

  async typeMessage(message) {
    await this.page.getByRole('textbox', { name: 'Start typing your message' }).fill(message);
  }

  async checkTerms() {
    await this.page.locator('.checkbox > span').waitFor({ state: 'visible', timeout: 5000 });
    await this.page.locator('.checkbox > span').click();
  }

  async proceedToPayment() {
    const proceedBtn = this.page.getByRole('button', { name: 'Proceed' });
    await proceedBtn.waitFor({ state: 'visible', timeout: 10000 });
    await proceedBtn.click();
    await this.page.locator('#credit-card-select').waitFor({ state: 'visible', timeout: 10000 });
  }

  async selectCard(cardValue) {
    await this.page.locator('#credit-card-select').selectOption(cardValue);
    const creditCardConfirm = this.page.locator('#credit_card');
    await creditCardConfirm.waitFor({ state: 'visible', timeout: 10000 });
    await creditCardConfirm.click();
  }

  async isCreditCardConfirmationVisible() {
    return this.page.locator('#credit_card').isVisible();
  }
}

module.exports = { TextLetterPage };
