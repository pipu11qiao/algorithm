var ProductOfNumbers = function() {
    this.arr = [1]
    this.multiply = 1
    this.length = 1
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num == 0){
        this.length = 1
        this.multiply = 1
    }else{
        this.multiply *= num
        this.arr[this.length] = this.multiply
        this.length++
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(k > this.length - 1)return 0
    return this.multiply / this.arr[this.length - k - 1]
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
