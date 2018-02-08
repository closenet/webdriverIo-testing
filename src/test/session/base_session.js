class BaseSession {
  store(key, value) {
    browser.sessionStorage('POST', {
      key,
      value
    });
  }

  retrieve(key) {
    return browser.sessionStorage('GET', key).value;
  }

  retrieveAllSessionStorage() {
    return browser.sessionStorage();
  }

  remove(key) {
    browser.sessionStorage('DELETE', key);
  }

  removeAllSessionStorage() {
    browser.sessionStorage('DELETE');
  }
}
module.exports = BaseSession;
