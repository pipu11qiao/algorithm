/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (str) {
  let res = 0;;
  let len = str.length;
  let dp = {

  };
  let c = 0;
  for (let i = 0; i < len; i++) {

    if (str[i] === '(') {
      c++
      dp[i] = null
    } else {
      c--
      if (c < 0) {
        c = 0
        dp[i] = null
      } else {
        let prevObj = dp[i - 1];
        let g = null;
        if (prevObj) {
          g = [prevObj[0] - 1, i]
        } else {
          g = [i - 1, i]
        }
        if (g[0] - 1 >= 0 && dp[g[0] - 1]) {
          g = [dp[g[0] - 1][0], i]
        }
        res = Math.max(g[1] - g[0] + 1, res)
        dp[i] = g
      }
    }
  };
  // console.log(`dp`, dp);
  return res
}
function test() {
  let fun = longestValidParentheses;
  let params = [
    // "(()"
    // ")()())"
    // ''
    // ")()()()(()"
    ")(((((()())()()))()(()))("
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()