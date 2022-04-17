/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var threeSum = function (nums, target, start, map) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = start; i < nums.length; i++) {
    let diff = target - nums[i];
    let left = i + 1;
    let right = nums.length - 1
    while (left < right) {
      const num = nums[left] + nums[right]
      if (num === diff) {
        let arr = [nums[left], nums[right], nums[i]];
        arr.sort();
        let key = (nums[start - 1]) + ',' + arr.join(',');
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
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  const map = {};
  for (let i = 0; i < nums.length - 3; i++) {
    const curNum = nums[i];
    const curRes = threeSum(nums, target - curNum, i + 1, map);
    curRes.forEach(item => {
      res.push([curNum, ...item]);
    })
  }
  return res
};

function test() {
  let fun = fourSum;
  let params = [
    [2, 2, 2, 2, 2], 8
    // [1, 0, -1, 0, -2, 2], 0
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()