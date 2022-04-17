/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
function getKey(arr, index) {
  let leftkey = -1;
  let l = index - 1;
  while (l >= 0) {
    if (arr[l] === 1) {
      leftkey = l
      break
    }
    l--
  }
  const len = arr.length;
  let rightKey = len;
  let r = index + 1;
  while (r < len) {
    if (arr[r] === 1) {
      rightKey = r
      break
    }
    r++
  }
  return {
    prev: `${leftkey}*${rightKey}`,
    left: `${leftkey}*${index}`,
    right: `${index}*${rightKey}`,
  }
}
var kEmptySlots = function (bulbs, k) {
  const len = bulbs.length
  let countMap = {};
  let rangeMap = { [`-1*${len}`]: len }
  const arr = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    const curIndex = bulbs[i] - 1;
    arr[curIndex] = 1
    const keyInfo = getKey(arr, curIndex);
    const { prev, left, right } = keyInfo;
    let prevCount = rangeMap[prev];
    if (countMap[prevCount]) {
      countMap[prevCount]--
      if (!countMap[prevCount]) {
        delete countMap[prevCount]
      }
    }
    delete rangeMap[prev];
    const [i1, j1] = left.split('*')
    if (i1 !== '-1' && j1 - i1 - 1 >= 0) {
      const count = j1 - i1 - 1;
      rangeMap[left] = count
      countMap[count] = (countMap[count] || 0) + 1
    }
    const [m, n] = right.split('*')
    if (n !== `${len}` && n - m - 1 >= 0) {
      const count = n - m - 1;
      rangeMap[right] = count
      countMap[count] = (countMap[count] || 0) + 1
    }
    // debugger
    if (countMap[k]) {
      return i + 1
    }
  }
  return -1

};

function test() {
  let fun = kEmptySlots;
  let params = [
    // [1, 3, 2], 1
    [1, 2, 3], 0
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()