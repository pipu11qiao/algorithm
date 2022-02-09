/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */

function getLinePoint(point, n) {
  const [row, col] = point
  return {
    row,
    col,
    bias1: row + col - n + 1,
    bias2: row - col
  }
}
function getAllPoint(point, n) {
  const [row, col] = point;
  const arr = [];
  for (let r = row - 1; r < row + 2; r++) {
    if (r < 0 || r > n - 1) {
      continue
    }
    for (let c = col - 1; c < col + 2; c++) {
      if (c < 0 || c > n - 1) {
        continue
      }
      arr.push([r, c])
    }
  }
  return arr
}

var gridIllumination = function (n, lamps, queries) {
  const map = {
    row: {},
    col: {},
    bias1: {},
    bias2: {},
  };
  const pointMap = {}
  lamps.forEach(point => {
    const [row, col] = point;
    let keyStr = `${row}-${col}`;
    if (pointMap[keyStr] === undefined) {
      pointMap[keyStr] = 0
    }
    pointMap[keyStr]++
    const linePoint = getLinePoint(point, n);
    for (var key in linePoint) {
      const num = linePoint[key]
      if (map[key][num] === undefined) {
        map[key][num] = 0
      }
      map[key][num]++
    }
  })
  console.log(`pointMap`, pointMap);
  console.log(`map`, map);
  const res = [];
  const len = queries.length;
  for (let i = 0; i < len; i++) {
    const queryPoint = queries[i];
    const linePoint = getLinePoint(queryPoint, n);
    res.push(Object.keys(linePoint).some(key => map[key][linePoint[key]] > 0) ? 1 : 0);

    // 查看周围删除的点
    // 如果有清除点，并且清除lineMap
    const allPoint = getAllPoint(queryPoint, n)
    allPoint.forEach(point => {
      const [row, col] = point;
      let keyStr = `${row}-${col}`;
      let count = pointMap[keyStr];
      if (count > 0) {
        pointMap[keyStr] = 0;
        const removeLinePoint = getLinePoint(point, n);
        for (var key in removeLinePoint) {
          const num = removeLinePoint[key]
          map[key][num] -= count;
        }
      }
    })

  }
  console.log(`pointMap`, pointMap);
  console.log(`map`, map);
  return res
};

function test() {
  const res = gridIllumination(
    5,
    [[0, 0], [4, 4]],
    [[1, 1], [1, 1]]
  )
  console.log(`res`, res);
}
test()