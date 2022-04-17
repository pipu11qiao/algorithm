/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
function getTime(range1, range2) {
  let [left1, right1] = range1;
  let [left2, right2] = range2;
  if (left1 >= right2 || range1 <= left2) {
    return [0, 0]
  }
  return [Math.max(left1, left2), Math.min(right1, right2)]
}
var minAvailableDuration = function (slots1, slots2, duration) {
  slots1.sort((a, b) => a[1] - b[1])
  slots2.sort((a, b) => a[1] - b[1])
  let m = 0;
  let n = 0;
  // debugger
  while (m < slots1.length && n < slots2.length) {
    let timeRange = getTime(slots1[m], slots2[n]);
    let time = timeRange[1] - timeRange[0];
    if (time === 0) {
      if (slots1[m][0] >= slots2[n][1]) {
        n++
      } else {
        m++
      }
    } else {
      if (time >= duration) {
        return [timeRange[0], timeRange[0] + duration]
      } else {
        if (slots1[m][1] >= slots2[n][1]) {
          n++
        } else {
          m++
        }
      }
    }
  }
  return []
};

function test() {
  let fun = minAvailableDuration;
  let params = [
    // [[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], duration = 8
    // [[10, 60]], [[12, 17], [21, 50]], 8
    [[216397070, 363167701], [98730764, 158208909], [441003187, 466254040], [558239978, 678368334], [683942980, 717766451]],
    [[50490609, 222653186], [512711631, 670791418], [730229023, 802410205], [812553104, 891266775], [230032010, 399152578]], 456085
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()
/*

输入：slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
输出：[60,68]

输入：slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12
输出：[]

*/
