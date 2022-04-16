/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let l = 0;
  let r = 1;
  let curDir = 'd';// d donw u up
  let hasUp = false;
  let count = 0;
  let max = 0;
  // debugger
  for (; r <= arr.length; r++) {
    const curNum = arr[r];
    if (curNum === undefined || curNum > arr[r - 1]) {
      if (curDir === 'd') {
        if (hasUp) {
          max = Math.max(count, max)
        }
        curDir = 'u'
        count = 2
      } else {
        count++
      }
      if (!hasUp) {
        hasUp = true
      }
    } else if (curNum < arr[r - 1]) {
      if (hasUp) {
        if (curDir === 'u') {
          curDir = 'd'
        }
        count++
      }
    } else {
      if (curDir === 'd' && hasUp) {
        max = Math.max(count, max)
      }
      curDir = 'd';// d donw u up
      hasUp = false;
      count = 0
    }
  }
  return max
};

function test() {
  let fun = longestMountain;
  let params = [
    [0, 2, 2]
    // [2, 1, 4, 7, 3, 2, 5]
    [0, 0, 1, 0, 0, 1, 1, 1, 1, 1]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()