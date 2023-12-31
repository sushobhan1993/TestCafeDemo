import { ClientFunction, t, Selector } from 'testcafe';
import xlsx from 'node-xlsx';

const excelfile = xlsx.parse('D:/TestCafeHome/TestCafeDemo-2/TESTCAFE/Test/Data/testData.xlsx')
//data is sheet name in the excel sheet
const excelsheet = excelfile.find( sheets => sheets.name =='Data');
const excelsheetData = excelsheet.data;
const headers = excelsheetData.shift();

const dataset =excelsheetData.map((row) =>{

    const user = {};

    row.forEach((data, idx) => user[headers[idx]] = data)

    return user;

})

fixture('Excel - Data Driven Test')

dataset.forEach(data => {
    test.page('https://the-internet.herokuapp.com/login')
    (`Login Page - ${data.expectedResult}`, async t=> {

        await t.maximizeWindow()
        await t.typeText(Selector('#username'), data.username);
        await t.typeText(Selector('#password'), data.password);
        await t.click('#login > button > i');


        await t.expect(Selector('div#flash').innerText).contains(data.expectedResult);


    }) 
})



