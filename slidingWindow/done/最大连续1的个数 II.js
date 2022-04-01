/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let l = 0;
  let res = 0;
  let zeroCount = 0;
  let prevZeroIndex = -1;
  for (let r = 0; r < nums.length; r++) {
    const curNum = nums[r];
    if (curNum === 0) {
      if (zeroCount > 0) {
        let count = r - 1 - l + 1;
        res = Math.max(res, count);
        l = prevZeroIndex + 1;
        prevZeroIndex = r
      } else {
        prevZeroIndex = r
        zeroCount++
      }
    }
  }
  res = Math.max(res, nums.length - l);
  return res

};

function test() {
  let fun = findMaxConsecutiveOnes;
  let params = [
    // [1, 0, 1, 1, 0]
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]

  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()