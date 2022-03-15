/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  let maxCount = 1;
  let res = [nums[0]];
  const dp = {
    0: [nums[0]],
  }
  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i];
    let curRes = [nums[i]];
    let curMaxCount = 1;
    for (let j = 0; j < i; j++) {
      const prev = nums[j];
      if (curNum % prev === 0) {
        if (dp[j].length + 1 > curMaxCount) {
          curMaxCount = dp[j].length + 1
          curRes = [...dp[j], curNum]
        }
      }
    }
    if (curMaxCount > maxCount) {
      maxCount = curMaxCount;
      res = curRes
    }
    dp[i] = curRes
  }
  return res
};

function test() {
  let fun = largestDivisibleSubset;
  let params = [
    // [1, 2, 3]
    [1,2,4,8]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()