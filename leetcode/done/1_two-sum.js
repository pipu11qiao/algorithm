/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const diffMap = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (diffMap[num] !== undefined) {
            return [diffMap[num], i];
        }
        diffMap[target - num] = i;
    }
};
