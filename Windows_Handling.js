const {chromium} = require('playwright');
(async () => {
    const browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    // const context1 = await browser.newContext() 
    const page1 = await context.newPage();
    // await page.goto("https://www.facebook.com")
    // const page1 = await context1.newPage();
    // await page1.goto("https://www.instagram.com");
    // page.bringToFront();

    await page1.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
    const [page2] = await Promise.all([
        context.waitForEvent('page'),
        page1.click("button#newWindowBtn")
    ]);

    page1.bringToFront();

    page2.selectOption("//select[@id='selectnav2']","https://www.hyrtutorials.com/");
})();