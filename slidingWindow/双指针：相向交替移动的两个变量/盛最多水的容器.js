/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = Number.NEGATIVE_INFINITY;
  while (left < right) {
    let leftNum = height[left];
    let rightNum = height[right];
    max = Math.max(max, (right - left) * Math.min(leftNum, rightNum))
    if (leftNum <= rightNum) {
      left++
    } else if (leftNum > rightNum) {
      right--
    }
  }
  return max
};


function test() {
  let fun = maxArea;
  let params = [
    [1, 8, 6, 2, 5, 4, 8, 3, 7]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()