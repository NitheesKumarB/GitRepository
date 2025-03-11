const {chromium} = require('playwright');
(async () => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const mainPage = await context.newPage();

    await mainPage.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
    const [newPage] = await Promise.all([
        mainPage.waitForEvent('popup'),
        mainPage.click("button#newWindowBtn")
    ]);
    await newPage.waitForLoadState();
    console.log('new page url ',newPage.url());
    await mainPage.bringToFront();

    const pages = context.pages();
    pages.forEach(page => console.log("total",page.url()));
})
();