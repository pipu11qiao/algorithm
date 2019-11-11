/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s === '') {
        return 0
    }
    let max = 0;
    let subI = 0;
    let len = 1;
    let strMap = {};
    strMap[s[0]] = 0;
    for (let i = 0; i < s.length; i++) {
        for (; subI < s.length; subI++) {
            if (subI === i) {
                continue;
            }
            if (strMap[s[subI]] === undefined) { // 没有
                len++;
                strMap[s[subI]] = subI;
            } else { // 有重复
                if (len > max) {
                    max = len;
                }
                len = len - (subI - strMap[s[subI]]) +1;
                strMap = {};
                i = subI;
                strMap[s[subI]] = subI;
            }
        }
        if (len > max) {
            max = len;
        }
    }
    console.log(strMap);
    return max;
};

// test
const str = "aabac" ;

console.log(lengthOfLongestSubstring(str));

