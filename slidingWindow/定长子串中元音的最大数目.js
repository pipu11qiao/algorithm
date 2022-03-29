/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const map = { a: 1, e: 1, i: 1, o: 1, u: 1 };
var maxVowels = function (s, k) {
  debugger
  const len = s.length;
  let count = 0;
  let i = 0;
  for (; i < k; i++) {
    const cur = s[i];
    if (map[cur]) {
      count++
    }
  }
  if (count === k) {
    return k
  }
  let res = count;
  for (; i < len; i++) {
    const cur = s[i];
    if (map[cur]) {
      count++
    }
    const prev = i - k;
    if (map[s[prev]]) {
      count--
    }
    if (count === k) {
      return k
    }
    res = Math.max(res, count);
  }
  return res
};

function test() {
  let fun = maxVowels;
  let params = [
    // "abciiidef", 3
    // "aeiou", 2
    // "leetcode", 3
    // "rhythms", 4
    "tryhard", 4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()