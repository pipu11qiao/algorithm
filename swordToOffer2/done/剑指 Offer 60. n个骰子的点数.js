/**
 * @param {number} n
 * @return {number[]}
 */

function getCount(n) {
  if (n === 1) {
    return [1, 1, 1, 1, 1, 1];
  }
  let max = 6 * n;
  const resArr = new Array(max).fill(0);
  const prevCountArr = getCount(n - 1);
  console.log(prevCountArr);
  prevCountArr.forEach((item, index) => {
    for (let i = 1; i <= 6; i++) {
      resArr[index + i] += item;
    }
  })
  return resArr
}

var dicesProbability = function (n) {
  const countArr = getCount(n);
  let resArr = [];
  let allCount = Math.pow(6, n);
  for (let i = n - 1; i < countArr.length; i++) {
    resArr.push(countArr[i] / allCount)
  }
  return resArr
};

function test() {
  let fun = dicesProbability;
  let params = [
    3
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()