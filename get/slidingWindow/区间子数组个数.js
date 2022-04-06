/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  let r = 0;
  let l = 0;
  let count = 0;
  let indexArr = [];
  const len = nums.length;
  for (; r <= len; r++) {
    const curNum = nums[r];
    if (r === len || curNum > right) {
      indexArr = [];
      l = r + 1;
    } else if (curNum >= left && curNum <= right) {
      count += r - l + 1
      indexArr.push(r)
    } else if (curNum < left) {
      if (indexArr.length > 0) {
        count += r - l + 1;
        count -= r - indexArr[indexArr.length - 1];
      }

    }
  }
  return count
};

function test() {
  let fun = numSubarrayBoundedMax;
  let params = [
    // [2, 9, 2, 5, 6], 2, 8
    // [2, 1, 4, 3], 2, 3
    // [73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69

    [801, 341, 668, 598, 98, 241],
    658,
    719
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
// [801, 341, 668, 598, 98, 241]
// 658
// 719
