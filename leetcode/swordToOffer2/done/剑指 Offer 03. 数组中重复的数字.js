/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    if (map[curNum]) {
      return curNum
    }
    map[curNum] = 1
  }
};

function test() {
  let fun = findRepeatNumber;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
