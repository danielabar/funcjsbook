'use strict';

var _ = require('underscore');
var myutil = require('./util');

module.exports = {

  project: function(table, keys) {
    return _.map(table, function(obj) {
      return _.pick.apply(null, myutil.construct(obj, keys));
    });
  },

  rename: function(obj, newNames) {
    return _.reduce(newNames, function(o, nu, old) {
      console.log('\to: ' + JSON.stringify(o) + '\n\tnu: ' + nu + '\n\told: ' + old);
      if (_.has(obj, old)) {
        o[nu] = obj[old];
        return o;
      } else {
        return o;
      }
    },
    _.omit.apply(null, myutil.construct(obj, _.keys(newNames))));
  }

};