/**
 * @param {string} password
 * @return {number}
 */
// 97-122 a-z
// 65-90 A-z
// 48-57 0-9

var strongPasswordChecker = function (password) {
  const formatInfo = {
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
  }
  // step1 数量
  const len = password.length;
  let repeatArr = [];
  let prevLetter = '';
  let prevCount = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    const curLetter = password[i];
    if (curLetter === prevLetter) {
      prevCount++
    } else {
      if (prevCount >= 3) {
        repeatArr.push(prevCount)
      }
      prevLetter = curLetter;
      prevCount = 1
    }
    const code = curLetter.charCodeAt();
    if (code >= 48 && code <= 57) {
      if (!formatInfo.hasNumber) {
        formatInfo.hasNumber = true
      }
    } else if (code >= 65 && code <= 90) {
      if (!formatInfo.hasUpperCase) {
        formatInfo.hasUpperCase = true
      }
    } else if (code >= 97 && code <= 122) {
      if (!formatInfo.hasLowerCase) {
        formatInfo.hasLowerCase = true
      }
    }
  }
  if (prevCount >= 3) {
    repeatArr.push(prevCount)
  }
  let formatErrorArr = Object.keys(formatInfo).filter(key => !formatInfo[key])
  let formatErrorCount = formatErrorArr.length;
  repeatArr.sort((a, b) => a - b)

  if (len < 6) {
    let diff = 6 - len;
    res += diff;
    formatErrorCount -= diff;
    if (formatErrorCount < 0) {
      formatErrorCount = 0
    }
    const tmpArr = [];
    for (let i = repeatArr.length - 1; i >= 0; i--) {
      let curCount = repeatArr[i];
      const replaceCount = Math.floor(curCount / 3);
      if (diff >= replaceCount) {
        diff -= replaceCount
      } else {
        if (diff > 0) {
          curCount -= diff * 3
          diff = 0
        }
        tmpArr.push(curCount);
      }
    }
    repeatArr = tmpArr

  } else if (len > 20) {
    let diff = len - 20;
    res += diff;
    // 删除过程中可以去掉一部分重复
    // 删除的最优策略，6个删掉一个
    const tmpArr = [];
    repeatArr = repeatArr.map(item => {
      if (diff > 0) {
        if (item % 3 === 0) {
          diff -= 1
          return item - 1
        }
      }
      return item
    }).filter(item => item >= 3).map(item => {
      if (diff > 1) {
        if (item % 3 === 1) {
          diff -= 2
          return item - 2
        }
      }
      return item
    }).filter(item => item >= 3)

    for (let i = 0; i < repeatArr.length; i++) {
      let curCount = repeatArr[i];
      const curRepeatCount = curCount - 2;
      if (diff >= curRepeatCount) {
        diff -= curRepeatCount
      } else {
        if (diff > 0) {
          curCount -= diff
          diff = 0
        }
        tmpArr.push(curCount);
      }
    }
    repeatArr = tmpArr
  }
  // step2 格式
  if (formatErrorCount > 0) {
    res += formatErrorCount
    // 格式过程中可以去掉一部分重复
    let diff = formatErrorCount;
    if (repeatArr.length > 0) {
      const tmpArr = [];
      for (let i = repeatArr.length - 1; i >= 0; i--) {
        let curCount = repeatArr[i];
        const replaceCount = Math.floor(curCount / 3);
        if (diff >= replaceCount) {
          diff -= replaceCount
        } else {
          if (diff > 0) {
            curCount -= diff * 3
            diff = 0
          }
          tmpArr.push(curCount);
        }
      }
      repeatArr = tmpArr
    }
  }
  // step3 重复
  repeatArr.forEach(item => {
    res += Math.floor(item / 3)
  })
  return res

};

function test() {
  let fun = strongPasswordChecker;
  let params = [
    // 'a'
    // "13337C0d3"
    // "333333"
    // "......."
    // "aA1"
    "aaaaaaaAAAAAA6666bbbbaaaaaaABBC"
    // "bbaaaaaaaaaaaaaaacccccc"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()