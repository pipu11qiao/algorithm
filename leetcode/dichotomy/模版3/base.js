function binarySearch(nums, target) {
  const len = nums.length;
  if (len === 0) {
    return -1
  }
  let left = 0, right = len - 1;
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (nums[left] === target) return left
  if (nums[right] === target) return right
  return -1
}