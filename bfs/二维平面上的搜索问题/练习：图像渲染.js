/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const dirObj = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var floodFill = function (image, sr, sc, newColor) {
  const visitedMap = {};
  const m = image.length;
  const n = image[0].length;
  function bfs(i, j) {
    let arr = [[i, j]];
    const curNum = image[i][j];
    while (arr.length > 0) {
      const tmpArr = [];
      arr.forEach(([curI, curJ]) => {
        image[curI][curJ] = newColor
        dirObj.forEach(dirObj => {
          const nextI = curI + dirObj[0];
          const nextJ = curJ + dirObj[1];
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            if (image[nextI][nextJ] === curNum && !visitedMap[`${nextI}-${nextJ}`]) {
              visitedMap[`${nextI}-${nextJ}`] = 1
              tmpArr.push([nextI, nextJ]);
            }
          }
        })
      });
      arr = tmpArr;
    }
  }
  visitedMap[`${sr}-${sc}`] = 1
  bfs(sr, sc);
  return image;
};

function test() {
  let fun = floodFill;
  let params = [
    [[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2
    // [[0, 0, 0], [0, 0, 0]], 0, 0, 2
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()