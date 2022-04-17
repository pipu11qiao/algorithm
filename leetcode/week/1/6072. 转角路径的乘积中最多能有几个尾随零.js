/**
 * @param {number[][]} grid
 * @return {number}
 */
function getFactorCount(num, k) {
  let tmp = num;
  let count = 0
  while (tmp % k === 0) {
    count++;
    tmp /= k
  }
  return count
}
var maxTrailingZeros = function (grid) {
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let rowMulArr = []
  const tmp = [];
  for (let r = 0; r < rowLen; r++) {
    const arr = [];
    for (let c = 0; c < colLen; c++) {
      const curNum = grid[r][c];
      arr.push([getFactorCount(curNum, 2), getFactorCount(curNum, 5)])
    }
    tmp.push(arr)
  }
  grid = tmp
  for (let r = 0; r < rowLen; r++) {
    let mulArr = [];
    let cur = [0, 0];
    for (let c = 0; c < colLen; c++) {
      cur[0] = cur[0] + grid[r][c][0];
      cur[1] = cur[1] + grid[r][c][1];
      mulArr.push([...cur])
    }
    rowMulArr.push(mulArr)
  }
  let colMulArr = []
  for (let c = 0; c < colLen; c++) {
    let mulArr = [];
    let cur = [0, 0];
    for (let r = 0; r < rowLen; r++) {
      cur[0] = cur[0] + grid[r][c][0];
      cur[1] = cur[1] + grid[r][c][1];
      mulArr.push([...cur])
    }
    colMulArr.push(mulArr)
  }
  let max = 0;

  function getCount(num) {
    console.log(`num`, num);
    let count = Math.min(num[0], num[1])
    max = Math.max(count, max)
  }
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      const curNum = grid[r][c]
      let cur = 0;
      let curRes1 = 0
      let curRes2 = 0
      // 左
      cur = rowMulArr[r][c];
      if (cur[0] !== 0 && cur[1] !== 0) {
        curRes1 = [
          cur[0] + colMulArr[c][r][0] - curNum[0],
          cur[1] + colMulArr[c][r][1] - curNum[1],
        ]
        getCount(curRes1)
        curRes2 = [
          cur[0] + colMulArr[c][rowLen - 1][0] - colMulArr[c][r][0],
          cur[1] + colMulArr[c][rowLen - 1][1] - colMulArr[c][r][1]
        ]
        getCount(curRes2)
      }
      // 右
      if (c < colLen - 1) {
        cur = [
          rowMulArr[r][colLen - 1][0] - rowMulArr[r][c][0] + curNum[0],
          rowMulArr[r][colLen - 1][1] - rowMulArr[r][c][1] + curNum[1],
        ];
        if (cur[0] !== 0 && cur[1] !== 0) {
          curRes1 = [
            cur[0] + colMulArr[c][r][0] - curNum[0],
            cur[1] + colMulArr[c][r][1] - curNum[1],
          ]
          getCount(curRes1)
          curRes2 = [
            cur[0] + colMulArr[c][rowLen - 1][0] - colMulArr[c][r][0],
            cur[1] + colMulArr[c][rowLen - 1][1] - colMulArr[c][r][1]
          ]
          getCount(curRes2)
          getCount(curRes2)
        }
      }
    }
  }
  return max

};

function test() {
  let fun = maxTrailingZeros;
  let params = [
    // [
    //   [23, 17, 15, 3, 20],
    //   [8, 1, 20, 27, 11],
    //   [9, 4, 6, 2, 21],
    //   [40, 9, 1, 10, 6],
    //   [22, 7, 4, 5, 3]]
    // [[4, 3, 2], [7, 6, 1], [8, 8, 8]]
    [
      [824, 709, 193, 413, 701, 836, 727],
      [135, 844, 599, 211, 140, 933, 205],
      [329, 68, 285, 282, 301, 387, 231],
      [293, 210, 478, 352, 946, 902, 137],
      [806, 900, 290, 636, 589, 522, 611],
      [450, 568, 990, 592, 992, 128, 92],
      [780, 653, 795, 457, 980, 942, 927],
      [849, 901, 604, 906, 912, 866, 688]
    ]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()