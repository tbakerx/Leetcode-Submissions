# 283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.

### Solution - 2 pointer [Accepted]

Solution uses 2 pointers, one to keep track of where the last non-zero element was and one that runs ahead to find the next non-zero. When it finds one, it swaps the new non-zero element with the element that follows the non-zero pointer. We know that this following element is a zero otherwise the fast pointer would have caught it earlier. By swapping elements in place, we are optimal in space complexity and because we only deal with the non-zero elements, we are optimal in time complexity as well.

Time complexity: O(n) - Total operations equal non-zero elements. In the worst-case, we have all non-zero elements and have to deal with them all.  

Space complexity: O(1) - Changes made in-place
