'use strict';

var _ = require('underscore');

module.exports = {

  allOf: function(/* funs */) {
    return _.reduceRight(arguments, function(truth, f) {
      return truth && f();
    }, true);
  },

  anyOf: function(/* funs */) {
    return _.reduceRight(arguments, function(truth, f) {
      return truth || f();
    }, true);
  }

};