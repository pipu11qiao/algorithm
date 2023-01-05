/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
let map = {};
function dp(k, n) {
  let key = n * 100 + k;
  if (!map[key]) {
    let ans = 0;
    if (n === 0) {
      ans = 0;
    } else if (k === 1) {
      ans = n;
    } else {
      let lo = 1;
      let hi = n;
      while (lo + 1 < hi) {
        let x = Math.floor((lo + hi) / 2);
        let t1 = dp(k - 1, x - 1);
        let t2 = dp(k, n - x);

        if (t1 < t2) {
          lo = x;
        } else if (t1 > t2) {
          hi = x;
        } else {
          lo = hi = x;
        }
      }
      ans =
        1 +
        Math.min(
          Math.max(dp(k - 1, lo - 1), dp(k, n - lo)),
          Math.max(dp(k - 1, hi - 1), dp(k, n - hi))
        );
    }

    map[key] = ans;
  }
  return map[key];
}
var superEggDrop = function (k, n) {
  return dp(k, n);
};

function test() {
  let fun = superEggDrop;
  let params = [
    //[1, 1, 1, 0]
    // 1, 2,
    // 2, 2,
    // 2, 16,
    // 2, 14,
    // 4, 24,
    // 4, 14,
    // 5, 14,
    10, 8100,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
