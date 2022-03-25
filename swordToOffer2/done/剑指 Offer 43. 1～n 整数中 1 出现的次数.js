/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  const numStr = `${n}`;
  const len = numStr.length;
  if (len === 1) {
    return 1
  } else {
    let res = 0;
    for (let i = 0; i < len; i++) {
      const curNum = numStr[i];
      if (i === 0) {
        // 第一位是1
        if (curNum > 1) {
          res += Math.pow(10, len - 1)
        } else {
          res += -(-numStr.slice(1)) + 1
        }
      } else {
        // 第i位是1
        // 前i位是固定的
        for (let j = 0; j < i; j++) {
          const curMaxNum = numStr[j];
          res += (-(-curMaxNum)) * Math.pow(10, len - 2 - j);
        }
        if (curNum > 1) {
          res += Math.pow(10, len - i - 1)
        } else if (curNum === '1') {
          res += (i < len - 1 ? -(-numStr.slice(i + 1)) : 0) + 1
        }
      }
    }
    return res
  }
};

function test() {
  let fun = countDigitOne;
  let params = [
    // 234
    11
    // 12,
    // 23
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()