/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let prev2 = 0;
  let prev1 = 0;
  const numStr = `${num}`;
  for (let i = 0; i < numStr.length; i++) {
    const curNum = numStr[i];
    const prevNum = i === 0 ? '9' : numStr[i - 1];
    let prevOk = prevNum + curNum < 26 && prevNum !== '0';
    let curCount = prev1 + (prevOk ? prev2 : 0);
    if (i === 0) {
      curCount = 1
    } else if (i === 1) {
      if (prevOk) {
        curCount = 2
      }
    }
    prev2 = prev1;
    prev1 = curCount;
  }
  return prev1
};

function test() {
  let fun = translateNum;
  let params = [
    12258
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()