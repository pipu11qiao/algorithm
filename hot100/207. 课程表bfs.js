/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let graph = {};
  let queue = [];
  prerequisites.forEach(([cur, pre]) => {
    if (graph[pre]) {
      graph[pre].push(cur)
    } else {
      graph[pre] = [cur]
    }
    inDegree[cur]++
  })
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }
  while (queue.length > 0) {
    let curCourse = queue.shift();
    if (graph[curCourse]) {
      for (let i = 0; i < graph[curCourse].length; i++) {
        let pre = graph[curCourse][i]
        inDegree[pre]--
        if (inDegree[pre] === 0) {
          queue.push(pre)
        }
      }
    }
  }
  // 判断是不是所有课程都能上了
  return inDegree.every(v => v == 0)
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