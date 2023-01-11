/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let stack = [Number.POSITIVE_INFINITY];
  let len = arr.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let cur = arr[i];
    if (cur <= stack[stack.length - 1]) {
      stack.push(cur);
    } else {
      while (cur > stack[stack.length - 1]) {
        let pop = stack.pop();
        if (stack[stack.length - 1] > cur) {
          res += pop * cur;
        } else {
          res += pop * stack[stack.length - 1];
        }
      }
      stack.push(cur);
    }
    // console.log(`stack`, stack);
  }
  while (stack.length > 2) {
    res += stack.pop() * stack[stack.length - 1];
  }
  return res;
};

function test() {
  let fun = mctFromLeafValues;
  let params = [
    //[1, 1, 1, 0]
    [6, 2, 4],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
