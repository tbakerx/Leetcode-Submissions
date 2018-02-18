# 350. Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.


### Solution 1 - Occurance counters [Wrong for this dataset]
* This solution is correct assuming that the values are positive integers from 0-9. I wasn't aware that we could be dealing with large and negative numbers.

For this solution for a dataset of 0-9 positive integers, I create 2 occurance arrays with indexes from 0-9. Then traverse each given array and whatever the next value is, I increment the value of the occurance array at that index. This results in 2 arrays giving the number of occurances of each value in each array.

Following that, I loop from 0-9 and check the number of occurances of each value from each array. As long as there is more than 1 in each, I take the minimum number of occurances and push that value that many times to the result array.

What results is an intersection array showing the values that occur in both and in as many times as they occur in both.

#### Note: Does not work with integers larger than 9 or negative values


### Solution 2 - Reduce and Filter [Accepted]
Start by using a reduce function to track how many times an item occurs in the first list.

Then filter out values from the second list by the number of times it occurred in the first list.

Resulting array is a list of values that occur in both and the amount of times they do so.

Time complexity: O(n)

Space complexity: O(1)
