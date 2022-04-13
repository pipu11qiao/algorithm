/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchBase = function (nums, target, start, end) {
  let low = start;
  let high = end;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const curMidNum = nums[mid]
    if (curMidNum === target) {
      return mid
    } else if (curMidNum > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1
};
var search = function (nums, target) {
  // 找出旋转index
  let l = 0;
  let h = nums.length - 1;
  if (nums[l] <= nums[h]) {
    return searchBase(nums, target, l, h);
  } else {
    let rotateIndex = -1;
    while (true) {
      if (l + 1 === h) {
        rotateIndex = l
        break
      }
      const mid = l + Math.floor((h - l) / 2);
      if (nums[mid] < nums[h]) {
        h = mid;
      } else {
        l = mid
      }
    }
    let res = searchBase(nums, target, 0, rotateIndex);
    if (res !== -1) {
      return res
    }
    return searchBase(nums, target, rotateIndex + 1, nums.length - 1);
  }
};

function test() {
  let fun = search;
  let params = [
    // [4, 5, 6, 7, 0, 1, 2], 0
    [1], 0
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()