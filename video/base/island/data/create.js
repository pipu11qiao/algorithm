const fs = require('fs');
const path  = require('path');
const util = require('../../util');
const {createDyadicArray,printDyadicArray} = util;

const arr = createDyadicArray(30, 20, () => Math.random() > 0.6 ? 1 : 0);
printDyadicArray(arr);
fs.writeFile(path.resolve(__dirname,'./data.json'),JSON.stringify(arr),'utf-8',function (error) {
    if(error) {
        console.log(error)
    }
});

