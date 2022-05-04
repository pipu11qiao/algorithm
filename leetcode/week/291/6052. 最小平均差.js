/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
  let rightSum = [];
  const len = nums.length
  let s = 0
  for (let i = len - 1; i >= 0; i--) {
    s += nums[i];
    rightSum[i] = s;
  }
  let min = Number.POSITIVE_INFINITY;
  let minIndex = -1;
  let leftSum = 0;
  for (let i = 0; i < len; i++) {
    leftSum += nums[i]
    let curRes = Math.abs(
      Math.floor(leftSum / (i + 1)) -
      (i === len - 1 ? 0 : Math.floor(rightSum[i + 1] / (len - i - 1)))
    )
    if (curRes < min) {
      min = curRes
      minIndex = i
    }
  }
  return minIndex
};

function test() {
  let fun = minimumAverageDifference;
  let params = [
    [0],
    // [2, 5, 3, 9, 5, 3]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()