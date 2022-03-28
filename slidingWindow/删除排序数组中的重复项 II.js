/**
 * @param {number[]} nums
 * @return {number}
 */

function swap(arr, m, n) {
  const tmp = arr[m];
  arr[m] = arr[n];
  arr[n] = tmp;
}
var removeDuplicates = function (nums) {
  let count = 0;
  let prev = Number.NEGATIVE_INFINITY;
  let end = -1;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur !== prev) {
      prev = cur
      count = 1
    } else {
      count++
    }
    if (count <= 2) {
      end++
      if (end !== i) {
        swap(nums, i, end)
      }
    }
  }
  return end + 1
};

function test() {
  let fun = removeDuplicates;
  let params = [
    // [1, 1, 1, 2, 2, 3],
    [0, 0, 1, 1, 1, 1, 2, 3, 3]
  ];


  const res = fun.apply(null, params)
  console.log(`params[0]`, params[0]);
  console.log(`res`, res);
}
test()