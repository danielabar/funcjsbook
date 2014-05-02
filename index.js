'use strict';

var _ = require('underscore');

var library = [
  {title: "SICP", isbn: "111", ed: 1},
  {title: "SICP", isbn: "222", ed: 2},
  {title: "Joy of Clojure", isbn: "333", ed: 1}
];

var existy = function(x) {
  return x !== null;
};

var cat = function() {
  var head = _.first(arguments);
  if (existy(head)) {
    return head.concat.apply(head, _.rest(arguments));
  } else {
    return [];
  }
};

var construct = function(head, tail) {
  return cat([head], _.toArray(tail));
};

var sqlProject = function(table, keys) {
  return _.map(table, function(obj) {
    var results = _.pick.apply(null, construct(obj, keys));
    console.log(JSON.stringify(results, null, 2));
    return results;
  });
};

sqlProject(library, ['title', 'isbn']);

module.exports = sqlProject;