class Solution {
    public boolean isValidSudoku(char[][] board) {
        for (int i=0; i<9; i++){
            HashSet<Character> column = new HashSet<Character>();
            HashSet<Character> row = new HashSet<Character>();
            HashSet<Character> block = new HashSet<Character>();

            for (int j=0; j<9; j++){
                if(board[j][i] != '.' && !column.add(board[j][i]))
                    return false;
                if(board[i][j] != '.' && !row.add(board[i][j]))
                    return false;
                int index_row = 3*(i/3);
                int index_column = 3*(i%3);

                if(board[index_row + j/3][index_column + j%3]!='.' && !block.add(board[index_row + j/3][index_column + j%3]))
                    return false;
            }
        }
    return true;
    }
}    
