/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let obj = {};
  for (let index = 0, len = nums.length; index < len; index++) {
    const num = nums[index];
    if (obj[num] !== undefined && index - obj[num] <= k) {
      return true
    }
    obj[num] = index;
  }
  return false
}


function test() {
  const res = containsNearbyDuplicate([1, 2, 3, 1], 3)
  console.log(`res`, res);
}

test();