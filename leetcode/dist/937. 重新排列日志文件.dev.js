"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var numReg = /^[^\s]+\s+\d+/;

var reorderLogFiles = function reorderLogFiles(logs) {
  var arr = [];
  var tmpArr = [];
  logs.forEach(function (item) {
    if (numReg.test(item)) {
      arr.push(item);
    } else {
      tmpArr.push(item);
    }
  });
  tmpArr.sort(function (a, b) {
    var _a$split = a.split(' '),
        _a$split2 = _toArray(_a$split),
        str1 = _a$split2[0],
        other1 = _a$split2.slice(1);

    var _b$split = b.split(' '),
        _b$split2 = _toArray(_b$split),
        str2 = _b$split2[0],
        other2 = _b$split2.slice(1);

    other1 = other1.join('');
    other2 = other2.join('');

    if (other1 === other2) {
      return str1 < str2 ? -1 : str1 > str2;
    }

    var res = other1 < other2 ? -1 : other1 > other2;
    console.log("res", res);
    return res;
  });
  return tmpArr.concat(arr);
};

function test() {
  var fun = reorderLogFiles;
  var params = [["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();