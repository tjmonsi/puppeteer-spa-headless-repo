const puppeteer = require('puppeteer');
const queryShadowSelector = require('./utils/query-shadow-selector');
const clickLink = require('./utils/click-link');
const timeout = require('./utils/timeout');
const delay = require('./utils/delay');
const base = require('./utils/app-base');
require('must/register');

describe('Headless true', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true
    });
    page = await browser.newPage();
  }, timeout);

  afterAll(async () => {
    await page.close(); // close the page first!
    await browser.close(); // then the browser second!
  });

  it('user can access link-one page', async () => {
    await page.goto(base + '/');
    await delay(5000);
    // await page.screenshot({
    //   path: 'test/screenshots/link-one-headless-true.png'
    // });
    const pageComponent = await queryShadowSelector(['core-lite', 'component-one', 'component-sub-one', '[text-one]'], page);
    pageComponent.must.exist();
  }, timeout);

  it('user clicks on link-two', async () => {
    const link = await page.$('[link-two]');
    // console.log(link);
    clickLink(link, page);
  });

  it('user can access link-two page', async () => {
    await delay(5000);
    // await page.screenshot({
    //   path: 'test/screenshots/link-two-headless-true.png'
    // });
    const pageComponent = await queryShadowSelector(['core-lite', 'component-two', 'component-sub-two', '[text-two]'], page);
    const inner = await pageComponent.getProperty('innerHTML');
    console.log(await inner.jsonValue());
    // pageComponent.must.exist();
  }, timeout);
});
