/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = {};
  const len = s.length
  for (let i = 0; i < len; i++) {
    let curNum = s[i];
    let prevNum = s[i - 1];
    dp[i] = 0;
    if (curNum === '0') {
      if (prevNum !== '1' && prevNum !== '2') {
        return 0
      } else {
        dp[i] += dp[i - 2] || 1;
      }
    } else {
      dp[i] += dp[i - 1] || 1;
      if (prevNum === '1' || (prevNum === '2' && (
        curNum !== '7' && curNum !== '8' && curNum !== '9'
      ))) {
        dp[i] += dp[i - 2] || 1
      }
    }
  }
  return dp[len - 1]
};

function test() {
  let fun = numDecodings;
  let params = [
    // '12'
    // '226'
    '0'
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()