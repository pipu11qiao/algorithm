
function search(nums, target, low) {
  let left = 0;
  let right = nums.length - 1
  let ans = nums.length
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] >= target || (low && nums[mid] >= target)) {
      right = mid - 1
      ans = mid;
    } else {
      left = mid + 1
    }
  }
  return ans
}

function test() {
  let fun = search;
  let params = [
    [1, 2, 3, 5, 5, 5, 8, 9], 5
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()