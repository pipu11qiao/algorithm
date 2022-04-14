/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max.apply(Math, accounts.map(item => item.reduce((sum, cur) => sum + cur, 0)))
};