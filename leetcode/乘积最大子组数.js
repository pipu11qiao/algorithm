/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Number.NEGATIVE_INFINITY;
  let maxP = 0;
  let maxN = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur === 0) {
      maxP = 0;
      maxN = 0;
    } else {
      let curP;
      let curN;
      if (cur > 0) {
        curP = maxP === 0 ? cur : maxP * cur;
        curN = maxN === 0 ? 0 : maxN * cur;
      } else {
        curP = maxN === 0 ? 0 : maxN * cur;
        curN = maxP === 0 ? cur : maxP * cur;
      }
      maxP = curP;
      maxN = curN;
      if (maxP > 0) {
        res = Math.max(res, maxP)
      }
    }
    res = Math.max(res, cur)
  }
  return res
};


function test() {
  let fun = maxProduct;
  let params = [
    // [2, 3, -2, 4]
    // [2, 3, -2, -4, -4, 5]
    [2, 3, 0, 0 - 2, -4, -4, 5]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
    // console.log(`maxP`, maxP);
    // console.log(`maxN`, maxN);