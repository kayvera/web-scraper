const crawler = require('../crawler');
const robot = require('robotjs');
var chai = require('chai');
const { assert } = require('chai');
var expect = chai.expect;

var roboInput = () => {
  robot.typeString('no');
  robot.keyTap('enter');
};

describe('validates site url', function () {
  it('user input is no', function () {
    roboInput();
    return crawler.requestSiteURL().then(function (check) {
      assert.strictEqual(check, true, 'https://toscrape.com/');
    });
  });
});
