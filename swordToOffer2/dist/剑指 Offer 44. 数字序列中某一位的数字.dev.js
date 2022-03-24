"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function findNthDigit(n) {
  var prev = 0;
  var prevCount = 0;
  var max = '9';

  while (true) {
    // debugger;
    var curCount = - -max + 1 - prevCount;
    var curNumberCount = max.length;
    var cur = prev + curCount * curNumberCount;

    if (cur >= n) {
      var num = Math.floor((n - prev) / curNumberCount) + Math.pow(10, curNumberCount - 1);
      console.log("num", num);
      var index = (n - prev) % curNumberCount;
      console.log("index", index);
      return "".concat(curNumberCount === 1 ? num + 1 : num, " ")[index];
    } else {
      max += '9';
      prev = cur;
      prevCount = prevCount + curCount;
    }
  }
};

function test() {
  var fun = findNthDigit;
  var params = [3 // 13
  // 19
  ];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();