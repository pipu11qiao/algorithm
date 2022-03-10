/**
 * @param {number[]} nums
 * @return {number}
 */

var baseRob = function (nums) {
  let len = nums.length;
  if (len <= 2) {
    return Math.max.apply(Math, nums);
  }
  let f2 = 0;
  let f1 = 0;
  for (let i = 0; i < len; i++) {
    const cur = Math.max(f2 + nums[i], f1);
    f2 = f1;
    f1 = cur;
  }
  return f1
};
var rob = function (nums, start, end) {
  let len = nums.length;
  if (len === 1) {
    return nums[0]
  }
  let res1 = baseRob(nums.slice(1)); //不包含第一个
  let res2 = baseRob(nums.slice(0, len - 1)); //不包含最后一个
  return Math.max(res1, res2)
};

function test() {
  let fun = rob;
  let params = [
    // [2,3,2]
    // [1,2,3,1]
    [1, 2, 3]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()