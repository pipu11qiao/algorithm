"use strict";

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function lengthLongestPath(input) {
  input = '\n' + input;
  var stack = [];
  var index = 0;
  var len = input.length;
  var res = 0;

  while (index <= len) {
    var hasName = false;
    var l = index;
    var nameStr = '';

    if (index >= len) {
      return len;
    }

    var curLevel = 0;

    while (index <= len) {
      var curLetter = input[index];

      if (index === len || curLetter === '\n' || curLetter === '\t') {
        if (hasName) {
          nameStr = input.slice(l, index);
          break;
        } else {
          if (curLetter === '\t') {
            curLevel++;
          }
        }
      } else {
        if (!hasName) {
          while (curLevel < stack.length) {
            stack.pop();
          }

          hasName = true;
          l = index;
        }
      }

      index++;
    }

    var nameCount = nameStr.length;

    if (nameStr.indexOf('.') > -1) {
      var curLen = stack.reduce(function (sum, item) {
        return sum + item;
      }, 0) + nameCount + (stack.length || 0);
      res = Math.max(res, curLen);
    } else {
      stack.push(nameCount);
    }
  }
};

function test() {
  var fun = lengthLongestPath;
  var params = ["file1.txt\nfile2.txt\nlongfile.txt"];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();