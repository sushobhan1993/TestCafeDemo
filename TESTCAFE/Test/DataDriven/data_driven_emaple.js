// Import necessary TestCafe modules
import { ClientFunction, t, Selector } from 'testcafe';

// Required: Import dataset (JSON file) containing test data
const dataset = require('D:/TestCafeHome/TestCafeDemo-2/TESTCAFE/Test/Data/data.json');

// Global Variable: Define a function to get the current URL
const getURL = ClientFunction(() => window.location);


// Test Fixture: Define the test suite with a fixture
fixture('Data Driven Test');

// Loop through each set of data in the dataset
dataset.forEach(data => {
    // Define a test case for each set of data
    test.page('https://the-internet.herokuapp.com/login')(
        // Test Name: Display the expected result in the test name for clarity
        `Login Page - ${data.expectedResult}`,
        // Test Function: Define the test steps using the provided data
        async t => {
            // Perform actions on the page using data values
            await t.maximizeWindow()
            await t.typeText(Selector('#username'), data.username);
            await t.typeText(Selector('#password'), data.password);
            await t.click('#login > button > i');


            
           // Take a screenshot and save it with the expected result name in the specified path
           await t.takeScreenshot({
            //path: `D:/TestCafeHome/TestCafeDemo-2/screenshots/${data.expectedResult}.png`,
            path: `screenshots/${data.expectedResult}.png`,
            fullPage: true
        });


            // Make an assertion based on the expected result

            await t.expect(Selector('div#flash').innerText).contains(data.expectedResult);
        }
    );
});

// Running suggestion  https://prnt.sc/VccNdUIIzTon

//npx testcafe chrome .\data_driven_emaple.js 
// For video 
//npx testcafe chrome .\data_driven_emaple.js
// Take a screenshot and save it with the expected result name in the specified path
/*
await t.takeScreenshot({
    //path: `D:/TestCafeHome/TestCafeDemo-2/screenshots/${data.expectedResult}.png`,
    path: `screenshots/${data.expectedResult}.png`,
    fullPage: true
});

*/

