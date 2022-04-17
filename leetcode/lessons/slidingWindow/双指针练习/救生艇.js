/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b)
  let left = 0;
  let right = people.length - 1;
  let count = 0;
  // debugger
  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left++
    }
    count++
    right--
  }
  if (left === right) {
    count++
  }
  return count
};

function test() {
  let fun = numRescueBoats;
  let params = [
    // [1, 2], 3
    // [3, 2, 2, 1], 3
    [3, 5, 3, 4], 5
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()