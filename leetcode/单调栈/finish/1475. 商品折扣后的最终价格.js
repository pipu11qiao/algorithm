/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stack = []; // 单调递增的栈

  let res = [...prices];
  let curLen = prices.length;
  for (let i = 0; i < curLen; i++) {
    const cur = prices[i];
    let len = 0;
    while ((len = stack.length) > 0 && cur <= prices[stack[len - 1]]) {
      let prevIndex = stack.pop();
      res[prevIndex] = prices[prevIndex] - cur;
    }
    stack.push(i);
  }
  return res;
};

function test() {
  let fun = finalPrices;
  let params = [
    //[1, 1, 1, 0]
    // [8, 4, 6, 2, 3],
    [10, 1, 1, 6],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
