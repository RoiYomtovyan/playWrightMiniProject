import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('sanity test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('roi');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('yomtovyan');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('§1234');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
});

test('login test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication();
  
});