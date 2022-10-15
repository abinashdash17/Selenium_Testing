const { By, Builder } = require('selenium-webdriver');
require("chromedriver");

async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({ implicit: 5000 });
    await driver.get('https://www.nielsen.com');
    let webElement = await driver.findElement(By.linkText("Solutions"));
    await webElement.click();
    webElement = await driver.findElement(By.linkText("Audience measurement"));
    await webElement.click();
    // webElement = await driver.findElement(By.css('a[href*="audience-measurement/audio"]'));
    // await webElement.click();
    let test_var = await driver.executeScript("return dataLayer");
    console.log(test_var);
    await driver.quit();
};
helloSelenium();