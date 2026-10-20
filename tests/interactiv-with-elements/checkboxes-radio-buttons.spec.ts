import { test } from "playwright/test";

test("Checkboxes @ Radio Buttons", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  //checking a checbox
  //await page.check("div.checkbox-group input[value='Option 1']");
  //7  and 9 are the same
  await page.click("div.checkbox-group input[value='Option 1']");

  //wait for 2 second to observe the change
  await page.waitForTimeout(2000);

  //Unbchecking a checkbox
  //await page.uncheck("div.checkbox-group input[value='Option 1']");
  //15 and 17 are the same
  await page.check("div.checkbox-group input[value='Option 1']");
});
