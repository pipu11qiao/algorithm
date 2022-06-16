/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const visitedMap = {};
  const arr = [n];
  visitedMap[n] = 1
  let step = 0;
  debugger
  while (arr.length) {
    let len = arr.length;
    while (len > 0) {
      const curNum = arr.shift();
      // if (visitedMap[curNum]) {
      //   continue
      // }
      let maxNum = Math.floor(Math.sqrt(curNum));
      for (let i = 1; i <= maxNum; i++) {
        let remainNum = curNum - (i * i);
        if (remainNum === 0) {
          return step + 1
        } else if (!visitedMap[remainNum]) {
          visitedMap[remainNum] = 1
          arr.push(remainNum)
        }
      }
      len--
    }
    step++
  }

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