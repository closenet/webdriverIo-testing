const BaseSession = require('./base_session');

class BrowserSession extends BaseSession {
  browserHeightKey() {
    return 'Browser_Height_Key';
  }

  browserWidthKey() {
    return 'Browser_Width_Key';
  }

  browserWidthKey() {
    return 'Browser_Width_Key';
  }

  mainWindowHandleKey() {
    return 'Main_Window_Handle_Key';
  }

  storeBrowserHeight(height) {
    super.store(this.browserHeightKey(), height);
  }

  storeBrowserWidth(width) {
    super.store(this.browserWidthKey(), width);
  }

  storeMainWindowHandle(windowHandle) {
    super.store(this.mainWindowHandleKey(), windowHandle);
  }

  retrieveBrowserHeight() {
    return super.retrieve(this.browserHeightKey());
  }

  retrieveBrowserWidth() {
    return super.retrieve(this.browserWidthKey());
  }

  retrieveMainWindowHandle() {
    return super.retrieve(this.mainWindowHandleKey());
  }
}
module.exports = BrowserSession;
