/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let bitArray = new Array(32).fill(0);
  nums.forEach(item => {
    for (let i = 0; i <= 31; i++) {
      if ((item >> i) & 1 === 1) {
        bitArray[i]++
      }
    }
  });
  bitArray = bitArray.map(item => item % 3);
  bitArray.reverse();
  return parseInt(bitArray.join(''), 2);
};

function test() {
  let fun = singleNumber;
  let params = [
    // [3, 4, 3, 3]
    [5, 4, 5, 5, 4, 1, 4]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()