/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp
}
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    if (curNum !== i + 1) {
      let tagetNum = nums[curNum - 1];
      if (tagetNum !== curNum) {
        swap(nums, i, curNum - 1)
        i--
      }
    }
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      res.push(i + 1)
    }
  }
  return res
};

function test() {
  let fun = findDisappearedNumbers;
  let params = [
    // [4, 3, 2, 7, 8, 2, 3, 1]
    [1, 1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()