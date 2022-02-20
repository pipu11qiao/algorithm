/**
 * @param {number} num
 * @return {number}
 */

const evenArr = [1, 3, 5, 7, 9];
const oddArr = [0, 2, 4, 6, 8];
const oddWithNoZeroArr = [2, 4, 6, 8];
function isOdd(num) {
  return num % 2 === 0
}
let map = {}
for (let i = 0; i < 10; i++) {
  map[i] = isOdd(i)
}

var countEven = function (num) {
  let numStr = `${num}`;
  let len = `${num}`.length;
  let evenCount = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let curNum = numStr[i];
    if (i === len - 1) {
      res += (evenCount % 2 === 0 ? (len === 1 ? oddWithNoZeroArr : oddArr) : evenArr).filter(_num => _num <= curNum).length
    } else {
      let n = len - i;
      res += curNum * Math.pow(5, n - 1) * Math.pow(2, n - 2)
      if (i === 0) {
        res += -1
      }
    }
    if (!map[curNum]) {
      evenCount++
    }
    // console.log(curNum);
    // console.log(`res`, res);
  }
  return res
};

var countEvenTest = function (num) {
  function isOdd(num) {
    return num % 2 === 0
  }
  let map = {}
  for (let i = 0; i < 10; i++) {
    map[i] = isOdd(i)
  }
  function isOk(num) {
    let str = num + '';
    let evenCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (!map[str[i]]) {
        evenCount++
      }
    }
    return evenCount % 2 === 0
  }
  let res = 0;
  for (let i = 1; i <= num; i++) {
    isOk(i) && (res++)
  }
  return res
};
function test() {
  // const res = fun.apply(null, params)
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100000000)
    let t1 = Date.now();
    const res = countEven(num);
    let resT1 = Date.now() - t1;
    let t2 = Date.now();
    const trueRes = countEvenTest(num);
    let resT2 = Date.now() - t2;
    console.log(trueRes, res, trueRes === res, resT1, resT2)
    console.log('----------');
  }
}
test()