/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let arr = [];
  let maxNum = new Array(n).fill('9').join('');
  for (let i = 1; i <= maxNum; i++) {
    arr.push(i)
  }
  return arr
};

function test() {
  let fun = printNumbers;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()