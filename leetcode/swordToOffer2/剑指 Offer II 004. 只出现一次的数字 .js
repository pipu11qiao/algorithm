/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let baseNumber = Math.pow(2, 32);
  let max = Math.pow(2, 31) - 1;
  const tmpNums = nums.map(item => item + baseNumber);
  let bitArray = new Array(32).fill(0);
  tmpNums.forEach(item => {
    for (let i = 0; i <= 31; i++) {
      if ((item >> i) & 1 === 1) {
        bitArray[i]++
      }
    }
  });
  bitArray = bitArray.map(item => item % 3);
  bitArray.reverse();
  let num = parseInt(bitArray.join(''), 2)
  if (num > max) {
    num -= baseNumber
  }
  return num
};

function test() {
  let fun = singleNumber;
  let params = [
    [-2, -2, 1, 1, 4, 1, 4, 4, -4, -2]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
