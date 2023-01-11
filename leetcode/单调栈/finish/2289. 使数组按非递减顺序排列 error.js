/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
  let res = 0;
  let stack = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    if (stack.length === 0) {
      stack.push(cur);
    } else {
      if (cur >= stack[stack.length - 1]) {
        res = Math.max(stack.length - 1, res);
        while (stack.length > 0) {
          stack.pop();
        }
        stack.push(cur);
      } else {
        let mx = stack.pop();
        stack.push(cur);
        stack.push(mx);
      }
    }
  }
  res = Math.max(stack.length - 1, res);
  return res;
};

function test() {
  let fun = totalSteps;
  let params = [
    //[1, 1, 1, 0]
    // [5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11],
    // [4, 5, 7, 7, 13],
    // [10, 1, 2, 3, 4, 5, 6, 1, 2, 3, 9, 1, 2, 3, 4, 5, 6, 7, 8],
    [
      10, 1, 2, 3, 4, 5, 6, 1, 2, 3, 9, 1, 2, 3, 4, 5, 6, 7, 8, 11, 1, 2, 3, 4,
      5, 6, 7, 9, 1, 2, 10, 1, 2,
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
