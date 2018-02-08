const BaseSession = require('./base_session');

class CustomerSession extends BaseSession {
  subscriptionKey() {
    return 'Subscription-Key';
  }

  storeSubscription(subscription) {
    super.store(this.subscriptionKey(), subscription);
  }

  retrieveSubscription() {
    return super.retrieve(this.subscriptionKey());
  }
}
module.exports = CustomerSession;
