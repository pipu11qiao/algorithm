/**
 * @param {number[]} nums
 * @return {number}
 */


var maxSubArray = function (nums, start, end) {
  const len = end - start + 1;
  let s = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = start; i < len; i++) {
    const num = nums[i]
    if (s <= 0) {
      s = num
      max = Math.max(max, num)
    } else {
      s = s + num
      max = Math.max(max, s)
    }
  }
  console.log(`max`, max);
  return max
};
var maxSubarraySumCircular = function (nums) {
  const tmpArr = [...nums, ...nums];
  const len = nums.length;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < len; i++) {
    max = Math.max(max, maxSubArray(tmpArr, i, len - 1 + i));
  }
  return max
};

function test() {
  // let arr = [1, -2, 3, -2]
  let arr = [5, -3, 5];

  const res = maxSubarraySumCircular(arr);
  console.log(`res`, res);
}

test()