/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
  let onCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 1) {
      onCount++
    }
  }
  if (onCount === 0 || onCount === 1) {
    return 0
  }
  let maxCount = 0;
  let curCount = 0;
  let r = 0;
  let l = 0;
  for (; r < onCount - 1; r++) {
    if (data[r] === 1) {
      curCount++
    }
  }
  for (; r < data.length; r++) {
    if (data[r] === 1) {
      curCount++
      maxCount = Math.max(curCount, maxCount);
    }
    if (data[l] === 1) {
      curCount--
    }
    l++
  }
  return onCount - maxCount
};

function test() {
  let fun = minSwaps;
  let params = [
    // [1, 0, 1, 0, 1]
    // [1, 1, 1, 0]
    // [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()