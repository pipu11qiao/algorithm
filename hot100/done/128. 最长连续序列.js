/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (numArr) {
  const nums = [...new Set(numArr)]
  let map = {};
  nums.forEach(item => {
    map[item] = 1
  })
  let visitMap = {};
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]
    if (!visitMap[curNum]) {
      visitMap[curNum] = 1
      // 向左，向右
      let curCount = 1;
      let leftNum = curNum - 1;
      while (map[leftNum] && visitMap[leftNum]) {
        visitMap[leftNum] = 1
        leftNum = leftNum - 1
        curCount++
      }
      let rightNum = curNum + 1;
      while (map[rightNum] && visitMap[rightNum]) {
        visitMap[rightNum] = 1
        rightNum = rightNum + 1
        curCount++
      }
      res = Math.max(res, curCount)
    }
  }
  return res
};

function test() {
  let fun = longestConsecutive;
  let params = [
    [100, 4, 200, 1, 3, 2]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()