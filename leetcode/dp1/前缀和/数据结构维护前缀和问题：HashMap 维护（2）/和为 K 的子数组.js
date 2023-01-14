/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sumMap = new Map();
  sumMap.set(0, 1);
  let len = nums.length;
  let res = 0;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    sum += cur;
    if (sumMap.has(sum - k)) {
      res += sumMap.get(sum - k);
    }
    sumMap.set(sum, sumMap.has(sum) ? sumMap.get(sum) + 1 : 1);
  }
  // console.log(`sumMap`, sumMap);
  return res;
};

function test() {
  let fun = subarraySum;
  let params = [
    //[1, 1, 1, 0]
    // [1, 1, 1],
    // 2,
    [1, 2, 3],
    3,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
