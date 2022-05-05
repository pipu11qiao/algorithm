/**
 * @param {number} n
 * @return {number}
 */
// var binaryGap = function (n) {
//   let res = 0;
//   let r = -1
//   let index = 0

//   while (n > 0) {
//     if (n & 1 === 1) {
//       if (r !== -1) {
//         res = Math.max(index - r, res)
//       }
//       r = index
//     }
//     index++
//     n >>= 1
//   }
//   return res
// };
var binaryGap = function (n) {
  const arr = n.toString(2).match(/10*/g);
  if (arr && arr.length > 1) {
    return Math.max.apply(Math, arr.map(item => item.length))
  }
  return 0
}

function test() {
  let fun = binaryGap;
  let params = [
    6
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()