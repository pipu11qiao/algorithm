/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  const countMap = {};
  const map = {};
  for (let i = 0; i < parents.length; i++) {
    let parentKey = parents[i];
    if (!map[parentKey]) {
      map[parentKey] = []
    }
    map[parentKey].push(i)
    while (true) {
      if (countMap[parentKey] === undefined) {
        countMap[parentKey] = 0
      }
      countMap[parentKey]++;
      if (parentKey === -1) {
        break
      }
      parentKey = parents[parentKey]
    }
  }

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
  console.log(`countMap`, countMap);
};

function test() {
  let fun = countHighestScoreNodes;
  let params = [
    [-1, 2, 0, 2, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()