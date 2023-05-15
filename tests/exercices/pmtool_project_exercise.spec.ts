import { test, expect } from "@playwright/test";

test("Open projects in PMTool", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
  await page.locator("li#Projects > a > span").click();
});

test("Fill and type test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool");
  await page.locator("#username").type("typeTest");
  await page.locator("#username").fill("fillTest");
  await page.locator("#username").type("neviem");
});

test("Select tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("#dropdowm-menu-1").selectOption("sql");
  await page.locator("#dropdowm-menu-2").selectOption({ label: "TestNG" });
});

test("Check tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("div#checkboxes > label:nth-of-type(2) > input").check();
  await page.locator("input[value='option-1']").check();
});
