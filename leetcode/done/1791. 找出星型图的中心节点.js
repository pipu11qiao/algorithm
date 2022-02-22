/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const len = edges.length;
  let map = {}
  for (let i = 0; i < len; i++) {
    let num = edges[i][0];
    if (map[num] === undefined) {
      map[num] = 0;
    }
    map[num]++
    num = edges[i][1];
    if (map[num] === undefined) {
      map[num] = 0;
    }
    map[num]++
  }
  for (let numStr in map) {
    if (map[numStr] === len) {
      return numStr
    }
  }
};
function test() {
  const edges = [[1, 2], [2, 3], [4, 2]]
  const res = findCenter(edges);
  console.log(`res`, res);
}
test()