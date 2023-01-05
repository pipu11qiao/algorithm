/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function(houses, k) {
    let n = houses.length;

    if(k === n) return 0;

    houses.sort((a,b) => a - b);

    let cost = new Array(n);
    for(let i = 0; i < n; i++) {
        cost[i] = new Array(n).fill(0);
    }

    for(let len = 2; len <= n; len++) {
        for(let i = 0; i < n - len+1; i++) {
            cost[i][i+len-1] = houses[i+len-1] - houses[i] + cost[i+1][i+len-2];
        }
    }


    let dp = new Array(n);
    for(let i = 0; i < n; i++) {
        dp[i] = new Array(k+1).fill(Infinity);
        for(let j = k; j > 0 && j > i; j--) dp[i][j] = 0; 
    }

    
    for(let i = 0; i < n; i++) dp[i][1] = cost[0][i];


    for(let i = 0;i < n; i++) {
        for(let m = 2; m <= i && m <= k; m++) {
            for(let j = i - 1; j >= 0; j--) {
                dp[i][m] = Math.min(dp[i][m], dp[j][m-1] + cost[j+1][i]);
            }
        }
    }

    return dp[n-1][k];
};
