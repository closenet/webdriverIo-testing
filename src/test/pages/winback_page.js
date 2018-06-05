const Page = require('./base_page');
const loginPage = require('./login_page');
const assert = require('chai').assert;
var expect = require('chai').expect;
const NumConverter = require('../application_utils/strToCurrencyConvert.js');
const TestConfigSession = require('../session/test_config_session');
const {
    NUMBER_OF_SELECTABLE_PRODUCTS,
    TIMEOUT,
    SCROLL
} = require('../application_utils/constants');


class winbackPage extends Page {

    get skyEntertainPrice() {
        return ".//*[@id='main']/div/div[1]/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/span[2]/span";
    }

    get winbackTvItemSelected (){
        return "[data-test-id=\"tv-product-cta-text\"]";
    }

    get skyBoxSetsPrice (){
        return ".//*[@id='main']/div/div[1]/div[2]/div[1]/div/div/div[2]/div/div[2]/div[1]/div/span[2]/span";
    }

    get skyCinemaPrice() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[2]/div/div/div[2]/div/div[2]/div[1]/div/span[2]/span";
    }

    get skySportsPrice() {
        return "//*[@id='main']/div/div[1]/div[2]/div[3]/div/div/div[2]/div/div[2]/div[1]/div/span[2]/span";
    }

    get skyKidsPrice() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[4]/div/div/div[2]/div/div[2]/div[1]/div/span[2]/span";
    }

    get skyHdPrice() {
        return ".//*[@id='main']/div/div[1]/div[3]/div[1]/div/div/div[2]/div/div[2]/div[1]/div/span[2]/span";
    }

    get skySportHdPrice() {
        return ".//*[@id='main']/div/div[1]/div[3]/div[2]/div/div/div[2]/div/div[2]/div[1]/div/span[2]/span";
    }

//discounted prices

    get skyEntertainDisPrice(){
        return ".//*[@id=\"main\"]/div/div[1]/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/span[1]/span/s";
    }

    get skyBoxSetsDisPrice (){
        return ".//*[@id='main']/div/div[1]/div[2]/div[1]/div/div/div[2]/div/div[2]/div[1]/div/span[2]/span";
    }

    get skyCinemaDisPrice() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[2]/div/div/div[2]/div/div[2]/div[1]/div/span[1]/span/s";
    }

    get skySportsDisPrice() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[3]/div/div/div[2]/div/div[2]/div[1]/div/span[1]/span/s";
    }

    get skyKidsDisPrice() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[4]/div/div/div[2]/div/div[2]/div[1]/div/span[1]/span/s";
    }

    get skyHdDisPrice () {
        return ".//*[@id='main']/div/div[1]/div[3]/div[1]/div/div/div[2]/div/div[2]/div[1]/div/span[1]/span/s";
    }

    get skySportHdDisPrice () {
        return ".//*[@id='main']/div/div[1]/div[3]/div[2]/div/div/div[2]/div/div[2]/div[1]/div/span[1]/span/s";
    }

//buttons
    get skyBoxSetsBtn (){
        return ".//*[@id='main']/div/div[1]/div[2]/div[1]/div/div/div[2]/div/div[2]/div[2]/label/span";
    }

    get skyCinemaBtn() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[2]/div/div/div[2]/div/div[2]/div[2]/label/span";
    }

    get skySportsBtn() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[3]/div/div/div[2]/div/div[2]/div[2]/label/span";
    }

    get skyKidsBtn() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[4]/div/div/div[2]/div/div[2]/div[2]/label/span";
    }

    get skyHdBtn() {
        return ".//*[@id='main']/div/div[1]/div[3]/div[1]/div/div/div[2]/div/div[2]/div[2]/label/span";
    }

    get skySportHdBtn () {
        return ".//*[@id='main']/div/div[1]/div[3]/div[2]/div/div/div[2]/div/div[2]/div[2]/label/span";
    }


    get getCheckoutOrderBtn () {
        return ".//*[@id='main']/div/div[2]/div[1]/div/form/button";
    }

