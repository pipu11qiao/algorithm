/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0);
  let stack = [];
  let max = 0;
  let len = heights.length;
  for (let i = 0; i < len; i++) {
    let cur = heights[i];
    while (stack.length > 0 && cur < heights[stack[stack.length - 1]]) {
      let prevIndex = stack.pop();
      let w = i - (stack.length === 0 ? 0 : stack[stack.length - 1] + 1);
      max = Math.max(max, heights[prevIndex] * w);
    }
    if (stack.length === 0 || cur >= heights[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }
  return max;
};

function test() {
  let fun = largestRectangleArea;
  let params = [
    //[1, 1, 1, 0]
    // [2, 1, 5, 6, 2, 3],
    // [2, 4],
    // [4, 2, 0, 3, 2, 5],
    [0, 1, 0, 1],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
