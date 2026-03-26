import { test, expect, } from '@playwright/test'

test.describe('checkbox', () => {
    test('checkboxbutton', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');
        await page.getByPlaceholder('Full Name').fill('sathishkhan');
        await page.getByPlaceholder('name@example.com').fill('sathishkgs93@gmail.com');
        await page.getByPlaceholder('Currend Address').fill('222/129 Veernam main road,Salem');
        await page.locator('#password').fill('Welcome01');
        await page.getByText('Submit').click();

        await page.bringToFront();
    });
    test('checkboxbutton1', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/check-box.php');

        //await page.locator('.svg-inline--fa fa-bars toc-icons').click();
        //await page.locator('[data-fa-i2svg]').click();
        await page.locator('//*[@id="bs_1"]/span[1]').click();
        await page.locator('#c_bs_1').click();
        await page.locator('#bs_2').click();
        await page.locator('//*[@id="bs_1"]/span[1]').click();

        await page.locator('#c_bs_2').check();
        await page.waitForTimeout(15000);
    });
    test('checkboxbutton3', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/radio-button.php');

        //await page.locator('.svg-inline--fa fa-arrow-right').click();
        // await page.locator('input[type="radio"][value="igottwo"]').check();
        await page.locator('[value="igottwo"]').click();
        await expect(page.getByText(' You have checked Yes')).toBeVisible();
        await page.waitForTimeout(10000);

        await page.locator('[value="igotthree"]').click();

        //await page.locator('input[type="radio"][value="igotthree"]').check();
        await expect(page.getByText('You have checked Impressive')).toBeVisible();





        //await expect(page.locator('#output')).toBeVisible();

        //await page.waitForTimeout(20000);
    });
});