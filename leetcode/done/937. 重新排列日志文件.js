/**
 * @param {string[]} logs
 * @return {string[]}
 */

const numReg = /^[^\s]+\s+\d+/
var reorderLogFiles = function (logs) {
  let arr = [];
  let tmpArr = [];
  logs.forEach(item => {
    if (numReg.test(item)) {
      arr.push(item);
    } else {
      tmpArr.push(item)
    }
  })
  tmpArr.sort((a, b) => {
    let [str1, ...other1] = a.split(' ')
    let [str2, ...other2] = b.split(' ')
    other1 = other1.join(' ');
    other2 = other2.join(' ');
    if (other1 === other2) {
      return str1 < str2 ? -1 : str1 > str2
    }
    const res = other1 < other2 ? -1 : other1 > other2
    return res
  })
  return tmpArr.concat(arr)
};

function test() {
  let fun = reorderLogFiles;
  let params = [
    // ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]
    ["j mo", "5 m w", "g 07", "o 2 0", "t q h"]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
