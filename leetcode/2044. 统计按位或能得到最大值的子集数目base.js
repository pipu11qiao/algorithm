/**
 * @param {number[]} nums
 * @return {number}
 */
 var countMaxOrSubsets = function(nums) {
  let maxOr = 0, cnt = 0;
  for (let i = 0; i < 1 << nums.length; i++) {
      let orVal = 0;
      for (let j = 0; j < nums.length; j++) {
          if (((i >> j) & 1) === 1) {
              orVal |= nums[j];
          }
      }
      if (orVal > maxOr) {
          maxOr = orVal;
          cnt = 1;
      } else if (orVal === maxOr) {
          cnt++;
      }
  }
  return cnt;
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
    // [4, 4, 4, 1]
    [4, 4, 5, 5, 6, 6, 7, 8]
  ];
  let c = 8;
  console.log(Math.pow(2, 8));
  console.log(1 << 8);


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()