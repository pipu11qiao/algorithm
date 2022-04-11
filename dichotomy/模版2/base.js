function binarySearch(nums, target) {
  const len = nums.length;
  if (len === 0) {
    return -1
  }
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (left !== len - 1 && nums[left] === target) {
    return left
  }
}