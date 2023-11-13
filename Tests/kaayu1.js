fixture('Getting Started').page('http://15.156.242.8/login');

test('1st test',async t => {

    //For class we use .   for id we use #
    await t.typeText('#username' , 'admin')
    await t.typeText('#password' , '12345678')
    await t.click('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button')
   // await t.pressKey ('enter')
    await t.wait(4000)


})

//Run the testnpx testcafe chrome .\Tests\kaayu1.js
// For run in terminal we have to use    npx testcafe chrome tests/ -e

test('2nd test',async t => {

    
})