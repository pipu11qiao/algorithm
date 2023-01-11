/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  /**
   * dp[i][j] 表示t的前i个字符和s的前i个字符的匹配的数量 i 0~t.length j 0~s.length
   * 初始状态 dp[0][0] = 0 dp[0][j] = 0 dp[i][0] = 0
   * tW = t[i-1]
   * dp[i][j] =  s[j-1]===tw ?  {dp[i-1] 中 小于坐标j的并且匹配的数量和}:0
   * 如果dp[i] 中都是0表示t[i-1]在s中无法被匹配 不用继续匹配了
   */
  let mLen = t.length;
  let nLen = s.length;
  if (nLen < mLen) {
    return 0;
  }
  let dp = [];
  dp[0] = new Array(nLen + 1).fill(0);
  for (let i = 1; i <= mLen; i++) {
    dp[i] = new Array(nLen + 1).fill(0);
    let hasMath = false;
    let tW = t[i - 1];
    let sum = 0;
    for (let j = 0; j <= nLen; j++) {
      let sW = s[j - 1];
      if (sW === tW && j >= i) {
        dp[i][j] = i === 1 ? 1 : sum;
        hasMath = true;
      }
      if (dp[i - 1][j] > 0) {
        sum += dp[i - 1][j];
      }
    }
    if (!hasMath) {
      return 0;
    }
  }
  // console.log(`dp`, dp);
  return dp[mLen].reduce((sum, cur) => sum + cur, 0);
};

function test() {
  let fun = numDistinct;
  let params = [
    //[1, 1, 1, 0]
    // "babgbag", "bag",
    "rabbbit",  "rabbit"
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
