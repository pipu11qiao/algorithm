/**
 * @param {number[][]} grid m*n
 * @return {number}
 */

function scan(point, overMap, map) {
  const { r, c } = point;
  const key = `${r}-${c}`;
  map[key] = 1;
  overMap[key] = 1;
  [{ r: r - 1, c }, { r: r + 1, c }, { r, c: c - 1 }, { r, c: c + 1 }].forEach(_p => {
    const _key = `${_p.r}-${_p.c}`;
    if (map[_key] !== undefined && overMap[_key] !== 1) {
      scan(_p, overMap, map)
    }
  })
}

var numEnclaves = function (grid) {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  // 1的位置集合，值是1表示可以到达，0是不能到达
  let map = {};
  // 扫描过程中是否已经扫描过
  let overMap = {}
  const surroundPoint = [];
  for (let m = 0; m < rowLen; m++) {
    for (let n = 0; n < colLen; n++) {
      const num = grid[m][n];
      if (
        (m === 0 || m === rowLen - 1)
        || (n === 0 || n === colLen - 1)
      ) {
        surroundPoint.push({
          r: m,
          c: n
        })
      }
      if (num === 1) {
        let key = `${m}-${n}`;
        map[key] = 0;
        overMap[key] = 0;
      }
    }
  }
  // 沿着边扫描
  surroundPoint.forEach(point => {
    if (grid[point.r][point.c] === 1) {
      scan(point, overMap, map)
    }
  })
  return Object.keys(map).filter(key => map[key] === 0).length
};

function test() {
  const grid = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
  // const grid = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
  const res = numEnclaves(grid)
  console.log(`res`, res);
}

test()