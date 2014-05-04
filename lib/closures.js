'use strict';

var _ = require('underscore');
var myUtil = require('./util');

module.exports = {

  createScaleFunction: function(FACTOR) {
    return function(v) {
      return _.map(v, function(n) {
        return (n * FACTOR);
      });
    };
  },

  makeAdder: function(CAPTURED) {
    return function(free) {
      return free + CAPTURED;
    };
  },

  averageDamp: function(FUN) {
    return function(n) {
      return myUtil.average([n, FUN(n)]);
    };
  },

  captureShadow: function(SHADOWED) {
    var makeJsLintHappy = SHADOWED;
    console.log('makeJsLintHappy: ' + makeJsLintHappy);
    return function(SHADOWED) {
      return SHADOWED + 1;
    };
  }

};