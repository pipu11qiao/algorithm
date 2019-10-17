// 小和的对数器
//  for test
function comparator(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        for (let j = 0; j < i; j++) {
            if (arr[j] < cur) {
                sum += arr[j]
            }
        }
    }
    return sum;
}


function generateRandomArray(maxSize, maxValue) {
    const len = parseInt(Math.random() * (maxSize + 1), 10);
    const arr = [];

    for (let i = 0; i < len; i++) {
        arr.push(parseInt(Math.random() * (maxValue + 1) - Math.random() * maxValue, 10))
    }
    return arr;
}

// for test
function checkSumMethod(sumMethod) {
    const testTime = 500;
    const maxSize = 100;
    const maxValue = 100;
    let succeed = true;
    for (let i = 0; i < testTime; i++) {
        const arr = generateRandomArray(maxSize, maxValue);
        const sum1 = comparator(arr);
        const sum2 = sumMethod(arr);
        if (sum1 !== sum2) {
            console.log(arr);
            succeed = false;
            break;
        }
    }
    console.log(succeed ? "Nice!" : "Fucking fucked!");
    const arr = generateRandomArray(maxSize, maxValue);
    console.log(arr);
    console.log(sumMethod(arr));
}
module.exports = {
    checkSumMethod,
    comparator,
}
