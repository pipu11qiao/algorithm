/**
 * @param {string} str
 * @return {number}
 */
const MAX = Math.pow(2, 31) - 1;
const MIN = -Math.pow(2, 31);
let map = { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1 };
var strToInt = function (str) {
  let numStr = '';
  let flagStr = '';
  str = str.trim();
  if (str.length === 0) {
    return 0
  }
  debugger;
  for (let i = 0; i < str.length; i++) {
    const curLetter = str[i];
    if (curLetter === '-' || curLetter === '+') {
      if (numStr || flagStr) {
        break
      }
      flagStr = curLetter
    } else if (map[curLetter]) {
      numStr += curLetter
    } else {
      break
    }
  }
  if (numStr) {
    const number = -(-(flagStr + numStr))
    if (number > MAX) {
      return MAX
    } else if (number < MIN) {
      return MIN
    } else {
      return number
    }
  }
  return 0

};

function test() {
  let fun = strToInt;
  let params = [
    // "4193 with words"
    "-91283472332"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()