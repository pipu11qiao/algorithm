/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = {};
  let stack = []; // 单调递减的栈

  for (let i = 0; i < nums2.length; i++) {
    let cur = nums2[i];
    // 当前元素比栈顶的元素大
    while (stack.length > 0 && cur > stack[stack.length - 1]) {
      let prev = stack.pop();
      map[prev] = cur;
    }

    stack.push(cur);
  }
  return nums1.map((item) => map[item] || -1);
};

function test() {
  let fun = nextGreaterElement;
  let params = [
    //[1, 1, 1, 0]
    [4, 1, 2],
    [1, 3, 4, 2],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
