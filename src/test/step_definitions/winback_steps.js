const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const Page = require('../pages/base_page');
//const ConfiguratorPage = require('../pages/configurator_page');
const StringUtils = require('../utils/string_utils');
const LoginPage = require('../pages/login_page');
const TestConfiguration = require('../application_utils/test_configuration');
const config = require('../../config');
const ComebackPage = require('../pages/winback_page.js');


const winBackStepDefinition = function () {
    const page = new Page();
    //const configuratorPage = new ConfiguratorPage();
    const loginPage = new LoginPage();
    const comebackPage = new ComebackPage();


    this.Given(/^the customer open the winback page$/, (done) => {
        comebackPage.open('/mysky-comeback/choose-pack');
        done;
    });

    this.Then(/^verify winback home page content$/, (done) => {
        comebackPage.verifyHeadersTxt();
        done;
    });

    this.Then(/^verify offered products amounts$/,  (done) => {
        comebackPage.verifyCurrentPrice();
        done;
    });

    this.Then(/^verify products discounted amount$/, (done) => {
        comebackPage.verifyDiscountedPrice();
        done;
    });

    this.When(/^opening to confirm details in split page$/, (done) => {
        comebackPage.open('mysky-comeback/confirm-details/address');
        done;
    });

    this.Then(/^verify 'Is this your address' header on the page$/, (done) => {
        comebackPage.verifyAddressQuestion();
        done;
    });

    this.Then(/^click the option 'I still live here'$/, (done) =>{
        comebackPage.clickYesStillLiveHere();
        done;
    });

    this.Then(/^verify 'is your satellite dish' header on the page$/, (done) => {
        comebackPage.verifyDishInstalled();
        done
    });

    this.Then(/^click 'yes, my dish is still up'$/, (done) => {
        comebackPage.clickYesMyDishStillUpBtn();
        done;
    });

    this.When(/^click the option 'I will be using this Sky Box'$/, (done) => {
        comebackPage.clickIwillBeUsingBtn();
        done;
    });

    this.Then(/^verify the 'We think you have a sky HD box' header on the page$/, (done) =>{
        comebackPage.verifyWeThinkYouHaveSkyHd();
        done;
    });

    this.Then(/^verify the 'Still have your Sky viewing card' header on the page$/, (done) => {
        comebackPage.verifyStillhaveViewingCardHead();
        done;
    });

    this.When(/^clicking the option 'Yes'$/, (done) => {
        comebackPage.clickOptionYes();
        done;
    });

    this.Then(/^verify the 'Your new Direct Debit with Sky' header on the page$/, done => {
        comebackPage.verifyYourDirectDebitHeadTxt();
        done;
    });

    this.Then(/^the bank details box does exist$/, (done) => {
        comebackPage.verifyBankDetailsBox();
        done;
    });

    this.When(/^ticking the box 'I am the holder of the above account'$/, done => {
        comebackPage.clickConfirmHolderOfBankAccountChk();
        done;
    });

    this.Then(/^the review button becomes active and can be clickable$/, done => {
        comebackPage.verifyReviewOrderIsEnabled();
        done;
    });

    this.When(/^clicking the review order button$/, done => {
        comebackPage.clickReviewOrderBtn();
        done;
    });

    this.Then(/^verify the Review and confirm your order does exist$/, done => {
        comebackPage.verifyReviewConfirmYourOrderHeadTxt();
        done;
    });

    this.When(/^clicking the 'Buy now' button$/, done => {
        comebackPage.clickBuyNowBtn();
        done;
    });

    this.Then(/^verify content on confirmation$/, done => {
        comebackPage.verifyWelcomeBackHeadTxt();
        done;
    });

    this.Then(/^click the Rest App link to rest the customer data$/, done =>{
        comebackPage.clickRestApp();
        done;
    });

    this.Then(/^select to add (box sets|cinema|sports|kids|sky hd|sports hd) tv product\(s\)$/, (products, done) => {
        comebackPage.selectTvProduct(products);

        done;
    });

    this.Then(/^verify the total cost is (£18|£28|£33.50|£19|£35.50) when buying (box sets|cinema|sports|kids|sky hd|sports hd) with TV base pack$/, (price, products, done) => {
        comebackPage.verifyProductPrice(price, products);
        done;
    });

    this.Then(/^click checkout to continue$/, done => {
        browser.debug();
        comebackPage.clickCheckout();
        done;
    });

    this.When(/^verify sports hd button is (disabled|enabled)$/, (isEnabled, done) => {
        comebackPage.verifySportHdBtnStatus(isEnabled);
        done;
    });
}
module.exports = winBackStepDefinition;
