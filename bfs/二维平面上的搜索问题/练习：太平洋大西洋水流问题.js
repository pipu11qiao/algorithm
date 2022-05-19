/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

let dirArr = [[1, 0], [-1, 0], [0, 1], [0, -1]]
var pacificAtlantic = function (heights) {
  let pMap = {};// 能到达太平洋的
  let aMap = {};// 能到达大西洋的
  const m = heights.length;
  const n = heights[0].length;
  const pArr = [...heights[0].map((item, index) => [0, index])]
  for (let i = 1; i < m; i++) {
    pArr.push([i, 0]);
  }
  const aArr = [...heights[m - 1].map((item, index) => [m - 1, index])]
  for (let i = 0; i < m - 1; i++) {
    aArr.push([i, n - 1]);
  }
  [pArr, aArr].forEach((_arr, i) => {
    let visitedMap = {};
    _arr.forEach(([curI, curJ]) => {
      if (!visitedMap[`${curI}-${curJ}`]) {
        visitedMap[`${curI}-${curJ}`] = 1;
        bfs(curI, curJ, dirArr, visitedMap, i === 0 ? pMap : aMap);
      }
    })
  })

  function bfs(i, j, _dirArr, _visitedMap, _rMap) {
    let arr = [[i, j]];
    while (arr.length > 0) {
      const tmpArr = [];
      arr.forEach(([curI, curJ]) => {
        _rMap[`${curI}-${curJ}`] = 1;
        _dirArr.forEach(dirObj => {
          const nextI = curI + dirObj[0];
          const nextJ = curJ + dirObj[1];
          if (nextI > -1 && nextI < m && nextJ > -1 && nextJ < n) {
            if (heights[nextI][nextJ] >= heights[curI][curJ] && !_visitedMap[`${nextI}-${nextJ}`]) {
              _visitedMap[`${nextI}-${nextJ}`] = 1
              tmpArr.push([nextI, nextJ])
            }
          }
        })
      })
      arr = tmpArr;
    }
  }
  debugger
  let res = [];
  heights.forEach((item, _m) => {
    item.forEach((_item, _n) => {
      let key = `${_m}-${_n}`;
      if (pMap[key] && aMap[key]) {
        res.push([_m, _n])
      }
    })
  })
  return res
};

function test() {
  let fun = pacificAtlantic;
  let params = [
    // [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
    // [[2, 1], [1, 2]]
    [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()