/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  arr.sort((a, b) => a - b);
  const numMap = {};
  arr.forEach(num => {
    if (numMap[num] === undefined) {
      numMap[num] = 0;
    }
    numMap[num]++
  });
  let count = 0;
  const len = arr.length
  for (let i = 0; i < len && count <= len / 2; i++) {
    const curNum = arr[i];
    if (numMap[curNum]) {
      let factor = 2;
      if (curNum < 0) {
        factor = 1 / 2;
      }
      numMap[curNum]--;
      let nextNum = curNum * factor;
      if (!numMap[nextNum]) {
        return false
      } else {
        count++
        numMap[nextNum]--
      }
    }
  }
  return true
};

function test() {
  let fun = canReorderDoubled;
  let params = [
    // [3, 1, 3, 6]
    // [2, 1, 2, 6]
    [4, -2, 2, -4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()