const {
  COUNTRY_BASE_URL,
  COUNTRY_CODE
} = require('./constants');
const config = require('../../config');
const TestConfigSession = require('../session/test_config_session');

const {
  ENVNAME
} = config;

const envName = ENVNAME;
const prNumber = process.env.prNumber;

class TestConfiguration {
  static getBaseUrl(countryCode) {
    let baseUrl;
    switch (countryCode) {
      case COUNTRY_CODE.UK:
        baseUrl = COUNTRY_BASE_URL.UK;
        break;
      case COUNTRY_CODE.ROI:
        baseUrl = COUNTRY_BASE_URL.ROI;
        break;
      default:
        console.log(`The countryCode ${countryCode} is invalid`);
    }
    return baseUrl;
  }

  static getJourneyEndPoint(productType) {
    let journeyEndPoint = '/shop/select/';
    switch (productType) {
      case 'sports':
        journeyEndPoint = `${journeyEndPoint}upgrade/sports`;
        break;
      case 'cinema':
        journeyEndPoint = `${journeyEndPoint}upgrade/cinema`;
        break;
      case 'manage':
        journeyEndPoint = `${journeyEndPoint}manage`;
        break;
      case 'sky-id':
        journeyEndPoint = `https://${envName}.id.bskyb.com/signin`;
        break;
      default:
        journeyEndPoint = undefined;
        console.log(`The productType ${productType} is invalid`);
    }

    return journeyEndPoint;
  }

  static getDeepLinkEndPoint(pageType, product, originator) {
    var originatorParam = "";
    if (originator) {
      originatorParam = `&originator=${originator}`;
    }
    if (prNumber) {
      console.log('The deeplink+++++++++++++++++ ', `https://deeplink-app-${envName}-${prNumber}.cf.dev-paas.bskyb.com/deeplink/shop?products=${product}&customer=true&landingPage=${pageType}${originatorParam}`);
      return `https://deeplink-app-${envName}-${prNumber}.cf.dev-paas.bskyb.com/deeplink/shop?products=${product}&customer=true&landingPage=${pageType}${originatorParam}`;
    } else {
      console.log('The deeplink+++++++++++++++++ ', `https://deeplink-app-${envName}.cf.dev-paas.bskyb.com/deeplink/shop?products=${product}&customer=true&landingPage=${pageType}${originatorParam}`);
      return `https://deeplink-app-${envName}.cf.dev-paas.bskyb.com/deeplink/shop?products=${product}&customer=true&landingPage=${pageType}${originatorParam}`;
    }
  }

  static getLegacyDeepLinkEndPoint(product, custype, routing) {

    var custypeParam = "";
    var routingParam = "";
    if (custype.includes("EC")) {
      custypeParam = '&custype=EC'
    }
    else if (custype.includes("PC")) {
      custypeParam = '&custype=PC'
    }
    if (routing.includes("CHECKOUT")) {
      routingParam = '&deeplinkToCheckout=true'
    }
    else if (routing.includes("ORDERSUMMARY")) {
      routingParam = '&deeplinkToOrderSummary=true'
    }
    console.log('The deeplink+++++++++++++++++ ', `http://prodman-05.ocp.bskyb.com/quickbuy/deeplink?addToBasket=${product}${custypeParam}${routingParam}`);
    return `http://prodman-05.ocp.bskyb.com/quickbuy/deeplink?addToBasket=${product}${custypeParam}${routingParam}`;
  }
}
module.exports = TestConfiguration;
