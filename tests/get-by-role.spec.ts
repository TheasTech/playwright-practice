import { test } from "@playwright/test";

test("getByRole()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.getByRole("button", { name: "Login" }).click();
});
//   await page.getByRole("checkbox", { name: "Option 1" }).click();
//   await page.getByRole("radio", { name: "Choice A" }).click();
//   await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");
