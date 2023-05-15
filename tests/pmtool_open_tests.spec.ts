import { test, expect } from "@playwright/test";

test("Second test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("test");
  await page.locator("#password").fill("heslo");
});
