/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function search(nums, target, useIndex) {
  let left = -1;
  let right = nums.length;
  if (nums[0] > target) {
    return -1
  } else if (nums[right - 1] < target) {
    return -1
  }
  while (left + 1 !== right) {
    const mid = Math.floor((left + right) / 2);
    const midNum = nums[mid];
    if (midNum === target) {
      if (mid === useIndex) {
        if (nums[mid - 1] !== undefined && nums[mid - 1] === target) {
          return mid - 1
        }
      }
      return mid
    } else if (midNum > target) {
      right = mid
    } else {
      left = mid
    }
  }
  if (nums[0] === target) {
    return 0
  }
  return -1
}
var twoSum = function (numbers, target) {
  const len = numbers.length;
  let prevNum = 10001;
  for (let i = len - 1; i >= 0; i--) {
    const curTarget = target - numbers[i]
    if (curTarget !== prevNum) {
      prevNum = curTarget
      let index = search(numbers, curTarget, i);
      if (index !== -1) {
        return index > i ? [i + 1, index + 1] : [index + 1, i + 1]
      }
    }
  }
};

function test() {
  let fun = twoSum;
  let params = [
    // [-1, 0], -1
    // [2, 7, 11, 15], 9
    [2, 3, 4], 6

  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()