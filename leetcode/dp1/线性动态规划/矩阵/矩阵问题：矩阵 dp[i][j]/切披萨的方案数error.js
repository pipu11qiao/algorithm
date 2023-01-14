/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function (pizza, k) {
  // 和数量有关系 先求以坐标(i,j)为开始点到最右下角区域所包含的的苹果的数量
  let mLen = pizza.length;
  let nLen = pizza[0].length;
  let countArr = new Array(mLen).fill(0).map((_) => new Array(nLen).fill(0));
  for (let i = mLen - 1; i >= 0; i--) {
    for (let j = nLen - 1; j >= 0; j--) {
      let cur = pizza[i][j] === "A" ? 1 : 0;
      let downCount = i === mLen - 1 ? 0 : countArr[i + 1][j];
      let rightCount = j === nLen - 1 ? 0 : countArr[i][j + 1];
      let downRightCount =
        i === mLen - 1 || j === nLen - 1 ? 0 : countArr[i + 1][j + 1];
      countArr[i][j] = downCount + rightCount + cur - downRightCount;
    }
  }
  // console.log(`countArr`, countArr);
  let maxCount = countArr[0][0];
  if (k > maxCount) {
    return 0;
  } else if (k === maxCount || k === 1) {
    return 1;
  }
  /**
   * dp[i][j][m] 表示 分割i次时 第i行第j列的情况
   * dp[0][0][0] = true 此时countArr[0][0] >=k-1
   * dp[i] dp[i-1] 中ok的向下或向右分割，判断分割情况去重记录分割情况
   */
  let dp = [];
  dp[0] = [
    {
      row: 0,
      col: 0,
      key: "0#0", // 0@1#0@3
    },
  ];

  for (let i = 1; i < k; i++) {
    dp[i] = [];
    let map = {};
    for (let j = 0; j < dp[i - 1].length; j++) {
      let curObj = dp[i - 1][j];
      let preKey = curObj.key;
      let m = curObj.row;
      let n = curObj.col;
      let nextPosArr = [];
      let rowKeys = preKey.split("#")[0].split("@");
      let colKeys = preKey.split("#")[1].split("@");
      for (let p = n; p < nLen; p++) {
        nextPosArr.push([m, p]);
      }

      for (let p = m; p < mLen; p++) {
        nextPosArr.push([p, n]);
      }
      // console.log(`nextPosArr`, nextPosArr);
      let originCount = countArr[m][n];
      nextPosArr.forEach((item) => {
        let [curM, curN] = item;
        let remainCount = countArr[curM][curN];
        if (
          originCount - remainCount > 0 &&
          remainCount > 0 &&
          remainCount >= k - i - 1
        ) {
          let curRowKeys = [...rowKeys, curM];
          curRowKeys.sort((a, b) => a - b);

          let curColKeys = [...colKeys, curN];
          curColKeys.sort((a, b) => a - b);
          let key = `${curRowKeys.join("@")}#${curColKeys.join("@")}`;
          if (!map[key]) {
            dp[i].push({
              row: curM,
              col: curN,
              key,
            });
            map[key] = 1;
          }
        }
      });
    }
  }
  // console.log(`dp`, dp);
  return dp[k - 1].length;
};

