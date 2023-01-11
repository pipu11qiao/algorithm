var SortedStack = function () {
  this.tempStack = [];
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  while (val > this.stack[this.stack.length - 1]) {
    this.tempStack.push(this.stack.pop());
  }
  this.stack.push(val);
  while (this.tempStack.length > 0) {
    this.stack.push(this.tempStack.pop());
  }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  return this.stack[this.stack.length - 1] || -1;
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.stack.length === 0;
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
