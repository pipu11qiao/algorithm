/**
 * @param {number[]} slices
 * @return {number}
 */
function baseSelect(slices) {
  const len = slices.length;
  let count = Math.floor((len + 1) / 3);
  const dp = new Array(len + 1).fill(0).map(item => new Array(count + 1).fill(0));
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= count; j++) {
      let cur = Math.max(((dp[i - 2] || [])[j - 1] || 0) + slices[i - 1], ((dp[i - 1] || [])[j] || 0));
      dp[i][j] = cur
    }
  }
  return dp[len][count]
}
var maxSizeSlices = function (slices) {
  const len = slices.length;
  let res1 = baseSelect(slices.slice(1))
  let res2 = baseSelect(slices.slice(0, len - 1))
  return Math.max(res1, res2)

};

function test() {
  let fun = maxSizeSlices;
  let params = [
    [1, 2, 3, 4, 5, 6]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()