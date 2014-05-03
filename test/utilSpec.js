'use strict';

var fixture = require('../lib/util');
var expect = require('chai').expect;

describe('Util', function() {
  describe('Existy', function() {
    it('Returns true when argument is a string', function() {
      var x = "foo";
      var result = fixture.existy(x);
      expect(result).to.be.true;
    });
    it('Returns true when argument is a number', function() {
      var x = 5;
      var result = fixture.existy(x);
      expect(result).to.be.true;
    });
    it('Returns false when argument is null', function() {
      var result = fixture.existy(null);
      expect(result).to.be.false;
    });
    it('Returns true when argument is undefined', function() {
      var result = fixture.existy();
      expect(result).to.be.true;
    });
  });
  describe('Cat', function() {
    it('Concatenates several arrays into one', function() {
      var ar1 = [1, 2, 3];
      var ar2 = [4, 5];
      var ar3 = [6, 7, 8];
      var result = fixture.cat(ar1, ar2, ar3);
      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.have.length(8);
      expect(result[0]).to.equal(1);
      expect(result[1]).to.equal(2);
      expect(result[2]).to.equal(3);
      expect(result[3]).to.equal(4);
      expect(result[4]).to.equal(5);
      expect(result[5]).to.equal(6);
      expect(result[6]).to.equal(7);
      expect(result[7]).to.equal(8);
    });
    it('Returns empty array when passed empty array', function() {
      var result = fixture.cat([]);
      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.be.empty;
    });
  });
  describe('Construct', function() {
    it('Constructs an array from its arguments', function() {
      var arg1 = 42;
      var arg2 = [1, 2, 3];
      var result = fixture.construct(arg1, arg2);
      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.have.length(4);
      expect(result[0]).to.equal(42);
      expect(result[1]).to.equal(1);
      expect(result[2]).to.equal(2);
      expect(result[3]).to.equal(3);
    });
  });
  describe('Map Cat', function() {
    it('Concatenates all of the elements of the result of _.map', function() {
      var func = function(e) {
        return fixture.construct(e, [","]);
      };
      var coll = [1, 2, 3];
      var result = fixture.mapcat(func, coll);
      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.have.length(6);
      expect(result[0]).to.equal(1);
      expect(result[1]).to.equal(",");
      expect(result[2]).to.equal(2);
      expect(result[3]).to.equal(",");
      expect(result[4]).to.equal(3);
      expect(result[5]).to.equal(",");
    });
  });
  describe('But Last', function() {
    it('Returns array with last element removed', function() {
      var arr = [1, 2, 3];
      var result = fixture.butLast(arr);
      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.have.length(2);
      expect(result[1]).to.equal(2);
    });
  });
  describe('Interpose', function() {
    it('Interposes first arg between elements of collection', function() {
      var inter = ",";
      var coll = [1, 2, 3];
      var result = fixture.interpose(inter, coll);
      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.have.length(5);
      expect(result[0]).to.equal(1);
      expect(result[1]).to.equal(",");
      expect(result[2]).to.equal(2);
      expect(result[3]).to.equal(",");
      expect(result[4]).to.equal(3);
    });
  });
});