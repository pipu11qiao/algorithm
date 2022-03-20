/**
 * @param {string} s
 * @return {boolean}
 */
// type 1表示判断正整数
let numberMap = {};
new Array(10).fill(0).forEach((_, i) => { numberMap[i] = 1 })
function checkNumber(s, start, type) {
  s = s.trim()
  start = start || 0
  type = type || 0
  const len = s.length;
  let hasPoint = false;
  let hasSymbol = false;
  let hasNumber = false;
  let hasPointNumber = false;
  for (let i = start; i < len; i++) {
    const curLetter = s[i];
    if (curLetter === ' ') {
      return false;
    } else if (numberMap[curLetter]) {
      if (!hasNumber) {
        hasNumber = true
      }
      if (hasPoint && !hasPointNumber) {
        hasPointNumber = true
      }
      continue
    } else if (curLetter === 'e' || curLetter === 'E') {
      if (type === 1) {
        return false;
      }
      if (!hasNumber) {
        return false
      }
      return checkNumber(s, i + 1, 1)
    } else if (curLetter === '+' || curLetter === '-') {
      if (hasSymbol || hasPoint || hasNumber) {
        return false;
      }
      hasSymbol = true
    } else if (curLetter === '.') {
      if (type === 1) {
        return false;
      }
      if (hasPoint) {
        return false;
      }
      hasPoint = true
    } else {
      return false;
    }
  }
  if (hasPoint) {
    return hasPointNumber || hasNumber
  }
  return hasNumber
}
var isNumber = function (s) {
  return checkNumber(s)
};

function test() {
  let fun = isNumber;
  let params = [
    // "+100"
    // "5e2"
    // "-123", 
    // "3.1416",
    //  "-1E-16",
    // "0123"
    // "12e",
    // "1a3.14",
    //  "1.2.3", 
    //  "+-5",
    // "12e+5.4"
    // "3."
    ". 1"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()