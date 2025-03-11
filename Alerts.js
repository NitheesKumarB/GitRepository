const {chromium} = require('playwright');
(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto("https://demo.automationtesting.in/Alerts.html");

page.on('dialog',async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());
    dialog.accept("qwerasdf");
});

// await page.click("//a[text()='Alert with OK ']");
// await page.click("//button[@onclick='alertbox()']");

// await page.click("//a[text()='Alert with OK & Cancel ']");
// await page.click("//button[@onclick='confirmbox()']");

await page.click("//a[text()='Alert with Textbox ']");
await page.click("//button[@onclick='promptbox()']");
})();