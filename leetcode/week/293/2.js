/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function (bottom, top, special) {
  special.sort((a, b) => a - b);
  const len = special.length;
  let max = Math.max(special[0] - bottom, top - special[len - 1]);
  let prev = special[0];
  for (let i = 1; i < len; i++) {
    let cur = special[i] - prev - 1
    max = Math.max(cur, max);
    prev = special[i]
  }
  return max
};

function test() {
  let fun = maxConsecutive;
  let params = [
    // 2, 9, [4, 6]
    6, 8, [7, 6, 8]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()