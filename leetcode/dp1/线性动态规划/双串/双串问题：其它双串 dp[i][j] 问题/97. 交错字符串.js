/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let mLen = s1.length;
  let nLen = s2.length;
  let kLen = s3.length;
  if (mLen + nLen !== kLen) {
    return false;
  }
  /**
   * dp[i][j]表示s1的前i个字符和s2的j个字符与s3的前[i+j]字符的匹配情况
   * 初始: dp[0][0] = 0
   * 转移: dp[i][j] (s1[i-1] === s3[i+j-1] && dp[i-1][j])||  (s2[j-1] === s3[i+j-1]   && dp[i][j-1])
   */
  let dp = [];
  dp[0] = new Array(nLen + 1).fill(0);
  dp[0][0] = 1;
  for (let i = 1; i <= nLen; i++) {
    if (dp[0][i - 1] && s2[i - 1] === s3[i - 1]) {
      dp[0][i] = 1;
    } else {
      break;
    }
  }
  for (let i = 1; i <= mLen; i++) {
    dp[i] = [dp[i - 1][0] && s1[i - 1] === s3[i - 1] ? 1 : 0];
    for (let j = 1; j <= nLen; j++) {
      dp[i][j] =
        (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) ||
        (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1])
          ? 1
          : 0;
    }
  }
  // console.log(`dp`, dp);
  return dp[mLen][nLen];
};

function test() {
  let fun = isInterleave;
  let params = [
    //[1, 1, 1, 0]
    "aabcc",
    "dbbca",
    "aadbbcbcac",
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
