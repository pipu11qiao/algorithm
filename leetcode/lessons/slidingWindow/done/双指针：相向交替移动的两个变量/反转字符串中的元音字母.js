/**
 * @param {string} s
 * @return {string}
 */
let okMap = {};
['a', 'e', 'i', 'o', 'u'].forEach(item => {
  okMap[item] = 1;
  okMap[item.toUpperCase()] = 1;
})
var reverseVowels = function (s) {
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (!okMap[arr[left]]) {
      left++
      continue
    }
    if (!okMap[arr[right]]) {
      right--
      continue
    }
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
  return arr.join('');

};

function test() {
  let fun = reverseVowels;
  let params = [
    "hello"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()