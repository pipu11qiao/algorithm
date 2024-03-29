/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let mLen = p.length;
  let nLen = s.length;
  /**
   * dp[i][j] 表示s的前i个字符与p的前j的字符的是否匹配， 值为0 不匹配 1 匹配
   * 初始状态 dp[0][0] = 1 dp[0][j] = 0(j>1)
   * dp[i][j] 如果s[i] 是* dp[i][j] = dp[i-1][j-1] || dp[i-1][j] || dp[i][j-1]
   *          如果s[i] 是?或者s[i]===p[j] dp[i][j] = dp[i-1][j-1]
   *          其他   dp[i][j] = 0
   *
   */
  dp = [];
  dp[0] = new Array(nLen + 1).fill(0);
  dp[0][0] = 1;
  for (let i = 1; i <= mLen; i++) {
    dp[i] = new Array(nLen + 1).fill(0);
    let pW = p[i - 1];
    if (pW === "*") {
      dp[i][0] = dp[i - 1][0];
    }
    for (let j = 1; j <= nLen; j++) {
      let sW = s[j - 1];
      if (pW === "*") {
        dp[i][j] = dp[i - 1][j - 1] || dp[i - 1][j] || dp[i][j - 1];
      } else if (pW === "?" || pW === sW) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  // console.log(`dp`, dp);
  return !!dp[mLen][nLen];
};

function test() {
  let fun = isMatch;
  let params = [
    //[1, 1, 1, 0]
    // "aa", "a",
    // "aa",
    // "*",
    // "cb",
    // "?a",
    // "adceb",
    // "*a*b",
    "acdcb",
    "a*c?b",
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
