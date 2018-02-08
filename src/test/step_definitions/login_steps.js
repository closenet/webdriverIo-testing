
const LoginPage = require('../pages/login_page');
const Page = require('../pages/base_page');
const Customer = require('../application_utils/customer');
const TestConfiguration = require('../application_utils/test_configuration');
const {
    CUSTOMER
} = require('../application_utils/constants');
const CustomerSession = require('../session/customer_session');

const customerSession = new CustomerSession();

const loginStepDefinitionsWrapper = function () {

    const loginPage = new LoginPage();
    const page = new Page();

    this.Given(/^UK customer who has (.*) performs (sports|cinema|manage|sky-id) login$/, (subscriptionType, productType, done) => {
        const customerCredentials = Customer.getCustomerCredentials(subscriptionType.trim());
        const journeyEndpoint = TestConfiguration.getJourneyEndPoint(productType.trim());
        loginPage.performLogin(journeyEndpoint, customerCredentials.USERNAME, customerCredentials.PASSWORD);
        customerSession.storeSubscription(subscriptionType.trim());
        done();
    });

    this.Given(/^UK customer with (.*) performs (sports|cinema|manage|sky-id) login$/, (skyId, productType, done) => {
        const journeyEndpoint = TestConfiguration.getJourneyEndPoint(productType.trim());
        loginPage.performLogin(journeyEndpoint, skyId, CUSTOMER.PASSWORD);
        done();
    });


    this.Given(/^the (.*) performs sky-id login$/, (subscriptionType, done) => {
        const customerCredentials = Customer.getCustomerCredentials(subscriptionType.trim());
        loginPage.performLoginOnSkyId(customerCredentials.USERNAME, customerCredentials.PASSWORD);
        customerSession.storeSubscription(subscriptionType.trim());
        done();
    });

    this.Given(/^the user selects (I already have Sky|I don't have Sky)$/, (option, done) => {
        const url = page.getUrl();
        console.log(`url is ${url}`);
        var pageType;
        if (option === "I already have Sky") {
            optionType = 'EC';
        }
        else if (option === "I don't have Sky") {
            optionType = 'PC';
        }
        if (url.indexOf('/quickbuy/new') >=0) {
            pageType = 'evo'
        }
        else if (url.indexOf('/build') >=0) {
            pageType = 'ethan'
        }
        console.log(`pageType is ${pageType}`);
        loginPage.selectLightBoxValue(optionType, pageType);
        done();
    });
};
module.exports = loginStepDefinitionsWrapper;
