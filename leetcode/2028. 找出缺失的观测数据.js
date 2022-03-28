/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const m = rolls.length;
  let rollsSum = rolls.reduce((s, item) => s + item);
  let sum = (m + n) * mean;
  let diffSum = sum - rollsSum;
  let max = n * 6;
  let min = n;
  if (diffSum > max || diffSum < min) {
    return []
  } else {
    const average = Math.floor(diffSum / n);
    const bigCount = diffSum - n * average
    return [
      ...new Array(n - bigCount).fill(average),
      ...new Array(bigCount).fill(average + 1)
    ]
  }
};

function test() {
  let fun = missingRolls;
  let params = [
    [6, 1, 6, 2, 4, 4, 5], 5, 16
    // [1, 5, 6], 3, 4
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()