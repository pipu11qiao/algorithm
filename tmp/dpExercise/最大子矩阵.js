/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var maxSubArray = function (nums) {
  let prev = Number.NEGATIVE_INFINITY;
  let max = prev;
  let start = -1
  let end = -1
  let begin = -1;
  for (let i = 0; i < nums.length; i++) {
    if (prev <= 0) {
      begin = i
    }
    prev = Math.max(prev, 0) + nums[i]
    if (prev > max) {
      start = begin;
      end = i
      max = prev
    }
  }
  return {
    max,
    start,
    end,
  }
};
var getMaxMatrix = function (matrix) {
  let rowLen = matrix.length;
  let resMax = Number.NEGATIVE_INFINITY;
  let res = [-1, -1, -1, -1];
  for (let r = 0; r < rowLen; r++) {
    const { max, start, end } = maxSubArray(matrix[r]);
    // console.log(`max, start, end`, max, start, end);
    if (max > resMax) {
      resMax = max
      res = [r, start, r, end]
    }
    let sumArr = [...matrix[r]]
    for (let j = r - 1; j >= 0; j--) {
      matrix[j].forEach((item, index) => {
        sumArr[index] += item
      })
      const { max, start, end } = maxSubArray(sumArr);
    // console.log(`max, start, end`, max, start, end);
      if (max > resMax) {
        resMax = max
        res = [j, start, r, end]
      }
    }
  }
  return res
};

function test() {
  let fun = getMaxMatrix;
  let params = [
    [
      [-1, 0],
      [0, -1]
    ]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()