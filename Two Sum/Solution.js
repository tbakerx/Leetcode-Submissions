/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var output = [2];
    for (var i=0; i<nums.length; i++){
        for (var j=i+1; j<nums.length; j++){
            if (nums[i]+nums[j]==target){
                output[0]=i;
                output[1]=j;
                return output;
            }
        }
    } var result = "fail, no 2 elements add up to"+target;
};
