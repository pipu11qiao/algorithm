var MaxQueue = function () {
  this.stack = [];
  this.maxStack = [];

};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  const len = this.stack.length;
  if (len === 0) {
    return -1
  }
  return this.maxStack[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.stack.push(value)
  const len = this.stack.length;
  if (len === 0) {
    this.maxStack.push(value)
  } else {
    for (let j = this.maxStack.length - 1; j >= 0; j--) {
      if (this.maxStack[j] < value) {
        this.maxStack[j] = value
      } else {
        break
      }
    }
    this.maxStack.push(value)
  }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  const len = this.stack.length;
  if (len === 0) {
    return -1
  }
  this.maxStack.shift();
  const num = this.stack.shift();
  return num
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */