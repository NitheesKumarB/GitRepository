const {chromium} = require('playwright');
(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();



    // Alert 
    // 1. Simple alert -> alert with only ok button
    // 2. confirm alert -> alert with ok and cancel button
    // 3. prompt alert -> alert with textbox

    page.on('dialog',async (dialog) => {
        // console.log(dialog.message());
        // console.log(dialog.type());
        // await dialog.accept();

        if(dialog.type() === 'alert'){
            console.log(dialog.message());
            await dialog.accept();
        }
        else{
            console.log(dialog.message());
            await dialog.dismiss();
        }
    })


    await page.goto("https://demo.automationtesting.in/Alerts.html");

    await page.locator("//a[text()='Alert with OK & Cancel ']").click();
    await page.click("[onclick='confirmbox()']");

})
();