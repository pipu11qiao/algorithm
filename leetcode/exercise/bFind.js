const compreFun = (_item, origin) => _item - origin;
function bFind(arr, start, end, item) {
  if (compreFun(item, arr[start]) <= 0) {
    return start;
  }
  if (compreFun(item, arr[end]) >= 0) {
    return -1;
  }
  let len = end - start + 1;
  if (len === 2) {
    return end
  }
  let mid = Math.floor((end - start) / 2) + start;
  let res = compreFun(item, arr[mid])
  if (res === 0) {
    return mid
  } else if (res > 0) {
    return bFind(arr, mid, end, item)
  } else {
    return bFind(arr, start, mid, item)
  }
}

function test() {
  let fun = bFind;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()