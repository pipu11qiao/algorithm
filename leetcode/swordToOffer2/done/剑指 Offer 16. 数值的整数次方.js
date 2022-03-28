/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) {
    return 0
  }
  if (n === 0) {
    return 1

  }
  let map = {
    1: x,
    2: x * x,
    3: x * x * x,
  }
  let absN = Math.abs(n);
  function getMulti(_x, _n) {
    if (map[_n]) {
      return map[_n]
    }
    let left = Math.floor(_n / 3);
    const res = getMulti(_x, left) * getMulti(_x, left) *
      getMulti(_x, _n - 2 * left)
    map[_n] = res;
    return res
  }
  let num = getMulti(x, absN)
  return n > 0 ? num : 1 / num
};

function test() {
  let fun = myPow;
  let params = [
    2, 10
    // 2.1, 3
    // 2, -2
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()