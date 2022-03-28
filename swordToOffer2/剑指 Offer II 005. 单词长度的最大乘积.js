/**
 * @param {string[]} words
 * @return {number}
 */
let codeStart = 97
var maxProduct = function (words) {
  let baseArr = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const bitArr = new Array(26).fill(0);
    for (let j = 0; j < word.length; j++) {
      let index = word[j].codePointAt() - 97;
      bitArr[index] = 1;
    }
    let str = bitArr.join('')
    baseArr.push({
      bit: parseInt(str, 2),
      count: str.replace(/0/g, '').length,
      len: word.length
    })
  }
  let res = 0;
  for (let i = 0; i < baseArr.length; i++) {
    const curObj = baseArr[i];
    for (let j = i + 1; j < baseArr.length; j++) {
      const nextObj = baseArr[j];
      const allCount = (curObj.bit ^ nextObj.bit).toString(2).replace(/0/g, '').length
      if (allCount === nextObj.count + curObj.count) {
        res = Math.max(nextObj.len * curObj.len, res)
      }
    }
  }
  return res
};

function test() {
  let fun = maxProduct;
  let params = [
    ["abcw", "baz", "foo"]
    // ["abcw", "baz", "foo", "bar", "fxyz", "abcdef"]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()