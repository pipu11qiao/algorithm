function bucket(num, len, min, max) {
    return Math.floor(((num - min) * len / (max - min)));
}
function maxGap(nums) {


    if (nums == null || nums.length < 2) {
        return 0;
    }
    const len = nums.length;
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < len; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }
    if (min == max) {
        return 0;
    }
    let hasNum = {};
    const maxs = {};
    const mins = {}
    let bid = 0;
    for (let i = 0; i < len; i++) {
        bid = bucket(nums[i], len, min, max);
        mins[bid] = hasNum[bid] ? Math.min(mins[bid], nums[i]) : nums[i];
        maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], nums[i]) : nums[i];
        hasNum[bid] = true;
    }
    let res = 0;
    let lastMax = maxs[0];
    let i = 1;
    console.log('mins', mins);
    console.log('maxs', maxs);
    console.log('hasNum', hasNum);
    for (; i <= len; i++) {
        if (hasNum[i]) {
            res = Math.max(res, mins[i] - lastMax);
            lastMax = maxs[i];
        }
    }
    return res;
}
const arr = [53, 23, 11, 0]
console.log(maxGap(arr));

