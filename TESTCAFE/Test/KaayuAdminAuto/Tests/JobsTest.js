//JobsTest.js

/*
import { ClientFunction,Selector , t } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import JobsPage from '../Pages/JobsPage';

const dataset = require('D:/TestCafeHome/TestCafeDemo-6/TESTCAFE/Test/KaayuAdminAuto/DataSet/dataKaayu.json');

const url = 'https://staging.kaayu.ca/login';
const Homeurl = 'https://staging.kaayu.ca/';
const Jobsurl = 'https://staging.kaayu.ca/jobs';

const getURL = ClientFunction(() => window.location.href);

fixture('Home Page').page(url).skipJsErrors(true).beforeEach(async t => {
    const data = dataset[0]; // Change this index based on your data structure
    LoginPage.SetUserName(data.username);
    LoginPage.SetPassword(data.password);
    LoginPage.ClickonLoginButton();
    await t.wait(5000);
});

test.skip('Loading Jobs Page', async t => {
    HomePage.ClickonJobs();
    await t.expect(getURL()).contains(Jobsurl);
    await t.expect(JobsPage.pageheading.innerText).contains('All Jobs');
});

test('Add Job Page', async t => {
    HomePage.ClickonJobs();
    JobsPage.ClickonAddJob();
    JobsPage.HiringPipeline(data.search_HiringPipeline);


    //await t.click('#select2-hiring_pipeline-container');
    //await t.typeText('body > span > span > span.select2-search.select2-search--dropdown > input' , 'm');
    //const listItem = Selector('#select2-hiring_pipeline-results > li').withText('MASTER HIRING PIPELINE');
    //await t.click(listItem);
    
    await t.wait(3000);


    
    
});

*/

//JobsTest.js
import { ClientFunction, Selector, t } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import JobsPage from '../Pages/JobsPage';

const dataset = require('D:/TestCafeHome/TestCafeDemo-6/TESTCAFE/Test/KaayuAdminAuto/DataSet/dataKaayu.json');

const url = 'https://staging.kaayu.ca/login';
const Homeurl = 'https://staging.kaayu.ca/';
const Jobsurl = 'https://staging.kaayu.ca/jobs';

const getURL = ClientFunction(() => window.location.href);

fixture('Home Page').page(url).skipJsErrors(true).beforeEach(async t => {
    const data = dataset[0]; // Change this index based on your data structure
    LoginPage.SetUserName(data.username);
    LoginPage.SetPassword(data.password);
    LoginPage.ClickonLoginButton();
    await t.wait(5000);
});

test.skip('Loading Jobs Page', async t => {
    HomePage.ClickonJobs();
    await t.expect(getURL()).contains(Jobsurl);
    await t.expect(JobsPage.pageheading.innerText).contains('All Jobs');
});

test('Add Job Page', async t => {
    HomePage.ClickonJobs();
    JobsPage.ClickonAddJob();
    //JobsPage.HiringPipeline(dataset[3].search_HiringPipeline); // Using the data directly
    JobsPage.SetJobTitle(dataset[3].JobTitle);
    //JobsPage.SetCompany(dataset[3].Companyname);
    //JobsPage.SetJobDescription(dataset[3].JobDes);

    // Set fixed text ("fggggggg") for the Job Description directly in the test
    const iframeSelector = Selector('#description_ifr');
    const bodyInsideIframe = Selector('body[data-id="description"]');

    await t
        .switchToIframe(iframeSelector)
        .switchToIframe(bodyInsideIframe)
        .typeText(JobsPage.JobDescriptionInput, 'fggggggg')  // Set the fixed text directly
        .switchToMainWindow()
        .wait(3000);

    await t.click('#submit');

    await t.wait(5000);
});
