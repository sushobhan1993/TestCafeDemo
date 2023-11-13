fixture('Getting Started').page('https://www.google.com/');

test('1st test',async t => {

    //For class we use .   for id we use #

     
    await t.typeText('#APjFqb' , 'Abcd')
    await t.click('.gNO89b')
    await t.wait(2000)


})

//Run the test
////Run the testnpx testcafe chrome .\Tests\kaayu1.js
// For run in terminal we have to use    npx testcafe chrome tests/ -e
// For the live run we can use   npx testcafe chrome .\Tests\test1.js --live
// cntr+c to stop live mode 

test('2nd test',async t => {

    
})