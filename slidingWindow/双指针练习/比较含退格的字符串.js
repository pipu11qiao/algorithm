/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function getStr(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const curLetter = s[i];
    if (curLetter === '#') {
      stack.pop()
    } else {
      stack.push(curLetter);
    }
  }
  return stack.join('')
}
var backspaceCompare = function (s, t) {
  return getStr(s) === getStr(t)
};

function test() {
  let fun = backspaceCompare;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()