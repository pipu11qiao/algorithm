/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  const len = beans.length;
  beans.sort((a, b) => a - b)
  let num = beans[0];
  let count = 1;
  let tmpArr = [];
  let sum = num;
  for (let i = 1; i <= len; i++) {
    let curNum = beans[i];
    if (i === len || num !== curNum) {
      tmpArr.push({
        leftSum: sum - (num * count),
        count,
        num
      });
      num = curNum
      count = 1
    } else {
      count++
    }
    sum += curNum
  }
  let min = Number.POSITIVE_INFINITY;
  let rightInfo = {
    count: 0,
    num: 0,
    sum: 0,
  }
  for (let i = tmpArr.length - 1; i >= 0; i--) {
    const { leftSum, num, count } = tmpArr[i];
    let rightSum = 0;
    if (rightInfo.count > 0) {
      rightSum = (rightInfo.count * (rightInfo.num - num)) + rightInfo.sum
    }
    min = Math.min(min, leftSum + rightSum);
    rightInfo = {
      count: rightInfo.count + count,
      num,
      sum: rightSum
    }
  }
  return min
};
function test() {
  const arr = [4, 1, 6, 4, 2, 2, 2, 4, 5]
  const res = minimumRemoval(arr);
  console.log(`res`, res);

}
test()