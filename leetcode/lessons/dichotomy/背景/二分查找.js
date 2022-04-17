/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const curMidNum = nums[mid]
    if (curMidNum === target) {
      return mid
    } else if (curMidNum > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1
};
function test() {
  let fun = search;
  let params = [
    // [-1, 0, 3, 5, 9, 12], 2
    // [-1, 0, 3, 5, 9, 12], 9
    // [0, 3, 9, 12], 9
    // [-1, 0, 3, 5, 9, 12], 2
    [-1, 0, 3, 5, 9, 12], 2
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
