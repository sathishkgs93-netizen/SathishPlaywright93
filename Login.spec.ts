import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo Login Test', () => { //testsuite

  // test('Valid login', async ({ page }) => {
  //   const loginPage = new LoginPage(page);

  //   await loginPage.navigate();

  //   await loginPage.login('standard_user', 'secret_sauce');
  //   await page.waitForTimeout(1000);


  //   await expect(page).toHaveURL(/inventory.html/);
  // });

  // test('Invalid login', async ({ page }) => {
  //   const loginPage = new LoginPage(page);

  //   await loginPage.navigate();
  //   await loginPage.login('invalid', 'invalid');
  //   await page.waitForTimeout(1000);


  //   await expect(loginPage.errorMsg).toContainText('do not match');
  //   await page.waitForTimeout(1000);

  // });
  // test('Locators demo', async ({ page }) => {
  //   await page.goto('https://playwright.dev/');
  //   await page.getByRole('link', { name: 'Docs' }).click();
  // });

  test('getByText', async ({ page }) => {
    // await page.goto('https://playwright.dev/');
    // await page.getByText('Get Started').click();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
  });



});