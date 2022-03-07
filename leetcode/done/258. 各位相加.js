/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    const numStr = `${num}`;
    num = numStr.split('').reduce((s, i) => s - (-i), 0);
  }
  return num
};


function test() {
  let fun = addDigits;
  let params = [
    // 38
    // 0
    999
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()