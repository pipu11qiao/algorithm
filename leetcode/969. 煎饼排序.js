/**
 * @param {number[]} arr
 * @return {number[]}
 */
function reverse(arr, k) {
  let left = arr.slice(0, k);
  let right = arr.slice(k);
  return [...left.reverse(), ...right]

}
var pancakeSort = function (arr) {
  let res = [];
  let len = arr.length;

  let num = len;
  while (true) {
    let curIndex = arr.indexOf(num)
    if (arr[curIndex + 1] === undefined || num === arr[curIndex + 1] - 1) {
      num--
      continue
    }
    res.push(curIndex + 1);
    arr = reverse(arr, curIndex + 1);
    res.push(num)
    arr = reverse(arr, num)
    num--
    if (num === 1) {
      break
    }
  }
  return res

};

function test() {
  let fun = pancakeSort;
  let params = [
    [3, 2, 4, 1]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()