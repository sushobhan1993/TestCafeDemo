import { ClientFunction, Selector } from 'testcafe';

fixture('Assertion Api').page('https://demoqa.com/elements').skipJsErrors(true);

//Check how many left container are there , match that 6 containers are present or not
test ('Deep Equal', async t => {

    await t.expect(Selector('.header-wrapper').count).eql (6, "Total item count" ,{ timeout: 5000});


}
)
//check for not equal 
test ('Not Deep Equal', async t => {

    await t.expect(Selector('.header-wrapper').count).notEql (5, "Total item count" ,{ timeout: 5000});


}
)
//check the element that present or not 
test ('ok', async t =>{
    await t.click ('#item-0');
    await t.expect(Selector('#submit').exists).ok('The submit button are there');

})
//check the element that not present
test ('Notok', async t =>{
    
    await t.expect(Selector('#submit').exists).notOk('The submit button are there');

})

//check that i am on proper url or not
test ('contains',async t =>{
    
    const getLocation = ClientFunction(() => document.location.href.toString());

    await t.expect (getLocation()).contains('https://demoqa.com/elements');

})



