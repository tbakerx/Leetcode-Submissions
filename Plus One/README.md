# 66. Plus One

Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

### Solution - Direct [Accepted]

Solution is quite direct and simple. The key is handling the rarer case where the digits are all 9.
I start by checking if the last digit is less than 9. If so, simply increment that digit.

If it is 9, I call a function to see if they are all nines. If so, change first digit to one, change all others to zeroes and append another zero to the end.

If not all nines, loop backwards to check if the value prior is a 9. If not, increment it and change the final digit to zero. If it is a nine, change it to a zero and go a step further back. Repeat until you can increment a non-nine value.

Time complexity: O(n)

Space complexity: O(1)
