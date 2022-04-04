/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.numArr = nums;
  // let sum = 0;
  // this.sumArr = [];
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  //   this.sumArr.push(sum)
  // }

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  // let diff = val - this.numArr[index];
  this.numArr[index] = val;
  // for (let i = index; i < this.sumArr.length; i++) {
  //   this.sumArr[i] += diff
  // }

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += this.numArr[i]
  }
  return sum
  // return this.sumArr[right] - (left === 0 ? 0 : this.sumArr[left - 1])
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

(function () {
  var obj = new NumArray([1, 3, 5])
  debugger
  obj.update(index, val)
  var param_2 = obj.sumRange(left, right)

})()