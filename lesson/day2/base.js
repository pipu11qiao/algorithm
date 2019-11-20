// 字符串匹配搜索
function buildPrefixTable(pattern) {
    let j = 0;//当前重复的位置
    let i = 1;// 比较的位置
    const prefix = [];
    while (i < pattern.length) {
        if (pattern[j] === pattern[i]) {
            j++;
            i++;
            prefix.push(j);
        } else {
            if (j > 0) {
                j = prefix[j]
            } else {
                prefix[i] = 0;
                i++;
            }

        }
    }
}

function searchMatch(str, match) {
    let res = -1;
    for (let i = 0; i < str.length; i++) {
        let isOk = true;
        for (let j = 0; j < match.length; j++) {
            if (j + i >= str.length || match[j] !== str[j + i]) {
                isOk = false;
                break;
            }
        }
        if (isOk) {
            res = i;
        }
    }
    return res;
}

function test() {
    const str = 'ab abc abdc  abccabcdcaa';
    const match = 'abcd';
    console.log(searchMatch(str, match));
}

test();



