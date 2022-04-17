/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = Math.ceil(num / 2) + 1;
  if (num === 1) {
    return true
  }
  while (left + 1 !== right) {
    const mid = Math.floor((right + left) / 2);
    const cur = mid * mid;
    if (cur === num) {
      return true
    } else if (cur > num) {
      right = mid
    } else {
      left = mid
    }
  }
  return false
};

function test() {
  let fun = isPerfectSquare;
  let params = [
    4
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()