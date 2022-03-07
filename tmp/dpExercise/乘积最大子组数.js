/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let ans = nums[0];
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prev = (prev === 0 ? 1 : prev) * nums[i]
    ans = Math.max(prev, ans, nums[i])
  }
  if (ans === 0) {
    ans = 0
  }
  return ans
};

function test() {
  let fun = maxProduct;
  let params = [
    // [2, 3, -2, 4]
    [-2, 0, -1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()