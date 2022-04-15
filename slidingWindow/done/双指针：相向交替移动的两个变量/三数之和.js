/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1
    while (left < right) {
      const num = nums[left] + nums[right]
      if (num === diff) {
        let arr = [nums[left], nums[right], nums[i]];
        arr.sort();
        let key = arr.join(',');
        if (!map[key]) {
          res.push(arr)
          map[key] = 1
        }
        left++
      } else if (num < diff) {
        left++
      } else {
        right--
      }
    }
  }
  return res;
};

function test() {
  let fun = threeSum;
  let params = [
    [-1, 0, 1, 2, -1, -4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()