/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let end = 0;
  let sum = 0;
  let res = Number.POSITIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= target) {
      if (res === 1) {
        return res
      }
      while (sum >= target) {
        res = Math.min(res, i - end + 1);
        sum -= nums[end]
        end++
      }
    }
  }
  if (res === Number.POSITIVE_INFINITY) {
    return 0
  }
  return res
};

function test() {
  let fun = minSubArrayLen;
  let params = [
    7, [2, 3, 1, 2, 4, 3]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()