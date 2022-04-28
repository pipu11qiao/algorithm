var Trie = function () {
  // key: letter {isWord:1,map:{}}
  this.map = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curMap = this.map;
  for (let i = 0; i < word.length; i++) {
    let curLetter = word[i];
    let isWord = false
    if (i === word.length - 1) {
      isWord = true
    }
    if (!curMap[curLetter]) {
      curMap[curLetter] = {
        isWord: false,
        map: {}
      }
    }
    if (isWord) {
      curMap[curLetter].isWord = true
    }
    curMap = curMap[curLetter].map
  }

};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curMap = this.map;
  for (let i = 0; i < word.length; i++) {
    let curLetter = word[i];
    if (!curMap[curLetter]) {
      return false;
    }
    if (i === word.length - 1) {
      if (curMap[curLetter].isWord) {
        return true
      }
    }
    curMap = curMap[curLetter].map
  }
  return false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curMap = this.map;
  for (let i = 0; i < prefix.length; i++) {
    let curLetter = prefix[i];
    if (!curMap[curLetter]) {
      return false;
    }
    curMap = curMap[curLetter].map
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// var obj = new Trie()
// obj.insert('apple')
// var param_2 = obj.search('apple')
// var param_3 = obj.startsWith('app')