//import {Selector  } from "testcafe";

fixture('Getting Started').page('https://demoqa.com/webtables');

test('1st test',async t => {

    console.log('-----------------------')

    const webtable1 = Selector('#item-3');

    await t
    .click(webtable1)
    .wait(3000)

    const headercontainer = Selector ('.main-header');
    const headername = await headercontainer.innerText;

    console.log('the header name is :' +headername);



})