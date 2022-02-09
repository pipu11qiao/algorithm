/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
function join(num, str) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(str)
  }
  // console.log(`arr`, arr);
  return arr.join('')
}
var longestDiverseString = function (a, b, c) {
  const arr = [
    {
      label: 'a',
      value: a
    },
    {
      label: 'b',
      value: b
    },
    {
      label: 'c',
      value: c
    },
  ];
  arr.sort((a, b) => a.value - b.value)
  let str = ''
  let most = arr[2];
  let middle = arr[1];
  let least = arr[0];
  let mostCount = most.value;
  let leastCount = least.value;
  let middleCount = middle.value;
  if (mostCount >= (middleCount + leastCount)) {
    let preCount = Math.min(mostCount - 2 * (middleCount + leastCount), 2);
    let acCount = leastCount;
    let bcCount = middleCount;
    let accCount = Math.min(mostCount - (acCount + bcCount), acCount)
    let bccCount = Math.min(mostCount - (leastCount * 2 + bcCount), bcCount)
    acCount = leastCount - accCount;
    bcCount = Math.min(middleCount, middleCount - bccCount);
    str += join(preCount, most.label);
    str += join(acCount, `${least.label}${most.label}`);
    str += join(accCount, `${least.label}${most.label}${most.label}`);
    str += join(bcCount, `${middle.label}${most.label}`);
    str += join(bccCount, `${middle.label}${most.label}${most.label}`);
  } else {
    // mostCount < aCount +bBount mostCount > bCount
    let abcCount = leastCount;
    let bcCount = middleCount - leastCount
    let acCount = mostCount - (bcCount + abcCount);
    abcCount = abcCount - acCount;
    bcCount = bcCount + acCount;
    str += join(abcCount, `${least.label}${middle.label}${most.label}`);
    str += join(acCount, `${least.label}${most.label}`);
    str += join(bcCount, `${middle.label}${most.label}`);
  }
  return str;
};

function test() {
  // const res = longestDiverseString(7, 1, 0)
  // const res = longestDiverseString(7, 1, 2)
  const res = longestDiverseString(7, 5, 3)
  console.log(`res`, res);
}
test()