/**
 * Created by mal89 on 07/02/2018.
 */
const chai = require('wdio-chai-plugin');
const chalk = require('chalk');
const path = require('path');
const config = require('./config');
//const addLogging = require('./utils/add-logging');
//const allPages = require('./test/pages');

const browserName = (process.env._BROWSER || process.env.BROWSER || 'chrome').replace(/_/g, ' ');
const port = process.env.PORT || 3000;
//const chromeBinary = process.env.CHROME_BINARY || '';
const cucumberOptsTags = process.env.CUCUMBER_OPT_TAGS || '~@wip';
//const chromeHeadless = process.env.CHROME_HEADLESS || 'headless';

const {SPECS, STEP_DEFINITIONS, TEST_RESULTS, TEST_SCREENSHOTS, TIMEOUT} = config;


exports.config = {
    // user: 'closenet',
    // key: '29a0cb16-7f50-4fc2-92d0-d85731795c3c',
    // sauceConnect: true,
    services: ['chromedriver'],
    port: '9515',
    path: '/',
    specs: [SPECS],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
  //              args:[`${chromeHeadless}`],
    //            binary: `${chromeBinary}`
            }
        }
    ],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    bail: 0,
    baseUrl: `http://localhost:${port}`,
    screenshotPath: TEST_SCREENSHOTS,
    waitforTimeout: TIMEOUT,
    connectionRetryTimeout: TIMEOUT,
    connectionRetryCount: 0,
    //services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: TEST_RESULTS
        }
    },
    cucumberOpts: {
        require: [STEP_DEFINITIONS],
        backtrace: true,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [`${cucumberOptsTags}`],
        timeout: TIMEOUT,
        ignoreUndefinedDefinitions: true
    },
    before(capabilities, specs) {
        addLogging.toBrowser(browser);
        addLogging.toPages(allPages);
        chai(global.browser);
    },
    after(result, capabilities, specs) {}
};
