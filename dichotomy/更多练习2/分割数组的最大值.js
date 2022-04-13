/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  const len = nums.length;
  const dp = {};
  let sumArr = [];
  let curSum = 0;
  nums.forEach(item => {
    curSum += item;
    sumArr.push(curSum)
  })
  for (let j = 1; j <= m; j++) {
    for (let i = j - 1; i < len; i++) {
      let key = `${i}-${j}`;
      if (j === 1) {
        dp[key] = sumArr[i]
      } else {
        let min = Number.POSITIVE_INFINITY;
        for (let m = i; m >= j - 1; m--) {
          let lastSum = sumArr[i] - sumArr[m - 1];
          if (lastSum > min) {
            break
          }
          const curRes = Math.max(lastSum, dp[`${m - 1}-${j - 1}`]);
          min = Math.min(curRes, min)
        }
        dp[key] = min
      }
    }
  }
  return dp[`${len - 1}-${m}`]
};

function test() {
  let fun = splitArray;
  let params = [
    // [7, 2, 5, 10, 8], 2
    // [7, 2, 5, 10, 8], 3
    // [1, 2, 3, 4, 5], 2
    [1, 4, 4], 3
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()