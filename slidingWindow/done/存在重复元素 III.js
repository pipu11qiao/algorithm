/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let i = 0
  let arr = [];
  const len = nums.length;
  for (; i <= k; i++) {
    const curNum = nums[i];
    for (let j = 0; j < arr.length; j++) {
      if (Math.abs(curNum - nums[arr[j]]) <= t) {
        return true
      }
    }
    arr.push(i)
  }
  for (; i < len; i++) {
    arr.shift();
    const curNum = nums[i];
    for (let j = 0; j < arr.length; j++) {
      if (Math.abs(curNum - nums[arr[j]]) <= t) {
        return true
      }
    }
    arr.push(i)
  }
  return false
};

function test() {
  let fun = containsNearbyAlmostDuplicate;
  let params = [
    // [1, 2, 3, 1], 3, 0
    [1, 5, 9, 1, 5, 9], 2, 3
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()