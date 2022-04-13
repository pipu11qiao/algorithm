/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, m) {
  let arr = [];
  if (m === 0) {
    return 1
  }
  n = Math.abs(m);
  let isNeg = m < 0;
  while (n > 1) {
    let left = Math.floor(n / 2);
    arr.push(left);
    n = n - left;
  }
  arr.push(n)
  let res = 1;
  let prevRes = x;
  for (let i = arr.length - 1; i >= 0; i--) {
    let cur = arr[i];
    if (cur === 1) {
      res *= x
    } else {
      let curRes = prevRes * prevRes;
      let prevNum = arr[i + 1];
      if (cur === 2 * prevNum + 1) {
        curRes *= x
      } else if (cur === 2 * prevNum - 1) {
        curRes /= x
      }
      res *= curRes
      prevRes = curRes
    }
  }
  return isNeg ? 1 / res : res
};

function test() {
  new Array(12).fill(0).forEach((item, index) => {
    // const num = index - 10
    const num = index + 1;
    const res = myPow(2, num)
    // console.log(`num`, num);
    console.log(num, res);
  })

}
test()