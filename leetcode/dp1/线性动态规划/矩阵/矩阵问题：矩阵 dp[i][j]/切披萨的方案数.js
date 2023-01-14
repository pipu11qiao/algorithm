/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
  if(!pizza.length || !pizza[0].length) return 0;
  let m = pizza.length;
  let n = pizza[0].length;
  let MOD = 1000000007;

  let nums = new Array(m+1);
  for(let i = 0; i <= m; i++) nums[i] = new Array(n+1).fill(0);

  let dp = new Array(m);
  for(let i = 0; i < m; i++) {
      dp[i] = new Array(n);
      for(let j = 0; j < n; j++) {
          dp[i][j] = new Array(k).fill(0);
      }
  }

  for(let i = m - 1; i >= 0; i--) {
      for(let j = n - 1; j >= 0; j--) {
          nums[i][j] = nums[i+1][j] + nums[i][j+1] - nums[i+1][j+1] + (pizza[i][j] === 'A' ? 1 : 0);
      }
  }

  for(let i = m - 1; i >= 0; i--) {
      for(let j = n - 1; j >= 0; j--) {
          if(nums[i][j] > 0) dp[i][j][0] = 1;
          
          for(let p = 1; p < k; p++) {
              for(let r = i+1; r < m; r++) {
                  if(nums[i][j] - nums[r][j] > 0) dp[i][j][p] = (dp[i][j][p] + dp[r][j][p-1]) % MOD;
              }
              for(let r = j+1; r < n; r++) {
                  if(nums[i][j] - nums[i][r] > 0) dp[i][j][p] = (dp[i][j][p] + dp[i][r][p-1]) % MOD;
              }
          }
      }
  }

  return dp[0][0][k-1];
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
