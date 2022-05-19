/**
 * @param {string[]} words
 * @return {string[]}
 */

function getKey(word) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    arr[letter.charCodeAt() - 97]++
  }
  return arr.join(',')
}
var removeAnagrams = function (words) {
  let res = [words[0]];
  let prevKey = getKey(words[0])
  let prevWord = words[0];
  for (let i = 1; i < words.length; i++) {
    const curWord = words[i];
    const curKey = getKey(curWord);
    let isSame = false;
    if (curWord.length === prevWord.length) {
      if (curKey === prevKey) {
        isSame = true;
      }
    }
    if (!isSame) {
      res.push(curWord);
      prevKey = curKey;
      prevWord = curWord
    }
  }
  return res
};

function test() {
  let fun = removeAnagrams;
  let params = [
    // ["abba", "baba", "bbaa", "cd", "cd"]
    ["a", "b", "c", "d", "e"]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()