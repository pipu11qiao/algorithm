/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
  nums.sort((a, b) => a - b);
  // console.log(`nums`, nums);
  let len = nums.length;
  let lastNum = -1;
  let count = 0;
  let prev = 0;
  let arrSum = 0;
  for (let i = 0; i < len; i++) {
    let curNum = nums[i];
    if (curNum > 0) {
      let curCount = curNum - prev - 1;
      if (curCount > 0) {
        if (curCount + count <= k) {
          count = curCount + count
          arrSum += curNum
          prev = curNum;
        } else {
          break
        }
      } else {
        if (curNum !== prev) {
          arrSum += curNum
          prev = curNum;
        }
      }
    }
  }
  lastNum = prev + k - count
  console.log(`lastNum`, lastNum);
  console.log(`arrSum`, arrSum);
  console.log(`lastNum * (lastNum + 1) / 2`, (lastNum * (lastNum + 1)) / 2);
  return (lastNum * (lastNum + 1)) / 2 - arrSum
}
function test() {
  let fun = minimalKSum;
  let params = [
    // [100],100
    // [5, 6], 6
    // [53, 41, 90, 33, 84, 26, 50, 32, 63, 47, 66, 43, 29, 88, 71, 28, 83], 76
    // [1, 4, 25, 10, 25], 2
    // [96, 44, 99, 25, 61, 84, 88, 18, 19, 33, 60, 86, 52, 19, 32, 47, 35, 50, 94, 17, 29, 98, 22, 21, 72, 100, 40, 84], 35
    // [10000000], 10000000
    [1000000000], 1000000000
    // [10000000000], 10000000000
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()