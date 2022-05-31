import { expect, test } from "@playwright/test";

test("index page has expected stuff", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("h1")).toContain("Hello!");
  expect(await page.textContent("p")).toMatch(/^(?!\<Error)/);
});
