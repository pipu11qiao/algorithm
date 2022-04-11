function findIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] >= target) {
    return left
  } else if (nums[right] <= target) {
    return right
  }
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1
    }
  }
  // 第一个大于
  if (nums[left] === target || nums[left] - target < target - nums[left - 1]) {
    return left
  }
  return findIndex(nums, nums[left - 1]);
}
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let resIndex = findIndex(arr, x);
  let count = 1;
  let left = resIndex;
  let right = resIndex;
  // debugger
  while (count < k) {
    const nextLeft = arr[left - 1];
    const nextRight = arr[right + 1];
    if (nextLeft !== undefined && nextRight !== undefined) {
      if (Math.abs(nextLeft - x) <= Math.abs(nextRight - x)) {
        left--
      } else {
        right++
      }
      count++
    } else {
      if (nextLeft !== undefined) {
        left = left - (k - count);
      }
      if (nextRight !== undefined) {
        right = right + (k - count)
      }
      break
    }
  }
  return arr.slice(left, right + 1)
};

function test() {
  let fun = findClosestElements;
  let params = [
    // [0, 1, 1, 1, 2, 3, 6, 7, 8, 9], 9, 4
    // [1, 2, 3, 4, 5], 4, 3
    // [1, 2, 3, 4, 5], 4, 9
    [-2, -1, 1, 2, 3, 4, 5], 7, 3
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()