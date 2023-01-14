/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  let mLen = matrix.length;
  let nLen = matrix[0].length;
  let res = 0;
  for (let i = 0; i < mLen; i++) {
    let dp = new Array(i + 1).fill(0).map((_) => {
      let map = new Map();
      map.set(0, 1);
      return map;
    });
    let sumArr = new Array(i + 1).fill(0);
    for (let j = 0; j < nLen; j++) {
      let pre = 0;
      for (let m = i; m >= 0; m--) {
        let cur = matrix[m][j];
        pre += cur;
        let curMap = dp[m];
        sumArr[m] = sumArr[m] + pre;
        let remain = sumArr[m] - target;
        if (curMap.has(remain)) {
          res += curMap.get(remain);
        }
        curMap.set(
          sumArr[m],
          curMap.has(sumArr[m]) ? curMap.get(sumArr[m]) + 1 : 1
        );
      }
    }
    // console.log(`dp`, dp);
  }
  return res;
};

function test() {
  let fun = numSubmatrixSumTarget;
  let params = [
    //[1, 1, 1, 0]
    // [
    //   [0, 1, 0],
    //   [1, 1, 1],
    //   [0, 1, 0],
    // ],
    // 0,
    // [
    //   [1, -1],
    //   [-1, 1],
    // ],
    // 0,
    [[0,0,0,1,1],[1,1,1,0,1],[1,1,1,1,0],[0,0,0,1,0],[0,0,0,1,1]],
    0
    // [[0,0,0,1,1],[1,1,1,0,1],[1,1,1,1,0],[0,0,0,1,0]],
    // [[0,0,0,1,1],[1,1,1,0,1],[1,1,1,1,0]],
    // [
    //   [1, 1, 1, 1, 0],
    //   [0, 0, 0, 1, 0],
    // ],
    // 0,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
