/**
 * @param {number} n
 * @return {string[]}
 */
function check(str, n) {
  let len = str.length;
  let leftLen = str.match(/\(/g).length;
  return leftLen <= n && leftLen >= len - leftLen
}
let baseArr = ['(', ')']
var generateParenthesis = function (m) {
  let arr = ['('];
  let n = 2 * m - 1;
  while (n > 1) {
    let tmp = [];
    arr.forEach(item => {
      baseArr.forEach(l => {
        if (check(item + l, m)) {
          tmp.push(item + l)
        }
      })
    })
    arr = tmp;
    n--
  }
  return arr.map(item => item + ')');
};

function test() {
  let fun = generateParenthesis;
  let params = [
    3
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()