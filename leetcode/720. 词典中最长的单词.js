/**
 * @param {string[]} words
 * @return {string}
 */

function checkWord(word, map) {
  for (let i = 1; i < word.length; i++) {
    if (!map[word.slice(0, i)]) {
      return false
    }
  }
  return true
}
var longestWord = function (words) {
  let map = {};
  words.forEach(item => map[item] = 1);
  let resArr = [];
  let max = 0;
  words.sort((a, b) => a.length - b.length);
  for (let i = words.length - 1; i >= 0; i--) {
    let curWord = words[i];
    if (curWord.length < max) {
      break
    }
    if (checkWord(curWord, map)) {
      max = curWord.length;
      resArr.push(curWord)
    }
  }
  if (resArr.length > 0) {
    resArr.sort();
    return resArr[0]
  }
  return ''
};

function test() {
  let fun = longestWord;
  let params = [
    // ["w","wo","wor","worl", "world"]
    // ["a", "banana", "app", "appl", "ap", "apply", "apple"],
    ["k", "lg", "it", "oidd", "oid", "oiddm", "kfk", "y", "mw", "kf", "l", "o", "mwaqz", "oi", "ych", "m", "mwa"]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}

test()