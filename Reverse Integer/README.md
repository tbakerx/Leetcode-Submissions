# 7. Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

### Solution [Accepted]

Takes the input and loops through taking the least significant digit and adding it to the result. Then multiplies the result by 10 in order to shift the result. Then divides the input by 10 to get rid of the least significant digit. Repeated in the loop until the integer is reversed. Then checks the result at the end to ensure that the result is a valid integer and hasn't overflowed.

Time Complexity: O(n) - where n is equal to the amount of digits of the input
Space Complexity: O(1) - Only creates one integer variable
