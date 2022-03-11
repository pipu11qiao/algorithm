/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const dp = {}; // 键是下标，值 如果是有效括号开始的下标，不是-1
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    dp[i] = -1;
    if (letter === ')') {
      let curStart = -1;
      let start = dp[i - 1]
      let isOk = false
      if (start === -1) {
        if (s[i - 1] === '(') {
          start = i - 1
          isOk = true
        }
      } else {
        if (s[start - 1] === '(') {
          start = start - 1
          isOk = true
        }
      }
      if (isOk) {
        while (start > 0) {
          curStart = start
          start = dp[start - 1];
        }
      }
      if (curStart > 0) {
        res = Math.max(res, i - curStart + 1)
      }
      dp[i] = curStart
    }
  }
  console.log(`dp`, dp);
  return res
};

function test() {
  let fun = longestValidParentheses;
  let params = [
    "()"
    // "(()"
    // ")()())"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()