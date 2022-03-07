/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  let str = '';
  let isNegative = num < 0;
  num = Math.abs(num);
  while (num >= 7) {
    str = num % 7 + str;
    num = Math.floor(num / 7)
  }
  str = (isNegative ? '-' : '') + num + str;
  return str
};

function test() {
  let fun = convertToBase7;
  let params = [
    // 100
    // -7
    49
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()