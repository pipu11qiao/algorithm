/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums, start, end) {
  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = nums.length - 1
  }
  // console.log(`nums, start, end`, nums, start, end);
  const len = end - start + 1;
  if (len === 1) {
    return nums[start]
  }
  let halfIndex = start + Math.floor(len / 2);
  // console.log(`halfIndex`, halfIndex);
  if (nums[halfIndex] !== nums[halfIndex - 1] && nums[halfIndex] !== nums[halfIndex + 1]) {
    return nums[halfIndex]
  } else {
    if (nums[halfIndex] === nums[halfIndex - 1]) {
      if ((halfIndex - start + 1) % 2 !== 0) {
        return singleNonDuplicate(nums, start, halfIndex)
      } else {
        return singleNonDuplicate(nums, halfIndex + 1, end)
      }
    } else {
      if ((end - halfIndex + 1) % 2 === 0) {
        return singleNonDuplicate(nums, start, halfIndex - 1)
      } else {
        return singleNonDuplicate(nums, halfIndex, end)
      }
    }
  }
};

function test() {
  // const res = singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]);
  // const res = singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]);
  const res = singleNonDuplicate([1, 1, 2, 2, 4, 4, 5, 5, 9]);


  // const res = singleNonDuplicate([1, 1, 2, 2, 3]);
  console.log(`res`, res);
}

test()