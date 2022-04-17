/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  tasks.sort((a, b) => a - b);
  let l = 0;
  let prev = tasks[0]
  let res = 0;
  for (let r = 1; r <= tasks.length; r++) {
    const curNum = tasks[r];
    if (curNum === undefined || curNum !== prev) {
      let count = r - l;
      if (count === 1) {
        return -1
      }
      let a = Math.floor(count / 3);
      let b = Math.floor(count % 3);
      res += b === 0 ? a : a + 1
      l = r
      prev = tasks[r]
    }
  }
  return res
};

function test() {
  let fun = minimumRounds;
  let params = [
    [2, 2, 3, 3, 2, 4, 4, 4, 4, 4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()