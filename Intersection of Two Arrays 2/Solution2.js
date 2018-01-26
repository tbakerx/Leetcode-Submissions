/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //Track the number of times a value occurs in nums1
    var trackVals = nums1.reduce(function(map,n){
        map[n]= (map[n]+1) || 1;
        return map;
    }, {});
    
    //filter out values from the second list by the amount of times they occured in the first list
    var result = nums2.filter(function(n){
        if(trackVals[n]){
            trackVals[n]--;
            return true;
        }else return false;
    });
    return result;
};
