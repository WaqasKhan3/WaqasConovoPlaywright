const { Before, After } = require("@cucumber/cucumber");

Before(async function () {
  // Launch new browser/page for each scenario
  await this.launchBrowser();
});

After(async function () {
  // Close browser after scenario
  await this.closeBrowser();
});
