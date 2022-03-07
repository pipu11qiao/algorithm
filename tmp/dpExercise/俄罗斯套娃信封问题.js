/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  let res = 0;
  let dp = {};
  for (let i = 0; i < envelopes.length; i++) {
    let cur = envelopes[i];
    let max = 1;
    for (let j = 0; j < i; j++) {
      let prev = envelopes[j];
      if (cur[1] > prev[1] && cur[0] > prev[0]) {
        max = Math.max(max, dp[j] + 1)
      }
    }
    res = Math.max(res, max)
    dp[i] = max
  }
  return res
};

function test() {
  let fun = maxEnvelopes;
  let params = [
    // [[5, 4], [6, 4], [6, 7], [2, 3]]
    [[1,1],[1,1],[1,1]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()