/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 计算5的数量
  let num = n;
  let count = 0
  while (num >= 5) {
    num = Math.floor(num / 5);
    count += num
  }
  return count;
};

function test() {
  let fun = trailingZeroes;
  let params = [
    30
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
  // const ans = multi(25)
  // console.log(`ans`, ans);
}
function multi(n) {
  if (n === 1) {
    return 1
  }
  return n * multi(n - 1)

}
test()