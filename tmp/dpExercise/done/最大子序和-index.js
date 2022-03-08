/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prev = Number.NEGATIVE_INFINITY;
  let max = prev;
  let start = -1
  let end = -1
  let begin = -1;
  for (let i = 0; i < nums.length; i++) {
    if (prev <= 0) {
      begin = i
    }
    prev = Math.max(prev, 0) + nums[i]
    if (prev > max) {
      start = begin;
      end = i
      max = prev
    }
  }
  return {
    max,
    start,
    end,
  }
};

function test() {
  let fun = maxSubArray;
  let params = [
    // [-2,1,-3,4,-1,2,1,-5,4]
    // [-2,1,-3,4,-1,2,1,-5,4]
    [-8,-5,-2,-5,-10]
    // [5,4,-1,7,8]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()