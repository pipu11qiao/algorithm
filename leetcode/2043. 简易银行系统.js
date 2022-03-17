/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.balanceArr = balance;
  this.n = balance.length;
};
Bank.prototype.checkAccount = function (account) {
  return account <= this.n && account >= 1
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  if (
    (!this.checkAccount(account1) || !this.checkAccount(account2))
    || this.balanceArr[account1 - 1] < money
  ) {
    return false
  }
  this.balanceArr[account1 - 1] -= money;
  this.balanceArr[account2 - 1] += money;
  return true
};


/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  if (!this.checkAccount(account)) {
    return false
  }
  this.balanceArr[account - 1] += money;
  return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  if (!this.checkAccount(account) || this.balanceArr[account - 1] < money) {
    return false
  }
  this.balanceArr[account - 1] -= money
  return true
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */