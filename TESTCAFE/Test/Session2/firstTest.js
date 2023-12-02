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

test('Test1', async t => {
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

    console.log(counter);



    
});