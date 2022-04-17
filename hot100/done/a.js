function order(n) {
  let arr = ['0', '1'];
  while (n > 1) {
    let tmp = [];
    arr.forEach(item => {
      tmp.push(item + '0')
      tmp.push(item + '1')
    })
    arr = tmp;
    n--
  }
  return arr
}

function test() {
  let fun = order;
  let params = [
    3
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()