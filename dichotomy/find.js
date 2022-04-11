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

function test() {
  let fun = findIndex;
  let params = [
    // [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6], 4
    [1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 7, 8], 6
    // [2, 3, 5, 5, 6, 7], 4
    // [2, 3, 5, 5, 6, 7], 4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()