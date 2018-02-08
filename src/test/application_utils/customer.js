const {
  CUSTOMER_TYPE,
  CUSTOMER
} = require('./constants');

class Customer {
  static getCustomerCredentials(subscriptionType) {
    let customerCredentials = false;
    switch (subscriptionType) {
      case 'TV only':
        customerCredentials = CUSTOMER.TV_ONLY;
        break;
      case 'Broadband':
        customerCredentials = CUSTOMER.BROADBAND;
        break;
      case 'TV with Cinema':
        customerCredentials = CUSTOMER.TV_WITH_CINEMA;
        break;
      case 'TV with Cinema Contract':
        customerCredentials = CUSTOMER.TV_WITH_CINEMA_CONTRACT;
        break;
      case 'TV with Full Sports No Contract':
        customerCredentials = CUSTOMER.TV_WITH_FULL_SPORTS_NO_CONTRACT;
        break;
      case 'TV with Full Sports Contract':
        customerCredentials = CUSTOMER.TV_WITH_FULL_SPORTS_CONTRACT;
        break;
      case 'TV with F1':
        customerCredentials = CUSTOMER.TV_WITH_F1;
        break;
      case 'TV with Premier League':
        customerCredentials = CUSTOMER.TV_WITH_PREMIERSHIP;
        break;
      case 'TV with Football':
        customerCredentials = CUSTOMER.TV_WITH_FOOTBALL;
        break;
      case 'TV with Cricket':
        customerCredentials = CUSTOMER.TV_WITH_CRICKET;
        break;
      case 'TV with Golf':
        customerCredentials = CUSTOMER.TV_WITH_GOLF;
        break;
      case 'TV with Action and Arena':
        customerCredentials = CUSTOMER.TV_WITH_ACTION_AND_ARENA;
        break;
      case 'TV with Three Sports':
        customerCredentials = CUSTOMER.TV_WITH_THREE_SPORTS;
        break;
      case 'TV with Two Sports':
        customerCredentials = CUSTOMER.TV_WITH_TWO_SPORTS;
        break;
      case 'Deeplink TV only':
        customerCredentials = CUSTOMER.DEEPLINK_TV_ONLY;
        break;
      case 'Deeplink Big Basics HD Box':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_HD_BOX;
        break;
      case 'Deeplink Big Basics Kids HD Box':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_KIDS_HD_BOX;
        break;
      case 'Deeplink Big Basics BoxSets HD Box':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_BOXSETS_HD_BOX;
        break;
      case 'Deeplink Big Basics HD':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_HD;
        break;
      case 'Deeplink Big Basics Kids Sports':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_KIDS_SPORTS;
        break;
      case 'Deeplink Big Basics BoxSets Sports':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_BOXSETS_SPORTS;
        break;
      case 'Deeplink Big Basics HD Sports':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_HD_SPORTS;
        break;
      case 'Deeplink Big Basics SD SportsGetItAll':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_SD_SPORTS_GET_IT_ALL;
        break;
      case 'Deeplink Big Basics SD SportsGetItAll2':
        customerCredentials = CUSTOMER.DEEPLINK_BIG_BASICS_SD_SPORTS_GET_IT_ALL2;
        break;
      case 'Deeplink Original':
        customerCredentials = CUSTOMER.DEEPLINK_ORIGINAL;
        break;
      case 'Deeplink Variety':
        customerCredentials = CUSTOMER.DEEPLINK_VARIETY;
        break;
        case 'Deeplink Variety HD':
        customerCredentials = CUSTOMER.DEEPLINK_VARIETY_HDSUB;
        break;
      case 'Deeplink BoxSets':
        customerCredentials = CUSTOMER.DEEPLINK_BOXSETS;
        break;
      default:
        console.log(`The subscriptionType ${subscriptionType} is invalid and returns false now`);
    }
    return customerCredentials;
  }

  static getCustomerType(customerType) {
    let customer = null;
    switch (customerType) {
      case 'prospect':
        customer = CUSTOMER_TYPE.PROSPECT;
        break;
      case 'customer':
        customer = CUSTOMER_TYPE.CUSTOMER;
        break;
      default:
        console.log(`The customerType ${customerType} is invalid and returns null now`);
    }
    return customer;
  }

  static isIndividualSportsPackPresentForCustomer(subscriptionType) {
    let isSportsPackPresent;
    switch (subscriptionType) {
      case 'TV with F1':
        isSportsPackPresent = true;
        break;
      case 'TV with Premier League':
        isSportsPackPresent = true;
        break;
      case 'TV with Football':
        isSportsPackPresent = true;
        break;
      case 'TV with Cricket':
        isSportsPackPresent = true;
        break;
      case 'TV with Golf':
        isSportsPackPresent = true;
        break;
      case 'TV with Action and Arena':
        isSportsPackPresent = true;
        break;
      default:
        isSportsPackPresent = false;
    }
    return isSportsPackPresent;
  }
}
module.exports = Customer;
