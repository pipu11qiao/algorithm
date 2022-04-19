/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = nums[0];
  if (max >= nums.length - 1) {
    return true
  }
  for (let i = 0; i <= max; i++) {
    let cur = i + nums[i]
    if (cur > max) {
      max = cur
      if (max >= nums.length - 1) {
        return true
      }
    }
  }
  return false
};

function test() {
  let fun = canJump;
  let params = [
    // [2, 3, 1, 1, 4]
    // [3, 2, 1, 0, 4]
    [1, 2, 3]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()