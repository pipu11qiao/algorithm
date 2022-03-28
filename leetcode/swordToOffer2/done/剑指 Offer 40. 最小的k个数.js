/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const len = arr.length;
  if (k === len) {
    return arr
  }
  let limit = arr[0];
  let leftArr = [];
  let midArr = [limit];
  let rightArr = [];
  for (let i = 1; i < len; i++) {
    const cur = arr[i]
    if (cur < limit) {
      leftArr.push(cur);
    } else if (cur === limit) {
      midArr.push(cur);
    } else {
      rightArr.push(cur);
    }
  }
  if (leftArr.length > k) {
    return getLeastNumbers(leftArr, k)
  } else if (leftArr.length === k) {
    return leftArr
  } else if (leftArr.length + midArr.length >= k) {
    return [...leftArr, ...midArr.slice(0, k - leftArr.length)]
  } else {
    return [...leftArr, ...midArr, ...getLeastNumbers(rightArr, k - leftArr.length - midArr.length)]
  }
};

function test() {
  let fun = getLeastNumbers;
  let params = [
    [4, 1, 1, 1, 2, 3, 3, 4, 5, 6, 8, 9, 2, 3, 3, 3], 16
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()