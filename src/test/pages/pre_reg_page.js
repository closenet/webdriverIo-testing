/**
 * Created by mal89 on 07/02/2018.
 */
/**
 * Created by mal89 on 25/01/2018.
 */
const Page = require('./base_page');
const loginPage = require('./login_page');
const assert = require('chai').assert;
const TestConfigSession = require('../session/test_config_session');
const {
    NUMBER_OF_SELECTABLE_PRODUCTS,
    TIMEOUT,
    SCROLL
} = require('../application_utils/constants');


const testConfigSession = new TestConfigSession();
var existingCustomerBtn = 'test';

class RegisterPreRegForFTTH extends Page {

    // agent fields
    // construct the agent path
    get clickAgentUrl (){
        console.log(this.getUrl());
        var agentUrl =  this.getUrl() + '/agent';
        browser.url(agentUrl);
    }

    get agentIdBox() {
        return '#ftth-pre-req-agent-form-agentId';
    }

    get salesChannelBox() {
        return '#ftth-pre-req-agent-form-salesChannel';
    }

    get callTypeBox() {
        return '#ftth-pre-req-agent-form-callType';
    }

    get existingCustomerYesBtn(){
        return '[value=Yes] + span';
    }

    get existingCustomerNoBtn(){
        return '[value=No] + span';
    }

    get accountNumberBox() {
        return '#ftth-pre-req-agent-form-accountNumber';
    }

    get firstNameAgentBox() {

        return '#ftth-pre-req-agent-form-firstName';
    }

    get lastNameAgentBox() {

        return '#ftth-pre-req-agent-form-lastName';
    }

    get emailAgentBox() {

        return '#ftth-pre-req-agent-form-email';
    }

    get mobileAgentBox() {

        return '#ftth-pre-req-agent-form-phoneNumber';
    }

    get eirCodeAgentBox() {

        return '#ftth-pre-req-agent-form-eircode';
    }




    // prospect customer fields
    get prospectCustomerBtn() {
        return '[data-test-id=prospectBtn]';
    }

    get firstNameBox() {
        return '#ftth-pre-req-prospects-form-firstName';
    }

    get lastNameBox() {

        return '#ftth-pre-req-prospects-form-lastName';
    }

    get emailBox() {
        return '[id=ftth-pre-req-prospects-form-email]';
    }

    get mobileBox() {

        return '#ftth-pre-req-prospects-form-phoneNumber';
    }


    get eircodeBox() {

        return '#ftth-pre-req-prospects-form-eircode';
    }

    get eircodeSearchBtn() {
        return '[data-test-id=eircode-button]';
    }



// existing customer fields

    get existingCustomerBtn() {

        return '[data-test-id=isCustomerBtn]';
    }

    get existingCustomerEmailBox(){

        return '#ftth-pre-req-existing-form-email';
    }

    get existingCustomerMobileBox(){
        return '#ftth-pre-req-existing-form-phoneNumber';
    }

    get existingCustomerEircodeBox (){
        return '#ftth-pre-req-existing-form-eircode';
    }


    //submission

    get submitBtn() {
        return '#submit-button';
    }


    get thanksTxt() {
        return '.c-heading-alpha';
    }


// errors elements

    get firstNameErr()
    {
        return 'li.c-form-list__item:nth-child(1) > div:nth-child(1) > p:nth-child(3)';
    }

    get lastNameErr()
    {
        return 'li.c-form-list__item:nth-child(2) > div:nth-child(1) > p:nth-child(3)';
    }

    get emailErr()
    {
        return 'li.c-form-list__item:nth-child(3) > div:nth-child(1) > p:nth-child(3)';
    }

    get mobileErr()
    {
        return 'li.c-form-list__item:nth-child(4) > div:nth-child(1) > p:nth-child(3)';
    }

    get eircodeErr()
    {
        return 'li.c-form-list__item:nth-child(5) > div:nth-child(1) > p:nth-child(3)';
    }


    waitForContinueButton() {
        this.waitForExist(this.prospectCustomerBtn, TIMEOUT);
        this.waitForVisible(this.prospectCustomerBtn, TIMEOUT);
    }

    clickProspectButton() {
        browser.click(this.prospectCustomerBtn);
    }


    clickCustomerBtn() {
        browser.click(this.existingCustomerBtn);
    }

    clickSubmitBtn() {
        browser.click(this.submitBtn);
    }

    clickEircodeSearchLink() {

        browser.click(this.eircodeSearchBtn)
    }

