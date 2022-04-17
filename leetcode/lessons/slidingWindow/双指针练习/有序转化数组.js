/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function (nums, a, b, c) {
  let min = Number.POSITIVE_INFINITY;
  let minIndex = -1;
  let max = Number.NEGATIVE_INFINITY;
  let maxIndex = -1;
  let tmpArr = nums.map((item, i) => {
    let res = a * Math.pow(item, 2) + b * item + c
    if (res < min) {
      min = res;
      minIndex = i
    }
    if (res > max) {
      max = res;
      maxIndex = i

    }
    return res
  })
  if (a === 0) {
    if (b >= 0) {
      return tmpArr;
    } else {
      return tmpArr.reverse();
    }
  }
  let isPos = a > 0;
  let left = minIndex;
  let right = minIndex + 1;
  if (!isPos) {
    left = maxIndex;
    right = maxIndex + 1;
  }
  // debugger
  let res = [];
  while (left >= 0 && right <= nums.length - 1) {
    let leftNum = tmpArr[left]
    let rightNum = tmpArr[right]
    if (isPos ? leftNum > rightNum : leftNum <= rightNum) {
      res.push(rightNum);
      right++
    } else {
      res.push(leftNum)
      left--
    }
  }
  while (left >= 0) {
    res.push(tmpArr[left]);
    left--
  }
  while (right <= nums.length - 1) {
    res.push(tmpArr[right]);
    right++
  }
  if (!isPos) {
    res.reverse()
  }
  return res
};

function test() {
  let fun = sortTransformedArray;
  let params = [
    // [-4, -2, 2, 4], 1, 3, 5
    [-4, -2, 2, 4], -1, 3, 5
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()