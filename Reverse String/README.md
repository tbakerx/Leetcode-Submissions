# Reverse String

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".

### Solution - Built in JS Functions [Accepted]
In this simple one liner, we make use of the split(), reverse(), and join() built in functions of javascript. We begin by splitting the string into an array of characters, reversing the array, and joining it back into a string.

Time Complexity: O(n) - Reverse funtion traverses n elements.
Space Complexity: O(n) - Split function returns an array of n elements. Built in reverse function returns a new array and does not reverse items in place.
