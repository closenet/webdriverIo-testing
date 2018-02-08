const BaseSession = require('./base_session');

class TestConfigSession extends BaseSession {
  journeyEndPointKey() {
    return 'Journey_End_Point_Key';
  }

  storeJourneyEndPoint(journeyEndPoint) {
    console.log('The journeyEndpoint inside Store is +++++++++++++++++', journeyEndPoint);

    this.store('Journey_End_Point_Key', journeyEndPoint);
  }

  retrieveJourneyEndPoint() {
    return super.retrieve(this.journeyEndPointKey);
  }
}
module.exports = TestConfigSession;
