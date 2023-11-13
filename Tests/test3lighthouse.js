import { Selector } from 'testcafe';
import { testcafeAudit } from 'testcafe-lighthouse';

fixture('Getting Started').page('https://trytestingthis.netlify.app/');

test('1st test',async t => {

    //click
    await t.click('body > div.navbar > a:nth-child(1)')
    await t.wait(3000)
    await t.click('body > div.navbar > a:nth-child(2)')
    await t.wait(2000)


    const currentURL = await t.eval(() => document.documentURI);
  await testcafeAudit({
    url: currentURL,
    thresholds: {
      performance: 50,
      accessibility: 50,
      'best-practices': 50,
      seo: 50,
      pwa: 50,
    },
    reports : {
        formats: {
            html: true
        },
        name :'lighthouseRepost',
        directory: './Performance'
    },
    cdpPort: 9222,
  });

} )