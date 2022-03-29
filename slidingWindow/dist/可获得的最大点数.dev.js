"use strict";

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function maxScore(cardPoints, k) {
  var len = cardPoints.length;
  var i = 0;
  var sum = 0;

  for (; i < k; i++) {
    sum += cardPoints[i];
  }

  debugger;
  var res = sum; // j左边的个数

  for (var j = k - 1, _i = 0; j >= 0; j--) {
    sum -= cardPoints[j];
    sum += [len - 1 - _i];
    res = Math.max(sum, res);
  }

  return res;
};

function test() {
  var fun = maxScore;
  var params = [[1, 2, 3, 4, 5, 6, 1], 3];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();