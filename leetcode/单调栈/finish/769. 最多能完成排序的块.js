/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let len = arr.length;
  let res = 0;
  let stack = [];
  let findNum = -1;
  for (let i = len - 1; i >= 0; ) {
    let cur = arr[i];
    if (cur === i) {
      res++;
      i--;
    } else {
      // 找到
      findNum = i;
      let min = Number.POSITIVE_INFINITY;
      while (arr[i] !== findNum) {
        min = Math.min(min, arr[i]);
        i--;
      }
      while (i >= min) {
        min = Math.min(min, arr[i]);
        i--;
      }
      res++;
    }
  }
  return res;
};

function test() {
  let fun = maxChunksToSorted;
  let params = [
    //[1, 1, 1, 0]
    // [4, 3, 2, 1, 0],
    [1, 0, 2, 3, 4],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
