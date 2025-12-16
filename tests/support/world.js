const fs = require('fs');
const path = require('path');
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

if (!global._customWorldSet) {
  class CustomWorld {
    constructor() {
      this.browser = null;
      this.context = null;
      this.page = null;
      this.envData = null; // store environment variables
    }

    async launchBrowser() {
      // 1️⃣ Launch browser based on BROWSER env var
      const browserType = (process.env.BROWSER || 'chromium').toLowerCase();
      const browserSelector =
        browserType === 'firefox'
          ? firefox
          : browserType === 'webkit'
          ? webkit
          : chromium;

      this.browser = await browserSelector.launch({ headless: false });
      this.context = await this.browser.newContext();
      this.page = await this.context.newPage();

      // 2️⃣ Load environment based on ENV env var
      const ENV = process.env.ENV || 'sandbox';
      const envFilePath = path.resolve(`./config/env/${ENV}.json`);
      if (!fs.existsSync(envFilePath)) {
        throw new Error(`Environment config not found: ${envFilePath}`);
      }
      this.envData = JSON.parse(fs.readFileSync(envFilePath, 'utf-8'));
    }

    async closeBrowser() {
      if (this.browser) {
        await this.browser.close();
        this.browser = null;
        this.context = null;
        this.page = null;
      }
    }
  }

  setWorldConstructor(CustomWorld);
  global._customWorldSet = true;
}
