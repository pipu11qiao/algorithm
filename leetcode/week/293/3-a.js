/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  let max = 1;
  let numberMax = Math.max.apply(Math, candidates);
  for (let i = 0; i < 24; i++) {
    let curMax = 0;
    let curBit = 1 << i;
    if (curBit > numberMax) {
      break
    }
    candidates.forEach(item => {
      if ((item & curBit) > 0) {
        curMax++
      }
    })
    max = Math.max(curMax, max)
  }
  return max
};

function test() {
  let fun = largestCombination;
  let params = [
    [16, 17, 71, 62, 12, 24, 14]
    // [8, 8]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()