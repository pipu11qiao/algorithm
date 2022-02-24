/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
function makeSearchTree(sorceStr) {
  let len = sorceStr.length;
  let allMap = {};
  let sourceArr = sorceStr.split('');
  let searchArr = [];
  for (let i = len - 1; i >= 0; i--) {
    let map = {};
    let curLetter = sourceArr[i];
    for (let j = len - 1; j > i; j--) {
      let letter = sourceArr[j];
      if (map[letter] === undefined) {
        map[letter] = [];
      }
      map[letter].push(searchArr[j])
    }
    if (allMap[curLetter] === undefined) {
      allMap[curLetter] = []
    }
    allMap[curLetter].push(map)
    searchArr[i] = map
  }
  searchArr = null;
  return allMap
}

var shortestWay = function (source, target) {
  const allMap = makeSearchTree(source);
  console.log(`allMap`, allMap);
  let len = target.length;
  // 包含一个字母没有
  for (let i = 0; i < len; i++) {
    if (!allMap[target[i]]) {
      return -1;
    }
  }
  // 所有字母都有
  const shortIndexMap = {}; // '0-1' 最小数量
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const curRes = {
        count: 1,
        mapArr: [],
      }
      const curLetter = target[j]
      if (j > i) {
        let prev = j - 1;
        let curMapArr = [];
        let prevStateObj = shortIndexMap[`${i}-${prev}`];
        let prevMapArr = prevStateObj.mapArr;

        prevMapArr.forEach(prevObj => {
          if (prevObj[curLetter]) {
            curMapArr.push(prevObj[curLetter])
          }
        })
        if (curMapArr.length === 0) {
          curRes.count += prevStateObj.count + 1
          curRes.mapArr = allMap[curLetter];

        } else {
          curRes.count += prevStateObj.count;
          curRes.mapArr = curMapArr;
        }

      } else {
        curRes.mapArr = allMap[curLetter]
      }
      shortIndexMap[`${i}-${j}`] = curRes;
    }
  }
  console.log(`shortIndexMap`, shortIndexMap);
};
function test() {
  let fun = shortestWay;
  let params = [
    'abcdcb', 'abcbc'
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()