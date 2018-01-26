/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
   //Create 2 0-9 arrays to count occurances of each value
    var occurance1=[];
    var occurance2=[];
    var result= [];
    for (var i=0;i<10;i++){
        occurance1.push(0);
        occurance2.push(0);
    }
    
    //When a value comes up, increment that index in the occurance array
    for (var i=0; i<nums1.length; i++){
        var value = nums1[i];
        occurance1[value]++;
    }
    for (var i=0; i<nums2.length; i++){
    	var value = nums2[i];
    	occurance2[value]++;
    }
//Run through the resulting occurance arrays and check that the value occurs in both, and how many times it occurs in both. Push this value to result array that many times
    for (var i=0; i<10;i++){
        var val1=occurance1[i];
        var val2=occurance2[i];
        var intersection = Math.min(val1 , val2);
        for (var j=0; j<intersection;j++){
            result.push(i);
        }
    }
    return result;
};
