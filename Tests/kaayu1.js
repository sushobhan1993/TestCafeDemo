fixture('Getting Started').page('http://15.156.242.8/login');

//fixture('Getting Started').page('https://admin.kaayu.ca/login').skipJsErrors(true);



test('1st test',async t => {

    //For class we use .   for id we use #
    await t.typeText('#username' , 'sushobhan123')
    await t.typeText('#password' , 'Password@1234')
    await t.click('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button')
   // await t.pressKey ('enter')

})
//Demobgbgv

//Run the testnpx testcafe chrome .\Tests\kaayu1.js
// For run in terminal we have to use    npx testcafe chrome tests/ -e

test('2nd test',async t => {

    await t.typeText('#username' , 'sushobhan123')
    await t.wait (2000)
    
})