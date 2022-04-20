/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let res = 0;
  input = '\n' + input
  let len = input.length;
  let rootIndex = 0;
  /**
   * 
   * @param {*} index 开始index 
   * @param {*} level 当前的层级
   * @param {*} count 从根节点开始的数量
   * @returns  结束index
   */
  function dfs(index, level, count) {
    let hasName = false;
    let l = index;
    let originIndex = index;
    let nameStr = '';
    if (index >= len) {
      return len
    }
    let curLevel = 0;
    while (index <= len) {
      let curLetter = input[index]
      if (index === len || curLetter === '\n' || curLetter === '\t') {
        if (hasName) {
          nameStr = input.slice(l, index);
          break
        } else {
          if (curLetter === '\t') {
            curLevel++
          }
        }
      } else {
        if (!hasName) {
          if (curLevel <= level) {
            index = originIndex
            break
          }
          hasName = true
          l = index
        }
      }
      index++
    }
    let nameCount = nameStr.length;
    if (nameStr && nameStr.indexOf('.') > -1) {
      const curLen = nameCount + count;
      res = Math.max(res, curLen)
    }
    let nextIndex = dfs(index, level + 1, count + nameCount)
    index = nextIndex;
  };
  while (rootIndex < len) {
    rootIndex = dfs(rootIndex, -1, 0);
  }
  return res
}

function test() {
  let fun = lengthLongestPath;
  let params = [
    // "file1.txt\nfile2.txt\nlongfile.txt"
    "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()