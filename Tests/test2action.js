import { Selector } from 'testcafe';
fixture('Getting Started').page('https://trytestingthis.netlify.app/');


/*
Notes
-----------------------------------------------------------------
1a. To run the code through terminal -     npx testcafe chrome tests/ -e    (  npx testcafe chrome .\Tests\test1.js)
1b. Run on mobile device            -     npx testcafe "chrome:emulation:device=iphone X" .\Tests\test2action.js --qr-code
1c. Find selector                    -     We need to open the url in debuger mode   - await t.debug()
1d. using url qr test on other device -    .\node_modules\.bin\testcafe remote .\Tests\ --qr-code
2. To tun on live mode              -    npx testcafe chrome .\Tests\test1.js --live
3. To stop live mode                -     cntr+c
4a. for locator                      -    For class we use .   for id we use #   & for others we can inspect then copy the selector
4b. Use two fixture in one          -     using full body
4c. Run only one fixture            -      using fixture.only
5. For Click                        -   await t.click
6. For type text                    -    need to give locator then need give text value 
7. Double click                     -    just use t.doubleclick and give locator
8. Right click                      -     Here we need to use    - await t.rightClick('#fnam')
                                                                  await t.expect(Selector('#cell-popup-menu').exists).notOk();
9. Hover                            -     Same like others , t.hover then locator                                                                   
10.Drag & Drop                      -    1st select the drager then where to put   await t.dragToElement('#drag1' ,'#div1')
11a.Scroll                           -    we can use   scrollIntoView
11b.Scroll with x & y axis           -     await t.scrollBy(0,500)
12.Alert or popup window            -    user like   await t.setNativeDialogHandler(() => true)
                                                     await t.click('body > div.row > div.side.ex1 > div.pop-up-alert > button');
13.Screeshots                       -       await t.takeScreenshot('screenshot1.png') 
14a.Value match or not using assert  -       using expect -   await t.expect(Dropdown.value).eql('option 2')
14b.Select from Dropdown             -      const dropDown = Selector('#option')
                                             const dropdownoption  = dropDown.find('option')

                                               await t.click(dropDown)
                                                 await t.click(dropdownoption.withText('Option 2'))
                                                await t.expect(dropDown.value).eql('option 2')
                                                 await t.wait(1000)
15. File upload                       -    await t.setFilesToUpload('#myfile', ['./uploads/abc.txt'])
16. Resize browser window             -    await t.resizeWindow(800, 600)    or   await t.maximizeWindow()
17. Assertion  for match              -     await t.expect(Selector('body > div.navbar > a:nth-child(2)').innerText).eql('Home')
18.Light house performance            -    need to check test3lighthouse.js   , then in the terminal -        npx testcafe 'chrome:emulation:cdpPort=9222' .\Tests\test3lighthouse.js
    
  
                                             


*/

test('1st test',async t => {

    //click
    await t.click('body > div.navbar > a:nth-child(1)')
    await t.wait(3000)
    await t.click('body > div.navbar > a:nth-child(2)')
    await t.wait(2000)

    //type text
    await t.typeText('#fname' , 'Sushobhan')

    //Double click 

    await t.doubleClick('body > div.row > div.side.ex1 > button')

    //right click

    //await t.rightClick('#fnam')
    //await t.expect(Selector('#cell-popup-menu').exists).notOk();

    //Hover 

    //await t.hover('body > div.row > div.side.ex1 > div.tooltip')
    //await t.wait(2000)

    //Drag & Drop

    await t.dragToElement('#drag1' ,'#div1')
    await t.wait(2000) 

    //Scroll

    await t.scrollIntoView ('body > div.footer > h4:nth-child(4) > a')
    await t.wait(3000)


    //Alert or popup window

    await t.setNativeDialogHandler(() => true)
    await t.click('body > div.row > div.side.ex1 > div.pop-up-alert > button');
    await t.wait(3000)

    // Screenshots 

    await t.takeScreenshot('screenshot1.png') 


    //Select from Dropdown 


   } )

   //2nd fixture
   fixture.only('Getting Started 2').page('https://trytestingthis.netlify.app/');

test('2nd test', async t => {
    // Dropdown
    /* Dropdown */
    const dropDown = Selector('#option')
    const dropdownoption  = dropDown.find('option')

    await t.click(dropDown)
    await t.click(dropdownoption.withText('Option 2'))
    await t.expect(dropDown.value).eql('option 2')
    await t.wait(1000)

    //File upload 

    await t.setFilesToUpload('#myfile', ['./uploads/abc.txt'])
    await t.wait(1000)

    /* Resize browser window */
    await t.resizeWindow(800, 600)
    await t.wait(1000)
    await t.maximizeWindow()
    await t.wait(1000)
    await t.resizeWindow(1200, 800)


    /* Scroll page */
    await t.scrollBy(0,500)
    await t.wait(2000)
    await t.scrollBy(0,500)

    

    //Assertion

    await t.expect(Selector('body > div.navbar > a:nth-child(2)').innerText).eql('Home')
   
    
} )


