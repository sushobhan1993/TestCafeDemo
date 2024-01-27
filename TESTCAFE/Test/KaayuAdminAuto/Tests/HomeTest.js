import { ClientFunction, t } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const dataset = require('D:/TestCafeHome/TestCafeDemo-6/TESTCAFE/Test/KaayuAdminAuto/DataSet/dataKaayu.json');

const url = 'https://staging.kaayu.ca/login';
const Homeurl = 'https://staging.kaayu.ca/';

const getURL = ClientFunction(() => window.location.href);

fixture('Home Page').page(url).beforeEach(async t => {
    const data = dataset[0]; // Change this index based on your data structure
    LoginPage.SetUserName(data.username);
    LoginPage.SetPassword(data.password);
    LoginPage.ClickonLoginButton();
    await t.wait(5000);
});

test('Loading Home Page', async t => {
    await t.expect(getURL()).contains(Homeurl);
    await t.expect(HomePage.pageheading.innerText).contains('Dashboard');
});

test('Successfully Logout', async t => {
    HomePage.ClickonLogoutButton();
    await t.wait(5000);
    await t.expect(LoginPage.logoutresponceCard.innerText).contains('Logout successful. Thanks for using Kaayu!');
});
