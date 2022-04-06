/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {

};

function test() {
  let fun = findSubstringInWraproundString;
  let params = [
    "cac",
    'zab'
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()