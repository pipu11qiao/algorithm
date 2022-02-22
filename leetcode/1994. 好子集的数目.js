/**
 * @param {number[]} nums
 * @return {number}
 */
let singlePrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map(item => ({
  value: item,
  key: [item]
}));
let singlePrimeMap = {};
singlePrime.forEach(item => {
  singlePrimeMap[item.value] = item
})
let twoPrime = []
let twoPrimeMap = {};
let threePrime = [{ value: 30, key: [2, 3, 5] }]
for (let i = 0; i <= 1; i++) {
  let num1 = i === 0 ? 2 : 3;
  for (let n = i + 1; n < singlePrime.length; n++) {
    let num = singlePrime[n].value
    if (num1 * num <= 30) {
      twoPrime.push({
        value: num * num1,
        key: [num1, num]
      })
    }
  }
}
twoPrime.forEach(item => {
  twoPrimeMap[item.value] = item
})

var numberOfGoodSubsets = function (nums) {
  let curSinglePrimeMap = {};
  let curTwoPrimeMap = {};
  let res = 0;
  let oneCount = 0;
  let thirtyCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    if (curNum === 1) {
      oneCount++
    } else if (curNum === 30) {
      thirtyCount++
    } else if (singlePrimeMap[curNum]) {
      if (curSinglePrimeMap[curNum] === undefined) {
        curSinglePrimeMap[curNum] = 0
      }
      curSinglePrimeMap[curNum]++
    } else if (twoPrimeMap[curNum]) {
      if (curTwoPrimeMap[curNum] === undefined) {
        curTwoPrimeMap[curNum] = 0
      }
      curTwoPrimeMap[curNum]++
    }
  }
  // 收集所有包含的单质数，双和三的拆开
  const allPrimeMap = {};

};

function test() {
  let fun = numberOfGoodSubsets;
  let params = [
    [1, 1, 1, 0]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()