import test from "selenium-webdriver/testing";
import config from "config";
import MainPage from "../page/home-page.js";
import * as BrowserFactory from "../utils/browsers.js";

let driver = null;
let page = null;

const mochaTimeoutMS = config.get('mochaTimeoutMS');

test.describe('Navigate to the Parking Calculator page and verify elements', function () {
    this.timeout(mochaTimeoutMS);

    test.before(function () {
        driver = BrowserFactory.initializeTestSetUp();
        page = new MainPage(driver, true);
    });

    test.it('Verify the Page title', function () {
        page.pageHeadingTextCheck();
    });

    test.it('Verify the page elements', function () {
        page.pageElementsCheck();
    });

    test.it('Verify the dropdown content', function () {
        page.lotDropdownContentCheck();
    });

    test.afterEach(() => driver.manage().deleteAllCookies());
    test.after(() => driver.quit());
});
