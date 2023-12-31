//HomeTests.js

import { ClientFunction, t } from 'testcafe';
import xlsx from 'node-xlsx';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'https://the-internet.herokuapp.com/login';
const Homeurl = 'https://the-internet.herokuapp.com/secure';

const getURL = ClientFunction(() => window.location.href);

// Read data from Excel file
const excelFile = xlsx.parse('D:/TestCafeHome/TestCafeDemo-2/TESTCAFE/Test/Data/testData.xlsx');
const excelSheet = excelFile.find(sheet => sheet.name === 'Data');
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();

const dataset = excelSheetData.map(row => {
    const testData = {};
    row.forEach((data, idx) => (testData[headers[idx]] = data));
    return testData;
});

fixture('Home Page').page(url).beforeEach(async t => {
    
    const data = dataset[0]; // Change this index based on your data structure

    LoginPage.SetUserName(data.username);
    LoginPage.SetPassword(data.password);
    LoginPage.ClickonLoginButton();

    await t.wait(5000);
});

test('Loading Home Page', async t => {
    await t.expect(getURL()).contains(Homeurl);
    await t.expect(HomePage.logoutBtn.exists).ok();
});

test('Successfully Logout', async t => {
    HomePage.ClickonLogoutButton();
    await t.wait(5000);

    
    await t.expect(LoginPage.responceCard.innerText).contains('You logged out of the secure area!');
    
});