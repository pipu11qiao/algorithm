/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var robBase = function (nums) {
  // console.log(`nums`, nums);
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

var rob = function (nums) {
  const len = nums.length;
  if (len <= 3) {
    return Math.max.apply(Math, nums)
  }
  let max = 0;
  max = Math.max(max, robBase(nums.slice(0, len - 1)))
  max = Math.max(max, robBase(nums.slice(1, len)))
  max = Math.max(max, robBase([nums[len - 1], ...nums.slice(0, len - 2)]))
  return max
};

function test() {
  const arr = [1, 2, 3, 1];
  const res = rob(arr);
  console.log(`res`, res);
}

test()