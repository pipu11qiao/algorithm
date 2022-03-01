/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/* 解法1:
var findMedianSortedArrays = function (nums1, nums2) {
    let i1 = 0, i2 = 0;
    const isEven = (nums1.length + nums2.length) % 2 === 0;
    let s = 0;
    while (i1 < nums1.length || i2 < nums2.length) {
        let num;
        if (i1 === nums1.length) {
            num = nums2[i2++]
        } else if (i2 === nums2.length) {
            num = nums1[i1++];
        } else if (nums1[i1] < nums2[i2]) {
            num = nums1[i1++];
        } else {
            num = nums2[i2++]
        }
        console.log('num', num);
        if (i1 + i2 - 1 === Math.floor((nums2.length + nums1.length - 1) / 2)) {
            console.log('num left', num);
            s += num;
        }
        if (i1 + i2 - 1 === Math.floor((nums2.length + nums1.length - 1) / 2) + (isEven ? 1 : 0)) {
            console.log('num right', num);
            s += num;
            break
        }
    }
    return s / 2;
};

 */
const findMedianSortedArrays = function (nums1,nums2) {
    if(nums1.length > nums2.length){
        let tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    const m = nums1.length;
    const n = nums2.length;
    let iMin = 0, iMax = m;
    const halfLen = Math.floor((m+n +1) / 2)
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);
        let j = halfLen - i;
        if (i < iMax && nums2[j-1] > nums1[i]){
            iMin = i + 1; // i is too small
        }
        else if (i > iMin && nums1[i-1] > nums2[j]) {
            iMax = i - 1; // i is too big
        }
        else { // i is perfect
            let maxLeft = 0;
            if (i === 0) { maxLeft = nums2[j-1]; }
            else if (j === 0) { maxLeft = nums1[i-1]; }
            else { maxLeft = Math.max(nums1[i-1], nums2[j-1]); }
            if ( (m + n) % 2 === 1 ) { return maxLeft; }

            let minRight = 0;
            if (i === m) { minRight = nums2[j]; }
            else if (j === n) { minRight = nums1[i]; }
            else { minRight = Math.min(nums2[j], nums1[i]); }

            return (maxLeft + minRight) / 2;
        }
    }
    return 0;
};

const nums1 = [1,3];
const nums2 = [2,3];

console.log(findMedianSortedArrays(nums1, nums2))


