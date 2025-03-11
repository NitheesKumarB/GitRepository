const{chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext({
      recordVideo:{dir:'./scrrcd/'}
    }
        
    );
    const page = await context.newPage();
    await page.goto('https://www.facebook.com');

    await page.locator("#email").fill("qwertyu");
    await page.locator("#pass").fill("wefw");
    await page.click(".selected");

    // await page.screenshot({path:'File.png'});

    // const fb = await page.locator("//img[@alt ='Facebook']");
    // fb.screenshot({path:'fb.png'});
})();