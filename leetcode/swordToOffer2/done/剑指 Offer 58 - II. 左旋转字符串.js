/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const len = s.length;
  if (len === n) {
    return s
  } else {
    return s.slice(n) + s.slice(0, n)
  }

};


function test() {
  let fun = reverseLeftWords;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()