/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  const preSumArr = [];
  let sum = 0;
  const len = customers.length;
  for (let i = 0; i < len; i++) {
    sum += (grumpy[i] === 0 ? customers[i] : 0);
    preSumArr.push(sum)
  }
  let okSum = 0;
  let i = 0;
  let max = 0;
  for (; i < minutes - 1; i++) {
    okSum += customers[i];
  }
  for (; i < len; i++) {
    okSum += customers[i];
    let prev = 0;
    let s = i - minutes + 1
    if (s - 1 >= 0) {
      prev = preSumArr[i - minutes];
    }
    let cur = prev + okSum;
    okSum -= customers[s]
    if (i + 1 < len) {
      cur += preSumArr[len - 1] - preSumArr[i]
    }
    max = Math.max(max, cur)
  }
  return max
};

function test() {
  let fun = maxSatisfied;
  let params = [
    [1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3
    // [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()