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
let threePrimeMap = {
  30: threePrime[0]
}
twoPrime.forEach(item => {
  twoPrimeMap[item.value] = item
})

var numberOfGoodSubsets = function (nums) {
  let curSinglePrimeMap = {};
  let curTwoPrimeMap = {};
  let curThreePrimeMap = {};
  let res = 0;
  let oneCount = 0;
  let thirtyCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    if (curNum === 1) {
      oneCount++
    } else if (curNum === 30) {

      if (curThreePrimeMap[curNum] === undefined) {
        curThreePrimeMap[curNum] = 0
      }
      curThreePrimeMap[curNum]++
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
  [
    ...Object.keys(curSinglePrimeMap).map(num => singlePrimeMap[num]),
    ...Object.keys(curTwoPrimeMap).map(num => twoPrimeMap[num]),
    ...Object.keys(curThreePrimeMap).map(num => threePrimeMap[num]),
  ].forEach(item => { item.key.forEach(n => { allPrimeMap[n] = 1 }) })
  let len = Object.keys(allPrimeMap);
  if (len === 0) {
    return res
  }
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    // fn-1 fn-2 fn-3
    if (i > 2 && (
      dp[i - 1].length === 0 &&
      dp[i - 2].length === 0 &&
      dp[i - 3].length === 0
    )) {
      break
    }
    function select(originArr, selectMap, originMap) {
      originArr.forEach(item => {
        Object.keys(selectMap).forEach(num => {
          let key = originMap[num].key
          if (key.every(_num => item.key.indexOf(_num) === -1)) {
            let count = item.count * selectMap[num]
            dp[i].push({
              key: [...item.key, ...key],
              count

            })
            res += count
          }

        })
      });
    }
    // fn-1 map1
    dp[i - 1].length > 0 && select(dp[i - 1], curSinglePrimeMap, singlePrimeMap);
    // fn-2 map2
    dp[i - 2].length > 0 && select(dp[i - 2], curTwoPrimeMap, twoPrimeMap);
    // fn-3 map3
    dp[i - 3].length > 0 && select(dp[i - 3], curThreePrimeMap, threePrime);
    if (i === 0) {
      curSinglePrimeMap.forEach(num => {
        let count = curSinglePrimeMap[num];
        dp[i].push({
          key: [num],
          count,
        })
        res += count
      });
    }
    if (i === 1) {
      curTwoPrimeMap.forEach(num => {
        let hasNum = false;
        let item = dp[i].filter(item => item.key[0] * item.key[1] === Number(num))
        let count = curSinglePrimeMap[num];
        dp[i].push({
          key: [num],
          count,
        })
        res += count
      });
    }
    if (i === 2) {
      curSinglePrimeMap.forEach(num => {
        let count = curSinglePrimeMap[num];
        dp[i].push({
          key: [num],
          count,
        })
        res += count
      });
    }
  }
  console.log(`allPrimeMap`, allPrimeMap);
};

function test() {
  let fun = numberOfGoodSubsets;
  let params = [
    // [1, 2, 3, 4]
    // [4,2,3,15]
    [4, 15, 22, 26, 30]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()