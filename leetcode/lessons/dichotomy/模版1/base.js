function search(nums, target) {
  let l = 0;
  let h = nums.length - 1;
  while (l <= h) {
    const mid = l + Math.floor((h - l) / 2);
    if (nums[mid] === target) {
      return mid
    } if (nums[mid] > target) {
      h = mid - 1;
    } else {
      l = mid + 1
    }
  }
  return -1;
}