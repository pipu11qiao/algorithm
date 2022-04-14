/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (numArr, limit) {
  let nums = [];
  let countArr = [];
  let curCount = 0
  for (let i = 0; i < numArr.length; i++) {
    const curNum = numArr[i];
    let next = numArr[i + 1];
    curCount++
    if (curNum !== next) {
      nums.push(curNum);
      countArr.push(curCount)
      curCount = 0;
    }
  }
  const maxQueue = [nums[0]];
  const minQueue = [nums[0]];
  let count = countArr[0]
  let l = 0;
  let ans = count;
  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i];
    while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < curNum) {
      maxQueue.pop();
    }
    maxQueue.push(curNum);
    while (minQueue.length > 0 && minQueue[minQueue.length - 1] > curNum) {
      minQueue.pop();
    }
    minQueue.push(curNum);
    let diff = Math.abs(maxQueue[0] - minQueue[0]);
    // debugger
    if (diff <= limit) {
      count += countArr[i]
    } else {
      ans = Math.max(ans, count);
      count += countArr[i]
      // 左指针向右移动直到满足limit
      while (diff > limit) {
        const prevNum = nums[l];
        if (maxQueue[0] === prevNum) {
          maxQueue.shift()
        }
        if (minQueue[0] === prevNum) {
          minQueue.shift();
        }
        count -= countArr[l]
        l++
        diff = Math.abs(maxQueue[0] - minQueue[0]);
      }
    }
  }
  ans = Math.max(ans, count);
  return ans

};

function test() {
  let fun = longestSubarray;
  let params = [
    // [8, 2, 4, 7], 4
    // [10, 1, 2, 4, 7, 2], 5
    [4, 2, 2, 2, 4, 4, 2, 2], 0
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()