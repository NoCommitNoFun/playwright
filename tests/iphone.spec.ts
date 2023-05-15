import { test, expect } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("http://www.tredgate.com/eshop_test/");
  await page
    .locator(
      "div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(2) h4:nth-child(1) a:nth-child(1)"
    )
    .click();
  // await page.locator("#button-cart").click();
  //await page.locator("#cart-total").click();
  //await page.locator("button[title='Remove']").click();
});
