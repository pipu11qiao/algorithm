/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let visited = new Array(numCourses).fill(false);
  let memory = new Array(numCourses).fill(false);
  let map = new Map(); //key 要学习的 value arr 依赖

  for (let [cur, prev] of prerequisites) {
    let temp = map.get(cur);
    temp ? temp.push(prev) : map.set(cur, [prev])
  }
  let dfs = function (course) {
    if (!map.get(course) || memory[course]) {
      return true
    }
    for (let pre of map.get(course)) {
      if (visited[pre]) {
        return false;
      }
      if (memory[pre]) {
        return true
      }
      visited[pre] = true;
      if (!dfs(pre)) return false;
      visited[pre] = false;
    }
    return true
  }
  for (let course of map.keys()) {
    if (memory[course]) continue
    visited[course] = true;
    if (!dfs(course)) {
      return false
    }
    memory[course] = true;
    visited[course] = false;
  }
  return true
};

function test() {
  let fun = canFinish;
  let params = [
    2, [[1, 0], [0, 1]]
    // 2, [[1, 0]]
    // 4, [[0, 1], [3, 1], [1, 3], [3, 2]]
    // 2, [[1, 0], [0, 1]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()