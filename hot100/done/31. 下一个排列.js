/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0
  }
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function sort(arr, i, j) {
  const tmp = arr.slice(i, j + 1)
  tmp.sort((a, b) => compare(a, b))
  tmp.forEach((_, index) => {
    arr[i + index] = _
  })
}
var nextPermutation = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return nums;
  }
  let prevNum = nums[len - 1];
  let changeIndex;
  for (let i = len - 2; i >= 0; i--) {
    const curNum = nums[i];
    if (compare(curNum, prevNum) < 0) {
      changeIndex = i;
      // 找到他后面比他大的 最小的
      let index = i + 1;
      while (true) {
        let next = index + 1
        if (nums[next] === undefined || compare(curNum, nums[next]) >= 0) {
          break
        }
        index = next
      }
      swap(nums, changeIndex, index);
      sort(nums, changeIndex + 1, len - 1)
      return nums
    }
    prevNum = curNum;
  }
  sort(nums, 0, len - 1)
  return nums
};


function test() {
  let fun = nextPermutation;
  let params = [
    // [1,1,5]
    // [3, 2, 1]
    // [1, 2, 3]
    // [1, 5, 1]
    // [1, 20, 26, 1, 15, 29, 4, 29, 10, 9, 21, 7, 27, 11, 21, 5, 9, 7, 27, 16, 17, 3, 6, 5, 16, 23, 29, 14, 28, 21, 2, 29, 3, 29, 0, 18, 28, 5, 10, 9, 6, 23, 8, 25, 26, 21, 1, 5, 29, 28, 14, 8, 1, 20, 13, 10]
    [8, 1, 20, 13, 10]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()