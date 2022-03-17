/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  if (startFuel >= target) {
    return 0;
  } else {
    if (stations.length === 0) {
      return -1
    }
  }
  let resArr = [{ d: startFuel, c: 0 }];
  let min = Number.POSITIVE_INFINITY;
  let hasGet = false;
  for (let i = 0; i < stations.length; i++) {
    let curStation = stations[i];
    let curD = curStation[0];
    let curFuel = curStation[1];
    const len = resArr.length;
    let tmpArr = [];
    let hasOk = false;
    for (let j = 0; j < len; j++) {
      if (resArr[j].d >= curD) {
        if (!hasOk) {
          hasOk = true
        }
        const nextD = resArr[j].d + curFuel
        tmpArr.push(resArr[j])
        if (nextD >= target) {
          hasGet = true
          min = Math.min(resArr[j].c + 1, min)
        } else {
          tmpArr.push({
            d: nextD,
            c: resArr[j].c + 1
          })
        }
      }
    }
    if (!hasOk) {
      if (hasGet) {
        return min
      }
      return -1
    }
    resArr = tmpArr
  }
  if (hasGet) {
    return min
  } else {
    return -1
  }
};

function test() {
  let fun = minRefuelStops;
  let params = [
    // 1, 1, []
    // 100, 1, [[10, 100]]
    // 100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]
    // 100, 1, []
    // 1000000, 70768, [[53850, 170579], [144779, 184975], [285970, 250699], [551380, 63687], [563517, 183875], [652555, 16550], [720886, 328338], [821172, 7541], [941712, 180342], [978151, 58191]]
    1000000000, 145267354, [[5510987, 84329695], [10682248, 76273791], [56227783, 136858069], [91710087, 18854476], [111148380, 127134059], [165982642, 122930004], [184216180, 124802819], [217578071, 7123113], [233719001, 95862544], [339631786, 7676497], [349762649, 136128214], [403119403, 21487501], [423890164, 61095325], [424072629, 50415446], [572994480, 13561367], [609623597, 69207102], [662818314, 84432133], [678679727, 20403175], [682325369, 14288077], [702137485, 6426204], [716318901, 47662322], [738137702, 129579140], [761962118, 23765733], [820353983, 70497719], [895811889, 75533360]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()