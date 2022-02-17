/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function stepFun(num1, num2) {
  let b = num1;
  let s = num2;
  if (num2 > num1) {
    b = num2;
    s = num1;
  }
  return {
    step: Math.floor(b / s),
    s: parseInt(b % s),
    b: s
  }
}
var countOperations = function (num1, num2) {
  let step = 0
  if (num1 === 0 || num2 === 0) {
    return step
  }
  while (true) {
    const res = stepFun(num1, num2);
    step += res.step;
    if (res.s === 0) {
      return step
    }
    num1 = res.b;
    num2 = res.s
  }
};

function test() {
  // const res = countOperations(2, 3);
  // const res = countOperations(10, 10);
  const res = countOperations(7, 17);
  console.log(`res`, res);

}
test()