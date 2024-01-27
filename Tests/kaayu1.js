import { Selector } from 'testcafe';
fixture('Getting Started').page('https://staging.kaayu.ca/login').skipJsErrors(true)

//fixture('Getting Started').page('https://admin.kaayu.ca/login').skipJsErrors(true);



test('1st test',async t => {

    //1.Login
    //For class we use .   for id we use #
    await t.typeText('#username' , 'sushobhan123')
    await t.typeText('#password' , 'Password@1234')
    await t.click('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button')
   // await t.pressKey ('enter')

   //2.Logout

   //await t.click ('body > div.wrapper > nav > ul.navbar-nav.ml-auto > li:nth-child(7) > a');
   //await t.click ('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline');
   //await t.expect(Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button').exists).ok();
   //await t.expect(Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button').innerText).eql('Login')

  //3.Add Job (parent) & check the list that job saved or not

  await t.click('body > div > aside.main-sidebar.sidebar-dark-primary.elevation-4 > div > div.os-padding > div > div > nav > ul > li:nth-child(4) > a');
  await t.click('#topIconPanel > a > span');
  await t.typeText('#job-title' , 'Software Tester');

  //Select company 
   await t.click('#select2-company_id-container');
   await t.typeText('body > span > span > span.select2-search.select2-search--dropdown > input' , 'Lehner, Haag and Smith');
   await t.wait(5000);
   await t.click('#select2-company_id-results > li');
   await t.wait(5000);


  
   // Set Job Description inside iframe
   const iframeSelector = Selector('#description_ifr');

   await t
       .switchToIframe(iframeSelector)
       .typeText('body#tinymce', 'fggggggg')  // Set the fixed text directly using the body id "tinymce"
       .switchToMainWindow()
       .wait(5000);


       await t.click('#submit');
       await t.wait(5000);


    //Check job in the list page or not 

    const nameToCheck = 'Software Tester'; // Replace with the name you want to check

    // Selector for the table
    const tableSelector = Selector('#jobDatatable');

    // Selector for table rows
    const rowSelector = tableSelector.find('tbody tr');
    //const rowSelector = tableSelector.find('#\32 21');
    

    // Check if the name is present in any cell of the table
    const isNamePresent = await rowSelector.withText(nameToCheck).exists;
    //const isNamePresent = await rowSelector.withText('Software Tester2').exists;
    

    // Print messages to the console based on whether the name is present or not
    if (isNamePresent) {
        console.log(`The name '${nameToCheck}' is present in the table.`);
    } else {
        console.log(`The name '${nameToCheck}' is NOT present in the table.`);
    }

    //  TestCafe assertions if needed
    await t.expect(isNamePresent).ok('Name is not present in the table');


})




//Run the testnpx testcafe chrome .\Tests\kaayu1.js
// For run in terminal we have to use    npx testcafe chrome tests/ -e

test.skip('2nd test',async t => {

    await t.typeText('#username' , 'sushobhan123')
    await t.wait(2000)

    
})