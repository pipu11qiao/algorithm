/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b)
  let maxNum = nums[len - 1];
  let maxScore = maxNum;
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] !== maxNum && ((nums[i] | maxNum) > maxScore)) {
      maxScore = nums[i] | maxNum
    }
  }
  const countMap = {};
  nums.forEach(item => {
    if (countMap[item] === undefined) {
      countMap[item] = 0
    }
    countMap[item]++
  })
  console.log(`maxScore`, maxScore);
  let bLen = maxNum.toString(2).length;
  let res = 0;
  let prevNum = countMap[nums[len - 1]].length > 1 ? nums[len - 1] : undefined
  for (let i = len - 1; i >= 0; i--) {
    let curNum = nums[i];
    if (curNum.toString(2).length < bLen) {
      break
    }
    let count = countMap[curNum]
    if (curNum === maxScore) {
      res += Math.pow(2, i)
    } else {
      if (curNum === prevNum) {
        continue
      }
      console.log(`curNum`, curNum);
      // console.log(`res`, res);
      for (let j = i - 1; j >= 0; j--) {
        // console.log(`nums[j]`, nums[j]);
        if (nums[j] !== curNum && (curNum | nums[j]) === maxScore) {
          res += (Math.pow(2, count) - 1) * Math.pow(2, j)
        }
      }
    }
    prevNum = curNum
  }
  return res

};

function test() {
  let fun = countMaxOrSubsets;
  let params = [
    // [3, 1]
    // [2,2,2]
    // [3, 2, 1, 5]
    // [1, 1, 2]
    // [2, 2, 1, 3]
    // v
    [4, 4, 4, 1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()