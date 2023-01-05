/**
 * @param {string} s
 * @return {number}
 */
let okMap = {};
for (let i = 0; i < 26; i++) {
  okMap[i + 1] = 1
}

var numDecodings = function (s) {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === '0' && !(s[i - 1] === '1' || s[i - 1] === '2')) {
      return 0
    }
  }
  let dp1 = 1; //i-1
  let dp2 = 0; //i-2
  for (let i = 1; i < len; i++) {
    let res = 0;
    let s0 = s[i];
    let s1 = s.slice(i - 1, i + 1);
    if (okMap[s0]) {
      res += dp1;
    }
    if (okMap[s1]) {
      res += dp2;
    }
    if (i === 1) {
      if (okMap[s0] && okMap[s1]) {
        res = 2;
      }
      if (s0 === '0') {
        res = 1
      }
    }

    dp2 = dp1;
    dp1 = res;
  }
  return dp1;
};
function test() {
  let fun = numDecodings;
  let params = [
    // '22'
    // '221'
    '2011'
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
