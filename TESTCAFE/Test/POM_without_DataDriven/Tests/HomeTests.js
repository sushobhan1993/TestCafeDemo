//HomeTests.js
/*

import { ClientFunction, t, Selector } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'https://the-internet.herokuapp.com/login'
const Homeurl = 'https://the-internet.herokuapp.com/secure'


const getURL = ClientFunction(() => window.location.href);

fixture('Home Page').page(url).beforeEach(async t =>{
    LoginPage.SetUserName('tomsmith');
    LoginPage.SetPassword('SuperSecretPassword!');

    LoginPage.ClickonLoginButton();

    await t.wait(5000);
});

test('Loading Home Page', async t => {

await t.expect(getURL()).contains(Homeurl);
await t.expect(HomePage.logoutBtn.exists).ok();

});

test('Successfully Logout', async t => {

        HomePage.ClickonLogoutButton();
        await t.wait (5000);

        await t.expect(LoginPage.responceCard.innerText).contains(' You logged out of the secure area!');
        
    
    });
    

    */


    // HomeTests.js

// HomeTests.js

/*

import { ClientFunction, t, Selector } from 'testcafe';
import xlsx from 'node-xlsx';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'https://the-internet.herokuapp.com/login';
const Homeurl = 'https://the-internet.herokuapp.com/secure';

const getURL = ClientFunction(() => window.location.href);

// Declare loginPage outside the beforeEach hook
let loginPage;

// Read data from Excel file
const excelFile = xlsx.parse('D:/TestCafeHome/TestCafeDemo-2/TESTCAFE/Test/Data/testData.xlsx');
const excelSheet = excelFile.find(sheet => sheet.name === 'Data');
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();

// Map Excel data to a dataset
const dataset = excelSheetData.map(row => {
    const testData = {};
    row.forEach((data, idx) => (testData[headers[idx]] = data));
    return testData;
});

fixture('Home Page').page(url).beforeEach(async t => {
    const data = dataset[0];
    loginPage = new LoginPage(); // Initialize loginPage here
    await loginPage.SetUserName(data.username);
    await loginPage.SetPassword(data.password);
    await loginPage.ClickonLoginButton();
    await t.wait(5000);
});

test('Loading Home Page', async t => {
    await t.expect(getURL()).contains(Homeurl);
    const homePage = new HomePage();
    await t.expect(homePage.logoutBtn.exists).ok();
});

test('Successfully Logout', async t => {
    const homePage = new HomePage();
    await homePage.ClickonLogoutButton();
    await t.wait(5000);
    await t.expect(loginPage.responceCard.innerText).contains('You logged out of the secure area!');
});


*/

import { ClientFunction, t, Selector } from 'testcafe';
import xlsx from 'node-xlsx';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';

const url = 'https://the-internet.herokuapp.com/login';
const Homeurl = 'https://the-internet.herokuapp.com/secure';

const getURL = ClientFunction(() => window.location.href);

// Read data from Excel file
const excelFile = xlsx.parse('D:/TestCafeHome/TestCafeDemo-2/TESTCAFE/Test/Data/testData.xlsx');
const excelSheet = excelFile.find(sheet => sheet.name === 'Data');
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();

// Map Excel data to a dataset
const dataset = excelSheetData.map(row => {
    const testData = {};
    row.forEach((data, idx) => (testData[headers[idx]] = data));
    return testData;
});

// Declare loginPage outside the beforeEach hook
let loginPage;

fixture('Home Page').page(url).beforeEach(async t => {
    const data = dataset[0];
    loginPage = new LoginPage(); // Initialize loginPage here
    await loginPage.SetUserName(data.username);
    await loginPage.SetPassword(data.password);
    await loginPage.ClickonLoginButton();
    await t.wait(5000);
});

test('Loading Home Page', async t => {
    await t.expect(getURL()).contains(Homeurl);
    const homePage = new HomePage();
    await t.expect(homePage.logoutBtn.exists).ok();
});

test('Successfully Logout', async t => {
    const homePage = new HomePage();
    await homePage.ClickonLogoutButton();
    await t.wait(5000);
    await t.expect(loginPage.responceCard.innerText).contains('You logged out of the secure area!');
});
