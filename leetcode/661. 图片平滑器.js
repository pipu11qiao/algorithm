/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const mLen = img.length;
  const nLen = img[0].length;
  const imgSumArr = [];

  for (let i = 0; i < mLen; i++) {
    let sum = img[i][0];
    const sumArr = [sum];
    for (let j = 1; j < nLen; j++) {
      sum += img[i][j];
      sumArr.push(sum);
    }
    imgSumArr.push(sumArr)
  }
  const resArr = [];
  debugger;
  for (let i = 0; i < mLen; i++) {
    const tmpArr = [];
    for (let j = 0; j < nLen; j++) {
      let count = 0;
      let nCount = nLen < 3 ? nLen : (j === 0 || j === nLen - 1) ? 2 : 3;
      let curSum = 0;
      const rowArr = [i];
      i - 1 >= 0 && rowArr.push(i - 1);
      i + 1 < mLen && rowArr.push(i + 1);
      rowArr.forEach((rowNum) => {
        if (nCount === 1) {
          curSum += img[rowNum][j]
        } else {
          curSum += (j === nLen - 1 ? imgSumArr[rowNum][j] : imgSumArr[rowNum][j + 1]) - (j < 2 ? 0 : imgSumArr[rowNum][j - 2]);
        }
        count += nCount;
      })
      tmpArr.push(Math.floor(curSum / count));
    }
    resArr.push(tmpArr)
  }
  return resArr
}

function test() {
  let fun = imageSmoother;
  let params = [
    // [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
    // [
    //   [2, 3, 4],
    //   [5, 6, 7],
    //   [8, 9, 10],
    //   [11, 12, 13],
    //   [14, 15, 16]]
    // [[100, 200, 100], [200, 50, 200], [100, 200, 100]]
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()