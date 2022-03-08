/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
function getStrInfo(s) {
  let start = -1;
  let count = 0;
  let arr = [];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      if (start > 0) {
        count++
      }
    } else {
      if (count > 0) {
        arr.push(count);
        leftArr.push(start);
        rightArr.push(i);
        count = 0;
      }
      start = i
    }
  }
  // console.log(`arr`, arr);
  // console.log(`leftArr`, leftArr);
  // console.log(`rightArr`, rightArr);
  return {
    arr,
    leftArr,
    rightArr,
  }
}
function bFind(num, arr, isLeft, start, end,) {

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = arr.length - 1;
  }
  if (isLeft) {
    if (num > arr[end]) {
      return -1
    }
    if (num < arr[start]) {
      return start
    }
  } else {
    if (num < arr[start]) {
      return -1
    }
    if (num > arr[end]) {
      return end
    }
  }
  if (num === arr[start]) {
    return start
  } else if (num === arr[end]) {
    return end
  } else {
    let len = end - start + 1;
    if (len === 2) {
      return isLeft ? end : start;
    }
    mid = Math.floor((end - start) / 2) + start;
    if (num === arr[mid]) {
      return mid
    } else if (num < arr[mid]) {
      return bFind(num, arr, isLeft, start, mid)
    } else {
      return bFind(num, arr, isLeft, mid, end)
    }
  }

}
var platesBetweenCandles = function (s, queries) {
  const { arr, leftArr, rightArr } = getStrInfo(s);
  if (arr.length === 0) {
    return queries.map(_ => 0)
  }
  return queries.map(([left, right]) => {
    if (right < left + 1) {
      return 0
    }
    let startIndex = bFind(left, leftArr, true);
    let endIndex = bFind(right, rightArr, false);
    // console.log(`startIndex`, startIndex);
    // console.log(`endIndex`, endIndex);
    let sum = 0;
    if (startIndex > -1 && endIndex > -1) {
      for (let i = startIndex; i <= endIndex; i++) {
        sum += arr[i]
      }
    }
    return sum
  })
};

function test() {
  let fun = platesBetweenCandles;
  let params = [
    // "**|**|***|", [[2, 5], [5, 9]]
    // "***|**|*****|**||**|*", 
    "***|**|*****|**||**|*", [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()