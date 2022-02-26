/**
 * @param {number[]} nums
 * @return {number}
 */
function getCount(c) {
  return c * (c + 1) / 2
}
var numberOfArithmeticSlices = function (nums) {
  let s = Number.POSITIVE_INFINITY;//step
  let c = 0; // 当前间距的数量
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    let curS = nums[i] - nums[i - 1];
    if (curS === s) {
      c++
    } else {
      s = curS;
      if (c >= 3) {
        res += getCount(c - 3 + 1)
      }
      c = 2;
    }
  }
  if (c >= 3) {
    res += getCount(c - 3 + 1)
  }
  return res;
};

function test() {
  let fun = numberOfArithmeticSlices;
  let params = [
    [1, 2, 3, 4, 5, 8, 11, 14, 17]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()