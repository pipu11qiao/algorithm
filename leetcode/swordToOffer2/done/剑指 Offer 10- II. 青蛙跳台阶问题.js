/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let prev2 = 1;
  let prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const cur = (prev1 + prev2) % 1000000007;
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1
};


function test() {
  let fun = numWays;
  let params = [
    7
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()