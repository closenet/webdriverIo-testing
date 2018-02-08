/**
 * Created by mal89 on 07/02/2018.
 */
const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const Page = require('../pages/base_page');
//const StringUtils = require('../utils/string_utils');
const LoginPage = require('../pages/login_page');
const TestConfiguration = require('../application_utils/test_configuration');
const config = require('../../config');
const PreRegPage = require('../pages/pre_reg_page.js');

const preRegStepDefinition = function () {
    const page = new Page();
    const loginPage = new LoginPage();
    const preRegPage = new PreRegPage();

    this.Given(/^Roi customer open the prereg page$/, done => {
        preRegPage.open('/ftth/register');
    done();
})

    this.Given(/^clicks on the prospect button$/, done => {
        preRegPage.clickProspectButton();
    done();
})


    this.Given(/^clicks on the existing button$/, done => {
        preRegPage.clickCustomerBtn();
    done();
})

    //login to pre-reg
    this.Given(/^login using (.*) and (.*) as credanials$/, (username, password, done) => {
        loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickSignIn();
    done();
})

    this.Then(/^submits the form$/, done => {
        preRegPage.clickSubmitBtn();
    done();
})

// input steps
    this.Given(/^Agent tick the (.*) radio button$/, (yesNo, done) => {
        preRegPage.radioBtn = yesNo;
    preRegPage.isExistingCustomer();
    done();
})

    //enter values
    this.Given(/^enters the following personal details here$/, (data)=> {
        for (let i = 0; i <= data.raw()[0].length; i++)
    {
        const header = String(data.raw()[0][i]).trim();
        const text = String(data.raw()[1][i]).trim();
        switch (header) {
            case 'firstName':
                preRegPage.enterFirstName(text);
                break;

            case 'lastName':
                preRegPage.enterLastName(text);
                break;

            case 'email':
                preRegPage.enterEmail(text);
                break;

            case 'phone':
                preRegPage.enterMobileNumber(text);
                break;

            case 'eircode':
                preRegPage.enterEircode(text);
                break;
        }
    }
})



//enter values from agent side
    this.Given(/^enters the following personal details by agent$/, (data, done) => {
        for (let i = 0; i <= data.raw()[0].length; i++)
    {
        const header = String(data.raw()[0][i]).trim();
        const text = String(data.raw()[1][i]).trim();
        switch (header) {
            case 'agentId':
                preRegPage.enterAgentId(text);
                break;

            case 'channel':
                preRegPage.enterSalesChannel(text);
                break;

            case 'callType':
                preRegPage.enterCallType(text);
                break;

            case 'accountNumber':
                preRegPage.enterAccountNumber(text);
                break;

            case 'isExisting':
                preRegPage.tickIsExistingCustomer(text);
                break;

            case 'firstName':
                preRegPage.enterFirstNameAgent(text);
                break;

            case 'lastName':
                preRegPage.enterLastNameAgent(text);
                break;

            case 'email':
                preRegPage.enterEmailAgent(text);
                break;

            case 'phone':
                preRegPage.enterMobileNumberAgent(text);
                break;

            case 'eircode':
                preRegPage.enterEircodeAgent(text);
                break;
        }
    }
    done();
})


    this.Given(/^enter Eircode (.*) for existing customer$/, (eircode, done) => {
        preRegPage.enterExistingCustomerEircode(eircode);
    done();
})



// verification and validation

    this.Given(/^verify the following values for the customer are invalid$/, (data, done) => {
        for (let i = 0; i <= data.raw()[0].length; i++)
    {
        const header = String(data.raw()[0][i]).trim();
        //  const text = String(data.raw()[1][i]).trim();
        const error = String(data.raw()[1][i]).trim();
        switch (header) {
            case 'firstName':
                preRegPage.verifyFirstName(error);
                break;

            case 'lastName':
                preRegPage.verifyLastName( error);
                break;

            case 'email':
                preRegPage.verifyEmail(error);
                break;

            case 'phone':
                preRegPage.verifyMobile(error);
                break;

            case 'eircode':
                preRegPage.verifyEircode(error);
                break;
        }
    }
    done();
})


// verify against the agent page
    this.Given(/^verify the following values for the agent page are valid$/, (data, done) => {
        for (let i = 0; i <= data.raw()[0].length; i++)
    {
        const header = String(data.raw()[0][i]).trim();
        const text = String(data.raw()[1][i]).trim();
        switch (header) {
            case 'agentId':
                preRegPage.verifyAgentId(text);
                break;

            case 'channel':
                preRegPage.verifyAccountNumber(text);
                break;

            case 'callType':
                preRegPage.verifyCallType(text);
                break;

            case 'accountNumber':
                preRegPage.verifyAccountNumber(text);
                break;

            //   case 'isExisting':
            //       preRegPage.verify(text);
            //       break;

            case 'firstName':
                preRegPage.verifyFirstName(text);
                break;

            case 'lastName':
                preRegPage.verifyLastName(text);
                break;

            case 'email':
                preRegPage.verifyEmail(text);
                break;

            case 'phone':
                preRegPage.verifyMobile(text);
                break;

            case 'eircode':
                preRegPage.verifyEircode(text);
                break;
        }
    }
    done();
})
    this.Then(/^verify message to thanks the customer (.*)$/, (thanks, done) => {
        browser.waitUntil(function () {
        return  browser.getText(preRegPage.thanksTxt) === thanks}, 30000, "the previous page took longer than expected" );
    done();
})

    this.Given(/^agent directed to the agent page$/, done => {
        preRegPage.clickAgentUrl;
    done();
})
};
module.exports = preRegStepDefinition;
