/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let mLen = matrix.length;
  if (mLen === 0) {
    return 0;
  }
  let nLen = matrix[0].length;
  if (nLen === 0) {
    return 0;
  }
  let res = 0;
  let prev = null;
  for (let m = 0; m < mLen; m++) {
    let curHeights = [];
    for (let n = 0; n < nLen; n++) {
      let cur = matrix[m][n];
      let height = 0;
      if (cur === "1") {
        height = (prev ? prev[n] : 0) + 1;
      }
      curHeights.push(height);
    }
    // console.log(`curHeights`, curHeights);
    res = Math.max(res, largestRectangleArea(curHeights));
    prev = curHeights;
  }
  return res;
};

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
  let fun = maximalRectangle;
  let params = [
    //[1, 1, 1, 0]
    // [
    //   ["1", "0", "1", "0", "0"],
    //   ["1", "0", "1", "1", "1"],
    //   ["1", "1", "1", "1", "1"],
    //   ["1", "0", "0", "1", "0"],
    // ],
    // ["011111101"],
    [
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
