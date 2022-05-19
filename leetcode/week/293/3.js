/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  let arr = []; // {arr:[],value:}
  let map = {};
  let max = 1;
  for (let i = 0; i < candidates.length; i++) {
    const curNum = candidates[i];
    const curArrlen = arr.length
    for (let j = 0; j < curArrlen; j++) {
      const obj = arr[j];
      const curValue = curNum & obj.value;
      if (curValue > 0) {
        const curArr = [...obj.arr, curNum]
        let curLen = obj.arr.length + 1
        if (curLen > max) {
          max = curLen;
        }
        if (!map[curValue]) {
          const obj = {
            arr: curArr,
            value: curValue
          };
          map[curValue] = obj
          arr.push(obj)
        } else {
          if (curLen > map[curValue].arr.length) {
            map[curValue].arr = curArr;
          }
        }
      }
    }
    if (!map[curNum]) {
      const obj = {
        arr: [curNum],
        value: curNum
      };
      arr.push(obj);
      map[curNum] = obj;
    }
  }
  return max
};

function test() {
  let fun = largestCombination;
  let params = [
    [16, 17, 71, 62, 12, 24, 14]
    // [8, 8]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()