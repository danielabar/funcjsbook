'use strict';

var _ = require('underscore');

module.exports = {

  existy: function(x) {
    return x !== null;
  },

  cat: function() {
    var head = _.first(arguments);
    if (module.exports.existy(head)) {
      return head.concat.apply(head, _.rest(arguments));
    } else {
      return [];
    }
  },

  average: function(array) {
    var sum = _.reduce(array, function(a, b) { return a+b; });
    return sum / _.size(array);
  },

  construct: function(head, tail) {
    return module.exports.cat([head], _.toArray(tail));
  },

  mapcat: function(fun, coll) {
    return module.exports.cat.apply(null, _.map(coll, fun));
  },

  butLast: function(coll) {
    return _.toArray(coll).slice(0, -1);
  },

  interpose: function(inter, coll) {
    return module.exports.butLast(module.exports.mapcat(function(e) {
      return module.exports.construct(e, [inter]);
    }, coll));
  }

};