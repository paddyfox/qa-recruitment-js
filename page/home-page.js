import assert from "assert";
import {By} from "selenium-webdriver";
import config from "config";
import BasePage from "./base-page.js";

let pageHeading = By.className('PageTitle');

const chai = require('chai')
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
        this.driver.findElements(By.id("Lot")).then(function(elements){
            elements.forEach(function (element) {
                element.getText().then(function(text){
                });
            });
        });

        //     String[] elementListID = {"Lot", "EntryTime", "ExitTime", "EntryDate", "ExitDate"};
        //
        //     String[] elementListName = {"Submit", "EntryTimeAMPM", "ExitTimeAMPM", "Submit"};
        //
        //     for (int i=0; i<elementListID.length; i++){
        //         Assert.assertTrue(driver.findElements(By.id(elementListID[i])).size() > 0);
        //     }
        //
        //     for (int i=0; i<elementListName.length; i++){
        //         Assert.assertTrue(driver.findElements(By.name(elementListName[i])).size() > 0);
        //     }
        // }
    }

    lotDropdownContentCheck() {
        var expected_elements = ['Short-Term Parking', 'Economy Parking', 'Long-Term Surface Parking', 'Long-Term Garage Parking', 'Valet Parking'];
        this.driver.findElements(By.css("#Lot option")).then(function(elements){
            elements.forEach(function (element) {
                element.getText().then(function(text) {
                    expect(expected_elements).to.contain(text);
                });
            });
        });
    }
}
