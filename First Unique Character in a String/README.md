# First Unique Character in a string
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

### Solution - lastIndexOf [Accepted]
This implementation uses javascripts lastIndexOf method and goes through the string and checks to see if the input's index of the value found is equal to the input's last index of the value. If so, it is a unique character and if none found, return -1.

Time Complexity: O(n) - Traverses string once.
Space Complexity: O(1) - No extra space used.
