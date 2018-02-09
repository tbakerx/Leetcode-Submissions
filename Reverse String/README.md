# Reverse String

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".

### Solution 1 - Built in JS Functions [Accepted]
In this simple one liner, I make use of the split(), reverse(), and join() built in functions of javascript. I begin by splitting the string into an array of characters, reversing the array, and joining it back into a string.

Time Complexity: O(n) - Reverse funtion traverses n elements.
Space Complexity: O(n) - Split function returns an array of n elements. Built in reverse function returns a new array and does not reverse items in place.

### Solution 2 - Recursion One Liner [Accepted]
In this implementation, I use a ternary operated recursion to split the first character off of the string and rerun the function on the resulting string. Through the returns of this recursion, the last letter of the current string is added to the string being returned. Once all calls have been completed, we are left with a reversed string.

Time Complexity: O(n) - Makes n recursive function calls
Space Complexity: O(n) - Returns a new String  
