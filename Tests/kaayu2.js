//Add jobs multiple time
import { Selector } from 'testcafe';

fixture('Getting Started').page('https://staging.kaayu.ca/login').skipJsErrors(true);

test('Add 10 Jobs', async t => {
    // Login
    await t.typeText('#username', 'sushobhan123');
    await t.typeText('#password', 'Password@1234');
    await t.click('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button');

    // Add 10 Jobs
    for (let i = 1; i <= 10; i++) {
        await t.click('body > div > aside.main-sidebar.sidebar-dark-primary.elevation-4 > div > div.os-padding > div > div > nav > ul > li:nth-child(4) > a');
        await t.click('#topIconPanel > a > span');
        
        // Set Job Title with incremental number
        const jobTitle = `Software Tester${i}`;
        await t.typeText('#job-title', jobTitle);

        // Select company
        await t.click('#select2-company_id-container');
        await t.typeText('body > span > span > span.select2-search.select2-search--dropdown > input', 'Lehner, Haag and Smith');
        await t.wait(5000);
        await t.click('#select2-company_id-results > li');
        await t.wait(5000);

        // Set Job Description inside iframe
        const iframeSelector = Selector('#description_ifr');
        await t
            .switchToIframe(iframeSelector)
            .typeText('body#tinymce', `Description for ${jobTitle}`)
            .switchToMainWindow()
            .wait(5000);

        await t.click('#submit');
        await t.wait(5000);
    }
});
