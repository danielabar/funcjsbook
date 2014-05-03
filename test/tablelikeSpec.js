'use strict';

var fixture = require('../lib/tablelike');
var expect = require('chai').expect;

describe('Table Like', function() {

  var library = [
    {title: "SICP", isbn: "111", ed: 1},
    {title: "SICP", isbn: "222", ed: 2},
    {title: "Joy of Clojure", isbn: "333", ed: 1}
  ];

  describe('Project', function() {
    it('Behaves like SQL SELECT', function() {
      var verifyEntry = function(entry, expTitle, expIsbn) {
        expect(entry.title).to.equal(expTitle);
        expect(entry.isbn).to.equal(expIsbn);
        expect(entry).not.to.have.ownProperty('ed');
      };
      var result = fixture.project(library, ['title', 'isbn']);
      expect(result).to.be.an.instanceOf(Array);
      expect(result).to.have.length(3);
      verifyEntry(result[0], 'SICP', '111');
      verifyEntry(result[1], 'SICP', '222');
      verifyEntry(result[2], 'Joy of Clojure', '333');
    });
    it('Results can be processed again', function() {
      var verifyEntry = function(entry, expIsbn) {
        expect(entry.isbn).to.equal(expIsbn);
        expect(entry).not.to.have.ownProperty('title');
        expect(entry).not.to.have.ownProperty('ed');
      };
      var result1 = fixture.project(library, ['title', 'isbn']);
      var result2 = fixture.project(result1, ['isbn']);
      expect(result2).to.be.an.instanceOf(Array);
      expect(result2).to.have.length(3);
      verifyEntry(result2[0], '111');
      verifyEntry(result2[1], '222');
      verifyEntry(result2[2], '333');
    });
  });
  describe('Rename', function() {
    it.only('Renames object keys', function() {
      var obj = {a: 1, b: 2};
      var newNames = {AAA: 1};
      var result = fixture.rename(obj, newNames);
      // not working as the book says it should
      console.log(result);
    });
  });
});