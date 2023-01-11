/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let arr = [...nums, ...nums];
  let stack = [];
  let len = nums.length;
  let res = new Array(len * 2).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (stack.length > 0) {
      while (cur > arr[stack[stack.length - 1]]) {
        let prevIndex = stack.pop();
        res[prevIndex] = cur;
      }
    }
    // console.log(`stack`, stack);
    stack.push(i);
  }
  return res.slice(0, len);
};

function test() {
  let fun = nextGreaterElements;
  let params = [
    //[1, 1, 1, 0]
    // [1, 2, 1],
    [1, 2, 3, 4, 3],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
