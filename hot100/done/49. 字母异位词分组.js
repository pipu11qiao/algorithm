/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function getKey(str) {
  return str.split('').sort().join('')
}
var groupAnagrams = function (strs) {
  let res = [];
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    const key = getKey(strs[i]);
    if (map[key]) {
      map[key].push(strs[i])
    } else {
      const arr = [strs[i]];
      map[key] = arr;
      res.push(arr)
    }
  }
  return res
};

function test() {
  let fun = groupAnagrams;
  let params = [
    ["eat", "tea", "tan", "ate", "nat", "bat"]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()