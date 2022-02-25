/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function getNumber(num1Str) {
  let i = num1Str.indexOf('+');
  return {
    real: num1Str.slice(0, i),
    unreal: num1Str.slice(i + 1, num1Str.length - 1),
  }
}
var complexNumberMultiply = function (num1, num2) {
  const n1 = getNumber(num1);
  const n2 = getNumber(num2);
  const real = n1.real * n2.real - (n1.unreal * n2.unreal);
  const unreal = n1.real * n2.unreal + n2.real * n1.unreal;
  // console.log(`n1,n2`, n1, n2);
  return `${real}+${unreal}i`
};

function test() {
  let fun = complexNumberMultiply;
  let params = [
    '1+1i', '1+1i'
    // '1+-1i', '1+-1i'
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()