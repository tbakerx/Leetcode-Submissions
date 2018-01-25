/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    var length = nums.length;
    var i = 0;
    var temp = 0;
    for (i = 0; i<k; i++){
        
        var j = 0;
        temp=nums[length-1];
        for (j=length-1; j>=0; j--){
            nums[j]=nums[j-1];
        }nums[0]=temp;
    }
    
};
