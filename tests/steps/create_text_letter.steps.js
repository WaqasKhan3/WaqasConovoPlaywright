const { Given, When, Then } = require('@cucumber/cucumber');
const { TextLetterPage } = require('../pages/TextLetterPage');
const { expect } = require('@playwright/test');

Given('I open the application', async function () {
  this.pageObject = new TextLetterPage(this.page, this.envData);
  await this.pageObject.openApp();
});

Given('I login with username {string} and password {string}', async function (username, password) {
  await this.pageObject.login(username, password);
});

When('I navigate to Text Letter page', async function () {
  await this.pageObject.navigateToTextLetter();
});

When('I select recipient {string}', async function (name) {
  await this.pageObject.selectRecipient(name);
});

When('I type message {string}', async function (msg) {
  await this.pageObject.typeMessage(msg);
});

When('I check the terms checkbox', async function () {
  await this.pageObject.checkTerms();
});

When('I proceed to payment', async function () {
  await this.pageObject.proceedToPayment();
});

When('I select credit card {string}', async function (card) {
  await this.pageObject.selectCard(card);
});

Then('The credit card confirmation should be visible', async function () {
  const visible = await this.pageObject.isCreditCardConfirmationVisible();
  expect(visible).toBeTruthy();
});
