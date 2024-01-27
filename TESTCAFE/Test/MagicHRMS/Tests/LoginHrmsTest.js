import { ClientFunction, t, Selector } from 'testcafe';
import HomeHrmsPage from '../Pages/HomeHrmsPage';
import LoginHrmsPage from '../Pages/LoginHrmsPage';

//const dataset = require('../DataSet/DataHrms.json');

const url = 'https://qa-magichrms.magicmindtechnologies.com/';
const getURL = ClientFunction(() => window.location.href);

fixture('Login Page').page(url);
test('Loading login Page', async t => {
    await t.expect(getURL()).contains(url);
    await t.expect(LoginHrmsPage.HeaderText.exists).ok();
});