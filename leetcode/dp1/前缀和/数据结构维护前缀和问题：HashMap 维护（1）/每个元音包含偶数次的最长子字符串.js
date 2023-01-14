/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  let len = s.length;
  if (len === 0) {
    return 0;
  }
  let map = {
    a: 1,
    e: 10,
    i: 100,
    o: 1000,
    u: 10000,
  };
  let countMap = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  let sum = 0;
  let sumMap = new Map();
  sumMap.set(0, -1);
  let res = 0;
  for (let i = 0; i < len; i++) {
    let cur = s[i];
    if (map[cur]) {
      sum += (countMap[cur] % 2 === 0 ? 1 : -1) * map[cur];
      countMap[cur]++;
    }
    // console.log(`sumMap`, sumMap);
    if (sumMap.has(sum)) {
      res = Math.max(res, i - sumMap.get(sum));
    } else {
      sumMap.set(sum, i);
    }
  }
  return res;
};

function test() {
  let fun = findTheLongestSubstring;
  let params = [
    //[1, 1, 1, 0]
    // "eleetminicoworoep",
    // "leetcodeisgreat",
    "bcbcbc",
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
