import { test, expect } from "@playwright/test";

test.describe("Test describe", () => {
  test("Succes test", async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
    await page.locator("#username").fill("o2_skoleni");
    await page.locator("#password").fill("PlaywrightJede1");
    await page.locator("button[type='submit']").click();
    await expect(page.locator("#welcome-page-header")).toContainText(
      "Vítej v testovací aplikaci"
    );
  });
  test("Failed test", async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
    await page.locator("#username").fill("dsfdfsfsdfsf");
    await page.locator("#password").fill("sdfsdfsd");
    await page.locator("button[type='submit']").click();
    await expect(page.locator(".alert.alert-danger")).toBeVisible();
  });
});
