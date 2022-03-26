/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums, start, end) {
  const len = nums.length;
  if (nums[0] == 1) {
    return 0
  }
  if (nums[len - 1] === len - 1) {
    return len
  }
  start = start === undefined ? 0 : start;
  end = end === undefined ? len - 1 : end;
  if (end - start + 1 === 2) {
    return nums[start] + 1
  }
  const mid = Math.floor((end - start) / 2) + start;
  const midNum = nums[mid];
  if (nums[end] - midNum > end - mid) {
    return missingNumber(nums, mid, end);
  } else {
    return missingNumber(nums, start, mid);
  }
};

function test() {
  let fun = missingNumber;
  let params = [
    [0],
    // [0, 1, 2, 3, 4, 5, 6, 7, 9]
    // [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()