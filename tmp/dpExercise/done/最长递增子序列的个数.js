/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let dp = {};
  let resMax = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    let max = 1;
    let map = { 1: 1 }; // 长度->数量
    for (let j = 0; j < i; j++) {
      if (cur > nums[j]) {
        let curLen = dp[j].len + 1
        if (!map[curLen]) {
          map[curLen] = 0;
        }
        map[curLen] += dp[j].count;
        max = Math.max(curLen, max);
      }
    }
    resMax = Math.max(max, resMax);
    dp[i] = {
      len: max,
      count: map[max]
    }
  }
  let okArr = Object.keys(dp).filter(key => dp[key].len === resMax).map(key => dp[key]);
  return okArr.reduce((sum, cur) => sum + cur.count, 0)
};

function test() {
  let fun = findNumberOfLIS;
  let params = [
    // [1, 3, 5, 4, 7]
    [2,2,2,2,2]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()