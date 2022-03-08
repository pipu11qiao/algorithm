/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// 数组中不超过k的连续子序列最大数值和
function getSub(arr, k) {
  let prevRes = [];
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    prevRes = prevRes.map(item => item + cur);
    prevRes.push(cur);
    for (let j = 0; j < prevRes.length; j++) {
      const item = prevRes[j];
      if (item === k) {
        max = k;
        break
      } else if (item < k) {
        if (item > max) {
          max = item;
        }
      }
    }
    if (max === k) {
      break
    }
  }
  return max

}
var maxSumSubmatrix = function (matrix, k) {

  let rowLen = matrix.length;
  let resMax = Number.NEGATIVE_INFINITY;
  for (let r = 0; r < rowLen; r++) {
    const max = getSub(matrix[r], k);
    if (max === k) {
      return max
    }
    if (max > resMax) {
      resMax = max
    }
    let sumArr = [...matrix[r]]
    for (let j = r - 1; j >= 0; j--) {
      matrix[j].forEach((item, index) => {
        sumArr[index] += item
      })
      const max = getSub(sumArr, k);
      if (max === k) {
        return max
      }
      if (max > resMax) {
        resMax = max
      }
    }
  }
  return resMax
};

function test() {
  let fun = maxSumSubmatrix;
  let params = [
    // [[1, 0, 1], [0, -2, 3]], 2
    [[2, 2, -1]], 0
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
  // const res = getSub([2, 2, 8, 10, -19, -20, -1], 13)
  // const res = getSub([2, 2, -1], 3)
  // console.log(`res`, res);
}
test()