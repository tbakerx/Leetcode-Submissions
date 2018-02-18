# 136. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


### Solution - Bit Manipulation (XOR) [Accepted]

Run through the array, and XOR all values. Since each element appears twice, XOR'ing them together will always result in 0. If any lone single element is XOR'ed with the 0, it will appear as the result.

Time complexity: O(n)

Space complexity: O(1)
