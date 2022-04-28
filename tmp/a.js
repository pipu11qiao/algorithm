let canFinish = function (numCourses, prerequisites) {
  let visited = new Array(numCourses).fill(false);
  let memory = new Array(numCourses).fill(false);
  let map = new Map();
  for (let [cur, prev] of prerequisites) {
    if (cur === prev) return false;
    let temp = map.get(cur);
    temp ? temp.push(prev) : map.set(cur, [prev]);
  }

  let dfs = function (course) {
    if (!map.get(course) || memory[course]) {
      return true;
    }
    for (let pre of map.get(course)) {
      if (visited[pre]) {
        return false;
      }
      if (memory[pre]) {
        return true;
      }
      visited[pre] = true;
      if (!dfs(pre)) return false;
      visited[pre] = false;
    }
    return true;
  };

  //遍历起点
  for (let course of map.keys()) {
    if (memory[course]) continue;
    visited[course] = true;
    if (!dfs(course)) {
      return false;
    }
    memory[course] = true;
    visited[course] = false;
  }
  return true;
};
