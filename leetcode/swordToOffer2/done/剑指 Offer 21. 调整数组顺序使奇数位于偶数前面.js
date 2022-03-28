/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(arr, m, n) {
  let tmp = arr[m];
  arr[m] = arr[n];
  arr[n] = tmp;
}
var exchange = function (nums) {
  const len = nums.length;
  let end = len - 1;
  for (let i = 0; i < end; i++) {
    const isOdd = nums[i] % 2 === 0;
    if (isOdd) {
      while (end > i && nums[end] % 2 === 0) {
        end--
      }
      if (end === i) {
        break
      } else {
        swap(nums, i, end)
      }
    }
  }
  return nums;
};

function test() {
  let fun = exchange;
  let params = [
    [1, 2, 3, 4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()