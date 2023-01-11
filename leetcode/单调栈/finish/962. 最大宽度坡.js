/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  let stack = [0];
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    let cur = nums[i];
    if (cur < nums[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }
  // console.log(`stack`, stack);
  let res = 0;
  for (let i = len - 1; i >= 0; i--) {
    let cur = nums[i];
    while (stack.length > 0 && cur - nums[stack[stack.length - 1]] >= 0) {
      let preIndex = stack.pop();
      res = Math.max(res, i - preIndex);
    }
    if (stack.length === 0) {
      break;
    }
  }
  return res;
};

function test() {
  let fun = maxWidthRamp;
  let params = [
    //[1, 1, 1, 0]
    // [6, 0, 8, 2, 1, 5],
    [9, 8, 1, 0, 1, 9, 4, 0, 4, 1],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
