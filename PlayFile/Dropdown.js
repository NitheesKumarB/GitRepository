const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto("https://www.facebook.com/");

    await page.click("//a[text()='Create new account']");

    await page.selectOption("select#day",{value:'5'});
    await page.selectOption("select#month",{label:'Aug'});
    await page.selectOption("select#year",{index : 5});


// await page.selectOption("locator",[4,5,6]);

})
();