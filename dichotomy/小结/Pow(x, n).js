/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, m) {
  let arr = [];
  if (m === 0) {
    return 1
  }
  n = Math.abs(m);
  let isNeg = m < 0;
  while (n > 2) {
    let left = Math.floor(n / 2);
    arr.push(left);
    n = n - left;
  }
  let res = 1;
  let prev = 1;
  debugger
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 2 * arr[i + 1]) {
      res *= prev;
    } else {
      res *= prev * x
    }
  }
  return isNeg ? 1 / res : res
};

function test() {
  let fun = myPow;
  let params = [
    2, 10
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()