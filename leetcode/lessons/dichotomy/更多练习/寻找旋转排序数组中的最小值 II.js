/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let hasDiff = false;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    const curNum = nums[mid];
    const leftNum = nums[left];
    const rightNum = nums[right];
    if (hasDiff) {
      if (curNum <= rightNum) {
        right = mid
      } else {
        left = mid
      }
    } else {
      if (leftNum === curNum && rightNum === curNum) {
        for (let i = left; i <= mid; i++) {
          if (nums[i] !== curNum) {
            hasDiff = true
            if (nums[i] < curNum) {
              right = i;
            } else {
              left = i;
            }
            break
          }
        }
        if (!hasDiff) {
          left = mid;
        }
      } else {
        hasDiff = true
        if (curNum <= rightNum) {
          right = mid
        } else {
          left = mid
        }

      }
    }
  }
  const len = nums.length;
  if (len <= 3) {
    return Math.min.apply(Math, nums)
  } else {
    return Math.min.apply(Math, [nums[left], nums[right]])
  }
};

function test() {
  let fun = findMin;
  let params = [
    [3, 3, 1, 3, 3, 3, 3]
    // [9, 9, 9, 1, 3, 5, 6, 9, 9]
    // [1, 3, 5]
    // [2, 2, 2, 0, 1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()