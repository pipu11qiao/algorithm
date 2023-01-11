/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
  let ans = 0;
  let st = [];
  for (let num of nums) {
    let maxT = 0;
    while (st.length > 0 && st[st.length - 1][0] <= num) {
      maxT = Math.max(maxT, st.pop()[1]);
    }
    maxT = st.length === 0 ? 0 : maxT + 1;
    ans = Math.max(ans, maxT);
    st.push([num, maxT]);
  }
  return ans;
};

function test() {
  let fun = totalSteps;
  let params = [
    //[1, 1, 1, 0]
    [
      10, 1, 2, 3, 4, 5, 6, 1, 2, 3, 9, 1, 2, 3, 4, 5, 6, 7, 8, 11, 1, 2, 3, 4,
      5, 6, 7, 9, 1, 2, 10, 1, 2,
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
