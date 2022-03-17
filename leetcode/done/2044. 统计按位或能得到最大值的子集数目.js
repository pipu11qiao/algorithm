/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let max = Number.NEGATIVE_INFINITY;
  let res = 0
  for (let i = 0; i < 1 << nums.length; i++) {
    let curRes = 0;
    for (let j = 0; j < nums.length; j++) {
      if ((i >> j) & 1 == 1) {
        curRes |= nums[j]
      }
    }
    if (curRes > max) {
      max = curRes;
      res = 1
    } else if (curRes === max) {
      res++
    }
  }
  return res;
};

function test() {
  let fun = countMaxOrSubsets;
  let params = [
    [3, 2, 1, 5]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()