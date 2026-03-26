import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { testcase2 } from '../pages/Testcase2';
import { signup } from '../pages/Singup';
import { Tescase4 } from '../pages/Logout';




test('logincorrect', async ({ page }) => {
    const LoginPage1 = new LoginPage(page);

    await LoginPage1.goto();
    await LoginPage1.Logincheck('sathishgunapal@gmail.com', 'Sathishkhan');
    await expect(LoginPage1.page).toHaveURL('https://automationexercise.com/login');
    await expect(LoginPage1.page.getByText('Your email or password is incorrect!')).toBeVisible();

});

test('check', async ({ page }) => {
    const testcase = new testcase2(page);
    await testcase.goto();
    await testcase.Delete('sathishlkgs78@gmail.com', 'sathishkhan');
    await expect(page).toHaveURL('https://automationexercise.com');
    await testcase.Deleteaccount();
    await expect(testcase.page.getByText('Account Deleted!')).toBeVisible();

});



test('POMDEMO', async ({ page }) => {
    const signupPage = new signup(page);
    await signupPage.goto()
    await signupPage.signup1('Sathish', 'sathish@gmail.com');
    await expect(page).toHaveURL('https://automationexercise.com/signup');
    await signupPage.Accountinformation();
    await expect(page.getByText('Account Created!')).toBeVisible();

});



test('ProperLogout', async ({ page }) => {
    const Properlogut = new Tescase4(page);
    await Properlogut.goto()
    await Properlogut.Loginnew('sathish@gmail.com', 'sathishkhan');
    await expect(page).toHaveURL('https://automationexercise.com/');
    await Properlogut.Logoutlogin();
    await expect(page).toHaveURL('https://automationexercise.com/login');
})

test('AlreadySingupuser', async ({ page }) => {
    const singupnew = new signup(page);
    await singupnew.goto();
    await singupnew.signupExistingUser('Sathish', 'sathish@gmail.com');
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
})

test('Contact Us form submission', async ({ page }) => {
    const contactus = new signup(page);

    // Attach dialog handler before calling Contactus
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await contactus.Contactus(
        'sathishkhan',
        'sathishkgs93@getMaxListeners.com',
        'purchase',
        'C:/Users/sathi/Downloads/Sathish_Gunapal_Resume.docx',
        'This is Sathishkhan'
    );
    await expect(contactus.page.getByLabel('Success! Your details have been submitted successfully')).toBeVisible();
})

test('case', async ({ page }) => {
    const book = new signup(page);
    await book.case7();
    await expect(page.locator('h2.title.text-center')).toHaveText('Test Cases');
});
test('Testcase8', async ({ page }) => {
    const case8 = new signup(page);
    await case8.Testcase8();
});

test('search7', async ({ page }) => {
    const search2 = new signup(page);
    await search2.Search();
});

test('Subscription1', async ({ page }) => {
    const Subcription = new signup(page);
    await Subcription.Subscription();
})



