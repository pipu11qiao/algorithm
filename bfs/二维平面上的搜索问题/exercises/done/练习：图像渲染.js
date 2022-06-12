/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var floodFill = function (image, sr, sc, newColor) {
  const m = image.length;
  const n = image[0].length;
  const visitedMap = {};
  const curNum = image[sr][sc];

  bfs([[sr, sc]]);

  function bfs(queue) {
    while (queue.length) {
      const pos = queue.shift();
      const [curI, curJ] = pos;
      image[curI][curJ] = newColor

      dirArr.forEach(([i, j]) => {
        const nextI = pos[0] + i;
        const nextJ = pos[1] + j;
        if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
          if (image[nextI][nextJ] === curNum && !visitedMap[`${nextI}-${nextJ}`]) {
            visitedMap[`${nextI}-${nextJ}`] = 1;
            queue.push([nextI, nextJ])
          }
        }
      })
    }
  }
  return image
};

function test() {
  let fun = floodFill;
  let params = [
    // [[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2
    [[0, 0, 0], [0, 0, 0]], 0, 0, 2
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()