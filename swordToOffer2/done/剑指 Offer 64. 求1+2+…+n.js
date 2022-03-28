/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  return (Math.pow(n, 2) + n) >> 1
};

function test() {
  let fun = sumNums;
  let params = [
    // 3
    9
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()