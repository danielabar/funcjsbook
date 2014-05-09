'use strict';

var expect = require('chai').expect;

describe('Learning', function() {

  describe('Native Reduce', function() {

    it('Uses initial value', function() {
      var myarr = [1, 2, 3, 4, 5];
      var callbackFn = function(prev, curr, i) {
        console.log("callbackFn i: " + i);
        return prev + curr;
      };
      var initialVal = 0;
      var result = myarr.reduce(callbackFn, initialVal);
      expect(result).to.equal(15);
    });

    it('Works with no initial value', function() {
      var myarr = [1, 2, 3, 4, 5];
      var callbackFn = function(prev, curr, i) {
        console.log("callbackFn i: " + i);
        return prev + curr;
      };
      var result = myarr.reduce(callbackFn);
      expect(result).to.equal(15);
    });

  });

});