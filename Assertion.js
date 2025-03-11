const {chromium} = require('playwright');
const{test,expect} = require('@playwright/test');
test('page title should be correct',async () => {
    const browser = await chromium.launch({headless : false});
    const page = await browser.newPage();
    await page.goto("https://www.facebook.com");
    await expect(page).toHaveTitle('Facebook – log in or sign up');
})
();