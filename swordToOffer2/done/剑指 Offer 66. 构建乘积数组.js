/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (arr) {
  const frontArr = [];
  const backArr = [];
  const len = arr.length;
  let frontSum = 1;
  let backSum = 1;
  for (let i = 0; i < len; i++) {
    let j = len - 1 - i;
    frontSum *= arr[i];
    backSum *= arr[j];
    frontArr[i] = frontSum;
    backArr[j] = backSum;
  }
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push((typeof frontArr[i - 1] !== 'undefined' ? frontArr[i - 1] : 1)
      * (typeof backArr[i + 1] !== 'undefined' ? backArr[i + 1] : 1))
  }
  return res;
};

function test() {
  let fun = constructArr;
  let params = [
    [1, 2, 3, 4, 5]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()