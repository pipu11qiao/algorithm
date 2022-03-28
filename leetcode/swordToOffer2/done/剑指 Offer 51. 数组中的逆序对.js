/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length < 2) {
    return 0
  }
  let res = 0;
  function mergeSort(arr) {
    const len = arr.length;
    if (len === 1) {
      return arr
    }
    const mid = Math.floor((len - 1) / 2);
    const leftArr = mergeSort(arr.slice(0, mid + 1));
    const rightArr = mergeSort(arr.slice(mid + 1));
    let i = 0;
    let j = 0;
    const resArr = []
    while (i < leftArr.length && j < rightArr.length) {
      const leftNum = leftArr[i];
      const rightNum = rightArr[j];
      if (leftNum <= rightNum) {
        resArr.push(leftNum);
        i++
      } else {
        res += leftArr.length - i
        resArr.push(rightNum);
        j++
      }
    }
    while (i < leftArr.length) {
      resArr.push(leftArr[i]);
      i++
    }
    while (j < rightArr.length) {
      resArr.push(rightArr[j]);
      j++
    }
    return resArr;
  }
  const numArr = mergeSort(nums);
  console.log(`numArr`, numArr);
  return res;
};

function test() {
  let fun = reversePairs;
  let params = [
    [1, 3, 2, 3, 1]
    // [7, 5, 6, 4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()