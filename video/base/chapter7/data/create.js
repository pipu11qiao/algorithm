const fs = require('fs');
const path = require('path');
const util = require('../../util');
const {createDyadicArray, printDyadicArray} = util;

const arr = createDyadicArray(4, 3, () => Math.floor(Math.random() * 10));
printDyadicArray(arr);
fs.writeFile(path.resolve(__dirname, './data.json'), JSON.stringify(arr), 'utf-8', function (error) {
    if (error) {
        console.log(error)
    }
});

