/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  let curGroup = [startFuel]; // 表示第0步的最大距离
  if (target <= startFuel) {
    return 0
  }
  let nextStep = 1;
  for (let i = 0; i < stations.length; i++) {
    let obj = stations[i];
    let hasGet = false;
    const len = curGroup.length;
    for (let j = len - 1; j >= 0; j--) {
      const distance = curGroup[j];
      if (distance >= obj[0]) {
        hasGet = true
        nextStep = j + 1
        const nextDistance = distance + obj[1]
        if (!curGroup[nextStep]) {
          curGroup.push(nextDistance)
        } else {
          if (nextDistance > curGroup[nextStep]) {
            curGroup[nextStep] = nextDistance
          }
        }
      }
    }
    if (!hasGet) {
      return -1
    }
  }
  for (let i = 0; i < curGroup.length; i++) {
    if (curGroup[i] >= target) {
      return i
    }
  }
  return -1
};
function test() {
  let fun = minRefuelStops;
  let params = [
    // 1, 1, []
    // 100, 1, []
    // 200, 50, [[25, 25], [50, 100]]
    // 200, 50, [[25, 25], [50, 100], [100, 100], [150, 40]]
    // 100, 1, [[10, 100], [20, 30]]
    // 100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]
    // 100, 50, [[50, 50]]
    // 100, 50, [[10, 10], [20, 10], [30, 30]]
    // 1000, 83, [[47, 220], [65, 1], [98, 113], [126, 196], [186, 218], [320, 205], [686, 317], [707, 325], [754, 104], [781, 105]]
    1000, 1, [[1, 186], [145, 161], [183, 43], [235, 196], [255, 169], [263, 200], [353, 161], [384, 190], [474, 44], [486, 43], [567, 48], [568, 96], [592, 36], [634, 181], [645, 167], [646, 69], [690, 52], [732, 28], [800, 42], [857, 55], [922, 63], [960, 141], [973, 13], [977, 112], [997, 162]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()