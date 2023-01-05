/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const map = {};
  nums.forEach((num, i) => {
    if (map[num] === undefined) {
      map[num] = []
    }
    map[num].push(i)
  });
  let len = nums.length;
  let longMap = {};
  let maxLen = 0;
  for (let k = 0; k < len; k++) {
    for (let j = 0; j < k; j++) {
      let diff = nums[k] - nums[j];
      let prev = nums[j] - diff;
      if (map[prev] && map[prev][0] < j) {
        let res = 0;
        for (let t = 0; t < map[prev].length && map[prev][t] < j; t++) {
          const i = map[prev][t];
          res = Math.max(res, longMap[i * len + j] ? longMap[i * len + j] + 1 : 1)
        }
        longMap[j * len + k] = res
        maxLen = Math.max(maxLen, res)
      }
    }
  }
  return maxLen + 2
};
function test() {
  let fun = longestArithSeqLength;
  let params = [
    // [3, 6, 9, 12]
    // [9,4,7,2,10]
    [20, 1, 15, 3, 10, 5, 8]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()