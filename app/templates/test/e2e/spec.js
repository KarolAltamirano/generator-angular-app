/* eslint-env protractor */

'use strict';

var expect = require('chai').expect;

describe('HOME PAGE', function () {
    beforeEach(function () {
        browser.get('');
    });

    it('should have a title', function (done) {
        browser.getTitle().then(function (value) {
            expect(value).to.be.a('string');
            done();
        });
    });
});
