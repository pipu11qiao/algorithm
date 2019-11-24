/*如何仅用队列结构实现栈结构?
    如何仅用栈结构实现队列结构?
 */

class fakeStack {
    constructor(props) {
        this.data = [];
    }
    push(item){
        this.data.push(item);
    }
    pop(item){
        const arr = [];
        while(this.data.length>1){
            arr.push(this.data.unshift());
        }
        return this.data[0];
    }
}

class fakeQueuq{
    constructor(props) {
        this.data = [];
    }
    push(item){
        const arr = [];
        arr.push(item);
        const temArr= [];
        while(this.data.length>0){
            temArr.push(this.data.pop());
        }
        while(temArr.length>0){
            arr.push(temArr.pop())
        }
    }
    unshift(){
        this.data.pop();
    }

}

