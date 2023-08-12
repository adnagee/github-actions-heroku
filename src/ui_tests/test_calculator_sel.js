// add one selenium test
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { strictEqual } = require("assert");
// require("chromedriver");
const options = new chrome.Options();
options.addArguments(
  "--no-sandbox",
  "--headless",
  "--disable-gpu",

  "--disable-dev-shm-usage"
);
options.setChromeBinaryPath(process.env.CHROME_BIN);
console.log(process.env.CHROME_BIN);
(async function testCalculatorAdd() {
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  driver
    .manage()
    .logs()
    .get("browser")
    .then((entries) => {
      entries.forEach((entry) => {
        console.log(`[Chrome Log] ${entry.level.name}: ${entry.message}`);
      });
    });

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
