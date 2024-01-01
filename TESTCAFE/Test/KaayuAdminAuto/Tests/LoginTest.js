import { ClientFunction, t, Selector } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const dataset = require('D:/TestCafeHome/TestCafeDemo-2/TESTCAFE/Test/KaayuAdminAuto/DataSet/dataKaayu.json');

const url = 'http://15.156.242.8/login';
const getURL = ClientFunction(() => window.location.href);

fixture('Login Page').page(url).skipJsErrors(true);

test('Loading login Page', async t => {
    await t.expect(getURL()).contains(url);
    await t.expect(LoginPage.loginBtn.exists).ok();
});

dataset.forEach(data => {
    test(`Form - Login - ${data.expectedResult}`, async t => {
        LoginPage.SetUserName(data.username);
        LoginPage.SetPassword(data.password);
        LoginPage.ClickonLoginButton();

        switch (data.expectedResult.toLowerCase()) {
            case 'dashboard':
                await t.expect(HomePage.pageheading.innerText).contains('Dashboard');
                break;

            case 'the password must be at least 8 characters.':
                await t.expect(LoginPage.responceCard.innerText).contains(data.expectedResult);
                break;

            case 'invalid login credentials.':
                await t.expect(LoginPage.unsuccessfullmsz.innerText).contains(data.expectedResult);
                break;

            default:
                console.error(`Unexpected case: ${data.expectedResult}`);
        }
    });
});