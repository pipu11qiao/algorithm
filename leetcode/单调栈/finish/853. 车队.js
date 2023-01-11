/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let arr = position.map((pos, i) => ({
    position: pos,
    speed: speed[i],
  }));
  arr.sort((a, b) => {
    if (a.position !== b.position) {
      return a.position - b.position;
    } else {
      return a.speed - b.speed;
    }
  });
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let time = (target - cur.position) / cur.speed;
    let pre;
    while (
      stack.length > 0 &&
      time >= (target - (pre = stack[stack.length - 1]).position) / pre.speed
    ) {
      stack.pop();
    }
    stack.push(cur);
  }
  // console.log(`stack`, stack);
  // console.log(`arr`, arr);
  return stack.length;
};

function test() {
  let fun = carFleet;
  let params = [
    //[1, 1, 1, 0]
    12,
    [10, 8, 8, 0, 5, 5, 3],
    [2, 4, 5, 1, 2, 1, 3],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
