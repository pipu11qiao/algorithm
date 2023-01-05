/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
function makeSearchTree(sorceStr) {
  let len = sorceStr.length;
  let allMap = {};
  let sourceArr = sorceStr.split('');
  let searchArr = [];
  for (let i = len - 1; i >= 0; i--) {
    let map = {};
    let curLetter = sourceArr[i];
    for (let j = len - 1; j > i; j--) {
      let letter = sourceArr[j];
      if (map[letter] === undefined) {
        map[letter] = [];
      }
      map[letter].push(searchArr[j])
    }
    if (allMap[curLetter] === undefined) {
      allMap[curLetter] = []
    }
    allMap[curLetter].push(map)
    searchArr[i] = map
  }
  searchArr = null;
  return allMap
}

var shortestWay = function (source, target) {
  const allMap = makeSearchTree(source);
  // console.log(`allMap`, allMap);
  let len = target.length;
  // 包含一个字母没有
  for (let i = 0; i < len; i++) {
    if (!allMap[target[i]]) {
      return -1;
    }
  }
  // 所有字母都有
  const shortIndexMap = {}; // '0-1' 最小数量
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const curRes = {
        count: 1,
        mapArr: [],
      }
      const curLetter = target[j]
      if (j > i) {
        let prev = j - 1;
        let curMapArr = [];
        let key = `${i}-${prev}`;
        let prevStateObj = shortIndexMap[`${i}-${prev}`];
        let prevMapArr = prevStateObj.mapArr;

        prevMapArr.forEach(prevObj => {
          if (prevObj[curLetter]) {
            curMapArr = [...curMapArr, ...prevObj[curLetter]]
          }
        })
        if (curMapArr.length === 0) {
          curRes.count = prevStateObj.count + 1
          curRes.mapArr = allMap[curLetter];
        } else {
          curRes.count = prevStateObj.count;
          curRes.mapArr = curMapArr;
        }

      } else {
        curRes.mapArr = allMap[curLetter]
      }
      shortIndexMap[`${i}-${j}`] = curRes;
    }
  }
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < len; i++) {
    let leftKey = `0-${i}`;
    let rightKey = `${i + 1}-${len - 1}`
    min = Math.min(min, shortIndexMap[leftKey].count + (shortIndexMap[rightKey] ? shortIndexMap[rightKey].count : 0))
  }
  return min
};
function test() {
  let fun = shortestWay;
  let params = [
    // 'abcdcb', 'abcbc'
    // "abc", "abcbc"
    // "abc", "acdbc"
    // "xyz", "xzyxz"
    // "crlzlnuhhwgrwwjcbkixocaatjtezwztgnbuljzkxrrjspgqxiuuqavodztpppdohemdtzjswmcvndiqviahniycneowwfephukgrgfphgkwqogyhimchmpbwmfonpqxtyfvswmwgpdosbsvasrtuhtnreurrirrmowutmtrikpzdtnasltkhgfaamuorumoywxbpxucbiwnugkiqmihidqbomqlyfignjmvdlpnxhskkmlwnvegayiafdqmmdaamzlbtposcxyuoapqffjxqgeskbemstkpamdfwpmkmqvzxrlojwfxvtzwjdtjzgbaxgdijivnvlylhlxvqmosjmpnhiziqjexwnthxynvuznuxreoukjrhmludkihconwhpxgdsxhjqiplijcdetghfmctzeonlpuvyfuovyyksxbbscdmfnkdgwanxpjeulicphtolprwulwvfuypzyvnpensxodxxexplhnivbwskjjvygfdsodubduzuiauyukbfsyfpgigecccoafclrmwdjcuoildcznmqfgpbuorbghahlygddqhhzikvcjyxtwkjwviwanfqbvkvufrawpmvantjmmuujgautfpvtwwnpkrpkdyiovyqqasdyfhytg",
    //  "qggsfsgbyhpzypxfghsvxunjoxdqxndvfisweotkchsnfmshwsanulfpwgcwailntbvaunxqmrlvmufdrxjamkixgyasjblwptpwyoskeksjvlbsfurlilvhkjhvozpsrnyrzkqqgyfobghqqoodchwlojbfzwpastapezusnlqffkiobybkszwyfgqjofclfvqebifrdvmmktfozxaqjruyhlashvofhjsxkuelknvisgnuktqisexxpeckrcvmfmhfgxlezlsidgiectdudwwfpvtohxsgiopummzwmhjjshlygagurauolxxcopyvpljjikgpbgskfqufcgtkrhagywvruziihstrspdriamgdwehzwojvwhhtyxhtrrnbvbddwobbkxxjutjrztrpwwooafkbaxiahdqwoctomeytmiauanfutejtkwdvmwbactthlbvgmgsypqxjpbkfmaoziawqgnirqjixencnlbimhooiqxjksuvkpmajhemmrhwvghvhosdwlblyaxkflycndgftjfxlvrerzywhxcbciuhatwszdhasggliwzpkrrxxydcbgflzwefxzlhtvbbniarqugasulcwsbxbldtitakwosjchrhpxwrdnfq"
    "crlzlnuhhwgrwwjcbkixocaatjtezwztgnbuljzkxrrjspgqxiuuqavodztpppdohemdtzjswmcvndiqviahniycneowwfephukgrgfphgkwqogyhimchmpbwmfonpqxtyfvswmwgpdosbsvasrtuhtnreurrirrmowutmtrikpzdtnasltkhgfaamuorumoywxbpxucbiwnugkiqmihidqbomqlyfignjmvdlpnxhskkmlwnvegayiafdqmmdaamzlbtposcxyuoapqffjxqgeskbemstkpamdfwpmkmqvzxrlojwfxvtzwjdtjzgbaxgdijivnvlylhlxvqmosjmpnhiziqjexwnthxynvuznuxreoukjrhmludkihconwhpxgdsxhjqiplijcdetghfmctzeonlpuvyfuovyyksxbbscdmfnkdgwanxpjeulicphtolprwulwvfuypzyvnpensxodxxexplhnivbwskjjvygfdsodubduzuiauyukbfsyfpgigecccoafclrmwdjcuoildcznmqfgpbuorbghahlygddqhhzikvcjyxtwkjwviwanfqbvkvufrawpmvantjmmuujgautfpvtwwnpkrpkdyiovyqqasdyfhytg",
    //  "qggsfsgbyhpzypxfghsvxunjoxdqxndvfiswe"
    //  "qggsfsgb"
     "qgg"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()