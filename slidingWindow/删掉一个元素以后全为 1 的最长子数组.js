/**
 * @param {number[]} nums
 * @return {number}
 */

var longestSubarray = function (nums) {
  let l = 0;
  let res = 0;
  let zeroCount = 0;
  let prevZeroIndex = -1;
  let hasZero = false;
  for (let r = 0; r < nums.length; r++) {
    const curNum = nums[r];
    if (curNum === 0) {
      hasZero = true
      if (zeroCount > 0) {
        let count = r - 1 - l + 1;
        res = Math.max(res, count);
        l = prevZeroIndex + 1;
        prevZeroIndex = r
      } else {
        prevZeroIndex = r
        zeroCount++
      }
    }
  }
  res = Math.max(res, nums.length - l);
  return res - 1;
};

function test() {
  let fun = longestSubarray;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()