/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function search(nums, target) {
  let left = -1;
  let right = nums.length;
  if (right === 0 || target > nums[right - 1]) {
    return right
  }
  if (target < nums[0]) {
    return left
  }
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    const midNum = nums[mid];
    if (midNum === target) {
      return mid
    } else if (midNum > target) {
      right = mid
    } else {
      left = mid
    }
  }
  if (nums[left] === target) {
    return left
  }
  if (nums[right] === target) {
    return right
  }
  return right
}

var medianSlidingWindow = function (nums, k) {
  let i = 0;
  const len = nums.length;
  const arr = [];
  for (; i < k; i++) {
    const curNum = nums[i];
    let index = search(arr, curNum);
    if (index === -1) {
      arr.unshift(curNum)
    } else {
      arr.splice(index, 0, curNum);
    }
  }
  const res = [];
  let left = Math.floor(k / 2);
  const midNum = k % 2 !== 0 ? arr[left] : (arr[left] + arr[left - 1]) / 2
  res.push(midNum);
  for (; i < len; i++) {
    const prevNum = nums[i - k];
    let prevIndex = search(arr, prevNum);
    arr.splice(prevIndex, 1);
    const curNum = nums[i];
    let index = search(arr, curNum);
    if (index === -1) {
      arr.unshift(curNum)
    } else {
      arr.splice(index, 0, curNum);
    }
    let left = Math.floor(k / 2);
    const midNum = k % 2 !== 0 ? arr[left] : (arr[left] + arr[left - 1]) / 2
    res.push(midNum);
  }
  return res

};

function test() {
  let fun = medianSlidingWindow;
  let params = [
    [1, 3, -1, -3, 5, 3, 6, 7], 3
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()