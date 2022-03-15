"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function countMaxOrSubsets(nums) {
  var len = nums.length;
  nums.sort(function (a, b) {
    return a - b;
  });
  var maxNum = nums[len - 1];
  var maxScore = maxNum;

  for (var i = len - 1; i > -0; i--) {
    if (nums[i] !== maxNum && nums[i] | maxNum > maxScore) {
      maxScore = nums[i] | maxNum;
    }
  }

  var countMap = {};
  nums.forEach(function (item) {
    if (countMap[item] === undefined) {
      countMap[item] = 0;
    }

    countMap[item]++;
  });
  console.log("maxScore", maxScore);
  var bLen = maxNum.toString(2).length;
  var res = 0;
  var prevNum = countMap[nums[len - 1]].length > 1 ? nums[len - 1] : undefined;

  for (var _i = len - 1; _i >= 0; _i--) {
    var curNum = nums[_i];

    if (curNum.toString(2).length < bLen) {
      break;
    }

    var count = countMap[curNum];

    if (curNum === maxScore) {
      res += Math.pow(2, _i);
    } else {
      if (curNum === prevNum) {
        continue;
      }

      console.log("curNum", curNum); // console.log(`res`, res);

      for (var j = _i - 1; j >= 0; j--) {
        // console.log(`nums[j]`, nums[j]);
        if (nums[j] !== curNum && (curNum | nums[j]) === maxScore) {
          res += (Math.pow(2, count) - 1) * Math.pow(2, j);
        }
      }
    }

    prevNum = curNum;
  }

  return res;
};

function test() {
  var fun = countMaxOrSubsets;
  var params = [// [3, 1]
  // [2,2,2]
  // [3, 2, 1, 5]
  // [1, 1, 2]
  // [2, 2, 1, 3]
  // v
  [4, 4, 4, 1]];
  var res = fun.apply(null, params);
  console.log("res", res);
}

test();