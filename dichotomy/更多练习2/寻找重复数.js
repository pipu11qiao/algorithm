/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let left = 0;
  let right = nums.length;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    nums.forEach(item => {
      if (item <= mid) {
        count++
      }
    })
    if (count > mid) {
      right = mid
    } else {
      left = mid
    }
  }
  return right
};

function test() {
  let fun = findDuplicate;
  let params = [
    // [1, 3, 4, 2, 2]
    [3, 1, 3, 4, 2]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()