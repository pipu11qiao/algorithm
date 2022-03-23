function getCountOfN(n, prev) {
  let res = 0;
  if (prev === '0') {
    if (n === 1) {
      return 1
    }
    const count = n - 1;
    for (let i = count; i >= 0; i--) {
      res += Math.pow(10, i) * 8 * Math.pow(9, count - i - 1)
    }
  } else if (prev === '1') {
    res = Math.pow(10, n)
  } else {
    const count = n - 1;
    for (let i = count; i >= 0; i--) {
      res += Math.pow(10, i) * Math.pow(9, count - i)
    }
  }
  return res
}
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {

};

function test() {
  let fun = countDigitOne;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
  console.log(getCountOfN(3));
}
test()