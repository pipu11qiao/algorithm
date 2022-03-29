/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let first = undefined;
  while (n > 0) {
    let res = n & 1 === 1
    if (first === undefined) {
      first = !!res;
    } else {
      if (!!res !== !first) {
        return false
      }
      first = !first
    }
    n = n >> 1
  }
  return true;
};

function test() {
  let fun = hasAlternatingBits;
  let params = [
    // 5
    11
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()