/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
var findDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1)
    }
  }
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      ans.push(nums[i])
    }
  }
  return ans
};

function test() {
  let fun = findDuplicates;
  let params = [
    [4, 3, 2, 7, 8, 2, 3, 1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()