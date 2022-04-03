/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function findIndex(letters, target, start, end) {
  const len = end - start + 1;
  if (len === 1) {
    return start
  }
  if (len === 2) {
    return letters[start] > target ? start : end;
  }

  const mid = Math.floor((end - start) / 2) + start;
  const midLetter = letters[mid]
  if (midLetter <= target) {
    return findIndex(letters, target, mid, end)
  } else {
    return findIndex(letters, target, start, mid)
  }

}
var nextGreatestLetter = function (letters, target) {
  const len = letters.length;
  if (target >= letters[len - 1] || letters[0] > target) {
    return letters[0]
  }
  const index = findIndex(letters, target, 0, len - 1);
  return letters[index]

};

function test() {
  let fun = nextGreatestLetter;
  let params = [
    // ["c", "f", "j"], "a"
    // ["c", "f", "j"], "c"
    ["c", "f", "j"], "d"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()