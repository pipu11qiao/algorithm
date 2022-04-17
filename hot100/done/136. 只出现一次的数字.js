/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((n, cur) => n ^ cur, 0);
};

function test() {
  let fun = singleNumber;
  let params = [
    [1, 1, 1, 1, 3]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()