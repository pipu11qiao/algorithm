/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

function bfs(adj, i, visitedMap) {
  visitedMap[i] = 1;
  let arr = adj[i];
  while (arr.length > 0) {
    let tmpArr = [];
    arr.forEach(item => {
      if (!visitedMap[item] && adj[item].length > 0) {
        adj[item].forEach(_item => {
          tmpArr.push(_item)
        })
        visitedMap[item] = 1;
      }
    })
    arr = tmpArr
  }
}
var countComponents = function (n, edges) {
  const adj = new Array(n).fill(0).map(_ => []);
  edges.forEach(item => {
    adj[item[0]].push(item[1]);
    adj[item[1]].push(item[0]);
  })
  let visitedMap = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visitedMap[i]) {
      count++
      bfs(adj, i, visitedMap)
    }

  }
  return count
};

function test() {
  let fun = countComponents;
  let params = [
    5, [[0, 1], [1, 2], [3, 4]]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()