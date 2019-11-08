class RandomKey {
    constructor() {
        this.keyMap = {};
        this.indexMap = {};
        this.size = 1;
    }

    addKey(key) {
        this.keyMap[key] = this.size;
        this.indexMap[this.size] = key;
        this.size++
    }

    removeKey(key) {
        const targetIndex = this.keyMap[key];
        const rmKey = this.indexMap[this.size - 1];
        this.keyMap[rmKey] = targetIndex;
        delete this.keyMap[key];
        this.indexMap[targetIndex] = rmKey;
        delete this.indexMap[this.size - 1];
        this.size--
    }

    print() {
        console.log(Object.entries(this.keyMap));
        console.log(Object.entries(this.indexMap));
        console.log('this.size', this.size);
    }

    getRandomKey() {
        const randomIndex = Math.floor(Math.random() * this.size);
        return this.indexMap[randomIndex];
    }

}

const rObj = new RandomKey();

rObj.addKey('a');
rObj.addKey('b');
rObj.addKey('c');
rObj.addKey('d');

rObj.print();

rObj.removeKey('c');

rObj.print();

rObj.removeKey('b');

rObj.print();


