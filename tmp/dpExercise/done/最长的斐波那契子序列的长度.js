/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
};
function test() {
  let fun = lenLongestFibSubseq;
  let params = [
    // [1, 2, 3, 4, 5, 6, 7, 8]
    // [1, 3, 7, 11, 12, 14, 18]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()