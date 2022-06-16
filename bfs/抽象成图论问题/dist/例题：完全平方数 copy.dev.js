"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function numSquares(n) {
  var visitedMap = {};
  var arr = [n];
  visitedMap[n] = 1;
  var step = 0;

  while (arr.length) {
    var len = arr.length;

    while (len > 0) {
      var curNum = arr.shift();
      var maxNum = Math.ceil(Math.sqrt(curNum));

      for (var i = 1; i <= maxNum; i++) {
        var remainNum = curNum - i * i;

        if (remainNum === 0) {
          return step + 1;
        } else if (!visitedMap[remainNum]) {
          visitedMap[remainNum] = 1;
          arr.push(remainNum);
        }
      }
    }

    step++;
  }
};

function test() {
  var fun = numSquares;
  var params = [12];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();