/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(arr, m, n) {
  const tmp = arr[m];
  arr[m] = arr[n];
  arr[n] = tmp;
}
var sortColors = function (nums) {
  const len = nums.length;
  let twoStart = len;
  let oneCount = 0;
  for (let i = 0; i < twoStart;) {
    const cur = nums[i];
    if (cur !== 0) {
      swap(nums, i, twoStart - 1);
      if (cur === 2 && oneCount > 0) {
        swap(nums, twoStart - 1, twoStart + oneCount - 1);
      }
      if (cur === 1) {
        oneCount++
      }
      twoStart--
    } else {
      i++
    }
  }
};

function test() {
  let fun = sortColors;
  let params = [
    // [2, 0, 1]
    // [2, 0, 2, 1, 1, 0]
    [1, 2]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, params[0]);
}
test()