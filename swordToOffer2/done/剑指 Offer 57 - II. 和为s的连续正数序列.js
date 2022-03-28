/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let half = Math.ceil(target / 2);
  let end = 0;
  let res = [];
  let sum = 1;
  const baseArr = new Array(half).fill(0).map((_, index) => index + 1);
  for (let start = 1; start < half; start++) {
    const curNum = baseArr[start];
    sum += curNum;
    if (sum === target) {
      res.push(baseArr.slice(end, start + 1))
    } else if (sum > target) {
      while (end < start) {
        sum -= baseArr[end];
        end++
        if (sum < target) {
          break
        }
        if (sum === target) {
          res.push(baseArr.slice(end, start + 1))
        }
      }
    }
  }
  return res;
};


function test() {
  let fun = findContinuousSequence;
  let params = [
    9
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()