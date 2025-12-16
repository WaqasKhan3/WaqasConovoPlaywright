// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



test ('dhdhdf', async({page}) =>{

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

//   // 5 Upload file
//   // Escape backslashes in file path (use double `\\` or forward `/`)
// //   await page.locator('#text-letter-upload-photo').getByRole('button', { name: 'Choose files' }).click();
//   const filePath = 'C:\\TextBehind Automation Project\\tests\\files\\lakeView.png';
//   const fileInput = page.locator('#text-letter-upload-photo input[type="file"]');
//   await fileInput.setInputFiles(filePath);
//  // Wait and verify the upload completes successfully
// // For example, suppose an upload success message or thumbnail appears:
// const uploadIndicator = page.locator('.upload-success, .uploaded-preview, img[src*="testImage.png"]');

// // Wait up to 30 seconds (or more if needed)
// await expect(uploadIndicator).toBeVisible({ timeout: 30000 });

//   // Optional: wait until upload finishes (adjust selector per app)
//   await page.waitForSelector('#upload-success', { state: 'visible', timeout: 3000000 }).catch(() => {
//     console.log('Upload success message not found — continuing test');
//   });

  // 6 Click Upload button if required (optional)
//   const uploadButton = page.locator('#text-letter-upload-photo').getByRole('button', { name: 'Upload' });
//   if (await uploadButton.isVisible()) {
//     await uploadButton.click();
//   }

  // 7 Check the checkbox
  await page.locator('.checkbox > span').click();

  // 8 Proceed to payment
  await page.getByRole('button', { name: 'Proceed' }).click();

  // 9 Select credit card
  await page.locator('#credit-card-select').selectOption('536753839');
//   await page.locator('#credit_card').click();

  // 10 Click credit card confirmation
 await page.locator('#credit_card').click();
console.log('Text Letter creation submitted');

// // Instead of waiting for network idle, wait for a UI element to appear
// // Wait for the 2nd element (#transaction_history_tab[1]) to be visible
// await page.locator('#transaction_history_tab').nth(2).waitFor({ state: 'visible', timeout: 30000 });

// console.log('🎉 Transaction History Tab is visible. Process completed.');

});