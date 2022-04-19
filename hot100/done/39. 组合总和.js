/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function find(candidates, target, prev) {
  let res = [];
  for (let i = 0; i < candidates.length; i++) {
    const curNum = candidates[i];
    if (curNum <= prev) {
      if (curNum < target) {
        const curRes = find(candidates, target - curNum, curNum);
        curRes.forEach(item => {
          res.push([...item, curNum])
        })
      } else if (curNum === target) {
        res.push([curNum])
      } else {
        break
      }
    }
  }
  return res;
}
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  return find(candidates, target, target)
};

function test() {
  let fun = combinationSum;
  let params = [
    // [2, 3, 7], 7
    [2, 3, 5], 8
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()