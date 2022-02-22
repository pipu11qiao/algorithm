/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let len = dominoes.length;
  let sI = -1;
  let res = dominoes.split('');
  for (let i = 0; i < len; i++) {
    const letter = dominoes[i];
    if (letter === '.') {
      if (sI === -1) {
        sI = i
      }
      if (i === len - 1 || dominoes[i + 1] !== '.') {
        const left = dominoes[sI - 1] === 'R';
        const right = dominoes[i + 1] === 'L';
        // 需要操作
        if (left || right) {
          if (!left || !right) {
            while (sI <= i) {
              res[sI] = left ? 'R' : 'L';
              sI++
            }
          } else {
            let halfIndex = Math.floor(((i - sI) / 2) + sI);
            let count = i - sI + 1
            while (sI <= (count % 2 !== 0 ? halfIndex - 1 : halfIndex)) {
              res[sI] = 'R'
              sI++
            }
            sI = halfIndex + 1;
            while (sI <= i) {
              res[sI] = 'L'
              sI++
            }
          }
        }
        sI = -1;
      }
    }
  }
  return res.join('')
};
function test() {
  let fun = pushDominoes;
  let params = [
    // "RR.L"

    // ".L.R...LR..L.."
    ".L.R...LR..L.."
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()