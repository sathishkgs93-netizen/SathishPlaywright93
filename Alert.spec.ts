import { test, expect } from '@playwright/test';

test.describe('Alertframe', () => {
    test('Alertnoti', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/alerts.php');

        // Simple alert
        page.once('dialog', async dialog => {
            await dialog.accept();
        });
        await page.getByRole('button', { name: 'Alert', exact: true }).click();

        // Confirm alert
        page.once('dialog', async dialog => {
            await dialog.dismiss();
        });
        await page.getByRole('button', { name: 'Click Me' }).nth(1).click();
        await expect(page.getByText('You pressed Cancel!')).toBeVisible();

        // Prompt alert
        page.once('dialog', async dialog => {
            await dialog.accept('sathishkhan');
        });
        await page.getByRole('button', { name: 'Click Me' }).nth(2).click();
    });
});

test('frame', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');
    const frame = page.frameLocator('iframe').nth(0);

    const textContent = await frame.locator('h1').nth(0).textContent();
    console.log(textContent);
    await expect(frame.locator('h1').nth(0)).toHaveText('New Tab');
});




test('frame2 normal script', async ({ page }) => {
    // Step 1: Go to the page
    await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');

    // Step 2: Select parent frame
    const parentFrame = page.frameLocator('#frame1');


    // Step 3: Select child frame inside parent
    const childFrame = parentFrame.frameLocator('iframe').first();

    // Step 4: Locate heading inside child frame
    const headingLocator = childFrame.locator('h2.mt-5');

    // Step 5: Get text content
    const childFrameContent = await headingLocator.textContent();

    // Step 6: Print text
    console.log(childFrameContent);

    // Step 7: Assertion
    await expect(headingLocator).toHaveText('iframe');
});
