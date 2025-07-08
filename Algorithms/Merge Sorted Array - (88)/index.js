/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const newNums1 = nums1.slice(0, m);
    const newNums2 = nums2.slice(0, n);
      newNums1.sort(function(a, b){return a - b});
      newNums2.sort(function(a, b){return a - b});
      let sortedArr =   newNums1.concat(newNums2);
      sortedArr.sort(function(a, b){return a - b});
     for (let i = 0; i < sortedArr.length; i++) {
    nums1[i] = sortedArr[i];
}
   return nums1;
};