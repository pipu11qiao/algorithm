/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {

};

function test() {
  let fun = snakesAndLadders;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()