/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const oddMap = new Map(); // key 奇数的数量 value 奇数前面包含当前奇数在内的数量
  let evenCount = 0;
  let oddCount = 0;
  let res = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    evenCount++;
    if (nums[i] % 2 !== 0) {
      oddCount++;
      oddMap.set(oddCount, evenCount);
      evenCount = 0;
    }
    if (oddMap.has(oddCount - k + 1)) {
      res += oddMap.get(oddCount - k + 1);
    }
  }
  // console.log(`oddMap`, oddMap);
  return res;
};

function test() {
  let fun = numberOfSubarrays;
  let params = [
    //[1, 1, 1, 0]
    // [1, 1, 2, 1, 1],
    // 3,
    [2, 4, 6],
    1,
    // [2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
    // 2,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
