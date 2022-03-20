var CQueue = function () {
  this.mainStack = [];
  this.tmpStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  while (this.mainStack.length > 0) {
    this.tmpStack.push(this.mainStack.pop())
  }
  this.mainStack.push(value);
  while (this.tmpStack.length > 0) {
    this.mainStack.push(this.tmpStack.pop())
  }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  return this.mainStack.pop() || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
var obj = new CQueue()
obj.appendTail(3)
var param_2 = obj.deleteHead()
console.log(`param_2`, param_2);