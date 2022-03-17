/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 最长公共子序列
function getMaxSub(origin, target) {
  const oLen = origin.length;
  const tLen = target.length;
  const dp = new Array(oLen + 1).fill(0).map(_ => new Array(tLen + 1).fill(0));
  for (let i = 1; i <= oLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      let curRes = 0;
      if (origin[i - 1] === target[j - 1]) {
        curRes = dp[i - 1][j - 1] + 1;
      } else {
        curRes = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
      dp[i][j] = curRes;
    }
  }
  return dp[oLen][tLen]
}

var minDistance = function (word1, word2) {
  let maxCount = getMaxSub(word1, word2);
  console.log(`maxCount`, maxCount);
  return word1.length + word2.length - (2 * maxCount)
};

function test() {
  let fun = minDistance;
  let params = [
    // "sea", "eat"
    "leetcode", "etco"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()