/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  let count = Math.floor(n / 3);
  let remain = n % 3;
  let init = 1;
  if (remain === 1) {
    init = 4;
    count--;
  }
  if (remain === 0) {
    remain = 1;
  }
  return Math.pow(3, count) * remain * init;
};

function test() {
  let fun = integerBreak;
  let params = [
    //[1, 1, 1, 0]
    // 4
    // 5
    // 6,
    // 7
    8,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
