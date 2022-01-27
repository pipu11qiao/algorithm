/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 
  const len = s.length;
  if (len <= 1) {
    return s
  }
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
    dp[i][i] = true;
  }
  let max = 1,
    startI = 0;
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j && i < len - 1; i++) {
      if (s[i] !== s[j]) {
        dp[j][i] = false
      } else {
        if (j - i < 3) {
          dp[j][i] = true
        } else {
          dp[j][i] = dp[j - 1][i + 1];
        }
        if (dp[j][i] && j - i + 1 > max) {
          max = j - i + 1;
          startI = i
        }
      }
    }
  }
  // console.log(`dp`, dp);
  // console.log(`startI, max`, startI, max);
  return s.substring(startI, max + startI)
};

const res = longestPalindrome("cbbd");
console.log(`res`, res);