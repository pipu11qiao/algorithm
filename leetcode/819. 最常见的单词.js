/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let words = paragraph.toLowerCase().split(/[^a-z]/);
  const map = {}
  let bannedMap = {};
  banned.forEach(item => bannedMap[item] = 1);
  let max = 0;
  let res = '';
  words.forEach(item => {
    let word = item.trim();
    if (word) {
      if (!bannedMap[word]) {
        const count = (map[word] || 0) + 1
        map[word] = count
        if (count > max) {
          max = count;
          res = word
        }
      }

    }
  })
  return res
};

function test() {
  let fun = mostCommonWord;
  let params = [
    "Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]

  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()