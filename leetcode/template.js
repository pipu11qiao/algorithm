
function test() {
  let fun = isOneBitCharacter;
  let params = [
    [1, 1, 1, 0]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()