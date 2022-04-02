/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
  const formatInfo = {
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
  }
  // step1 数量
  // step2 格式
  // step3 重复

};

function test() {
  let fun = strongPasswordChecker;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()