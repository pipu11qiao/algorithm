/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function (k, arrival, load) {
  debugger
  const serverArr = new Array(k).fill(0).map((_, i) => ({
    index: i,
    count: 0,
    endTime: -1,
  }));
  for (let i = 0; i < arrival.length; i++) {
    let startI = i;
    let m = startI % k;
    const firstM = m;
    arrivalTime = arrival[startI]
    while (true) {
      const curServer = serverArr[m];
      if (curServer.endTime <= arrivalTime) {
        curServer.count++
        curServer.endTime = arrivalTime + load[i];
        break
      }
      m++;
      if (m === k) {
        m = 0
      }
      if (m === firstM) {
        break
      }
    }
  }
  let max = Math.max.apply(Math, serverArr.map(item => item.count));
  return serverArr.filter(item => item.count === max).map(item => item.index);

};


function test() {
  let fun = busiestServers;
  let params = [
    // 3, [1, 2, 3, 4, 5], [5, 2, 3, 3, 3]
    // 3, [1, 2, 3, 4], [1, 2, 1, 2]
    // 3, [1, 2, 3], [10, 12, 11]
    // 3, [1, 2, 3, 4, 8, 9, 10], [5, 2, 10, 3, 1, 2, 2]
    1, [1], [1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()