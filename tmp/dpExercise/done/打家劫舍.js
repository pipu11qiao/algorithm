/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
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

function test() {
  let fun = rob;
  let params = [
    // [1, 2, 3, 1]
    [2,7,9,3,1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()