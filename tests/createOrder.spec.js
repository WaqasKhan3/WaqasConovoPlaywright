
// @ts-check
// import { test, expect } from '@playwright/test';
const {test, expect} = require("@playwright/test");

test ('Create Text Letter Order for FNF', async({page}) =>{

  await page.goto('https://txbqac.com/');
//   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('testingfnf@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('text@123');
  // Login
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Navigate to Create New → Text Letter
  await page.getByRole('tab', { name: 'Create New' }).click();
  await page.getByRole('link', { name: 'Text Letter' }).click();

  // Select recipient
  await page.getByLabel('Click here to select from').getByText('Click here to select from').click();
  await page.getByRole('searchbox').fill('jawad');
  await page.getByRole('option', { name: 'Jawad A Rana - BK2260' }).click();

  // Type message
  const messageBox = page.getByRole('textbox', { name: 'Start typing your message' });
  await messageBox.click();
  await messageBox.fill('This is for Automation test');

  // Check the checkbox
  await page.locator('.checkbox > span').click();

  // Proceed to payment
  await page.waitForTimeout(5000);
   await page.getByRole('button', { name: 'Proceed' }).click();

  // Select credit card
  await page.locator('#credit-card-select').selectOption('536753839');

  // Click credit card confirmation
  await page.waitForTimeout(5000);
  await page.locator('#credit_card').click();
  console.log('Text Letter creation submitted');
});