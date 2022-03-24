/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {

};

function test() {
  let fun = countDigitOne;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()