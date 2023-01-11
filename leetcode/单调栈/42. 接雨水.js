/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let len = height.length;
  let stack = []; // 单调递减的栈
  let res = 0;
  for (let i = 0; i < len; i++) {
    const cur = height[i];
    while (stack.length > 0 && cur >= height[stack[stack.length - 1]]) {
      let bottomIndex = stack.pop();
      if (stack.length > 0) {
        let leftIndex = stack[stack.length - 1];
        const curHeight =
          Math.min(height[leftIndex], cur) - height[bottomIndex];
        res += curHeight * (i - leftIndex - 1);
      }
    }
    if (stack.length === 0 || cur !== height[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }
  return res;
};

function test() {
  let fun = trap;
  let params = [
    //[1, 1, 1, 0]
    // [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
    // [4, 2, 0, 3, 2, 5],
    [5, 2, 1, 2, 1, 5],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
