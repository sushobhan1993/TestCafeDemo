//LoginTest.js


import { ClientFunction, t, Selector } from 'testcafe';
import xlsx from 'node-xlsx';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'http://15.156.242.8/login';
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
                // Check if login is successful
                await t.expect(HomePage.pageheading.innerText).contains('Dashboard');
                break;

            case 'the password must be at least 8 characters.':
                // Check the validation message for a short password
                await t.expect(LoginPage.responceCard.innerText).contains(data.expectedResult);
                break;

            case 'invalid login credentials.':
                // Check the validation message for invalid login credentials
                await t.expect(LoginPage.unsuccessfullmsz.innerText).contains(data.expectedResult);
                break;

            default:
                // Handle any other cases here
                console.error(`Unexpected case: ${data.expectedResult}`);
        }
    });
});



// ... (previous code)

/* 2nd slot  This is using if else 
dataset.forEach(data => {
    test(`Form - Login - ${data.expectedResult}`, async t => {
        LoginPage.SetUserName(data.username);
        LoginPage.SetPassword(data.password);
        LoginPage.ClickonLoginButton();

        if (data.expectedResult.toLowerCase() === 'dashboard') {
            // Check if login is successful
            await t.expect(HomePage.pageheading.innerText).contains('Dashboard');
        } else {
            // If login is unsuccessful, check the error message on the login page
            await t.expect(LoginPage.responceCard.innerText).contains(data.expectedResult);
        }
    });

    if (data.expectedResult.toLowerCase() === 'invalid login credentials') {
        test(`Form - Unsuccessfully Login with wrong credentials - ${data.expectedResult}`, async t => {
            LoginPage.SetUserName(data.username);
            LoginPage.SetPassword(data.password);
            LoginPage.ClickonLoginButton();

            await t.expect(LoginPage.unsuccessfullmsz.innerText).contains(data.expectedResult);
        });
    }
});


*/


