/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var minKBitFlips = function(nums, k) {
  const n = nums.length;
  let ans = 0, revCnt = 0;
  for (let i = 0; i < n; ++i) {
      if (i >= k && nums[i - k] > 1) {
          revCnt ^= 1;
          nums[i - k] -= 2; // 复原数组元素，若允许修改数组 nums，则可以省略
      }
      if (nums[i] == revCnt) {
          if (i + k > n) {
              return -1;
          }
          ++ans;
          revCnt ^= 1;
          nums[i] += 2;
      }
  }
  return ans;
};

function test() {
  let fun = minKBitFlips;
  let params = [
    // [0, 1, 0], 1
    // [0, 0, 0, 1, 0, 1, 1, 0], 3
    // [1, 1, 0], 2
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
    60
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()