// function getHanoiTower(res, from, to, help) {
//     if (res === 1) {
//         console.log(`move ${res} from ${from} to ${to}`);
//         return res;
//     }
//     let time = getHanoiTower(res - 1, from, help, to);
//     console.log(`move ${res} from ${from} to ${to}`);
//     time += 1;
//     time += getHanoiTower(res - 1, help, to, from);
//     return time
// }
//
// console.log(getHanoiTower(2, 'from', 'to', 'help'));

function printString(string) {
    if (string.length === 1) {
        return [string];
    }
    const arr = printString(string.slice(1));
    const firstCharactor = string[0];
    for (let i = 0, len = arr.length; i < len; i++) {
        arr.push(firstCharactor + arr[i]);
    }
    arr.push(firstCharactor);
    return arr;
}

console.log(printString('abcd'));