//titles
    get skyEntertainHeadTxt(){
        return ".//*[@id='main']/div/div[1]/div[1]/div/div/div/div[2]/div/div[1]/h3";
    }

    get skyBoxSetsHeadTxt (){
        return ".//*[@id='main']/div/div[1]/div[2]/div[1]/div/div/div[2]/div/div[1]/h3";
    }

    get skyCinemaHeadTxt() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[2]/div/div/div[2]/div/div[1]/h3";
    }

    get skySportsHeadTxt() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[3]/div/div/div[2]/div/div[1]/h3";
    }

    get skyKidsHeadTxt() {
        return ".//*[@id='main']/div/div[1]/div[2]/div[4]/div/div/div[2]/div/div[1]/h3";
    }

    get skyHdHeadTxt() {
        return ".//*[@id='main']/div/div[1]/div[3]/div[1]/div/div/div[2]/div/div[1]/h3";
    }

    get skySportsHdHeadTxt () {
        return ".//*[@id='main']/div/div[1]/div[3]/div[2]/div/div/div[2]/div/div[1]/h3";
    }

//headers
    get yourSkyTvHeadTxt () {
        return ".//*[@id='main']/div/div[1]/h1";
    }

    get makeItEvenBetterHeadTxt () {
        return ".//*[@id='main']/div/div[1]/h2";
    }

    get enhaceYourViewingTxt () {
        return ".//*[@id='main']/div/div[1]/h3";
    }

    get yourSelectionHeadTxt () {
        return ".//*[@id='main']/div/div[1]/h4";
    }


    get yourOrderHeadTxt () {
        return ".//*[@id='main']/div/div[2]/div[1]/div/table/thead/tr/td/h3";
    }

    get yourMonthlyCostTxt () {
        return ".//*[@id='main']/div/div[2]/div[1]/div/table/tfoot/tr/td[1]/span";
    }



    // split pages
    get stillYourAddressTxt () {
        return ".c-heading-bravo";
    }

    get yesStillLiveHereBtn () {
        return "a.c-btn:nth-child(3)";
    }

    get noHaveMovedHouseBtn () {
        return "a.c-btn:nth-child(4)";
    }

    // questions about the dish

    get isYourSatDishInstalledTxt () {
        return '.c-heading-bravo';
    }

    get yesMyDishStillUpBtn () {
        return "a.wb-option-btn:nth-child(1)";
    }

    get noNeedDishInstallingBtn () {
        return "a.c-btn:nth-child(2)";
    }

    // question about having sky hd box
    get wethinkYouHaveTxt () {
        return ".c-heading-bravo";
    }

    get iWillBeUsingBtn () {
        return "/html/body/div[2]/div/div[2]/div/a[1]";
    }

    get iHaveDifferentSkyBoxBtn () {
        return "a.c-btn:nth-child(2))";
    }

    get dontHaveSkyBoxAnyMoreLnk () {
        return ".c-link-external";
    }

    // viewing car question

    get stillHavingYourViewingCardHeadTxt () {
        return ".c-heading-bravo";
    }

    get yesStillHaveBtn () {
        return "/html/body/div[2]/div/div[2]/div/a[1]";
    }

    get noDontHaveItBtn () {
        return "a.c-btn:nth-child(2)";
    }


    // direct debt details

    get bankDetailsDiv () {
        return ".c-tile__body";
    }

    get yourNewDirectBebtWithSkyHeadTxt () {
        return ".c-heading-bravo";
    }

    get confirmHolderOfBankAccountChk () {
        return "[data-test-id='confirmation-checkbox']";
    }

    get reviewOrderBtn () {
        return "[data-test-id='primary-button']";
    }

    get directDebtDetailsIncorrectBtn () {
        return "[data-test-id='secondary-button']";
    }

