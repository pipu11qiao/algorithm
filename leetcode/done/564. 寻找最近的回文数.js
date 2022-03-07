/**
 * @param {string} n
 * @return {string}
 */
function getBasePalindromic(n) {
  let len = n.length;
  if (len === 1) {
    return `${n - 1}`
  }
  let lIndex = Math.floor(len / 2);
  let rIndex = lIndex
  let isEven = len % 2 !== 0
  if (!isEven) {
    lIndex = rIndex - 1
  }
  let basePArr = n.split('');
  for (let i = len - 1; i >= rIndex; i--) {
    if (basePArr[i] !== basePArr[len - 1 - i]) {
      basePArr[i] = basePArr[len - 1 - i]
    }
  }
  return basePArr.join('');
}
var nearestPalindromic = function (n) {
  let len = n.length;
  if (len === 1) {
    return `${n - 1}`
  }
  let lIndex = Math.floor(len / 2);
  let rIndex = lIndex
  let isEven = len % 2 !== 0
  if (!isEven) {
    lIndex = rIndex - 1
  }
  let basePArr = n.split('');
  for (let i = len - 1; i >= rIndex; i--) {
    if (basePArr[i] !== basePArr[len - 1 - i]) {
      basePArr[i] = basePArr[len - 1 - i]
    }
  }
  let baseP = basePArr.join('');
  let minBig = '';
  let maxSmall = '';
  let needBig = true;
  let needSmall = true;
  if (baseP < n) {
    maxSmall = baseP
    needSmall = false;
  } else if (baseP > n) {
    minBig = baseP
    needBig = false;
  }
  if (needSmall) {
    if (/^10*1$/.test(baseP)) {
      maxSmall = `${baseP - 2}`;
    } else {
      let tmpArr = [...basePArr];
      if (isEven) {
        if (tmpArr[lIndex] === '0') {
          let leftNum = tmpArr.slice(0, lIndex).join('');
          leftNum = `${leftNum - 1}`
          tmpArr = [...leftNum.split(''), '9', ...leftNum.split('').reverse()]
        } else {
          tmpArr[lIndex] = tmpArr[lIndex] - 1
        }
      } else {
        if (tmpArr[lIndex] === '0') {
          let leftNum = tmpArr.slice(0, lIndex).join('');
          leftNum = `${leftNum - 1}`
          tmpArr = [...leftNum.split(''), '9', '9', ...leftNum.split('').reverse()]
        } else {
          tmpArr[lIndex] = tmpArr[lIndex] - 1
          tmpArr[rIndex] = tmpArr[rIndex] - 1
        }
      }
      maxSmall = tmpArr.join('')
    }
  }
  // console.log(`baseP`, baseP);
  if (needBig) {
    if (/^9+$/.test(baseP)) {
      minBig = `${-(-baseP) + 2}`;
    } else {
      let tmpArr = [...basePArr];
      if (isEven) {
        if (tmpArr[lIndex] === '9') {
          let leftNum = tmpArr.slice(0, lIndex).join('');
          leftNum = `${-(-leftNum) + 1}`
          tmpArr = [...leftNum.split(''), '0', ...leftNum.split('').reverse()]
        } else {
          tmpArr[lIndex] = -(-tmpArr[lIndex]) + 1
        }
      } else {
        if (tmpArr[lIndex] === '9') {
          let leftNum = tmpArr.slice(0, lIndex).join('');
          leftNum = `${-(-leftNum) + 1}`
          tmpArr = [...leftNum.split(''), '0', '0', ...leftNum.split('').reverse()]
        } else {
          tmpArr[lIndex] = -(-tmpArr[lIndex]) + 1
          tmpArr[rIndex] = -(-tmpArr[rIndex]) + 1
        }
      }
      minBig = tmpArr.join('')
    }
  }
  // console.log(`minBig`, minBig);
  // console.log(`maxSmall`, maxSmall);
  // console.log(`needBig`, needBig);
  // console.log(`needSmall`, needSmall);
  if (Math.abs(maxSmall - n) <= Math.abs(minBig - n)) {
    return maxSmall
  }
  return minBig
};

function test() {
  let fun = nearestPalindromic;
  let params = [
    // '123',
    // "1213"
    // "12341113"
    // "1234111"
    // '10'
    // '100'
    // '99'
    // '11911'
    "11011"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()