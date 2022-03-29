/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const len = nums.length;
  if (len === 1) {
    return nums[0]
  }
  let mid = Math.floor(len / 2)
  const leftArr = [];
  const rightArr = [];
  const midArr = [];
  const midNum = nums[mid];
  for (let i = 0; i < len; i++) {
    const curNum = nums[i];
    if (curNum > midNum) {
      rightArr.push(curNum);
    } else if (curNum < midNum) {
      leftArr.push(curNum);
    } else {
      midArr.push(curNum);
    }
  }
  if (rightArr.length >= k) {
    return findKthLargest(rightArr, k);
  } else if (rightArr.length + midArr.length >= k) {
    return midNum
  } else {
    return findKthLargest(leftArr, k - rightArr.length - midArr.length)
  }
};

function test() {
  let fun = findKthLargest;
  let params = [
    [-1, 2, 0], 2
    // [3, 2, 1, 5, 6, 4], 2
    // [3, 2, 3, 1, 2, 4, 5, 5, 6], 4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()