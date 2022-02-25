/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (str) {
  let res = 0;;
  let len = str.length;
  let s = -1;
  let lastS = -1;
  let e = 0;
  let c = 0;
  for (let i = 0; i < len; i++) {

    if (str[i] === '(') {
      c++
      if (s === -1) {
        s = i;
        e = i;
      }
      if (lastS === -1) {
        lastS = i;
      }


    } else {
      if (c > 0) {
        e = i
      }
      c--
      if (c === 0 && s > -1) {
        lastS = -1;
        const count = e - s + 1 - c
        if (count > res) {
          res = count
        }
      }
      if (c > 0 && i === len - 1) {
        const count = e - lastS + 1 - c
        if (count > res) {
          res = count
        }
      }
      if (c < 0) {
        s = -1
        e = -1
        c = 0
      }
    }
  }
  return res
};
function test() {
  let fun = longestValidParentheses;
  let params = [
    // "(()"
    // ")()())"
    // ''
    // ")()()()(()"
    ")(((((()())()()))()(()))("
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()