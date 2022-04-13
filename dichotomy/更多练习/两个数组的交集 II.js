
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function binarySearch(nums, target, lower) {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid
    } else {
      left = mid + 1
    }
  }
  return ans
}
var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let tmp = nums1;
  if (nums1.length > nums2.length) {
    nums1 = nums2;
    nums2 = tmp
  }
  let count1 = 1
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    const curNum = nums1[i];
    const next = nums1[i + 1]
    if (curNum !== next) {
      const [left, right] = searchRange(nums2, curNum);
      if (left !== -1) {
        let count = Math.min(count1, right - left + 1);
        for (let m = 0; m < count; m++) {
          res.push(curNum)
        }
      }
      count1 = 1
    } else {
      count1++
    }
  }
  return res
};

function test() {
  let fun = intersect;
  let params = [
    [4, 9, 5], [9, 4, 9, 8, 4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()