const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless : false});
    const page = await browser.newPage();

    await page.goto("https://letcode.in/frame");
    const fram = await page.frameLocator("#firstFr");
    await fram.locator("[name='fname']").fill("wertyuio");

     const inner = await fram.frameLocator("[src='innerFrame']");
     await inner.locator("[name='email']").fill("wsde@gmail.com");

    await fram.locator("[name='lname']").fill("qwerty");
})
();