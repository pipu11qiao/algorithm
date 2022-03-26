/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  nums.forEach(item => {
    map[item] = (map[item] || 0) + 1
  })
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const diff = target - curNum;
    if (map[diff]) {
      if (diff === curNum) {
        if (map[diff] >= 2) {
          return [curNum, curNum]
        }
      } else {
        return [curNum, diff];
      }
    }
  }
  return []
};