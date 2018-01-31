/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var nonZeroPointer = 0;
    for (var current = 0; current<nums.length; current++){
        if(nums[current] != 0){
            var temp = nums[current];
            nums[current]=nums[nonZeroPointer];
            nums[nonZeroPointer]=temp;
            nonZeroPointer++;
        }
    }
};
