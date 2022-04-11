/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const len = nums.length;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    let res = nums[mid] > nums[right];
    if (res) {
      left = mid + 1
    } else {
      right = mid;
    }
  }
  return nums[left]
};

function test() {
  let fun = findMin;
  let params = [
    // [3, 4, 5, 1, 2]
    // [4, 5, 6, 7, 0, 1, 2]
    // [2, 1]
    // [11, 13, 15, 17]
    // [2, 3, 1]
    [2, 3, 4, 5, 1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()