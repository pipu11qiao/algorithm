/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i = 0;
  let j = 0;
  let prevLetter = '';
  for (let j = 0; j < name.length; j++) {
    const curLetter = name[j];
    let hasSame = false
    for (; i < typed.length; i++) {
      const curTypeLetter = typed[i];
      if (curTypeLetter === curLetter) {
        hasSame = true;
        i++
        break
      } else {
        if (curTypeLetter !== prevLetter) {
          return false
        }
      }
    }
    if (!hasSame) {
      return false
    }
    prevLetter = curLetter
  }
  for (; i < typed.length; i++) {
    const curTypeLetter = typed[i];
    if (curTypeLetter !== prevLetter) {
      return false;
    }
  }
  return true
};


function test() {
  let fun = isLongPressedName;
  let params = [
    // "alex", "aaleex"
    // "saeed", "ssaaedd"
    "vtkgn", "vttkgnn"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()