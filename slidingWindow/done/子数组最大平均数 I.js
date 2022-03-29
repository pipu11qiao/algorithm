/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let count = 0;
  let sum = 0;
  let res = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    sum += cur;
    count++
    if (count === k) {
      res = Math.max(sum / k, res);
      sum -= nums[i - k + 1];
      count--
    }
  }
  return res
};

function test() {
  let fun = findMaxAverage;
  let params = [
    [5], 1
    // [1, 12, -5, -6, 50, 3], 4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()