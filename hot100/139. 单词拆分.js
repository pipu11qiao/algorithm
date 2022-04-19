/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const map = {};
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < wordDict.length; i++) {
    const curWord = wordDict[i]
    map[curWord] = 1;
    min = Math.min(curWord.length, min)
    max = Math.max(curWord.length, max)
  }

  function check(index) {
    if (index === -1) {
      return true
    }
    for (let l = index - min + 1; l >= index - max + 1 && l >= 0; l--) {
      const tmpWord = s.slice(l, index + 1);
      if (map[tmpWord] && check(l - 1)) {
        return true
      }
    }
    return false
  }
  return check(s.length - 1)
};
// @lc code=end

function test() {
  let fun = wordBreak;
  let params = [
    "leetcode",
    ["leet", "code"]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
