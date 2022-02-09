/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  let max = 0;
  let n1 = 0; //f(n-1)
  let n2 = 0; //f(n-2)
  let n3 = 0; //f(n-3)
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i - 2 < 0) {
      n2 = 0
    }
    if (i - 3 < 0) {
      n3 = 0;
    }
    const res = nums[i] + Math.max(n3, n2)
    max = Math.max(max, res)
    n3 = n2
    n2 = n1
    n1 = res
  }
  return max;
};