/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (arr) {
  let r = 1;
  let curDir = 'u';// d donw u up
  let hArr = []; // 山峰数组
  // 先找山顶
  for (; r <= arr.length; r++) {
    const curNum = arr[r];
    if (curNum === undefined || curNum < arr[r - 1]) {
      if (curDir === 'u') {
        hArr.push(r - 1);
      }
      curDir = 'd';
    } else if (curNum > arr[r - 1]) {
      if (curDir === 'd') {
        curDir = 'u'
      }
    }
  }
  let max = Number.NEGATIVE_INFINITY;
  let maxIndex = -1;
  for (let i = 0; i < hArr.length; i++) {
    if (arr[hArr[i]] > max) {
      max = arr[hArr[i]]
      maxIndex = i
    }
  }
  let left = 0;
  let right = 0;
  let res = 0;
  // debugger
  while (right <= maxIndex) {
    const curNum = arr[hArr[right]];
    const prevNum = arr[hArr[left]]
    if (curNum >= prevNum) {
      const curMaxH = prevNum
      for (let m = hArr[left]; m <= hArr[right]; m++) {
        const curH = curMaxH - arr[m];
        res += curH > 0 ? curH : 0
      }
      left = right
    }
    right++
  }
  left = hArr.length - 1;
  right = hArr.length - 1;
  while (left >= maxIndex) {
    const curNum = arr[hArr[left]];
    const prevNum = arr[hArr[right]]
    if (curNum >= prevNum) {
      const curMaxH = prevNum
      for (let m = hArr[left]; m <= hArr[right]; m++) {
        const curH = curMaxH - arr[m];
        res += curH > 0 ? curH : 0
      }
      right = left
    }
    left--
  }
  return res
};

function test() {
  let fun = trap;
  let params = [
    // [4, 2, 0, 3, 2, 5]
    [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    // [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()