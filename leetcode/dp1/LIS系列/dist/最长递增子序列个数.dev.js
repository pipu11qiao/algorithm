"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function findNumberOfLIS(nums) {
  var dp = {};
  var len = nums.length;
  new Array(len).forEach(function (_, i) {
    dp[i] = 1;
  });

  for (var i = 0; i < len; i++) {
    var _max = 1;

    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        _max = Math.max(_max, dp[j] + 1);
      }
    }

    dp[i] = _max;
  } // console.log(`dp`, dp);


  var values = Object.values(dp);
  var max = Math.max.apply(Math, values);
  return values.filter(function (item) {
    return item === max;
  }).length;
};

function test() {
  var arr = [1];
  var res = lengthOfLIS(arr);
  console.log("res", res);
}

test();