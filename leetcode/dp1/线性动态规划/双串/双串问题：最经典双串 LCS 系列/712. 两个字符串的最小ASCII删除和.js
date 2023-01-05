/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let mLen = s1.length;
  let nLen = s2.length;
  let dp = [];
  let sum2 = 0;
  let res2 = [sum2];
  for (let i = 0; i < s2.length; i++) {
    sum2 += s2.charCodeAt(i);
    res2.push(sum2);
  }
  dp[0] = res2;

  let sum1 = 0;
  for (let i = 1; i <= mLen; i++) {
    let cur1 = s1.charCodeAt(i - 1);
    sum1 += cur1;
    dp[i] = [sum1];
    let w1 = s1[i - 1];
    for (let j = 1; j <= nLen; j++) {
      let cur2 = s2.charCodeAt(j - 1);
      let w2 = s2[j - 1];
      dp[i][j] = Math.min(
        dp[i - 1][j] + cur1,
        dp[i][j - 1] + cur2,
        dp[i - 1][j - 1] + cur1 + cur2
      );
      if (w1 === w2) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      }
    }
  }
  // console.log(`dp`, dp);
  return dp[mLen][nLen];
};

function test() {
  let fun = minimumDeleteSum;
  let params = [
    //[1, 1, 1, 0]
    // "sea", "eat",
    "delete",
    "leet",
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
