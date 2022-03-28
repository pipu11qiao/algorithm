/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let baseArr = [0, 1];
  let num = 2;
  for (let i = 2; i <= n; i++) {
    let prevIndex = i % num;
    baseArr.push(baseArr[prevIndex] + 1)
    if (i >= num * 2 - 1) {
      num *= 2
    }
  }
  return baseArr.slice(0, n + 1)
};

function test() {
  let fun = countBits;
  let params = [
    5
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()