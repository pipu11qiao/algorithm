const e = require("express");

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 找到最接近0的
  let left = -1;
  let right = nums.length;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= 0) {
      right = mid
    } else {
      left = mid
    }
  }
  let res = [];
  while (left >= 0 && right <= nums.length - 1) {
    let leftNum = nums[left] * nums[left];
    let rightNum = nums[right] * nums[right];
    if (leftNum > rightNum) {
      res.push(rightNum);
      right++
    } else {
      res.push(leftNum)
      left--
    }
  }
  while (left >= 0) {
    res.push(nums[left] * nums[left]);
    left--
  }
  while (right <= nums.length - 1) {
    res.push(nums[right] * nums[right]);
    right++
  }
  return res
};

function test() {
  let fun = sortedSquares;
  let params = [
    [-4, -1, 0, 3, 10]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()