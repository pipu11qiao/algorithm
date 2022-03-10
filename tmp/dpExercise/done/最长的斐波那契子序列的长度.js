/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const map = {};
  arr.forEach((item, i) => map[item] = i)
  let dp = {};
  const len = arr.length;
  let res = 0;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      let m = arr[i] - arr[j];
      let leftKey = i * len + j
      if (map[m] !== undefined && m < arr[j]) {
        let rightKey = j * len + map[m]
        let cur = (dp[rightKey] || 0) + 1
        dp[leftKey] = cur;
        res = Math.max(res, cur)
      } else {
        dp[leftKey] = 0
      }
    }
  }
  if (res > 0) {
    return res + 2
  }
  return res

};

function test() {
  let fun = lenLongestFibSubseq;
  let params = [
    // [1, 2, 3, 4, 5, 6, 7, 8]
    [1, 3, 7, 11, 12, 14, 18]
    // [2,4,7,8,9,10,14,15,18,23,32,50]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()