const { test, expect, chromium } = require('@playwright/test');
const fs = require('fs').promises;
const path = require('path');

async function getTestData() {
    const filePath = path.join(__dirname, '../PlayFile/dataJson.json');
    const rawData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(rawData);
}

test('Fill form using JSON data', async () => {
    const testData = await getTestData(); // Read JSON asynchronously
  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();
    await page.goto('https://www.facebook.com');

    await page.fill('#email', testData.username);
    await page.fill('#pass', testData.password);
    // await page.fill('#email', testData.email);
    // await page.fill('#phone', testData.phoneNumber);

    await page.click("//button[text()='Log in']");

    // expect(await page.innerText('#confirmationMessage')).toContain("Thank you");
});