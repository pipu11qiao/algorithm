/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const indexMap = {};
  let end = 0;
  let res = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    if (indexMap[curNum] === undefined) {
      indexMap[curNum] = i
    } else {
      let prevIndex = indexMap[curNum];
      res = Math.max(res, sum)
      for (; end < prevIndex + 1; end++) {
        sum -= nums[end]
      }
      indexMap[curNum] = i;
    }
    sum += curNum
  }
  res = Math.max(res, sum)
  return res;
};

function test() {
  let fun = maximumUniqueSubarray;
  let params = [
    // [4, 2, 4, 5, 6]
    [5, 2, 1, 2, 5, 2, 1, 2, 5]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()