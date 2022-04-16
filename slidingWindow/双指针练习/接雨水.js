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
  let h = hArr[0];
  let left = 0;
  let max = Number.NEGATIVE_INFINITY;
  let maxIndex = -1;
  for (let i = 0; i < hArr.length; i++) {
    if (hArr[i] > max) {
      max = hArr[i]
      maxIndex = i
    }
  }
  let right = 0;
  let curMax = -1
  while (right < maxIndex) {
    const curNum = arr[right];
    if(curNum>curMax){

    }

  }

  debugger
};

function test() {
  let fun = trap;
  let params = [
    [4, 2, 0, 3, 2, 5]
    // [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()