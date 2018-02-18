# 189. Rotate Array

Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].


### Attempt 1 Brute Force [Time Exceeded]
Brute force. Store the last value in a temp variable. Shift all values right by 1. Input the temp variable back in at first array value. Repeat process k times.

Time complexity: O(k*n)
Space complexity: O(1)

### Attempt 2 Split Reversal
Split reverse. Rotate entire array. Then rotate the first k elements. Then lastly reverse the last elements (last n-k). Resulting array is the original array shifted by k steps.

Time complexity: O(n)

Space complexity: O(1)
