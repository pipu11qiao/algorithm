/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let xorNum = nums.reduce((num, item) => num ^ item, 0);
  let i = 1;
  while (true) {
    if ((xorNum >> i) & 1 === 1) {
      break
    }
    i++
  }
  let num1 = 0;
  let num2 = 0;
  nums.forEach(item => {
    if ((item >> i) & 1 === 1) {
      num1 ^= item
    } else {
      num2 ^= item
    }
  })
  return [num1, num2]
};

function test() {
  let fun = singleNumbers;
  let params = [
    [4, 1, 4, 6]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()