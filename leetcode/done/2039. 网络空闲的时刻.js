/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
function getT(edges, nCount) {
  const allMap = {};
  let undoneArr = [];
  const baseMap = {};
  for (let i = 0; i < edges.length; i++) {
    const [m, n] = edges[i];
    let small = m >= n ? n : m;
    let big = m >= n ? m : n;
    if (small === 0) {
      allMap[big] = 1;
    } else {
      if (!baseMap[n]) {
        baseMap[n] = []
      }
      baseMap[n].push(m)
      if (!baseMap[m]) {
        baseMap[m] = []
      }
      baseMap[m].push(n)
    }
  }
  for (let i = 1; i < nCount; i++) {
    if (!allMap[i]) {
      undoneArr.push(i)
    }
  }
  while (undoneArr.length > 0) {
    let tmpArr = []
    for (let i = 0; i < undoneArr.length; i++) {
      let curIndex = undoneArr[i]

      const matchArr = baseMap[curIndex];
      let hasMath = false;
      for (let i = 0; i < matchArr.length; i++) {
        const matchIndex = matchArr[i]
        if (allMap[matchIndex]) {
          allMap[curIndex] = allMap[matchIndex] + 1
          hasMath = true;
          break
        }
      }
      if (!hasMath) {
        tmpArr.push(curIndex)
      }
    }
    undoneArr = tmpArr
  }
  return allMap
}
var networkBecomesIdle = function (edges, patience) {
  const timeMap = getT(edges, patience.length);
  console.log(`timeMap`, timeMap);
  const timeArr = patience.map((item, index) => {
    if (index === 0) { return 0 }
    const transferTime = 2 * timeMap[index];
    let sendTimes = Math.floor((transferTime - 1) / item);
    let allTime = sendTimes * item + transferTime
    console.log(`index,transferTime,sendTimes,allTime`, index, transferTime, sendTimes, allTime);
    return allTime
  })
  const res = Math.max.apply(Math, timeArr)
  return res + 1
  console.log(`timeArr`, timeArr);
};

function test() {
  let fun = networkBecomesIdle;
  let params = [
    // [[0, 1], [1, 2]], [0, 2, 1]
    // [[0, 1], [0, 2], [1, 2]], [0, 10, 10]
    [[5, 7], [15, 18], [12, 6], [5, 1], [11, 17], [3, 9], [6, 11], [14, 7], [19, 13], [13, 3], [4, 12], [9, 15], [2, 10], [18, 4], [5, 14], [17, 5], [16, 2], [7, 1], [0, 16], [10, 19], [1, 8]],
    [
      0, 2, 1, 1, 1,
      2, 2, 2, 2, 1,
      1, 1, 2, 1, 1,
      1, 1, 2, 1, 1
    ]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
