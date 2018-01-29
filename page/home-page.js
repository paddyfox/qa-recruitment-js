import assert from "assert";
import {By} from "selenium-webdriver";
import config from "config";
import BasePage from "./base-page.js";

let pageHeading = By.className('PageTitle');

const chai = require('chai');
var expect = chai.expect;

export default class MainPage extends BasePage {
    constructor(driver, visit = false) {
        super(driver, pageHeading, visit, config.get('url'));
    }

    pageHeadingTextCheck() {
        var title = this.driver.findElement(pageHeading);
        title.getText().then(function (text) {
            assert.equal(text, 'PARKING CALCULATOR');
        });
    }

    pageElementsCheck() {
        var driver = this.driver;
        var elementListID = ['Lot', 'EntryTime', 'ExitTime', 'EntryDate', 'ExitDate'];
        var elementListName = ['Submit', 'EntryTimeAMPM', 'ExitTimeAMPM', 'Submit'];

        elementListID.forEach(function (element) {
            driver.findElement(By.id(element)).isEnabled();
        });

        elementListName.forEach(function (element) {
            driver.findElement(By.name(element)).isEnabled();
        });
    }

    lotDropdownContentCheck() {
        var expected_elements = ['Short-Term Parking', 'Economy Parking', 'Long-Term Surface Parking', 'Long-Term Garage Parking', 'Valet Parking'];

        this.driver.findElements(By.css("#Lot option")).then(function(elements) {
            elements.forEach(function (element) {
                element.getText().then(function(text) {
                    expect(expected_elements).to.contain(text);
                });
            });
        });
    }
}
