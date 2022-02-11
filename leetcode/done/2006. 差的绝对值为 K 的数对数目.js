/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (map[num] === undefined) {
      map[num] = 0
    }
    map[num]++
  }
  // 记录计算过得
  const record = {};
  let res = 0;
  for (let num in map) {
    const numB = Number(num) + k;
    const numS = Number(num) - k;
    if (map[numB] && (!record[num + '+'] && !record[numB + '-'])) {
      res += map[num] * map[numB];
      record[num + '+'] = 1
      record[numB + '-'] = 1
    } else if (map[numS] && (!record[num + '-'] && !record[numS + '+'])) {
      res += map[num] * map[numS];
      record[num + '-'] = 1
      record[numS + '+'] = 1
    }
  }
  return res
};

function test() {
  // const res = countKDifference([1, 2, 2, 1], 1);
  const res = countKDifference([3,2,1,5,4], 2);

  console.log(`res`, res);
}

test()