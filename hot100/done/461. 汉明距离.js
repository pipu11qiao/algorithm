/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let num = x ^ y;
  let count = 0;
  while (num) {
    if (num & 1 === 1) {
      count++
    }
    num >>=1
  }
  return count
};

function test() {
  let fun = hammingDistance;
  let params = [
    1, 4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()