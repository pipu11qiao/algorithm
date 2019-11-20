function smallSum(arr) {
    return mergeSort(arr, 0, arr.length - 1);

}

function mergeSort(arr, start, end) {
    if (start === end) {
        return 0;
    }
    const middleI = Math.floor((start + end) / 2);
    const sumLeft = mergeSort(arr, start, middleI);

    const sumbRight = mergeSort(arr, middleI + 1, end);
    return sumLeft + sumbRight + mergePart(arr, start, middleI, end);
}

function mergePart(arr, start, middleI, end) {
    let leftI = start;
    let rightI = middleI + 1;
    const tmpArr = [];
    let sum = 0;
    while (leftI <= middleI && rightI <= end) {
        if (arr[leftI] < arr[rightI]) {
            sum += arr[leftI] * (end - rightI + 1);
            tmpArr.push(arr[leftI++]);
        } else {
            tmpArr.push(arr[rightI++]);
        }
    }
    while (leftI <= middleI) {
        tmpArr.push(arr[leftI++]);
    }
    while (rightI <= end) {
        tmpArr.push(arr[rightI++]);
    }
    for (let i = 0; i < tmpArr.length; i++) {
        arr[i + start] = tmpArr[i];
    }
    return sum;
}


// test

function baseSmallSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                sum += arr[j];
            }
        }
    }
    return sum;
}


const arr = [3, 1, 4, 6, 2, 5];
const sum1 = baseSmallSum(arr);
console.log('base', sum1);
const sum2 = smallSum(arr);
console.log('sum2', sum2);
