/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let n1 = 2;
  let n2 = 1;
  for (let i = 3; i <= n; i++) {
    const cur = n1 + n2;
    n2 = n1
    n1 = cur;
  }
  return n1
};

function test() {
  let fun = climbStairs;
  let params = [
    4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()