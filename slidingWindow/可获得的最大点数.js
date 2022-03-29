/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const len = cardPoints.length;
  let i = 0;
  let sum = 0;
  for (; i < k; i++) {
    sum += cardPoints[i];
  }
  let res = sum
  if (k === len) {
    return res
  }
  // j左边的个数
  for (let j = k - 1, i = 0; j >= 0; j--) {
    sum -= cardPoints[j]
    sum += cardPoints[len - 1 - i]
    res = Math.max(sum, res)
    i++
  }
  return res

};


function test() {
  let fun = maxScore;
  let params = [
    [1, 2, 3, 4, 5, 6, 1], 3
  ];
  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()