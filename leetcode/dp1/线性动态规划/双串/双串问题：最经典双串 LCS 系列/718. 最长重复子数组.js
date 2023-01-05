/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let mLen = nums1.length;
  let nLen = nums2.length;
  let dp = [];
  // dp[i][j] 以它为结尾的子数组长度
  dp[0] = new Array(nLen + 1).fill(0);
  let res = 0;
  for (let i = 1; i <= mLen; i++) {
    dp[i] = [0];
    let w1 = nums1[i - 1];
    for (let j = 1; j <= nLen; j++) {
      let w2 = nums2[j - 1];
      if (w1 === w2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        res = Math.max(res, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  // console.log(`dp`, dp);
  return res;
};
function test() {
  let fun = findLength;
  let params = [
    //[1, 1, 1, 0]
    [1, 2, 3, 2, 1],
    [3, 2, 1, 4, 7],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
