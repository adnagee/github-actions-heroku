// add one selenium test
const { Builder, By, Key, until } = require("selenium-webdriver");
const { strictEqual } = require("assert");
require("chromedriver");

(async function testCalculatorAdd() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000"); // Replace with the actual URL of your React app

    await driver
      .findElement(By.css('input[placeholder="Number"]'))
      .sendKeys("5");

    await driver
      .findElement(By.xpath('//button[text()="Calculate Square"]'))
      .click();

    await driver.wait(
      until.elementLocated(By.xpath('//h2[text()="Result: 25"]')),
      5000
    );

    const resultElement = await driver.findElement(
      By.xpath('//h2[text()="Result: 25"]')
    );
    const resultText = await resultElement.getText();

    strictEqual(resultText, "Result: 25");
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await driver.quit();
  }
})();
