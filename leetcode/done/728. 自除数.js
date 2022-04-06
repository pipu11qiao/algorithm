/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function checkNum(number) {
  const numberStr = `${number}`;
  for (let i = 0; i < numberStr.length; i++) {
    if (numberStr[i] === '0' || number % numberStr[i] !== 0) {
      return false
    }
  }
  return true
}
var selfDividingNumbers = function (left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    if (checkNum(i)) {
      res.push(i)
    }
  }
  return res
};

function test() {
  let fun = selfDividingNumbers;
  let params = [
    // 1, 22
    47, 85
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()