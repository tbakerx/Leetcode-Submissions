# 217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.


### Solution - Sort [Accepted]
Use javascript's array sort function to sort values in increasing order and then simply traverse the array once to check for any duplicates. If any found, return true. If not return false.

Time complexity: O(n log n) - complexity of sort in O(n log n) and traversal is just O(n).

Space complexity: O(1) - assuming heapsort. This will change the input though, otherwise O(n) if you make a copy first to run the function on.
