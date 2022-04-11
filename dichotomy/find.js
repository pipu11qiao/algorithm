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
  let index = findIndex(arr, x);
  let left = 0;
  let right = arr.length - 1;
  let resIndex = 0
  if (index === left) {
    resIndex = left
  } else if (index === right) {
    resIndex = right + 1 - k;
  } else {
    left = Math.max(index + 1 - k, 0);
    right = Math.min(index, arr.length - k - 1);
    if (left >= right) {
      resIndex = right
    } else {
      // left - right 之间满足条件的
      while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        const [leftRes, midRes, rightRes] = [left, mid, right].map(item => Math.abs(nums[item] - x) + Math.abs(nums[item + k] - x));
        const res = Math.abs(leftRes - midRes) - Math.abs(rightRes - midRes);
        if (res > 0) {
          left = mid
        } else if (res === 0) {
          resIndex = left;
          break
        } else {
          right = mid

        }

      }
    }
  }

  return arr.slice(resIndex, resIndex + k)

};

function test() {
  let fun = findClosestElements;
  let params = [
    // [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6], 4
    // [1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 7, 8], 6
    // [2, 3, 5, 5, 6, 7], 4
    // [2, 3, 5, 5, 6, 7], 4
    arr = [1, 2, 3, 4, 5], 4, 3
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()