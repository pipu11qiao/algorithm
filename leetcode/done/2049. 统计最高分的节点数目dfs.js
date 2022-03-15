/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  const len = parents.length;
  const childrenArr = new Array(len).fill(0).map(item => []);
  parents.forEach((item, i) => {
    if (item !== -1) {
      childrenArr[item].push(i);
    }
  })
  // 返回节点数量
  let maxScore = len - 1
  let res = 0;
  function dfs(node) {
    let score = 1;
    let size = 1;
    childrenArr[node].forEach(_node => {
      const childCount = dfs(_node)
      score *= childCount;
      size += childCount;
    })
    const remain = len - size;
    if (remain > 0) {
      score *= remain
    }
    // console.log(`node`, node);
    // console.log(`score`, score);
    if (score === maxScore) {
      res++
    }
    if (score > maxScore) {
      res = 1;
      maxScore = score;
    }
    return size
  }
  dfs(0)
  return res;
};

function test() {
  let fun = countHighestScoreNodes;
  let params = [
    // [-1, 2, 0, 2, 0]
    [-1, 2, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()