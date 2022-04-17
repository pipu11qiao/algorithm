/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let min = prices[0];
  let len = prices.length
  for (let i = 1; i < len; i++) {
    if (prices[i] < min) {
      min = prices[i]
    }
    res = Math.max(res, prices[i] - min);
  }
  return res
}

function test() {
  let fun = maxProfit;
  let params = [
    [7, 1, 5, 3, 6, 4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
