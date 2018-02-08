/**
 * Created by mal89 on 08/02/2018.
 */
const Page = require('./base_page');
const {
    TIMEOUT
} = require('../application_utils/constants');

class LoginPage extends Page {
    get usernameIdentifier() {
        return 'input[id=username]';
    }

    get passwordIdentifier() {
        return 'input[id=password]';
    }

    get signInButtonIdentifier() {
        return 'button[id=signinButton]';
    }

    get remindMeLaterButtonIdentifier() {
        return 'a[id=remindMeLaterButton]';
    }

    get lightBoxIhaveSkyEvo() {
        return '[id=existingCustomerButton]';
    }

    get lightBoxIdonthaveSkyEvo() {
        return '[id=prospectCustomerButton]';
    }

    get lightBoxEvo() {
        return '[id=lightboxHeader]';
    }

    get lightBoxIhaveSkyEthan() {
        return '[id=EC]';
    }

    get lightBoxIdonthaveSkyEthan() {
        return '[id=PC]';
    }

    get lightBoxEthan() {
        return '[id=selfid]';
    }

    enterUsername(username) {
        browser.addValue(this.usernameIdentifier, username);
    }

    enterPassword(password) {
        browser.waitForExist(this.passwordIdentifier, 5000);

        browser.addValue(this.passwordIdentifier, password);
    }

    clickSignIn() {
        browser.click(this.signInButtonIdentifier);
    }

    clickRemindMeLaterButton() {
        if (browser.isVisible(this.remindMeLaterButtonIdentifier)) {
            browser.click(this.remindMeLaterButtonIdentifier);
        }
    }

    waitUntilLoginPageIsLoaded() {
        this.waitUntilVisibleAndEnabled(this.usernameIdentifier, TIMEOUT);
    }

    performLogin(url, username, password) {
        this.open(url);
        this.waitUntilLoginPageIsLoaded();
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickSignIn();
        this.clickRemindMeLaterButton();
    }

    performLoginOnSkyId(username, password) {
        this.waitUntilLoginPageIsLoaded();
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickSignIn();
    }

    selectLightBoxValue(optionType, pageType) {
        if (pageType === 'evo') {
            browser.waitForExist(this.lightBoxEvo, 5000);
            if (optionType === 'EC') {
                browser.click(this.lightBoxIhaveSkyEvo);

            } else if (optionType === 'PC') {
                browser.click(this.lightBoxIdonthaveSkyEvo);
            }
        }
        else if (pageType === 'ethan') {
            console.log(`i got here`)
            browser.waitForExist(this.lightBoxEthan, 5000);
            if (optionType === 'EC') {
                browser.click(this.lightBoxIhaveSkyEthan);

            } else if (optionType === 'PC') {
                browser.click(this.lightBoxIdonthaveSkyEthan);
            }
        }
    }

    open(url) {
        super.open(url);
    }
}
module.exports = LoginPage;
