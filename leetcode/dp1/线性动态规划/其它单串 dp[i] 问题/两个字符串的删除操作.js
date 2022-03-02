/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function findIndex(str, letter, start = 0) {
  // console.log(`str, letter, start`, str, letter, start);
  for (let i = start; i < str.length; i++) {
    if (str[i] === letter) {
      return i
    }
  }
  return -1
}
function getMaxSame(word1, word2) {

  let baseStr = word1.length < word2.length ? word1 : word2;
  let targetStr = word1.length < word2.length ? word2 : word1;
  let map = {};
  for (let i = 0; i < targetStr.length; i++) {
    if (map[targetStr[i]] === undefined) {
      map[targetStr[i]] = i
    }
  }

  let waitArr = [];
  let same = 0;
  for (let i = 0; i < baseStr.length; i++) {
    let curLetter = baseStr[i];
    let wLen = waitArr.length
    let hasSave = false;
    for (let j = 0; j < wLen; j++) {
      let obj = waitArr[j];
      let fIndex = findIndex(targetStr, curLetter, obj.index + 1)
      if (fIndex > -1) {
        hasSave = true
        waitArr.push({
          count: obj.count + 1,
          index: fIndex
        });
      }
    }
    if (map[curLetter] !== undefined) {
      waitArr.push({
        count: 1,
        index: map[curLetter]
      });
    }
  }
  waitArr.forEach(item => {
    same = Math.max(same, item.count);
  });
  // console.log(`waitArr`, waitArr);
  return same;
}
var minDistance = function (word1, word2) {
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < word1.length; i++) {
    if (!map1[word1[i]]) {
      map1[word1[i]] = 0
    }
    map1[word1[i]]++
  }
  for (let i = 0; i < word2.length; i++) {
    if (!map2[word2[i]]) {
      map2[word2[i]] = 0
    }
    map2[word2[i]]++
  }
  let str1 = '';
  let str2 = '';
  // console.log(`same`, same);
  for (let i = 0; i < word1.length; i++) {
    if (map2[word1[i]]) {
      str1 += word1[i]
    }
  }
  for (let i = 0; i < word2.length; i++) {
    if (map1[word2[i]]) {
      str2 += word2[i]
    }
  }
  // console.log(`str1, str2`, str1, str2);
  const same = getMaxSame(str1, str2);
  const res = word1.length + word2.length - 2 * same;
  return res
};

function test() {
  let fun = minDistance;
  let params = [
    // "sea", "eat"
    // "leetcode", "etco"
    // "seaaa", "eatxx"
    // "seaaa", "eat"
    // "food", "money"
    // "szwokpjlgqgogbgpjaczcmtjhzgldwinqfxbcxgghitcinmtdwnnpsmnmhfrhrgwncvcizaze", "spjlqggpzcgdxxtdwnrvca"
    "dinitrophenylhydrazine", "benzalphenylhydrazone"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()