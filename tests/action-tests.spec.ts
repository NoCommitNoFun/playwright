import { test, expect } from "@playwright/test";

test("Second test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
});

test("iFrame test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  const frame = await page.frameLocator("#frame");
  await frame.locator("button[id='button-find-out-more'] b").click();
});

test("Hover test", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  //await page.locator("div[class='dropdown hover'] button[class='dropbtn']").hover();
  await page
    .locator("div[class='dropdown hover'] a[class='list-alert']")
    .click({ force: true });
});

test("Assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  );
  await expect(page.locator("#welcome-page-header")).toContainText("testovací");
});

test("Visible Test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");

  await expect(
    page.locator("img[title='TEG Project Management']")
  ).toBeVisible();
});

test("Soft error", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect.soft(page.locator(".form-title")).toHaveText("");
});

test("Negative test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator(".alert.alert-danger")).not.toBeVisible();
});
