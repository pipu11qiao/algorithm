function search(nums) {
  let left = -1;
  let right = nums.length;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (isBlue(nums[mid])) {
      left = mid
    } else {
      right = mid
    }
  }
}
function isBlue() {
}