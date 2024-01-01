//HomeTest.js
import { ClientFunction, t, Selector } from 'testcafe';
import xlsx from 'node-xlsx';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'http://15.156.242.8/login'
const Homeurl = 'http://15.156.242.8/'


const getURL = ClientFunction(() => window.location.href);

// Read data from Excel file
const excelFile = xlsx.parse('D:/TestCafeHome/TestCafeDemo-2/TESTCAFE/Test/Data/testData_Kaayu.xlsx');
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
    await t.expect(HomePage.pageheading.innerText).contains('Dashboard');
    
    
});

test('Successfully Logout', async t => {

    HomePage.ClickonLogoutButton();
    await t.wait (5000);

    //await t.expect(Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button').exists).ok();
    // await t.expect(LoginPage.loginBtn.innerText).contains('Login');

    await t.expect(LoginPage.logoutresponceCard.innerText).contains('Logout successful. Thanks for using Kaayu!');

    


});
