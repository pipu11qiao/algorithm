/**
 * @param {number[]} nums
 * @return {number}
 */
// fn = f(n-1).s > 0  f(n-1).max vs f(n-1).s + n
//      f(n-1).s < 0  n 
var maxSubArray = function (nums) {
  const len = nums.length;
  let s = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < len; i++) {
    const num = nums[i]
    if (s <= 0) {
      s = num
      max = Math.max(max, num)
    } else {
      s = s + num
      max = Math.max(max, s)
    }
  }
  return max
};

function test() {
  let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const res = maxSubArray(arr);
  console.log(`res`, res);
}
test()