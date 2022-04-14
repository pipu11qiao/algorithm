/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const map = {};
new Array(26).fill(0).forEach((_, index) => { map[String.fromCharCode(97 + index)] = index });
var numberOfLines = function (widths, s) {
  // debugger
  let sum = 0;
  let rowCount = 1;
  for (let i = 0; i < s.length; i++) {
    let curNum = widths[map[s[i]]]
    if (sum + curNum <= 100) {
      sum += curNum
    } else {
      sum = curNum
      rowCount++
    }
  }
  return [rowCount, sum]

};

function test() {
  let fun = numberOfLines;
  let params = [
    [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    "bbbcccdddaaa"

    // [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    // "abcdefghijklmnopqrstuvwxyz"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()