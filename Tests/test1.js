fixture('Getting Started').page('https://www.google.com/');

test('1st test',async t => {

    //For class we use .   for id we use #

     
    await t.typeText('#APjFqb' , 'Abcd')
   
    await t.click('.gNO89b')
    await t.wait(2000)


})

test("My Test", async (t) => {
    
    })
    .before(async (t) => {
        // inject in the test context any input data needed to run this specific test
        t.ctx.inputData = inputData;
    })
    .after(async (t) => {
        // test finalization code
    });


//Run the test
////Run the testnpx testcafe chrome .\Tests\kaayu1.js
// For run in terminal we have to use    npx testcafe chrome tests/ -e
// For the live run we can use   npx testcafe chrome .\Tests\test1.js --live
// cntr+c to stop live mode 

test('2nd test',async t => {

    
})