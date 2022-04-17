/**
 * @param {string} s
 * @return {boolean}
 */
const reg = /[\(\[\{]/;
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const curLetter = s[i];
    if (reg.test(curLetter)) {
      stack.push(curLetter)
    } else {
      const leftLetter = stack.pop();
      switch (curLetter) {
        case ')':
          if (leftLetter !== '(') {
            return false
          }
          break
        case ']':
          if (leftLetter !== '[') {
            return false
          }
          break
        case '}':
          if (leftLetter !== '{') {
            return false
          }
          break
      }
    }
  }
  return stack.length === 0
};

function test() {
  let fun = isValid;
  let params = [
    '()'
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()