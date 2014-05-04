'use strict';

var expect = require('chai').expect;
var fixture = require('../lib/closures');

describe.only('Closures', function() {

  it('Create Scale function has access to FACTOR', function() {
    var scale10 = fixture.createScaleFunction(10);
    expect(scale10).to.be.instanceof(Function);
    var result = scale10([1, 2, 3]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(3);
    expect(result[0]).to.equal(10);
    expect(result[1]).to.equal(20);
    expect(result[2]).to.equal(30);
  });

  it('Make Adder function has access to CAPTURED', function() {
    var add10 = fixture.makeAdder(10);
    var result = add10(32);
    expect(result).to.equal(42);

    var add1024 = fixture.makeAdder(1024);
    result = add1024(11);
    expect(result).to.equal(1035);

    result = add10(98);
    expect(result).to.equal(108);
  });

  it('Average Damp has access to FUN', function() {
    var mySqrFunc = function(n) { return n*n; };
    var averageSq = fixture.averageDamp(mySqrFunc);
    var result = averageSq(10);
    expect(result).to.equal(55);
  });

  it('Shadows variables are carried along with closures', function() {
    var closureShadow = fixture.captureShadow(108);
    var result = closureShadow(2);
    expect(result).to.equal(3);
  });

});