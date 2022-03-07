/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    return len1 > len2 ? len1 : len2
  } else {
    return a.indexOf(b) === -1 ? len1 : -1
  }
};

function test() {
  let fun = findLUSlength;
  let params = [
    "aba", "cdc"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()