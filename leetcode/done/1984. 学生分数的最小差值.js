/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i + k - 1 < len; i++) {
    min = Math.min(min, nums[k + i - 1] - nums[i])
  }
  return min
};

function test() {
  // nums = [9,4,1,7], k = 2
  // const res = minimumDifference([9, 4, 1, 7], 2);
  // const res = minimumDifference([90], 1);
  const res = minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6);
  console.log(`res`, res);
}

test()