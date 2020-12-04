const puppeteer = require('puppeteer');
const {expect} = require('chai');

describe('E2E TESTS FOR SINGUP PAGE', async () => {

    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            slowMo: 35,
            args: ['--window-size=1920,1080'],
        });
    });

    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto("http://localhost:4200/register");
    });

    after(async () => {
        await browser.close();
    });

    describe('/POST Register', () => {

        it('it should singup a user', async () => {

            expect(await page.$eval('#formTitle', e => e.innerText))
                .to.eql("Create an Account");

            expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true);

            const username = await page.$('#username');
            const email = await page.$('#inputEmail');
            const password = await page.$('#inputPassword');
            const confirmPassword = await page.$('#PasswordConfirm');
            const submit = await page.$('#submitBtn');

            const user = Math.random().toString(36).substr(2, 4);

            await username.click({ clickCount: 3 });
            await username.type(user);

            await email.click({ clickCount: 3 });
            await email.type(`${user}@gmail.com`);

            await password.click({ clickCount: 3});
            await password.type('toto');

            await confirmPassword.click({ clickCount: 3});
            await confirmPassword.type('toto');

            expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(false);

            await submit.click();
            await page.waitForNavigation();

            expect(page.url()).eql('http://localhost:4200/login');

            await page.waitFor(1000);
        });

    });

    describe('/register errors', () => {

        it("it should display an error if the username's length is below 4", async () => {

            const username = await page.$('#username');
            const email = await page.$('#inputEmail');

            await username.click({ clickCount: 3 });
            await username.type('u');
            await email.click({ clickCount: 3 });
            await page.waitFor(1000);

            expect((await page.$eval('#usernameError1', el => el.innerHTML))
                .includes('minimum')).eql(true);

            expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true);

        });

        it("it should display an error if the email is invalid", async () => {

            const email = await page.$('#inputEmail');

            await email.click({ clickCount: 3 });
            await email.type('dan30gmail.com');
            await page.waitFor(1000);

            expect((await page.$eval('#emailInvalid', el => el.innerHTML))
                .includes('is not a valid email')).eql(true);

            expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true);

        });

        it("it should display an error if the passwords don't match", async () => {

            const password = await page.$('#inputPassword');
            const confirmPassword = await page.$('#PasswordConfirm');

            await password.click({ clickCount: 3 });
            await password.type('toto');

            await confirmPassword.click({ clickCount: 3 });
            await confirmPassword.type('totos');

            await page.waitFor(1000);

            expect(await page.$eval('#passwordMatchError', el => el.innerHTML))
                .eql('Passwords do not match');

            expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true);

        });

        it("it should display an error on any form field in an invalid state", async () => {

            expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true);

            const username = await page.$('#username');
            const email = await page.$('#inputEmail');
            const password = await page.$('#inputPassword');
            const confirmPassword = await page.$('#PasswordConfirm');

            await username.click({ clickCount: 3 });
            await username.type('');

            await email.click({ clickCount: 3 });
            await email.type('');

            await password.click({ clickCount: 3});
            await password.type('');

            await confirmPassword.click({ clickCount: 3});
            await confirmPassword.type('');

            await username.click({ clickCount: 3});

            expect(await page.$eval('#usernameError2', el => el.innerHTML))
                .eql('A username is required');

            expect(await page.$eval('#emailRequired', el => el.innerHTML))
                .eql('An Email is required');

            expect(await page.$eval('#passwordRequired', el => el.innerHTML))
                .eql('A password is required');

            expect(await page.$eval('#confirmPasswordError', el => el.innerHTML))
                .eql('Please confirm your password');

            expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(true);

        });

        it('it should display an error if the username or email alreay exists', async () => {

            const username = await page.$('#username');
            const email = await page.$('#inputEmail');
            const password = await page.$('#inputPassword');
            const confirmPassword = await page.$('#PasswordConfirm');
            const submit = await page.$('#submitBtn');

            await username.click({ clickCount: 3 });
            await username.type('dan30');

            await email.click({ clickCount: 3 });
            await email.type('dan30@gmail.com');

            await password.click({ clickCount: 3});
            await password.type('****');

            await confirmPassword.click({ clickCount: 3});
            await confirmPassword.type('****');

            expect(await page.$eval('#submitBtn', btn => btn.disabled)).eql(false);

            await submit.click();
            await page.waitFor(1000);

            expect((await page.$eval('#flashMessages', e => e.innerHTML))
                .includes('alert')).eql(true);

            expect(page.url()).eql('http://localhost:4200/register');
        });
    });

});
