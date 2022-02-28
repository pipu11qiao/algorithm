/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  let step = 0;
  let maxD = startFuel;
  let nextMax = 0;
  for (let i = -1; i <= stations.length; i++) {
    if (maxD >= target) {
      return step;
    }
    if (maxD + nextMax >= target) {
      return step + 1;
    }
    let obj = stations[i];
    if (!obj) {
      continue
    }
    if (obj[0] <= maxD) {
      nextMax = Math.max(nextMax, obj[1])
    } else {
      if (obj[0] <= maxD + nextMax) {
        maxD = maxD + nextMax
        nextMax = obj[1];
        step++
      } else {
        break
      }
    }
  }
  return -1;
};
function test() {
  let fun = minRefuelStops;
  let params = [
    // 1, 1, []
    // 100, 1, [[10, 100], [20, 30]]
    // 100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]
    100, 50, [[50, 50]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()