function test() {
  let fun = ways;
  let params = [
    //[1, 1, 1, 0]
    // ["A..", "AAA", "..."],
    // 3,
    // ["A..", "AA.", "..."],
    // 3,
    // [".A", "AA", "A."],
    // 3,
    [
      "..A.A.AAA...AAAAAA.AA..A..A.A......A.AAA.AAAAAA.AA",
      "A.AA.A.....AA..AA.AA.A....AAA.A........AAAAA.A.AA.",
      "A..AA.AAA..AAAAAAAA..AA...A..A...A..AAA...AAAA..AA",
      "....A.A.AA.AA.AA...A.AA.AAA...A....AA.......A..AA.",
      "AAA....AA.A.A.AAA...A..A....A..AAAA...A.A.A.AAAA..",
      "....AA..A.AA..A.A...A.A..AAAA..AAAA.A.AA..AAA...AA",
      "A..A.AA.AA.A.A.AA..A.A..A.A.AAA....AAAAA.A.AA..A.A",
      ".AA.A...AAAAA.A..A....A...A.AAAA.AA..A.AA.AAAA.AA.",
      "A.AA.AAAA.....AA..AAA..AAAAAAA...AA.A..A.AAAAA.A..",
      "A.A...A.A...A..A...A.AAAA.A..A....A..AA.AAA.AA.AA.",
      ".A.A.A....AAA..AAA...A.AA..AAAAAAA.....AA....A....",
      "..AAAAAA..A..A...AA.A..A.AA......A.AA....A.A.AAAA.",
      "...A.AA.AAA.AA....A..AAAA...A..AAA.AAAA.A.....AA.A",
      "A.AAAAA..A...AAAAAAAA.AAA.....A.AAA.AA.A..A.A.A...",
      "A.A.AA...A.A.AA...A.AA.AA....AA...AA.A..A.AA....AA",
      "AA.A..A.AA..AAAAA...A..AAAAA.AA..AA.AA.A..AAAAA..A",
      "...AA....AAAA.A...AA....AAAAA.A.AAAA.A.AA..AA..AAA",
      "..AAAA..AA..A.AA.A.A.AA...A...AAAAAAA..A.AAA..AA.A",
      "AA....AA....AA.A......AAA...A...A.AA.A.AA.A.A.AA.A",
      "A.AAAA..AA..A..AAA.AAA.A....AAA.....A..A.AA.A.A...",
      "..AA...AAAAA.A.A......AA...A..AAA.AA..A.A.A.AA..A.",
      ".......AA..AA.AAA.A....A...A.AA..A.A..AAAAAAA.AA.A",
      ".A.AAA.AA..A.A.A.A.A.AA...AAAA.A.A.AA..A...A.AAA..",
      "A..AAAAA.A..A..A.A..AA..A...AAA.AA.A.A.AAA..A.AA..",
      "A.AAA.A.AAAAA....AA..A.AAA.A..AA...AA..A.A.A.AA.AA",
      ".A..AAAA.A.A.A.A.......AAAA.AA...AA..AAA..A...A.AA",
      "A.A.A.A..A...AA..A.AAA..AAAAA.AA.A.A.A..AA.A.A....",
      "A..A..A.A.AA.A....A...A......A.AA.AAA..A.AA...AA..",
      ".....A..A...A.A...A..A.AA.A...AA..AAA...AA..A.AAA.",
      "A...AA..A..AA.A.A.AAA..AA..AAA...AAA..AAA.AAAAA...",
      "AA...AAA.AAA...AAAA..A...A..A...AA...A..AA.A...A..",
      "A.AA..AAAA.AA.AAA.A.AA.A..AAAAA.A...A.A...A.AA....",
      "A.......AA....AA..AAA.AAAAAAA.A.AA..A.A.AA....AA..",
      ".A.A...AA..AA...AA.AAAA.....A..A..A.AA.A.AA...A.AA",
      "..AA.AA.AA..A...AA.AA.AAAAAA.....A.AA..AA......A..",
      "AAA..AA...A....A....AA.AA.AA.A.A.A..AA.AA..AAA.AAA",
      "..AAA.AAA.A.AA.....AAA.A.AA.AAAAA..AA..AA.........",
      ".AA..A......A.A.AAA.AAAA...A.AAAA...AAA.AAAA.....A",
      "AAAAAAA.AA..A....AAAA.A..AA.A....AA.A...A.A....A..",
      ".A.A.AA..A.AA.....A.A...A.A..A...AAA..A..AA..A.AAA",
      "AAAA....A...A.AA..AAA..A.AAA..AA.........AA.AAA.A.",
      "......AAAA..A.AAA.A..AAA...AAAAA...A.AA..A.A.AA.A.",
      "AA......A.AAAAAAAA..A.AAA...A.A....A.AAA.AA.A.AAA.",
      ".A.A....A.AAA..A..AA........A.AAAA.AAA.AA....A..AA",
      ".AA.A...AA.AAA.A....A.A...A........A.AAA......A...",
      "..AAA....A.A...A.AA..AAA.AAAAA....AAAAA..AA.AAAA..",
      "..A.AAA.AA..A.AA.A...A.AA....AAA.A.....AAA...A...A",
      ".AA.AA...A....A.AA.A..A..AAA.A.A.AA.......A.A...A.",
      "...A...A.AA.A..AAAAA...AA..A.A..AAA.AA...AA...A.A.",
      "..AAA..A.A..A..A..AA..AA...A..AA.AAAAA.A....A..A.A",
    ],
    8,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
