/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(arr, m, n) {
  const tmp = arr[m];
  arr[m] = arr[n];
  arr[n] = tmp;
}
var moveZeroes = function (nums) {
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur !== 0) {
      if (i !== end) {
        swap(nums, i, end)

      }
      end++
    }
  }
};

function test() {
  let fun = moveZeroes;
  let params = [
    [0, 1, 0, 3, 12]
    // [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, params[0]);
}
test()