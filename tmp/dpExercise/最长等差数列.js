/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const map = {};
  nums.forEach((item, i) => {
    if (!map[item]) { map[item] = [] }
    map[item].push(i)
  });
  const len = nums.length;
  let res = 0;
  const dp = {};
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const numM = 2 * nums[j] - nums[i];
      let leftKey = `${i}-${j}`;
      if (map[numM] !== undefined) {
        let index = -1;
        for (let c = map[numM].length - 1; c >= 0; c--) {
          const curIndex = map[numM][c];
          if (curIndex < j) {
            index = curIndex;
            break
          }
        }
        if (index > -1) {
          let rightKey = `${j}-${index}`;
          const curRes = (dp[rightKey] || 0) + 1
          res = Math.max(curRes, res);
          dp[leftKey] = curRes
        }
      }
    }
  }

  return res + 2

};

function test() {
  let fun = longestArithSeqLength;
  let params = [
    // [3, 6, 9, 12, 15]
    // [9,4,7,2,10]
    // [20, 1, 15, 3, 10, 5, 8]
    [44, 46, 22, 68, 45, 66, 43, 9, 37, 30, 50, 67, 32, 47, 44, 11, 15, 4, 11, 6, 20, 64, 54, 54, 61, 63, 23, 43, 3, 12, 51, 61, 16, 57, 14, 12, 55, 17, 18, 25, 19, 28, 45, 56, 29, 39, 52, 8, 1, 21, 17, 21, 23, 70, 51, 61, 21, 52, 25, 28]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()