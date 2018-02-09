# Valid Sudoku

Determine if a Sudoku is valid

The Sudoku board could be partially filled, where empty cells are filled with the character '.'

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

### Solution - Java HashSets [Accepted]
 This implementation uses Javas HashSets and goes through the 2-dimensional matrix checking each value to see if it is either '.' or if it is a value, tries to add it to the column, row, and block HashSets created. If on any of these it fails (value is already present in one of the Sets) we conclude that it is not a valid Sudoku and returns false.

 Time Complexity: O(n^2) Traverses entire 2-dimensional array.
 Space Complexity: O(n) Creates 3 HashSets of max size n.
