//https://automationteststore.com/
import { test, expect } from "@playwright/test";

test("Open projects in PMTool", async ({ page }) => {
  await page.goto("https://automationteststore.com/");
  await page.locator("ul#customer_menu_top > li > a").click();
  await page.locator("form#accountFrm > fieldset > button").click();
  await page.locator("input#AccountFrm_firstname").fill("Andrej");
  await page.locator("input#AccountFrm_lastname").fill("Kopri");
  await page.locator("input#AccountFrm_email").fill("kopr@gmail.com");
  await page.locator("input#AccountFrm_telephone").fill("7847879");
  await page.locator("input#AccountFrm_fax").fill("87489379");
  //your adress
  await page.locator("input#AccountFrm_company").fill("O2");
  await page.locator("input#AccountFrm_address_1").fill("Adresa1");
  await page.locator("input#AccountFrm_address_2").fill("Adressa2");
  await page.locator("input#AccountFrm_city").fill("Brno");

  await page.locator("#AccountFrm_zone_id").selectOption("Angus");
  await page.locator(" input#AccountFrm_postcode").fill("3232");
  //loginDetails
  await page.locator("input#AccountFrm_loginname").fill("Brno");
  await page.locator("input#AccountFrm_password").fill("Brno");
  await page.locator("input#AccountFrm_confirm").fill("Brno");

  await page.locator("input#AccountFrm_newsletter1").check();
  await page.locator("input#AccountFrm_agree").check();
});
