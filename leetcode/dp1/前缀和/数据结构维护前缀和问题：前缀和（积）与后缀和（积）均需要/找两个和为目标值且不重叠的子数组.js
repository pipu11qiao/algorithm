/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function getMinCountArr(arr, target) {
  let len = arr.length;
  let sum = 0;
  let resMap = new Map();
  resMap.set(0, -1);
  let min = Number.POSITIVE_INFINITY;
  let resArr = [];
  for (let i = 0; i < len; i++) {
    sum += arr[i];
    resMap.set(sum, i);
    if (resMap.has(sum - target)) {
      let count = i - resMap.get(sum - target);
      min = Math.min(min, count);
    }
    resArr[i] = min === Number.POSITIVE_INFINITY ? -1 : min;
  }
  return resArr;
}
var minSumOfLengths = function (arr, target) {
  let len = arr.length;
  if (len < 2) {
    return -1;
  }
  let leftArr = getMinCountArr(arr, target);
  let tmpArr = [...arr];
  tmpArr.reverse();
  let rightArr = getMinCountArr(tmpArr, target);
  rightArr.reverse();
  let res = Number.POSITIVE_INFINITY;
  for (let i = 0; i < len - 1; i++) {
    let leftCount = leftArr[i];
    let rightCount = rightArr[i + 1];
    if (leftCount > -1 && rightCount > -1) {
      res = Math.min(res, leftCount + rightCount);
      if (res === 2) {
        return 2;
      }
    }
  }
    return res === Number.POSITIVE_INFINITY ? -1 : res;
};

function test() {
  let fun = minSumOfLengths;
  let params = [
    //[1, 1, 1, 0]
    [3, 2, 2, 4, 3],
    3,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
