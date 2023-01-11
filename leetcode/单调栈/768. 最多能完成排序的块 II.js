/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let len = arr.length;
  let stack = [];
  for (let i = 0; i < len; i++) {
    let cur = arr[i];
    if (stack.length === 0 || cur >= stack[stack.length - 1]) {
      stack.push(cur);
    } else {
      let max = stack.pop();
      while (stack.length > 0 && stack[stack.length - 1] > cur) {
        stack.pop();
      }
      stack.push(max);
    }
  }
  return stack.length;
};

function test() {
  let fun = maxChunksToSorted;
  let params = [
    //[1, 1, 1, 0]
    // [4, 3, 2, 1, 0],
    // [5,4,3,2,1]
    [2, 1, 3, 4, 4],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
