/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let min = Number.POSITIVE_INFINITY;
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let left = i + 1;
    let right = nums.length - 1
    while (left < right) {
      const num = diff - (nums[left] + nums[right])
      if (Math.abs(num) < min) {
        min = Math.abs(num)
        res = nums[left] + nums[right] + nums[i]
      }
      if (num === 0) {
        return target
      } else if (num > 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res;
};

function test() {
  let fun = threeSumClosest;
  let params = [
    // [-1, 2, 1, -4], 1
    [1, 1, -1, -1, 3], -1
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()