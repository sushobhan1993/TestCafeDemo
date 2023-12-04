import { Selector } from 'testcafe';

fixture('Getting Started').page('https://demoqa.com');

// Notes:
/*  
To run on the Terminal - npx testcafe chrome TESTCAFE/Test/Session2 -e
Store selector for future use   -   const Textbox = '#item-0 > span';
Match the text is present or not  -   const Headerstring = await Headername.innerText;
                                        console.log(Headerstring);
For child selector               -   const childselector = Selector ('ul').child(0);
For skip the test                - we can just use .skip 
*/

test
.skip
('Test1', async t => {
    // Starts at http://devexpress.github.io/testcafe/example

    // Selector for the first element to be clicked
    const Element = '#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5';
    
    // Selector for the textbox to be clicked
    const Textbox = '#item-0 > span';
    
    // Selector for the header element
    const Headername = Selector('#app > div > div > div.pattern-backgound.playgound-header > div');
    
    // Click on the first element
    await t.click(Element).wait(3000);
    
    // Click on the textbox
    await t.click(Textbox).wait(3000);

    // Get the inner text of the header element and log it
    const Headerstring = await Headername.innerText;
    console.log(Headerstring);
});

   //Selector using child selector from dom
test
.skip
('Test1', async t => {
    // Starts at http://devexpress.github.io/testcafe/example

 

    // Selector for the first element to be clicked
    const Element = '#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5';


     //Child  Selector for the textbox to be clicked

    const childselector = Selector ('ul').child(0);

    const Headername = Selector('#app > div > div > div.pattern-backgound.playgound-header > div');
    
    // Click on the first element
    await t.click(Element).wait(3000);
    
    // Click on the textbox
    await t.click(childselector).wait(3000);

    // Get the inner text of the header element and log it
    const Headerstring = await Headername.innerText;
    console.log(Headerstring);

    
});

// Using loop for checkbox dom structure 

test
.skip('Test1', async t => {
    // Starts at http://devexpress.github.io/testcafe/example

 

    // Selector for the first element to be clicked
    const Element = '#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5';


     //Child  Selector for the textbox to be clicked

    const Checkbox = Selector ('ul').child(1);

    const Headername = Selector('#app > div > div > div.pattern-backgound.playgound-header > div');
    
    // Click on the first element
    await t.click(Element).wait(3000);
    
    // Click on the textbox
    await t.click(Checkbox).wait(3000);

    // Get the inner text of the header element and log it
    const Headerstring = await Headername.innerText;
    console.log(Headerstring);

    const checkboxmain = Selector ('#tree-node > ol > li > span > label > span.rct-checkbox'); 
    await t.click(checkboxmain).wait (3000);
    
    //#tree-node > ol > li > span > label > span.rct-checkbox
    //#tree-node > ol > li > span > button > svg
    const counter = await checkboxmain.count;
    console.log("counter",counter);


    console.log(counter);
    
   



    
});

//new data add on table
test

('Test1', async t => {
    // Starts at http://devexpress.github.io/testcafe/example

    // Selector for the first element to be clicked
    const Element = '#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5';

    await t.click(Element);

    //Child Selector for the textbox to be clicked
    const childselector = Selector ('ul').child(3);

    //const Headername = Selector('#app > div > div > div.pattern-backgound.playgound-header > div');
    
    await t.click(childselector).wait(3000);

    //console.log(Headername);

    const Addbutton = Selector('#addNewRecordButton');

    await t.click(Addbutton);


    const Firstname = Selector ('#firstName');
    const Lastname  = Selector ('#lastName');
    const Email = Selector ('#userEmail');
    const Age =  Selector ('#age');
    const Salary = Selector ('#salary');
    const Dept = Selector ('#department');
    const Submitbutton = Selector ('#submit');

    await t.typeText(Firstname , 'Sushobhan');
    await t.typeText(Lastname , 'Sen');
    await t.typeText(Email, 'sen21@yopmail.com');
    await t.typeText(Age, '24');
    await t.typeText(Salary,'8976');
    await t.typeText(Dept,'Tester');


    await t.click (Submitbutton);

    await t.wait(5000);
  
});