    tickIsExistingCustomer (sw){
        if (sw === 'yes')
        {
            browser.click(this.existingCustomerYesBtn);
        }
        else {
            console.log("NO is received zzzzzzz");
            browser.click(this.existingCustomerNoBtn);
        }
    }


    //enter text into fields agent side
    enterAgentId(agentId) {
        browser.waitForVisible(this.agentIdBox);
        browser.addValue(this.agentIdBox, agentId);
    }

    enterSalesChannel(salesChannel) {
        browser.waitForVisible(this.salesChannelBox);
        browser.addValue(this.salesChannelBox, salesChannel);
    }

    enterCallType(callType) {
        browser.waitForVisible(this.callTypeBox);
        browser.addValue(this.callTypeBox, callType);
    }

    enterAccountNumber (accountNumber) {
        browser.waitForVisible(this.accountNumberBox);
        browser.addValue(this.accountNumberBox, accountNumber);
    }

    enterFirstNameAgent(firstname) {
        browser.waitForVisible(this.firstNameAgentBox);
        browser.addValue(this.firstNameAgentBox, firstname);
    }

    enterLastNameAgent(lastName) {
        browser.waitForVisible(this.lastNameAgentBox);
        browser.addValue(this.lastNameAgentBox, lastName);
    }

    enterEmailAgent(email) {
        browser.waitForVisible(this.emailAgentBox);
        browser.addValue(this.emailAgentBox, email);
    }

    enterMobileNumberAgent(mobileNumber) {
        browser.waitForVisible(this.mobileAgentBox);
        browser.addValue(this.mobileAgentBox, mobileNumber);
    }

    enterEircodeAgent(eircode) {
        browser.waitForVisible(this.eirCodeAgentBox);
        browser.addValue(this.eirCodeAgentBox, eircode);
    }



    // input personal details from customer side  
    enterFirstName(firstname) {
        browser.waitForVisible(this.firstNameBox);
        browser.addValue(this.firstNameBox, firstname);
    }

    enterLastName(lastName) {
        browser.waitForVisible(this.lastNameBox);
        browser.addValue(this.lastNameBox, lastName);
    }

    enterEmail(email) {
        browser.waitForVisible(this.emailBox);
        browser.addValue(this.emailBox, email);
    }

    enterMobileNumber(mobileNumber) {
        browser.waitForVisible(this.mobileBox);
        browser.addValue(this.mobileBox, mobileNumber);
    }

    enterEircode(eircode) {
        browser.waitForVisible(this.eircodeBox);
        browser.addValue(this.eircodeBox, eircode);
    }

    enterExistingCustomerEircode(eircode) {
        browser.waitForVisible(this.existingCustomerEircodeBox);
        browser.addValue(this.existingCustomerEircodeBox, eircode);
    }




// verify input

    verifyAgentId(expected){
        browser.waitForVisible(this.agentIdBox);
        assert.equal(browser.getValue(this.agentIdBox), expected, "pass");
    }

    verifySalesChannel(expected){
        browser.waitForVisible(this.salesChannelBox);
        assert.equal(browser.getValue(this.salesChannelBox), expected, "pass");
    }

    verifyCallType(expected){
        browser.waitForVisible(this.callTypeBox);
        assert.equal(browser.getValue(this.callTypeBox), expected, "pass");
    }

    verifyAccountNumber(expected){
        browser.waitForVisible(this.accountNumberBox);
        assert.equal(browser.getValue(this.accountNumberBox), expected, "pass");
    }

    verifyFirstName(expectedErr){
        browser.waitForVisible(this.firstNameErr);
        assert.equal(browser.getText(this.firstNameErr), expectedErr, "the expected error for first name is: ");
    }

    verifyLastName(expectedErr){
        browser.waitForVisible(this.lastNameErr);
        assert.equal(browser.getText(this.lastNameErr), expectedErr, "the expected error for last name is: ");
    }

    verifyEmail(expectedErr){
        browser.waitForVisible(this.emailErr);
        assert.equal(browser.getText(this.emailErr), expectedErr, "the expected error for email address is: ");
    }

    verifyEircode(expectedErr){
        browser.waitForVisible(this.eircodeErr);
        assert.equal(browser.getText(this.eircodeErr), expectedErr, "the expected error for eircode name is: ");
    }

    verifyMobile(expectedErr){
        browser.waitForVisible(this.mobileErr);
        assert.equal(browser.getText(this.mobileErr), expectedErr, "the expected error for first mobile is: ");
    }

}
module.exports = RegisterPreRegForFTTH;
