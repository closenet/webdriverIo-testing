const BaseSession = require('./base_session');
const StringUtils = require('../utils/string_utils');

class ProductSelectionSession extends BaseSession {
  firstProductIndexKey() {
    return 'First_Product_Index';
  }

  secondProductIndexKey() {
    return 'Second.Product.Index';
  }

  thirdProductIndexKey() {
    return 'Third.Product.Index';
  }

  sportsPropositionPriceInGatewayPageKey() {
    return 'GatewayPage.Sports.Proposition.Price';
  }

  completeSportsPackPriceInGatewayPageKey() {
    return 'GatewayPage.Complete.Sports.Pack.Price';
  }

  cinemaContractTypeKey() {
    return 'Cinema_Contract_Type_Key';
  }

  storeFirstProductIndex(productIndex) {
    super.store(this.firstProductIndexKey(), productIndex.toString());
  }

  storeSecondProductIndex(productIndex) {
    super.store(this.secondProductIndexKey(), productIndex.toString());
  }

  storeThirdProductIndex(productIndex) {
    super.store(this.thirdProductIndexKey(), productIndex.toString());
  }

  storeCinemaContractType(contractType) {
    super.store(this.cinemaContractTypeKey(), contractType);
  }

  retrieveFirstProductIndex() {
    const index = StringUtils.stringToInteger(super.retrieve(this.firstProductIndexKey()));
    return isNaN(index) ? 1 : index;
  }

  retrieveSecondProductIndex() {
    const index = StringUtils.stringToInteger(super.retrieve(this.secondProductIndexKey()));
    return isNaN(index) ? 2 : index;
  }

  retrieveThirdProductIndex() {
    const index = StringUtils.stringToInteger(super.retrieve(this.thirdProductIndexKey()));
    return isNaN(index) ? 3 : index;
  }

  storeSportsPropositionPriceInGatewayPage(price) {
    super.store(this.sportsPropositionPriceInGatewayPageKey(), price);
  }

  storeCompleteSportsPackPriceInGatewayPage(price) {
    super.store(this.completeSportsPackPriceInGatewayPageKey(), price);
  }

  retrieveSportsPropositionPriceInGatewayPage() {
    return super.retrieve(this.sportsPropositionPriceInGatewayPageKey());
  }

  retrieveCompleteSportsPackPriceInGatewayPage() {
    return super.retrieve(this.completeSportsPackPriceInGatewayPageKey());
  }

  retrieveCinemaContractType() {
    return this.retrieve(this.cinemaContractTypeKey());
  }
}
module.exports = ProductSelectionSession;
