var countTriplets = function(arr) {
    const n = arr.length;
    const s = [0];
    for (const num of arr) {
        s.push(s[s.length - 1] ^ num);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let k = i + 1; k < n; k++) {
            if (s[i] === s[k + 1]) {
                ans += k - i;
            }
        }
    }

    return ans;
};

function test() {
  let fun = countTriplets;
  let params = [
    //[1, 1, 1, 0]
    // [2, 3, 1, 6, 7],
    // [2, 3, 1],
    [1, 1, 1, 1, 1],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
