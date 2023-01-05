/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function (prob, target) {
  let map = { 0: 1 - prob[0], 1: prob[0] };
  function getPro(i, t) {
    if (t < 0 || i + 1 < t) {
      return 0;
    }
    let key = i * 10000 + t;
    if (!map[key]) {
      let res = 0;
      let curRate = prob[i];
      res =
        (t - 1 >= 0 && curRate !== 0 ? curRate * getPro(i - 1, t - 1) : 0) +
        (1 - curRate > 0 ? (1 - curRate) * getPro(i - 1, t) : 0);
      map[key] = res;
    }
    // console.log(`map`, map);
    return map[key];
  }
  return getPro(prob.length - 1, target);
};

function test() {
  let fun = probabilityOfHeads;
  let params = [
    // [0.4],
    // 1,
    // [0.5, 0.3, 0.2, 0.8, 0.8, 0.5, 0.5],
    // 4,
    //[1, 1, 1, 0]
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    9,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
