/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let pow = 1;
  let baseNum = 2;
  let res = [0];
  if (n >= 1) {
    res.push(1)
  }
  for (let i = 2; i <= n; i++) {
    if (i >= 2 * baseNum) {
      pow++
      baseNum = Math.pow(2, pow)
    }
    res.push(i === baseNum ? 1 : res[i % baseNum] + 1)
  }
  return res
};

function test() {
  let fun = countBits;
  let params = [
    17
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()