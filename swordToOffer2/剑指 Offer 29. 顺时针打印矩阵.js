/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix, startR, endR, startC, endC, resArr) {
  const rLen = matrix.length;
  if (rLen === 0) {
    return []
  }
  const cLen = matrix[0].length;
  if (cLen === 0) {
    return []
  }
  resArr = resArr || [];
  startR = startR === undefined ? 0 : startR;
  endR = endR === undefined ? rLen - 1 : endR;
  startC = startC === undefined ? 0 : startC;
  endC = endC === undefined ? cLen - 1 : endC;
  if (startR > endR || startC > endC) {
    return
  }
  if (startR <= endR || startC <= endC) {
    if (startR === endR) {
      for (let c = startC; c <= endC; c++) {
        resArr.push(matrix[startR][c]);
      }
    } else if (startC === endC) {
      for (let r = startR; r <= endR; r++) {
        resArr.push(matrix[r][endC]);
      }
    } else {
      const configArr = [
        { sI: startC, eI: endC, step: 1, type: 'row', r: startR },
        { sI: startR + 1, eI: endR, step: 1, type: 'col', c: endC },
        { sI: endC - 1, eI: startC, step: -1, type: 'row', r: endR },
        { sI: endR - 1, eI: startR + 1, step: -1, type: 'col', c: startC },
      ]
      configArr.forEach(({ sI, eI, step, type, r, c }) => {
        for (let i = sI; step > 0 ? i <= eI : i >= eI; i += step) {
          resArr.push(matrix[type === 'row' ? r : i][type === 'col' ? c : i])
        }
      })
      spiralOrder(matrix, startR + 1, endR - 1, startC + 1, endC - 1, resArr)
    }
  }
  return resArr
};

function test() {
  let fun = spiralOrder;
  let params = [
    [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
    // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    // [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()