/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = true;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    res = nums[mid] > nums[mid + 1];
    if (res) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};

function test() {
  let fun = findPeakElement;
  let params = [
    [1, 2, 1, 3, 5, 6, 4]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()