import { Selector } from 'testcafe';

fixture('Getting Started')
.disablePageCaching
.disableMultipleWindows
.page('https://phptravels.net/');

// Define a TestCafe test
test.skip('New Window open after click', async t => {
    // Define the Selector for a specific element on the webpage
    const youtubeSelector = Selector('#fadein > section.bg-white.footer-area > div > div.bg-white > div.row.align-items-center.g-0.mt-4 > div.col-lg-4 > div > ul > li:nth-child(5) > a');

    // Get the current URL of the webpage
    const initialUrl = await t.eval(() => document.documentURI);
    console.log('Initial URL: ' + initialUrl);

    // Click on the YouTube link
    await t.click(youtubeSelector);

    // Get the new URL
    const newUrl = await t.eval(() => document.documentURI);
    console.log('New URL: ' + newUrl);

    // Check that the URL has changed
    await t.expect(newUrl).notEql(initialUrl);

    // Check that the new URL matches the expected URL
    await t.expect(newUrl).eql('https://www.youtube.com/phptravels');
});


// Define a TestCafe test
import { Selector } from 'testcafe';

fixture('Getting Started').page('https://phptravels.net/');

// Define a TestCafe test
test('Open Two Different Websites in Multiple Windows', async t => {
    // Open the first website in the default window
    await t.navigateTo('https://phptravels.net/');

    // Open a new window and navigate to the second website
    const secondWindow = await t.openWindow('https://www.youtube.com/phptravels');

    // Switch to the second window and perform actions/assertions
    await t.switchToWindow(secondWindow);
    const title2 = await Selector('title').innerText;
    await t.expect(title2).contains('Website 2 Title');

    // Switch back to the original window and perform actions/assertions
    await t.switchToWindow(t.parentWindow);
    const title1 = await Selector('title').innerText;
    await t.expect(title1).contains('Example Domain');
});


// Multiple window not woring need to check 