// review order and buy

    get reviewConfirmYourOrderHeadTxt () {
        return "/html/body/div[2]/div[1]/div/h1";
    }

    get buyBtn () {
        return "button.c-btn:nth-child(2)";
    }

    get resetAppBtn () {
        return ".btn";
    }

    get welcomeBackHeadTxt () {
        return ".c-heading-alpha";
    }

    get totalPrice () {
        return "td.c-price-summary-foot__cell:nth-child(2) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1)";
    }

    get sportHdBtnState () {
        return"//*[@id=\"main\"]/div/div[1]/div[3]/div[2]/div/div/div[2]/div/div[2]/div[2]/label/input";
    }

    verifyDiscountedPrice() {
        var numConverter = new NumConverter();
        browser.waitForExist(this.skyBoxSetsDisPrice);
        var EntertainDisPrice = numConverter.strToNumeric(browser.getText(this.skyEntertainDisPrice));
        var BoxSetsDisPrice = numConverter.strToNumeric(browser.getText(this.skyBoxSetsDisPrice));
        var CinemaDisPrice = numConverter.strToNumeric(browser.getText(this.skyCinemaDisPrice));
        var SportsDisPrice = numConverter.strToNumeric(browser.getText(this.skySportsDisPrice));
        var KidsDisPrice = numConverter.strToNumeric(browser.getText(this.skyKidsDisPrice));
        var HdDisPrice = numConverter.strToNumeric(browser.getText(this.skyHdDisPrice));
        var SportHdDisPrice = numConverter.strToNumeric(browser.getText(this.skySportHdDisPrice));

        expect(EntertainDisPrice).to.match(/£\d+/);
        expect(BoxSetsDisPrice).to.match(/£\d+/);
        expect(CinemaDisPrice).to.match(/£\d+/);
        expect(SportsDisPrice).to.match(/£\d+/);
        expect(KidsDisPrice).to.match(/£\d+/);
        expect(HdDisPrice).to.match(/£\d+/);
        expect(SportHdDisPrice).to.match(/£\d+/);
    }

    verifyHeadersTxt (){
        browser.waitForExist(this.yourOrderHeadTxt);
        expect(browser.getText(this.yourSkyTvHeadTxt)).to.eq('Your Sky TV');
        expect(browser.getText(this.skyEntertainHeadTxt)).to.eq('Sky Entertainment');
        expect(browser.getText(this.skyBoxSetsHeadTxt)).to.eq('Sky Box Sets');
        expect(browser.getText(this.skyCinemaHeadTxt)).to.eq('Sky Cinema');
        expect(browser.getText(this.skySportsHeadTxt)).to.eq('Sky Sports');
        expect(browser.getText(this.skyKidsHeadTxt)).to.eq('Sky Kids');
        expect(browser.getText(this.skyHdHeadTxt)).to.eq('Sky HD');
        expect(browser.getText(this.skySportsHdHeadTxt)).to.eq('Sky Sports HD');
        expect(browser.getText(this.yourSelectionHeadTxt)).to.eq('Your selection');
        expect(browser.getText(this.yourOrderHeadTxt)).to.eq('Your order');
        expect(browser.getText(this.yourMonthlyCostTxt)).to.eq('Total monthly cost');
        expect(browser.getText(this.getCheckoutOrderBtn)).to.eq('Checkout');
        expect(this.getCheckoutOrderBtn).to.exist;
    }

    verifyCurrentPrice() {
        var numConverter = new NumConverter();
        browser.waitForExist(this.skyEntertainPrice);
        var sportsprice = numConverter.strToNumeric(browser.getText(this.skySportsPrice));
        var EntertainPrice = numConverter.strToNumeric(browser.getText(this.skyEntertainPrice));
        var BoxSetsPrice = numConverter.strToNumeric(browser.getText(this.skyBoxSetsPrice));
        var CinemaPrice = numConverter.strToNumeric(browser.getText(this.skyCinemaPrice));
        var KidsPrice = numConverter.strToNumeric(browser.getText(this.skyKidsPrice));
        var HdPrice = numConverter.strToNumeric(browser.getText(this.skyHdPrice));
        var SportHdPrice = numConverter.strToNumeric(browser.getText(this.skySportHdPrice));

        expect(EntertainPrice).to.match(/£\d+/);
        expect(BoxSetsPrice).to.match(/£\d+/);
        expect(CinemaPrice).to.match(/£\d+/);
        expect(sportsprice).to.match(/£\d+\.\d+/);
        expect(KidsPrice).to.match(/£\d+/);
        expect(HdPrice).to.match(/£\d+/);
        expect(SportHdPrice).to.match(/£\d+/);
    }

    verifyAddressQuestion () {
        browser.waitForExist(this.stillYourAddressTxt);
        expect(browser.getText(this.stillYourAddressTxt)).to.eq("Is this still your address?");
    }

    verifyDishInstalled () {
        browser.waitForExist(this.isYourSatDishInstalledTxt);
        expect(browser.getText(this.isYourSatDishInstalledTxt)).to.eq("Is your satellite dish still installed?");
    }

    verifyWeThinkYouHaveSkyHd () {
        browser.waitForExist(this.wethinkYouHaveTxt);
        expect(browser.getText(this.wethinkYouHaveTxt)).to.eq("We think you have a Sky+HD Box");
    }

    verifyStillhaveViewingCardHead () {
        browser.waitForExist(this.stillHavingYourViewingCardHeadTxt);
        expect(browser.getText(this.stillHavingYourViewingCardHeadTxt)).to.eq("Still have your Sky viewing card?");
    }


    verifyYourDirectDebitHeadTxt () {
        browser.waitForExist(this.yourNewDirectBebtWithSkyHeadTxt);
        expect(browser.getText(this.yourNewDirectBebtWithSkyHeadTxt)).to.eq("Your new Direct Debit with Sky");
    }


    verifyBankDetailsBox(){
        browser.waitForExist(this.bankDetailsDiv);
        expect(this.bankDetailsDiv).to.exist;
    }


    verifyWelcomeBackHeadTxt () {
        browser.waitForExist(this.welcomeBackHeadTxt);
        expect(browser.getText(this.welcomeBackHeadTxt)).to.eq("Welcome back");
    }

    verifyReviewConfirmYourOrderHeadTxt () {
        browser.waitForExist(this.reviewConfirmYourOrderHeadTxt);
        expect(browser.getText(this.reviewConfirmYourOrderHeadTxt)).to.eq("Review and confirm your order");
    }

    clickYesStillLiveHere () {
        browser.click(this.yesStillLiveHereBtn);
    }

    clickNoHaveMovedHouse () {
        browser.click(this.noHaveMovedHouseBtn);
    }

    clickYesMyDishStillUpBtn () {
        browser.click(this.yesMyDishStillUpBtn);
    }

    clickNoNeedDishInstallingBtn () {
        browser.click(this.noNeedDishInstallingBtn);
    }

    clickIwillBeUsingBtn () {
        browser.waitForExist(this.iWillBeUsingBtn);
        browser.click(this.iWillBeUsingBtn);
    }

    clickOptionYes () {
        browser.click(this.yesStillHaveBtn);
    }

    clickConfirmHolderOfBankAccountChk () {
        browser.click(this.confirmHolderOfBankAccountChk);
    }

    verifyReviewOrderIsEnabled () {
        browser.isEnabled(this.reviewOrderBtn);
    }

    clickReviewOrderBtn () {
        browser.click(this.reviewOrderBtn);
    }

    clickBuyNowBtn () {
        browser.click(this.buyBtn);
    }

    clickRestApp () {
        browser.waitForExist(this.resetAppBtn);
        browser.click(this.resetAppBtn);
    }

    clickSkyBoxSetsBtn () {
        browser.click(this.skyBoxSetsBtn);
    }
    clickSkyCinemaBtn () {
        browser.click(this.skyCinemaBtn);
    }
    clickSkySportsBtn () {
        browser.click(this.skySportsBtn);
    }
    clickSkyKidsBtn () {
        browser.click(this.skyKidsBtn);
    }
    clickSkyHdBtn () {
        browser.click(this.skyHdBtn);
    }
    clickSkySportsHd () {
        browser.click(this.skySportHdBtn)
    }

    selectTvProduct(product) {
        switch (product) {
            case "box sets":
                browser.click(this.skyBoxSetsBtn);
                break;
            case "cinema":
                browser.click(this.skyCinemaBtn);
                break;
            case "sports":
                browser.click(this.skySportsBtn);
                break;
            case "kids":
                browser.click(this.skyKidsBtn);
                break;
            case "sky hd":
                browser.click(this.skyHdBtn);
                break;
            case "sports hd":
                browser.click(this.skySportHdBtn);
                break;
            default:
                break;
        }
    }


    verifyProductPrice (price, product) {
        switch (product) {
            case "box sets":
                expect(browser.getText(this.totalPrice)).to.eq(price);
                break;
            case "cinema":
                expect(browser.getText(this.totalPrice)).to.eq(price);
                break;
            case "sports":
                expect(browser.getText(this.totalPrice)).to.eq(price);
                break;
            case "kids":
                expect(browser.getText(this.totalPrice)).to.eq(price);
                break;
            case "sky hd":
                expect(browser.getText(this.totalPrice)).to.eq(price);
                break;
            case "sports hd":
                expect(browser.getText(this.totalPrice)).to.eq(price);
                break;
            default:
                break;
        }
    }

    clickCheckout() {
        browser.click(this.getCheckoutOrderBtn);
    }

    verifySportHdBtnStatus (isEnabled) {
        browser.waitForExist(this.skySportHdBtn);
        if (isEnabled == "disabled" )
        {
            expect(browser.isEnabled(this.sportHdBtnState)).to.eq(false);
        }
        else
        {
            expect(browser.isEnabled(this.sportHdBtnState)).to.eq(true);
        }
    }

}
module.exports = winbackPage;