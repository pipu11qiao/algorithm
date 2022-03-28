/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  if (len < 2) {
    return 0
  }
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < len; i++) {
    const curNum = prices[i];
    if (curNum > min) {
      max = Math.max(curNum - min, max);
    } else if (curNum < min) {
      min = curNum
    }
  }
  return max
};

function test() {
  let fun = maxProfit;
  let params = [
    [7, 1, 5, 3, 6, 4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()