import { Selector } from 'testcafe';
fixture('Getting Started').page('http://15.156.242.8/login')

//fixture('Getting Started').page('https://admin.kaayu.ca/login').skipJsErrors(true);



test('1st test',async t => {

    //For class we use .   for id we use #
    await t.typeText('#username' , 'sushobhan123')
    await t.typeText('#password' , 'Password@1234')
    await t.click('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button')
   // await t.pressKey ('enter')

   await t.click ('body > div.wrapper > nav > ul.navbar-nav.ml-auto > li:nth-child(7) > a');
   await t.click ('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline');
   await t.expect(Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button').exists).ok();
   //await t.expect(Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button').innerText).eql('Login')

})


//Run the testnpx testcafe chrome .\Tests\kaayu1.js
// For run in terminal we have to use    npx testcafe chrome tests/ -e

test.skip('2nd test',async t => {

    await t.typeText('#username' , 'sushobhan123')
    await t.wait(2000)

    
})