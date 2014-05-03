'use strict';

var fixture = require('../lib/applicative');
var expect = require('chai').expect;

describe('Applicative Programming', function() {

  var T = function() { return true; };
  var F = function() { return false; };

  describe('All Of', function() {

    it('Returns true when no args are passed', function() {
      var result = fixture.allOf();
      expect(result).to.be.true;
    });

    it('Returns true when all func args return true', function() {
      var result = fixture.allOf(T, T);
      expect(result).to.be.true;
    });

    it('Returns false when one of func args returns false', function() {
      var result = fixture.allOf(T, T, T, T, F);
      expect(result).to.be.false;
    });

  });

  describe('Any Of', function() {

    it('Returns false when no args are passed', function() {
      var result = fixture.anyOf();
      expect(result).to.be.false;
    });

    it('Returns true when at least one func arg returns true', function() {
      var result = fixture.anyOf(T, T, F);
      expect(result).to.be.true;
    });

    it('Returns false when all func args return false', function() {
      var result = fixture.anyOf(F, F, F, F);
      expect(result).to.be.false;
    });

  });

});