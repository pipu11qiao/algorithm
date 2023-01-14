/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sumArr = [];
  this.arr = nums;
  let sum = 0;
  this.sumArr.push(sum);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    this.sumArr.push(sum);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sumArr[right + 1] - this.sumArr[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
