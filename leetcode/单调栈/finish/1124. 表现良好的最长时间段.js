/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let len = hours.length;
  let sumArr = [0];
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += hours[i] > 8 ? 1 : -1;
    sumArr.push(sum);
  }
  let stack = [0];
  for (let i = 1; i <= sumArr.length; i++) {
    let cur = sumArr[i];
    if (cur < sumArr[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }
  // console.log(`sumArr`, sumArr);
  // console.log(`stack`, stack);
  let res = 0;
  for (let i = sumArr.length - 1; i > 0; i--) {
    let cur = sumArr[i];
    while (stack.length > 0 && cur - sumArr[stack[stack.length - 1]] > 0) {
      let prevIndex = stack.pop();
      res = Math.max(res, i - prevIndex);
    }
    if (stack.length === 0) {
      break;
    }
  }

  return res;
};

function test() {
  let fun = longestWPI;
  let params = [
    //[1, 1, 1, 0]
    [9, 9, 6, 0, 6, 6, 9],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
