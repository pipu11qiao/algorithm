/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }
  let allArr = [];
  for (let i = 0; i < numRows; i++) {
    allArr.push([]);
  }
  let len = s.length;
  let cLen = numRows + (numRows - 2);
  for (let i = 0; i < len; i++) {
    let mod = i % cLen;
    let rowNum = mod < numRows ? mod : (mod - numRows + 1);
    allArr[rowNum].push(s[i])
  }
  return allArr.reduce((s, arr) => s + arr.join(''), '');
};
function test() {
  let fun = convert;
  let params = [
    // "PAYPALISHIRING", 3
    "PAYPALISHIRING", 4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()