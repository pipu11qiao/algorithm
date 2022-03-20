/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  let prev2 = 0;
  let prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const cur = (prev1 + prev2) % 1000000007;
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1
};


function test() {
  let fun = fib;
  let params = [
    // 2
    // 5
    81
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()