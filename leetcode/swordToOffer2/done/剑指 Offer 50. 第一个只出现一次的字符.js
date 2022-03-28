/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const map = {};
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0
    }
    map[s[i]]++
  }
  for (let i = 0; i < len; i++) {
    if (map[s[i]] === 1) {
      return s[i]
    }
  }
  return ' '
};

function test() {
  let fun = firstUniqChar;
  let params = [
    "abaccdeff"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
