import { test, expect, request } from '@playwright/test';
import { ServerResponse } from 'node:http';

test.describe('APIUI1', () => {
    test('APIUI2', async ({ page, request }) => {
        const response1 = await request.get('https://automationexercise.com/api/productsList');
        expect(response1.status()).toBe(200);
        const body = await response1.json();
        console.log(body);
        const brand = body.products[1].brand;
        console.log('API second brand: $ { brand }');


        await page.goto('https://automationexercise.com/');
        //const brand2 = page.locator(".brands-name").getByText(brand);
        const brand2 = await page.locator('.brands_products li a').nth(1).textContent();
        console.log('API UI check: ${brand2}');
        expect(brand2).toContain(brand);


    });
});
