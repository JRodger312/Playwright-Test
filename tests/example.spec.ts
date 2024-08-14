import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://jrodger312.dozuki.com/');

  await expect(page).toHaveTitle(/Log In/);
});

test('Authenticate on proper credentials', async ({ page }) => {
  await page.goto('https://jrodger312.dozuki.com/');

  await page.locator('#login-id').fill('cypress1@gmail.com');
  await page.locator('#password').fill('mypassword');
  await page.locator('#loginBtn').click();

  await expect(page).toHaveTitle(/Guidebook/);
});

test('Fail authentication on improper credentials', async ({ page }) => {
  await page.goto('https://jrodger312.dozuki.com/');

  await page.locator('#login-id').fill('fakeuser@gmail.com');
  await page.locator('#password').fill('fakepassword');
  await page.locator('#loginBtn').click();

  await expect(page.getByText('LOGIN UNSUCCESSFUL')).toBeVisible();
});
