/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  let map = {};
  let l = 0;
  let r = 1;
  const len = p.length;
  map[p[0]] = 1;
  let preCount = 1
  for (; r < len; r++) {
    const cur = p[r]
    const code = cur.charCodeAt() - p[r - 1].charCodeAt();
    if (code === 1 || code === -25) {
      preCount++
    } else {
      preCount = 1
    }
    map[cur] = map[cur] ? Math.max(map[cur], preCount) : preCount
  }
  let res = 0;
  for (let key in map) {
    res += map[key]
  }
  return res

};

function test() {
  let fun = findSubstringInWraproundString;
  let params = [
    // "cac",
    'zab'
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()