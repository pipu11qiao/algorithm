/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let now = 0;
    for(let i = 2; i <= n; i++) {
        now = (now + m) % i;
    }
    return now;
};