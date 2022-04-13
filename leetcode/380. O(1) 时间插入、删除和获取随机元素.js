var RandomizedSet = function () {
  this.count = 0;
  this.arr = [];
  this.map = {};

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map[val] !== undefined) {
    return false
  } else {
    this.map[val] = this.count
    this.arr.push(val);
    this.count++;
    return true
  }

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map[val] !== undefined) {
    let curIndex = this.map[val];
    if (curIndex !== this.count - 1) {
      const lastVal = this.arr[this.count - 1];
      this.map[lastVal] = curIndex;
      this.arr[curIndex] = lastVal
    }
    this.map[val] = undefined
    this.arr.pop();
    this.count--;
    return true
  } else {
    return false
  }

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.count)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */