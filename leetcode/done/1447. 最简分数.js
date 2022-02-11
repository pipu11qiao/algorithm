/**
 * @param {number} n
 * @return {string[]}
 */

function check(num1, num2) {
  // num1 < num2
  for (let i = 2; i <= num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      return false
    }
  }
  return true
}
var simplifiedFractions = function (n) {
  const arr = [];
  for (let num = 2; num <= n; num++) {
    const isEven = num % 2 == 0;
    for (let molecule = 1; molecule < num; molecule += isEven ? 2 : 1) {
      if (check(molecule, num)) {
        arr.push(`${molecule}/${num}`)
      }
    }
  }
  return arr;
};

function test() {
  // const n = 2;
  const n = 8;
  const res = simplifiedFractions(n)
  console.log(`res`, res);

}

test()