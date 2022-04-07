/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  const map = {};
  nums.forEach(item => {
    map[item] = (map[item] || 0) + 1
  });
  const arr = Object.keys(map).map(item => Number(item));
  arr.sort((a, b) => a - b);
  const len = arr.length;
  let maxDiff = arr[len - 1] - arr[0];
  let count = 0;
  for (let diff = 0; diff <= maxDiff; diff++) {
    let curDiff = 0;
    let prevNum = arr[0];
    for (let i = 1; i < len; i++) {
      const curNum = arr[i];
    }
  }

};

function test() {
  let fun = smallestDistancePair;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()