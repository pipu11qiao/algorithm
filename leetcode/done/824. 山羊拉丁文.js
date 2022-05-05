/**
 * @param {string} sentence
 * @return {string}
 */
let map = { a: 1, e: 1, i: 1, o: 1, u: 1 };
var toGoatLatin = function (sentence) {
  let bStr = '';
  return sentence.split(' ').map(item => {
    bStr += 'a'
    if (map[item[0].toLowerCase()]) {
      return `${item}ma${bStr}`
    } else {
      return `${item.slice(1)}${item[0]}ma${bStr}`
    }
  }).join(' ')
};

function test() {
  let fun = toGoatLatin;
  let params = [
    "I speak Goat Latin"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()