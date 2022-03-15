/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let res = 0;
  const len = nums.length;
  if (len < 3) {
    return res;
  }
  let prev2 = nums[0];
  let prev1 = nums[1];
  let count = 0;
  for (let i = 2; i <= len; i++) {
    if (i !== len && (nums[i] - prev1 === prev1 - prev2)) {
      console.log(`count`, count);
      count++
    } else {
      if (count >= 1) {
        res += (count + 1) * count / 2
      }
      count = 0
    }
    prev2 = prev1;
    prev1 = nums[i]
  }
  return res;
};

function test() {
  let fun = numberOfArithmeticSlices;
  let params = [
    [1, 2, 3, 4, 6, 8, 10]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()