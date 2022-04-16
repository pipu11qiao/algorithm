/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const num = nums[left] + nums[right] + nums[i];
      if (num >= target) {
        right--
      } else {
        res += right - left;
        left++
      }
    }
  }
  return res;
};

function test() {
  let fun = threeSumSmaller;
  let params = [
    [-2, 0, 1, 3], 2
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()