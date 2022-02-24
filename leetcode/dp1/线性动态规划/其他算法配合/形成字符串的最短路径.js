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
  const shortLetterMap  = {}; // 已经计算的字符串最短的数量

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