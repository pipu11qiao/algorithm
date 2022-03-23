/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length;
  const limit = Math.floor((len - 1) / 2) + 1;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    if (!map[curNum]) {
      map[curNum] = 1
    } else {
      map[curNum]++
    }
    if (map[curNum] >= limit) {
      return curNum
    }
  }
};

function test() {
  let fun = majorityElement;
  let params = [
    [1, 2, 3, 2, 2, 2, 5, 4, 2]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()