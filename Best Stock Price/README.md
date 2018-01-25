# 122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

### Solution - Rising Peaks [Accepted]

Approach involves going through the array in one pass and adding the differences between points as long as the values are increasing.

Time complexity: O(n)
Space complexity: O(1)
