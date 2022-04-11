/**
 * @param {string[]} words
 * @return {number}
 */
const moseArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
function getCode(word) {
  return word.split('').map(item => moseArr[item.charCodeAt() - 97]).join('');
}
var uniqueMorseRepresentations = function (words) {
  let map = {};
  let res = 0;
  words.forEach(word => {
    let str = getCode(word);
    if (!map[str]) {
      map[str] = 1
      res++
    }
  })
  return res
};

function test() {
  let fun = uniqueMorseRepresentations;
  let params = [
    ["gin", "zen", "gig", "msg"]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()