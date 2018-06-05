/**
 * Created by mal89 on 28/02/2018.
 */
var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome'} };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
    console.log('Title is: ' + title);
    // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
})
    .end();