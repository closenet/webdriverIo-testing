const {
  COUNTRY_CODE
} = require('./constants');

class CountryCode {
  static getCountryCode(countryCode) {
    let country;
    switch (countryCode) {
      case 'UK':
        country = COUNTRY_CODE.UK;
        break;
      case 'ROI':
        country = COUNTRY_CODE.ROI;
        break;
      default:
        console.log(`The countryCode ${countryCode} is invalid`);
        break;
    }
    return country;
  }
}
module.exports = CountryCode;
