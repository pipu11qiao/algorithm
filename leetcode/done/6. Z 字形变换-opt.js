/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) { return s }
  let cLen = numRows + (numRows - 2);
  let len = s.length;
  let cTimes = Math.floor(len / cLen);
  let cMod = len % cLen;
  let prev = 0;
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    let item = {
      s: prev,
      c: 0,
    }
    let count = cTimes
    if (i === 0) {
      count = cTimes + (cMod > 0 ? 1 : 0);
      item.l = count
    } else {
      count = cTimes * 2 + (cMod > i ? 1 : 0) + (cMod > numRows && (cMod > cLen - i) ? 1 : 0)
      item.l = count
    }
    prev = prev + count;
    arr.push(item);
  }
  let strArr = s.split('');
  for (let i = 0; i < len; i++) {
    // index
    let mod = i % cLen;
    let rowNum = mod < numRows ? mod : numRows - (mod % numRows) - 2;
    let index = arr[rowNum].s + arr[rowNum].c
    strArr[index] = s[i];
    arr[rowNum].c++;
  }
  return strArr.join('')
};
function test() {
  let fun = convert;
  let params = [
    // "PAYPALISHIRING", 3
    "PAYPALISHIRING", 4
    // "PAYPALISHIRI", 4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()