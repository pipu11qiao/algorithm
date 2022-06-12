/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const queue = [n];
  let step = 1
  const visitedArr = new Array(n + 1).fill(false);
  while (queue.length) {
    const len = queue.length;
    for (let m = 0; m < len; m++) {
      const num = queue.shift();
      const max = Math.floor(Math.sqrt(num));
      for (let i = 1; i <= max; i++) {
        if (i * i === num) {
          return step
        }
        const next = num - i * i;
        if (!visitedArr[next]) {
          queue.push(next)
          visitedArr[next] = true
        }
      }
    }

    step++
  }
  return 0
};

function test() {
  let fun = numSquares;
  let params = [
    // 12
    13
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()