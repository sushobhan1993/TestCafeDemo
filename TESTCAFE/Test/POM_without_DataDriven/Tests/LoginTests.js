// LoginTests.js


/*import { ClientFunction, t, Selector } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'https://the-internet.herokuapp.com/login'
const getURL = ClientFunction(() => window.location.href);

fixture('Login Page').page(url)

test('Loading login Page', async t => {

await t.expect(getURL()).contains(url);
await t.expect(LoginPage.loginBtn.exists).ok();

});

test('Form -Successfully Login', async t => {

    LoginPage.SetUserName('tomsmith');
    LoginPage.SetPassword('SuperSecretPassword!');
    LoginPage.ClickonLoginButton();

    await t.expect(HomePage.responceCard.innerText).contains('You logged into a secure area!');
    

    
});

test('Form -UnSuccessfully Login', async t => {

    LoginPage.SetUserName('tomsmithdd');
    LoginPage.SetPassword('SuperSecretPa');
    LoginPage.ClickonLoginButton();

    await t.expect(LoginPage.responceCard.innerText).contains('Your username is invalid!');
    

    
});




*/


// LoginTests.js
import { ClientFunction, t } from 'testcafe';
import xlsx from 'node-xlsx';
import LoginPage from '../Pages/LoginPage'; // Import the class, not an instance
import HomePage from '../Pages/HomePage';

const url = 'https://the-internet.herokuapp.com/login';
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

fixture('Login Page').page(url);

// Loop through the dataset and create a test for each set of data
dataset.forEach(data => {
    test(`Login - ${data.username}`, async t => {
        // Create a new instance of LoginPage for each test
        const loginPage = new LoginPage();


        // Perform login using data from the Excel file
        await loginPage.SetUserName(data.username);
        await loginPage.SetPassword(data.password);
        await loginPage.ClickonLoginButton();
        

        // Assertion based on expected result from Excel
        if (data.expectedResult === 'success') {
            // If login is expected to be successful
            const homePage = new HomePage();
            await t.expect(homePage.responceCard.innerText).contains('You logged into a secure area!');
        } else {
            // If login is expected to be unsuccessful
            await t.expect(loginPage.responceCard.innerText).contains('Your username is invalid!');
        }
        

    });
});
