/**
 * @param {number[]} data
 * @return {boolean}
 */
function toString(number) {
  if (number >= 128) {
    return number.toString(2)
  } else {
    let str = '00000000' + number.toString(2);
    return str.slice(str.length - 8)

  }

}
const oneReg = /^1+/;
var validUtf8 = function (data) {

  for (let i = 0; i < data.length; i++) {
    let number = data[i];
    let res = oneReg.exec(toString(number))
    let n = 0;
    if (res) {
      n = res[0].length;
    }
    if (n === 1 || n >= 5) {
      return false;
    }
    n = n - 1;
    while (n > 0) {
      let num = data[i + 1];
      if (num === undefined || num < 128 || num >= 192) {
        return false
      }
      i++
      n--
    }
  }
  return true
};

function test() {
  let fun = validUtf8;
  let params = [
    // [197, 130, 1]
    // [235, 140, 4]
    [250, 145, 145, 145, 145]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
console.log(`toString(145)`, toString(145));