const BaseSession = require('./base_session');

class BasketSession extends BaseSession {
  currentMonthlyPriceKey() {
    return 'Current-Monthly-Price-Key';
  }

  newMonthlyPriceKey() {
    return 'New-Monthly-Price-Key';
  }

  storeCurrentMonthlyPrice(price) {
    super.store(this.currentMonthlyPriceKey(), price);
  }

  storeNewtMonthlyPrice(price) {
    super.store(this.newMonthlyPriceKey(), price);
  }
}
module.exports = BasketSession;
