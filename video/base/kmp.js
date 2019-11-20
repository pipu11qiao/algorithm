function buildPrefixtable(pattern) {
    const prefix = [];
    if (!pattern || pattern.length === 0) {
        return prefix;
    }
    prefix.push(0);
    let len = 0;
    let i = 1;
    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            prefix[i] = len;
            i++;
        } else {
            if (len > 0) {
                len = prefix[len - 1];
            } else {
                prefix[i] = len;
                i++;
            }
        }
    }
    return prefix;
}
function movePrefix(prefix) {
    if (prefix.length === 0) {
        return;
    }
    prefix.pop();
    prefix.unshift(-1);
}
function findPattern(text, pattern) {
    const prefix = buildPrefixtable(pattern)
    movePrefix(prefix);
    let j = 0;
    let i = 0;
    let res = -1;
    while (i < text.length) {
        if (text[i] === pattern[j]) {
            j++;
            i++
        } else {
            j = prefix[j];
            if (j === -1) {
                j++;
                i++
            }
        }
        if (j === pattern.length) {
            res = i - j;
            break;
        }
    }
    return res;
}

const str = 'adcabcdddab';
const pattern = 'abc';
console.log(findPattern(str, pattern));
