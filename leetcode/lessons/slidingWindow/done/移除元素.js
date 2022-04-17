/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function swap(arr, m, n) {
  const tmp = arr[m];
  arr[m] = arr[n];
  arr[n] = tmp;
}
var removeElement = function (nums, val) {
  let end = nums.length - 1;
  let i = 0;
  for (; i <= end;) {
    const cur = nums[i];
    if (cur === val) {
      swap(nums, i, end);
      end--
    } else {
      i++
    }
  }
  return i

};

function test() {
  let fun = removeElement;
  let params = [
    [3, 2, 2, 3], 3
    // [0, 1, 2, 2, 3, 0, 4, 2], 2
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()