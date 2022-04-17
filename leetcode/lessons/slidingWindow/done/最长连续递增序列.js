/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const len = nums.length;
  if (len < 2) {
    return len
  }
  let res = 1;
  let end = 0;
  for (let i = 1; i <= len; i++) {
    const curNum = nums[i];
    const isAscend = curNum !== undefined && curNum > nums[i - 1]
    if (!isAscend) {
      res = Math.max(i - end, res);
      end = i
    }
  }
  return res
};

function test() {
  let fun = findLengthOfLCIS;
  let params = [
    [1, 3, 5, 4, 7]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()