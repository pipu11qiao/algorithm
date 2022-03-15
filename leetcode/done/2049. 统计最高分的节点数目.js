/**
 * @param {number[]} parents
 * @return {number}
 */
function pre(map, countMap, val, parentKeyArr) {
  parentKeyArr.forEach(key => countMap[key] = (countMap[key] || 0) + 1);
  if (map[val]) {
    map[val].forEach(item => {
      pre(map, countMap, item, [...parentKeyArr, val])
    })
  }
}
function getCountMap(parents) {
  const len = parents.length
  let map = {};
  parents.forEach((item, index) => {
    if (!map[item]) {
      map[item] = []
    }
    map[item].push(index)
  });
  const countMap = {};
  pre(map, countMap, -1, [])
  return { map, countMap }
}

var countHighestScoreNodes = function (parents) {
  const { countMap, map } = getCountMap(parents);
  // console.log(`countMap`, countMap);
  const len = parents.length;
  let max = Number.NEGATIVE_INFINITY;
  let maxMap = {};
  // console.log(`map`, map);
  for (let i = 0; i < parents.length; i++) {
    let key = i;
    let curRes = len - 1;
    if (map[key]) {
      let factor1 = 1;
      let factor2 = 1;
      let factor3 = 1;
      let remain = len - countMap[key] - 1
      if (remain > 0) {
        factor1 = remain;
      }
      factor2 = (countMap[map[key][0]] || 0) + 1
      if (map[key].length > 1) {
        factor3 = (countMap[map[key][1]] || 0) + 1
      }
      curRes = factor1 * factor2 * factor3;
    }
    // console.log(`curRes`, curRes);
    if (maxMap[curRes] === undefined) {
      maxMap[curRes] = 0
    }
    maxMap[curRes]++

    max = Math.max(curRes, max);
  }
  // console.log(`maxMap`, maxMap);
  return maxMap[max]
};

function test() {
  let fun = countHighestScoreNodes;
  let params = [
    [-1, 2, 0, 2, 0]
    // [-1, 2, 0]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()