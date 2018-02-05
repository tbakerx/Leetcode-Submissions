# 26. Remove Duplicates from Sorted Array

Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.


### Solution - 2 pointers [Accepted]

In this solution, we have 2 pointers, i and j and a dup variable to keep track of the number of duplicates. So long as i does not equal j, we increment both. When they become equal, we have found a duplicate and we will increment j and the dup variable until the duplicates finish and a new value is found. This new value will be copied to nums[i+1] and i gets incremented. This will repeat until j hits the end of the array. What results is all duplicate values are pushed to the back of the array and the length equals length-dup.

Time complexity: O(n) - At most, j traverses the array of n steps and i is always less.

Space complexity: O(1) - All substitutions are done in place, no extra space allocated.
