/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length==0){return 0;}
    var i=0;
    var j=0;
    var dup=0;

    while (j+1<nums.length){
        if (nums[j]==nums[j+1]){
            j++;
            dup++;
        }
        else{
            j++;
            nums[++i]=nums[j];
        }
    }
    return nums.length-dup;
};
