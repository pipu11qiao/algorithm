/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubarraySumCircular = function (nums) {
  const len = nums.len;
  const resMax = Number.NEGATIVE_INFINITY;
  let s = 0;
  // 求出区间[0,i] 的最大字间距和
  for (let i = 0; i < len; i++) {
    s = nums[i] + Math.max(s, 0)
    resMax = Math.max(resMax, s)
  }

  // 左侧到i的和 区间[0,i]的和
  const leftSum = [];
  s = 0;
  for (let i = 0; i < len; i++) {
    s =s + nums[i];
    leftSum.push(s);
  }


  return resMax
};

function test() {
  // let arr = [1, -2, 3, -2]
  let arr = [5, -3, 5];

  const res = maxSubarraySumCircular(arr);
  console.log(`res`, res);
}

test()