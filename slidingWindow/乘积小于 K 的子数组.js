/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {

};

function test() {
  let fun = numSubarrayProductLessThanK;
  let params = [
    [10, 5, 2, 6], 100
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()