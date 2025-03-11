const {chromium} = require('playwright');

(async () => {
     const browser = await chromium.launch({headless:false});
     const context = await browser.newContext();
     const page = await context.newPage();
    //  await page.goto("https://www.facebook.com");
    //  const context1 = await browser.newContext();
    //  const page1 = await context1.newPage();
    //  await page1.goto("https://www.instagram.com");


    // //  page.close();
    // await page.bringToFront();

    page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");


    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click("#newWindowBtn")
    ]);


    await newPage.close();

})
();