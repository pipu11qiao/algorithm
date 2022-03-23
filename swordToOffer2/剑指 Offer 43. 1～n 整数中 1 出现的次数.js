function getCountOfN(n, prev) {
  let res = 0;
  if (prev === '0') {
    if (n === 1) {
      return 1
    }
    const count = n - 1;
    for (let i = count; i >= 0; i--) {
      if (i === count) {
        res += Math.pow(10, i)
      } else {
        res += 8 * Math.pow(10, i) * Math.pow(9, count - i - 1 >= 0 ? count - i - 1 : 0)
      }
    }
  } else if (prev === '1') {
    res = Math.pow(10, n)
  } else {
    const count = n - 1;
    for (let i = count; i >= 0; i--) {
      res += Math.pow(10, i) * Math.pow(9, count - i)
    }
  }
  return res
}
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  const strN = `${n}`;
  const len = strN.length
  if (len == 1) {
    return 1
  }
  const res = 0;
  for (let i = 0; i < len; i++) {
    let curNum = strN[i];
    const count = len - i - 1;
    if (count > 1) {
      if (i === 0) {
        for (let j = 0; j < curNum; j++) {

        }
      } else {

      }
    } else {

    }

  }

};

function test() {
  let fun = countDigitOne;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
  // console.log(getCountOfN(3));
  // console.log(`getCountOfN(1,'0')`, getCountOfN(1, '0'));
  // console.log(`getCountOfN(2,'0')`, getCountOfN(2, '0'));
  // console.log(`getCountOfN(2,'0')`, getCountOfN(2, '0'));
  // console.log(`getCountOfN(3,'0')`, getCountOfN(3, '0'));
  // console.log(`getCountOfN(4,'0')`, getCountOfN(4, '0'));
  // console.log(`getCountOfN(5,'0')`, getCountOfN(5, '0'));
}
test()