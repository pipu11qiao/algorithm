/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  input = '\n' + input;
  let stack = [];
  let index = 0;
  const len = input.length;
  let res = 0;
  while (index < len) {
    let hasName = false;
    let l = index;
    let nameStr = '';
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
          while (curLevel < stack.length) {
            stack.pop()
          }
          hasName = true
          l = index
        }
      }
      index++
    }
    let nameCount = nameStr.length;
    if (nameStr.indexOf('.') > -1) {
      const curLen = stack.reduce((sum, item) => sum + item, 0) + nameCount + (stack.length || 0)
      res = Math.max(res, curLen)
    } else {
      stack.push(nameCount)
    }
  }
  return res
};

function test() {
  let fun = lengthLongestPath;
  let params = [
    // "file1.txt\nfile2.txt\nlongfile.txt"
    // "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
    // "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
    'a'
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()