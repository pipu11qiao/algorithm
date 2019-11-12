/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let len = s.length;
    let res = 0;
    let strMap = {};
    for (let j = 0, i = 0; j < len; j++) {
        if (strMap[s[j]] !== undefined) {
            i = Math.max(strMap[s[j]], i);
        }
        res = Math.max(res, j - i + 1);
        strMap[s[j]] = j + 1;
    }
    return res;
};

// test
const str = "aabac";

console.log(lengthOfLongestSubstring(str));

