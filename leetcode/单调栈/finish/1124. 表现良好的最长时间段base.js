/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let stack = []; // 记录ok的index
  let len = hours.length;
  let sum = 0;
  let sumArr = [];
  for (let i = 0; i < len; i++) {
    sum += hours[i] > 8 ? 1 : -1;
    sumArr.push(sum);
  }
  let map = {};
  for (let i = len - 1; i >= 0; i--) {
    let cur = sumArr[i];
    if (map[cur] === undefined) {
      map[cur] = i;
    }
  }
  let leftSum=0
  let res = 0;
  for (let i = 0; i < len; i++) {
    // 找到从右开始第一个大于1的
    let nextNum = 1-leftSum;
    let nextIndex = map[nextNum];
  }
  console.log(`sumArr`, sumArr);
  return res;
};

function test() {
  let fun = longestWPI;
  let params = [
    //[1, 1, 1, 0]
    // [9, 9, 6, 0, 6, 6, 9], //3
    // [9,9,6,10,0,6,6,9],//5
    // [9, 9, 6, 10, 0, 9, 0, 0, 0], //5
    // [9, 9, 6, 10, 0, 9, 0], //5
    [6, 9, 9],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
