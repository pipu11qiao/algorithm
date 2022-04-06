/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function (calories, k, lower, upper) {
  let r = 0;
  let l = 0;
  let res = 0
  let curSum = 0;
  for (; r < k - 1; r++) {
    curSum += calories[r]
  }
  for (; r < calories.length; r++) {
    curSum += calories[r]
    if (curSum < lower) {
      res -= 1
    } else if (curSum > upper) {
      res += 1
    }
    curSum -= calories[l]
    l++
  }
  return res
};

function test() {
  let fun = dietPlanPerformance;
  let params = [
    [6, 5, 0, 0], 2, 1, 5
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()