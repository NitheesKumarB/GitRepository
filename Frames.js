const {chromium} = require('playwright');
(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://letcode.in/frame");

    const parentFrame = page.frame({name:'firstFr'});
   if(parentFrame){
     await parentFrame.fill("//input[@name='fname']","qwerty");
   } 

  //  const innerframe = await parentFrame.locator("//iframe[@src ='innerFrame']");
  //  const childFrame = await innerframe.frame();
 const innerFrame = await parentFrame.frameLocator("//iframe[@src ='innerFrame']") ;
   await innerFrame.locator("//input[@name ='email']").fill("edggs@sd");

   parentFrame.fill("//input[@name='lname']","wefww");
})();