/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
function getCost(c1, c2) {
  return Math.abs(c1.charCodeAt() - c2.charCodeAt());
}
var equalSubstring = function (s, t, maxCost) {
  let l = 0;
  let leaveCost = maxCost;
  const len = s.length;
  let res = 0;
  debugger;
  for (let r = 0; r < len; r++) {
    const curCost = getCost(s[r], t[r]);
    if (curCost <= leaveCost) {
      leaveCost -= curCost
    } else {
      res = Math.max(res, r - l);
      if (curCost > maxCost) {
        l = r + 1;
        leaveCost = maxCost
      } else {
        while (leaveCost < curCost) {
          leaveCost += getCost(s[l], t[l]);
          l++
        }
        leaveCost -= curCost
      }
    }
  }
  res = Math.max(res, s.length - l);
  return res
};

function test() {
  let fun = equalSubstring;
  let params = [
    // "abcd", "bcdf", 3
    // "abcd", "cdef", 3
    "abcd", "acde", 0
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()