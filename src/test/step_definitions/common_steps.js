const Page = require('../pages/base_page');
const BaseSession = require('../session/base_session');
const {
  DESKTOP_RESOLUTION,
  MOBILE_RESOLUTION,
  SCROLL
} = require('../application_utils/constants');
const StringUtils = require('../utils/string_utils');
const expect = require('chai').expect;
const baseSession = new BaseSession();

const commonStepDefinitionsWrapper = function () {
  const page = new Page();

  this.Given(/^a fresh test session is created$/, done => {
    page.reloadBrowser()
    done();
  });

  this.When(/^the user scrolls (down|up)$/, (direction, done) => {
    if (direction === 'down') {
      browser.scroll('[data-test-id=primary-price]', SCROLL.BOTTOM.x, SCROLL.BOTTOM.y);
    } else {
      browser.scroll('[data-test-id=primary-price]', SCROLL.TOP.x, SCROLL.TOP.y);
    }
    done();
  });

  this.When(/^the browser is (reset|re-sized$)/, (browserSize, done) => {
    if (browserSize === 're-sized') {
      page.setViewPortSize(MOBILE_RESOLUTION.IPHONE_SIX.WIDTH, MOBILE_RESOLUTION.IPHONE_SIX.HEIGHT);
    } else {
      page.setWindowSize(DESKTOP_RESOLUTION.WIDTH, DESKTOP_RESOLUTION.HEIGHT);
    }
    done();
  });

  this.Then(/^the customer navigates back$/, done => {
    browser.back();
    page.waitUntilSpinnerDisappears();
    done();
  });

  this.Then(/^the url contains originator=(.*)/, (text, done) => {
    console.log(`this is my  url ${text}`)
    originatorBase64Encoded = StringUtils.b64EncodeUnicode(text);
    originatorUriEncoded = StringUtils.uriEncode(originatorBase64Encoded);
    console.log(`this is my encoded url ${originatorUriEncoded}`)
    const url = page.getUrl();
    expect(url).to.include(`${originatorUriEncoded}`);
    done();
  });
};
module.exports = commonStepDefinitionsWrapper;
