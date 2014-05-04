'use strict';

var _ = require('underscore');
var globals = {};

module.exports = {

  makeBindFun: function(resolver) {
    return function(k, v) {
      var stack = globals[k] || [];
      globals[k] = resolver(stack, v);
      console.log('makeBindFun globals: ' + JSON.stringify(globals));
      return globals;
    };
  },

  dynamicLookup: function(k) {
    var slot = globals[k] || [];
    return _.last(slot);
  },

  globalThis: function() {
    return this;
  }

};