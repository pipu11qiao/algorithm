/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  let len = nums.length;
  let res = `${nums[0]}`;
  if (len === 2) {
    res += '/' + nums[1]

  }
  if (len > 2) {
    res += ('/(')
    for (let i = 1; i < len; i++) {
      res += `${nums[i]}${i == len - 1 ? '' : '/'}`
    }
    res += (')')
  }

  return res

};
function test() {
  let fun = optimalDivision;
  let params = [
    [4, 10, 100, 1000]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()