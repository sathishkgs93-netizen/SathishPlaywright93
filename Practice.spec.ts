import { test, expect, } from '@playwright/test'
import { firefox, } from '@playwright/test'

test.describe('Waitconcept wait Test', () => { //testsuite
    test('swag', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.waitForSelector('#user-name', { state: 'visible' });
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await page.waitForURL('https://www.saucedemo.com/inventory.html');

        await page.click('button[id="add-to-cart-sauce-labs-bike-light"]');
        await page.click('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
        await page.click('button[id="add-to-cart-sauce-labs-fleece-jacket"]');
        await page.locator('[data-test="shopping-cart-link"]').click();

        await page.waitForTimeout(5000);

        //await expect(page.locator('text=Sauce Labs Bike Light')).toBeVisible();
        //await expect(page.locator('text=Sauce Labs Bolt T-Shirt')).toBeVisible();
        //await expect(page.locator('text=Sauce Labs Fleece Jacket')).toBeVisible();

        // Go to cart
        await page.locator('[data-test="shopping-cart-link"]').click();

        // Assert products are visible using unique selectors
        await expect(page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Bike Light' })).toBeVisible();
        await expect(page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Bolt T-Shirt' })).toBeVisible();
        await expect(page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Fleece Jacket' })).toBeVisible();


        // Assert that the cart badge shows "3"
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('3');
        //await page.locator('[data-test="shopping-cart-badge"]').count();
        await page.keyboard.press('PageDown');

        await page.getByText('Checkout').click();
        await page.locator('#first-name').fill('sathish khan');
        await page.getByPlaceholder('Last Name').fill('gunapal');
        await page.locator('[data-test="postalCode"]').fill('603103');
        await page.locator('#continue').click();
        await page.getByText('Finish').click();
        await expect(page.locator('text=Thank you for your order!')).toBeVisible();
        await page.waitForSelector('text=Thank you for your order!');

        await page.waitForTimeout(2000);



    });
});

test.describe('SauceDemo Login Test', () => { //testsuite
    test('swag', async ({ page }) => {
        //await firefox.launch({ headless: false, channel: 'firfox' });
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.locator('#react-burger-menu-btn').click();



        // Using link text
        await page.getByText('All Items').click();
        await page.locator('#react-burger-cross-btn').click();
        await page.getByText('Sauce Labs Backpack').click();
        await page.getByText('Add to cart').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        //await page.locator('#continue-shopping').click();
        await page.getByText('Checkout').click();
        await page.locator('#first-name').fill('sathish khan');
        await page.getByPlaceholder('Last Name').fill('gunapal');
        await page.locator('[data-test="postalCode"]').fill('603103');
        await page.locator('#continue').click();
        await page.getByText('Finish').click();
        await expect(page.locator('text=Thank you for your order!')).toBeVisible();
        await page.waitForSelector('text=Thank you for your order!');


        //await page.locator('.btn btn_primary btn_small btn_inventory ').click();

        // Using role + accessible name
        //await page.getByRole('link', { name: 'All Items' }).click();
        // Using id
        //await page.locator('#inventory_sidebar_link').click();

        // Using data-test attribute (recommended for stability)
        //await page.locator('[data-test="inventory-sidebar-link"]').click();

    });
});


