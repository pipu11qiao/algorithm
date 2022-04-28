/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let map = {}; //key 要学习的 value arr 依赖
  prerequisites.forEach(([num, pre]) => {
    if (map[num]) {
      map[num].push(pre)
    } else {
      map[num] = [pre]
    }

  })
  let visited = new Array(numCourses).fill(false);
  let memory = new Array(numCourses).fill(false);
  function dfs(num) {
    if (!map[num] || memory[num]) {
      return true
    }
    for (let i = 0; i < map[num].length; i++) {
      let pre = map[num][i]
      if (visited[pre]) {
        return false
      }
      if (memory[pre]) {
        return true
      }
      visited[pre] = true;
      if (!dfs(pre)) {
        return false
      }
      visited[pre] = false
    }
    return true
  }
  for (let key in map) {
    if (memory[key]) continue
    visited[key] = true;
    if (!dfs(key)) {
      return false
    }
    memory[key] = true;
    visited[key] = false;
  }
  return true
};

function test() {
  let fun = canFinish;
  let params = [
    // 2, [[0, 1]]
    3, [[1, 0], [1, 2], [0, 1]]
    // 4, [[0, 1], [3, 1], [1, 3], [3, 2]]
    // 2, [[1, 0], [0, 1]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()