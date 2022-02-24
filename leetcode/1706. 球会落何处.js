/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let ballArr = [];
  let okBallArr = [];
  for (let i = 0; i < colLen; i++) {
    okBallArr.push(i);
    ballArr.push({
      originIndex: i,
      curIndex: i
    });
  }
  for (let m = 0; m < rowLen; m++) {
    if (okBallArr.length === 0) {
      break
    }
    let tmpOkBallArr = []
    for (let n = 0; n < okBallArr.length; n++) {
      let index = okBallArr[n];
      let curBallObj = ballArr[index];
      let curIndex = curBallObj.curIndex;
      if (grid[m][curIndex] === 1 && grid[m][curIndex + 1] === 1) {
        tmpOkBallArr.push(index);
        curBallObj.curIndex = curIndex + 1
      } else if (grid[m][curIndex] === -1 && grid[m][curIndex - 1] === -1) {
        tmpOkBallArr.push(index);
        curBallObj.curIndex = curIndex - 1
      } else {
        curBallObj.curIndex = -1;
      }
    }
    okBallArr = tmpOkBallArr;
  }
  return ballArr.map(item => item.curIndex)
};

function test() {
  let fun = findBall;
  let params = [
    // [[-1]]
    [[1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1], [1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1]]
    // [[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()