'use strict';

var fixture = require('../lib/dynamic-scope');
var expect = require('chai').expect;

describe('Dynamic Scope', function() {

  var resolver = function(stack, v) {
    stack.push(v);
    return stack;
  };

  var stackBinder = fixture.makeBindFun(resolver);

  var stackUnbinder = fixture.makeBindFun(function(stack) {
    stack.pop();
    return stack;
  });

  describe('Dynamic Lookup', function() {

    it('Returns value pushed on stack', function() {
      stackBinder('a', 1);
      stackBinder('b', 100);
      var result = fixture.dynamicLookup('a');
      expect(result).to.equal(1);
    });

    it('Returns most recent value pushed on stack', function() {
      stackBinder('a', 1);
      stackBinder('b', 100);
      stackBinder('a', 2);
      var result = fixture.dynamicLookup('a');
      expect(result).to.equal(2);
    });

    it('Returns first pushed on stack when second is unbound', function() {
      stackBinder('a', 1);
      stackBinder('b', 100);
      stackBinder('a', 2);
      stackUnbinder('a');
      var result = fixture.dynamicLookup('a');
      expect(result).to.equal(1);
    });

  });

  describe('this binding', function() {

    it('global this comes from context', function() {
      var result = fixture.globalThis();
      expect(result).to.have.keys(['makeBindFun', 'dynamicLookup', 'globalThis']);
    });

    it('call redefines this', function() {
      var result = fixture.globalThis.call('barnabas');
      expect(result).to.equal('barnabas');
    });

    it('apply redefines this', function() {
      var result = fixture.globalThis.apply('orsulak', []);
      expect(result).to.equal('orsulak');
    });

  });

});