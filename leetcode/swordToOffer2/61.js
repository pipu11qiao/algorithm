/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  const map = {};
  let count0 = 0;
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    if (curNum === 0) {
      count0++
    } else {
      if (map[curNum]) {
        return false;
      }
      map[curNum] = 1;
      if (curNum < min) {
        min = curNum;
      }
      if (curNum > max) {
        max = curNum;
      }
    }
  }
  return (count0 === 5) || max - min < 5

};

function test() {
  let fun = isStraight;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()