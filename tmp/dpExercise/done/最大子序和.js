/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prev = nums[0];
  let res = prev;
  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev, 0) + nums[i]
    res = Math.max(prev, res)
  }
  return res
};

function test() {
  let fun = maxSubArray;
  let params = [
    // [-2,1,-3,4,-1,2,1,-5,4]
    [5,4,-1,7,8]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()