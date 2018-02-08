/**
 * Created by mal89 on 07/02/2018.
 */
class Page {
    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url(path);
    }

    deleteAllCookies() {
        browser.deleteCookie();
    }

    reloadBrowser() {
        browser.reload();
    }

    setViewPortSize(width, height) {
        browser.setViewportSize({
            width,
            height
        });
    }

    setWindowSize(width, height) {
        browser.windowHandleSize({
            width,
            height
        });
    }

    waitForExist(selector, timeInMilliSeconds) {
        browser.waitForExist(selector, timeInMilliSeconds);
    }

    waitForEnabled(selector, timeInMilliSeconds) {
        browser.waitForEnabled(selector, timeInMilliSeconds);
    }

    waitForVisible(selector, timeInMilliSeconds) {
        browser.waitForVisible(selector, timeInMilliSeconds);
    }

    waitUntilVisibleAndEnabled(selector, timeInMilliSeconds) {
        this.waitForExist(selector, timeInMilliSeconds);
        this.waitForEnabled(selector, timeInMilliSeconds);
        this.waitForVisible(selector, timeInMilliSeconds);
    }

    waitUntilSpinnerDisappears() {
        browser.waitUntil(() => browser.waitForVisible('.c-spinner-overlay', 30000, true));
    }

    getCookie(cookieName) {
        return browser.getCookie(cookieName);
    }

    getUrl() {
        return browser.getUrl();
    }

    setCookie(cookieName, cookieValue, domainValue) {
        const cookie = {
            name: cookieName,
            value: cookieValue,
            domain: domainValue
        };
        browser.setCookie(cookie, {
            httpOnly: false
        });
    }
}

module.exports = Page;
