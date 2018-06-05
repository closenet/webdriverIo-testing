const path = require('path');

const PROJECT_ROOT = process.cwd();
const TEST_ROOT = __dirname;

module.exports = {
    ALLURE_BIN: path.join(PROJECT_ROOT, './node_modules/.bin/allure'),
    BANNER_FILE: path.join(TEST_ROOT, './banner.txt'),
    PROJECT_ROOT,
    SPECS: path.resolve(TEST_ROOT, './test/features/**/*.feature'),
    STEP_DEFINITIONS: path.resolve(TEST_ROOT, './test/step_definitions'),
    TEST_REPORTS: path.join(PROJECT_ROOT, './allure-reports/generated-report'),
    TEST_RESULTS: path.join(PROJECT_ROOT, './allure-reports/allure-results'),
    TEST_ROOT,
    TEST_SCREENSHOTS: path.join(PROJECT_ROOT, './allure-reports/screenshots'),
    WEBDRIVER_BIN: path.join(PROJECT_ROOT, './node_modules/.bin/wdio'),
    WEBDRIVER_CONFIG: path.resolve(TEST_ROOT, './wdio.conf.js'),
    ENVNAME: process.env.MY_ENV || 'e02',
    BROWSERNAME: (process.env._BROWSER || process.env.BROWSER || 'chrome').replace(/_/g, ' '),
    TIMEOUT: 300000
};
