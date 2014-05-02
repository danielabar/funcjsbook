'use strict';

var fixture = require('../lib/applicative');
var expect = require('chai').expect;

describe('Applicative Programming', function() {

  describe('All Of', function() {

    it('Returns true when no args are passed', function() {
      var result = fixture.allOf();
      expect(result).to.be.true;
    });

  });

});