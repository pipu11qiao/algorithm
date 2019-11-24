/*
实现一个特殊的栈,在实现栈的基本功能的基础上,再实现返
回栈中最小元素的操作。
【要求】
1.pop、push、getMin操作的时间复杂度都是O(1)。
2.设计的栈类型可以使用现成的栈结构。
 */
class MinStack {
   constructor(){
      this.data = [];
      this.minData = [];
   }
   push(item){
      const len = this.minData.length;
      this.minData.push(Math.min(item,len ===0 ? Number.POSITIVE_INFINITY : this.minData[len-1]))
      this.data.push(item);
   }
   pop(){
      this.minData.pop();
      return this.data.pop();
   }
   getMin(){
      if(this.minData.length===0){
         throw new Error('empty')
      }
      return this.minData[this.minData.length-1];
   }
}