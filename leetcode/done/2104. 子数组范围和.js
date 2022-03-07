/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let min = num;
    let max = num;
    for (let j = i + 1; j < nums.length; j++) {
      let curNum = nums[j];
      if (curNum > max) {
        max = curNum
      }
      if (curNum < min) {
        min = curNum
      }
      res += max - min;
    }
  }
  return res

};

function test() {
  let fun = subArrayRanges;
  let params = [
    // [1, 2, 3]
    // [1, 3, 3]
    [4,-2,-3,4,1]
    // [4,-2,-3]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()