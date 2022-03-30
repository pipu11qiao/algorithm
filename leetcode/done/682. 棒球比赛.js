/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const record = [];
  for (let i = 0; i < ops.length; i++) {
    const curLetter = ops[i];
    let curNum
    const recordLen = record.length
    switch (curLetter) {
      case '+':
        curNum = record[recordLen - 1] + record[recordLen - 2];
        break;
      case 'D':
        curNum = record[recordLen - 1] * 2;
        break;
      case 'C':
        record.pop();
        break;
      default:
        curNum = Number(curLetter);
        break
    }
    if (curNum) {
      record.push(curNum);
    }
  }
  return record.reduce((s, item) => s - (-item))
};

function test() {
  let fun = calPoints;
  let params = [
    ["5", "2", "C", "D", "+"]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()