const{chromium} = require('playwright');
const{test,expect} = require('@playwright/test');

test('example',async () => {

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    page.goto("https://www.facebook.com");

    const element = await page.locator("#email");
    await expect(element).toBeVisible();

   


    
})();