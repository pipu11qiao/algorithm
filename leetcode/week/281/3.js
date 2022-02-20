/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
function getKeys(map) {
  let arr = [];
  for (let key in map) {
    if (map[key] > 0) {
      arr.push(key)
    }
  }
  return arr
}
var repeatLimitedString = function (s, repeatLimit) {
  let map = {};
  let len = s.length;
  for (let i = 0; i < len; i++) {
    let letter = s[i]
    if (map[letter] === undefined) {
      map[letter] = 0;
    }
    map[letter]++
  }
  let res = '';
  let notOkLetter = '';
  while (true) {
    const keys = getKeys(map).sort((a, b) => a > b ? -1 : 1);
    let curLetter = keys[0];
    if (keys.length === 0 || (keys.length === 1 && curLetter === notOkLetter)) {
      break
    }
    if (curLetter === notOkLetter) {
      notOkLetter = ''
      curLetter = keys[1]
    }
    let curLetterCount = map[curLetter];
    let useCount = Math.min(repeatLimit, curLetterCount);
    if (useCount === repeatLimit) {
      notOkLetter = curLetter
    }
    for (let i = 0; i < useCount; i++) {
      res += curLetter
    }
    map[curLetter] -= useCount;
  }
  return res

};
function test() {
  let fun = repeatLimitedString;
  let params = [
    [1, 1, 1, 0]
  ];



  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()