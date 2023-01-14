/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  let res = 0;
  let sum = 0;
  let map = { 0: -1 };
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (map[sum] === undefined) {
      map[sum] = i;
    }
    if (map[sum - k] !== undefined) {
      res = Math.max(res, i - map[sum - k]);
    }
  }
  return res;
};

function test() {
  let fun = maxSubArrayLen;
  let params = [
    //[1, 1, 1, 0]
    // [1, -1, 5, -2, 3],
    // 3,
    [-2, -1, 2, 1],
    1,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
