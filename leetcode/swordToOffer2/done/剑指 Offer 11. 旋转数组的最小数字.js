/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  const len = numbers.length;
  for (let i = 0; i < len - 1; i++) {
    const cur = numbers[i];
    const next = numbers[i + 1];
    if (cur > next) {
      return next
    }
  }
  return numbers[0]
};


function test() {
  let fun = minArray;
  let params = [
    // [3,4,5,1,2]
    [2,2,2,0,1]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()