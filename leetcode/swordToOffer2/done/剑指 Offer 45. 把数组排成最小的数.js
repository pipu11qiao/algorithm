/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums.sort((a, b) => `${a}${b}` - `${b}${a}`)
  return nums.join('')
};

function test() {
  let fun = minNumber;
  let params = [
    // [10, 2]
    [3, 30, 34, 5, 9]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()