/**
 * @param {string} pressedKeys
 * @return {number}
 */
let map = {};
for (let i = 2; i <= 9; i++) {
  let isFour = i === 7 || i === 9;
  map[i] = isFour ? 4 : 3;
}
const baseNum = Math.pow(10, 9) + 7
var countTexts = function (pressedKeys) {
  const dp = {};
  const len = pressedKeys.length;

  for (let i = 0; i < len; i++) {
    const curNum = pressedKeys[i];
    let max = map[curNum];
    let curRes = 0;
    let j = 0;
    while (j < max) {
      const prev = pressedKeys[i - j];
      if (prev === curNum) {
        curRes += i - j === 0 ? 1 : dp[i - j - 1];
      } else {
        break
      }
      j++
    }
    dp[i] = curRes % baseNum
  }
  return dp[len - 1] % baseNum
};

function test() {
  let fun = countTexts;
  let params = [
    // "22233"
    // "22299999"
    // "222222222222222222222222222222222222"
    // '444444444444444444444444444444448888888888888888999999999999'

    // "444444444444444444444444444444448888888888888888999999999999333333333333333366666666666666662222222222222222666666666666666633333333333333338888888888888888222222222222222244444444444444448888888888888222222222222222288888888888889999999999999999333333333444444664"
    "444444444444444444444444444444448888888888888888999999999999333333333333333366666666666666662222222222222222666666666666666633333333333333338888888888888888222222222222222244444444444444448888888888888222222222222222288888888888889999999999999999333333333444444664"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()