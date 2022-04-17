/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let l = 0;
  let res = 0;
  let zeroCount = 0;
  let prevZeroIndex = [];
  for (let r = 0; r < nums.length; r++) {
    const curNum = nums[r];
    if (curNum === 0) {
      if (zeroCount >= k) {
        let count = r - 1 - l + 1;
        res = Math.max(res, count);
        let prevIndex = prevZeroIndex.shift();
        if (prevIndex == undefined) {
          l = r + 1;
        } else {
          l = prevIndex + 1;
          prevZeroIndex.push(r);
        }
      } else {
        prevZeroIndex.push(r);
        zeroCount++
      }
    }
  }
  res = Math.max(res, nums.length - l);
  return res

};

function test() {
  let fun = longestOnes;
  let params = [
    [0, 0, 1, 1, 1, 0, 0], 0
    // [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()