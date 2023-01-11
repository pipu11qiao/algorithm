/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let stack = [];
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    if (stack.length === 0 || arr[i] <= arr[stack[stack.length - 1]]) {
      stack.push(i);
      continue;
    }
    break;
  }
  if (stack.length === len) {
    return 0;
  }
  let ans = len - stack.length;
  let prev = -1;
  // console.log(`stack`, stack);
  for (let i = 0; i < len; i++) {
    if (arr[i] >= prev) {
      while (stack.length >= 0 && arr[i] > arr[stack[stack.length - 1]]) {
        stack.pop();
      }
      let one = stack.length === 0 ? len : stack[stack.length - 1];
      ans = Math.min(ans, one - i - 1);
      prev = arr[i];
      continue;
    }
    break;
  }
  return ans;
};

function test() {
  let fun = findLengthOfShortestSubarray;
  let params = [
    //[1, 1, 1, 0]
    [1, 2, 3, 3, 10, 1, 3, 3, 5],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
