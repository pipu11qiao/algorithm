/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findIndex(nums, target, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? nums.length - 1 : end;
  if (target > nums[end]) {
    return -1
  } else if (target < nums[start]) {
    return -1
  }
  const len = end - start + 1;
  if (len === 1) {
    return start;
  }
  const mid = Math.floor((end - start) / 2) + start;
  const midNum = nums[mid];
  if (midNum === target) {
    return mid
  } else {
    if (midNum > target) {
      return findIndex(nums, target, start, mid - 1)
    } else {
      return findIndex(nums, target, mid + 1, end)
    }
  }
}
var search = function (nums, target) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  const index = findIndex(nums, target);
  const num = nums[index];
  let leftIndex = index;
  while (nums[leftIndex] === num && leftIndex >= 0) {
    leftIndex--
  }
  let rightIndex = index;
  while (nums[rightIndex] === num && rightIndex < len) {
    rightIndex++
  }
  return rightIndex - leftIndex - 1
};

function test() {
  let fun = search;
  let params = [
    [5, 7, 7, 8, 8, 10], 8
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()