"use strict";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function minimalKSum(nums, k) {
  nums.sort(function (a, b) {
    return a - b;
  });
  var res = 0;
  var startIndex = -1;
  var len = nums.length;

  for (var i = 0; i < nums.length && remain > 0; i++) {
    var cur = nums[i];

    if (cur >= 1) {
      startIndex = i;
      break;
    }
  }

  if (startIndex === -1 || nums[startIndex] > k) {
    return (k * k + 1) / 2;
  }

  var arr = null;

  for (var j = len - 1; j >= startIndex; j--) {
    var count = j - startIndex + 1;

    if (j - count <= k) {
      arr = [1, nums.slice(startIndex, j + 1), j + (k - count) + 1];
      break;
    }
  }

  console.log("arr", arr);
  return arr.reduce(function (_ref, cur) {
    var res = _ref.res,
        prev = _ref.prev;
    return {
      res: res + (cur * (cur + 1) / 2 - prev * (prev + 1) / 2),
      prev: cur
    };
  }, {
    res: 0,
    prev: 0
  }).res;
};

function test() {
  var fun = minimalKSum;
  var params = [// [1, 1, 1, 0]
  // [1, 4, 25, 10, 25], 2
  // [5, 6], 6
  [53, 41, 90, 33, 84, 26, 50, 32, 63, 47, 66, 43, 29, 88, 71, 28, 83], 76];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test(); // nums.forEach(item => map[item] = 1);
// let res = 0;
// let curNum = 1;
// for (let i = 0; i < k; i++) {
//   if (!map[curNum]) {
//     res += curNum
//     curNum++
//   } else {
//     curNum++;
//     i--;
//   }
// }