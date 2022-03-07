/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
function getOrderArr(security, time, isAscend) {
  const len = security.length;
  let ascendArr = [];
  for (let i = 0; i < len;) {
    let s = i;
    let e = i;
    let cur = security[i];
    let nextI = i + 1;
    while (nextI <= len) {
      let next = security[nextI]
      if (isAscend ? next >= cur : next <= cur) {
        e = nextI
        cur = next
        nextI++
      } else {
        if (e - s + 1 > time) {

          ascendArr.push([isAscend ? s : s + time, isAscend ? e - time : e]);
          // ascendArr.push([s, e]);
        }
        break
      }
    }
    i = nextI
  }
  return ascendArr;
}

var goodDaysToRobBank = function (security, time) {
  if (time === 0) {
    return security.map((_, i) => i)
  }
  let len = security.length;
  // 递增
  let ascendArr = getOrderArr(security, time, true);
  if (ascendArr.length === 0) {
    return []
  }
  // 递减
  let descendArr = getOrderArr(security, time, false);
  if (descendArr.length === 0) {
    return []
  }
  let i = 0;
  let j = 0;
  let res = [];
  while (i < ascendArr.length && j < descendArr.length) {
    let [s1, e1] = ascendArr[i];
    let [s2, e2] = descendArr[j];
    if (s2 > e1) {
      i++
    } else if (s1 > e2) {
      j++
    } else {
      let start = s1 >= s2 ? s1 : s2;
      let end = e1 <= e2 ? e1 : e2;
      for (let m = start; m <= end; m++) {
        res.push(m)
      }
      if (e1 === e2) {
        j++
        i++
      } else if (e1 > e2) {
        j++
      } else {
        i++
      }
    }
  }
  // console.log(`ascendArr`, ascendArr);
  // console.log(`descendArr`, descendArr);
  return res;
};

function test() {
  let fun = goodDaysToRobBank;
  let params = [
    // [5, 3, 3, 3, 5, 6, 2], 2
    // [1, 2, 5, 4, 1, 0, 2, 4, 5, 3, 1, 2, 4, 3, 2, 4, 8], 2
    [2, 0, 5, 3, 4], 1
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()