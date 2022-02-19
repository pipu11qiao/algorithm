/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  const len = bits.length;
  let lenOf1 = 0;
  for (let i = len - 2; i >= 0; i--) {
    if (bits[i] === 0) {
      break
    }
    lenOf1++
  }
  if (lenOf1 % 2 === 0) {
    return true
  }
  return false;
};
function test() {
  let arr = [1, 1, 1, 0];
  // let arr = [0];
  // let arr = [1, 1, 0];
  const res = isOneBitCharacter(arr)
  console.log(`res`, res);
}
test()