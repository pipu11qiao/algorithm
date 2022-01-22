/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  let cn0 = 0,
    cn1 = 0;
  cn2 = 0;
  stones.forEach(item => {
    const type = item % 3;
    if (type === 0) {
      cn0++
    } else if (type === 1) {
      cn1++
    } else {
      cn2++
    }
  })
  if (cn0 % 2 === 0) {
    return cn1 > 0 && cn2 > 0
  }
  return cn1 - cn2 > 2 || cn2 - cn1 > 2
};

function test() {
  // let arr = [5, 1, 2, 4, 3]
  // let arr = [2]
  let arr = [2, 8]

  const res = stoneGameIX(arr);
  console.log(`res`, res);
}

test()