/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) { return 0 }
  if (x <= 3) { return 1 }
  let r = Math.ceil(x / 2);
  let l = 1;
  let curRes = 0;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    curRes = mid * mid;
    if (curRes === x) {
      return mid
    } else if (curRes < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return curRes > x ? r : l - 1;
};

function test() {
  let fun = mySqrt;
  let params = [
    120
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()