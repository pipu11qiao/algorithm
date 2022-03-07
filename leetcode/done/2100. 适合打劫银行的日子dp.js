/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */

var goodDaysToRobBank = function (security, time) {
  let dpLeft = [1];
  let dpRight = [];
  dpRight[security.length - 1] = 1
  for (let i = 1; i < security.length; i++) {
    dpLeft[i] = security[i] <= security[i - 1] ? dpLeft[i - 1] + 1 : 1;
    let end = security.length - 1 - i;
    dpRight[end] = security[end] <= security[end + 1] ? dpRight[end + 1] + 1 : 1
  }
  let res = [];
  for (let i = 0; i < security.length; i++) {
    if (dpLeft[i] > time && dpRight[i] > time) {
      res.push(i)
    }
  }
  return res
};

function test() {
  let fun = goodDaysToRobBank;
  let params = [
    [5, 3, 3, 3, 5, 6, 2], 2
    // [1, 2, 5, 4, 1, 0, 2, 4, 5, 3, 1, 2, 4, 3, 2, 4, 8], 2
    // [2, 0, 5, 3, 4], 1
  ];
  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()