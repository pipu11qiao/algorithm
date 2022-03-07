/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let cs = s[0].charCodeAt();;
  let ce = s[3].charCodeAt();
  let rs = s[1];
  let re = s[4];
  let res = [];
  for (let c = cs; c <= ce; c++) {
    let cStr = String.fromCharCode(c);
    for (let r = rs; r <= re; r++) {
      res.push(`${cStr}${r}`)
    }
  }
  return res
};

function test() {
  let fun = cellsInRange;
  let params = [
    // [1, 1, 1, 0]
    // "K1:L2"
    "A1:F1"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()