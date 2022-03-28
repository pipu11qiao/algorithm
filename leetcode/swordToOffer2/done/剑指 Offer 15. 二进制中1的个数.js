/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let c = 0
  for (let i = 1; i <= 32; i++) {
    if (((n >> i) & 1) === 1) {
      c++
    }
  }
  return c
};

function test() {
  let fun = hammingWeight;
  let params = [
    // 11,
    // 128
    4294967293
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()