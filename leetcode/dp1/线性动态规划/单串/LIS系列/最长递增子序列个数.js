/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let dp = {};
  const len = nums.length;
  new Array(len).forEach((_, i) => {
    dp[i] = [1, 1]
  });
  for (let i = 0; i < len; i++) {
    let arr = [];
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        arr.push([dp[j][0] + 1, dp[j][1]])
      }
    }
    let max = Math.max(1, Math.max.apply(Math, arr.map(item => item[0])));

    dp[i] = [max, arr.filter(item => item[0] === max).reduce((sum, item) => sum + item[1], 0) || 1]
  }
  const info = Object.values(dp);
  const max = Math.max.apply(Math, info.map(item => item[0]));
  if (max === 1) {
    return len
  } else {
    return info.filter(item => item[0] === max).reduce((sum, item) => sum + item[1], 0)
  }
};

function test() {
  // let arr = [1, 3, 5, 4, 7];
  let arr = [1, 1, 1, 1, 1];
  // let arr = [1,3,5,4,7];
  // let arr = [1, 2, 4, 3, 5, 4, 7, 2];
  // 1, 2, 3, 3, 4, 4, 5, 2
  // 1, 1, 1, 1, 2, 1, 3, 1

  const res = findNumberOfLIS(arr);
  console.log(`res`, res);
}

test()