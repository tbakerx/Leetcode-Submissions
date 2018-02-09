# Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

### Solution - Flip and Reverse Symmetry [Accepted]

In this implementation, we begin by flipping the matrix upside down. By that I mean we reverse all the rows from top to bottom. Then, we swap the symmetry of the resulting matrix along the diagonal from top left to bottom right. What results is a 90 degree clockwise rotation.

Time Complexity: O(n^2) - Reversing symmetry traverses the whole of the matrix
Space Complexity: O(1) - Uses a single temp variable at a time for swapping and no other space.

#### Optional: To rotate counter-clockwise
To rotate counter-clockwise, simply flip the array from left to right instead of up and down in the first step and then reverse the symmetry like normal.
