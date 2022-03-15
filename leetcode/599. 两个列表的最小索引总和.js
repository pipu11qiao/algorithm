/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let map = {}
  let shotArr = list1
  let longArr = list2
  if (list1.length > list2.length) {
    shotArr = list2
    longArr = list1
  }
  shotArr.map((item, index) => map[item] = index);
  let min = Number.POSITIVE_INFINITY;
  let resArr = [];
  for (let i = 0; i < longArr.length; i++) {
    const curStr = longArr[i]
    if (i > min) {
      break
    }
    if (map[curStr] !== undefined) {
      if (i + map[curStr] < min) {
        min = i + map[curStr]
        resArr = [curStr]
      } else if (i + map[curStr] === min) {
        resArr.push(curStr)
      }
    }
  }
  return resArr
};

function test() {
  let fun = findRestaurant;
  let params = [
    // ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    // ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]

  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()