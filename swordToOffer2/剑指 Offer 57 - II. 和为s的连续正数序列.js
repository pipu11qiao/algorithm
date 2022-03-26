/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let half = Math.ceil(target / 2);
  let start = 2;
  let end = 1;
  let res = [];
  let sum = 3;
  while(start)
  for (let i = 3; i <= half; i++) {
    if (sum === target) {
      res.push(new Array(start - end + 1).fill((item, index) => index + start))

    }
  }
  return res;
};

function test() {
  let fun = findContinuousSequence;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()