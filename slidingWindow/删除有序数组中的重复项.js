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
  let end = 0;
  let prev = nums[0]
  const len = nums.length;
  if (len <= 1) {
    return nums;
  }
  for (let i = 1; i < len; i++) {
    const cur = nums[i];
    if (cur !== prev) {
      end++
      swap(nums, end, i)
      prev = cur
    }
  }
  return end + 1
};

function test() {
  let fun = removeDuplicates;
  let params = [
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()