
import { test, expect } from '@playwright/test';

test('Create account using API', async ({ page, request }) => {

    // Generate dynamic email to avoid duplicate error
    //const email = `vijaya${Date.now()}@test.com`;


    const response = await request.post('https://automationexercise.com/api/createAccount',
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
                name: 'Vijaya Lakshmi',
                email: 'sathishkgs93@gmail.com',
                password: 'Test@123',
                title: 'Mrs',
                birth_date: '10',
                birth_month: 'May',
                birth_year: '1995',
                firstname: 'Vijaya',
                lastname: 'Lakshmi',
                company: 'BankCorp',
                address1: 'Chennai',
                address2: 'OMR',
                country: 'India',
                zipcode: '600001',
                state: 'Tamil Nadu',
                city: 'Chennai',
                mobile_number: '9999999999'
            }
        }
    );

    // Verify status
    expect(response.status()).toBe(200);

    await page.goto('https://automationexercise.com/login');
    await page.locator('[data-qa="login-email"]').fill('sathishkgs93@gmail.com');
    await page.locator('[data-qa="login-password"]').fill('Test@123');
    await page.getByRole('button', { name: 'Login' }).click();
    // Compare API vs UI 

    console.log('Login2 value: ${ uiEmail },${uiPassword}');

});
