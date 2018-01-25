/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function doReversal(nums, start, end){
    while(start<end){
        var temp = nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;
    }
}

var rotate = function(nums, k) {
    k %= nums.length;
    var length = nums.length;
    doReversal(nums, 0, length-1);
    doReversal(nums, 0, k-1);
    doReversal(nums, k, length-1);    
};
