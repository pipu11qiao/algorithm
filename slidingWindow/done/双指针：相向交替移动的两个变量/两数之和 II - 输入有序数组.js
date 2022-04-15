/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let num = numbers[left] + numbers[right];
    if (num === target) {
      return [left + 1, right + 1]
    } else if (num > target) {
      right--
    } else {
      left++
    }
  }
};

function test() {
  let fun = twoSum;
  let params = [
    [2, 7, 11, 15], 9
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()