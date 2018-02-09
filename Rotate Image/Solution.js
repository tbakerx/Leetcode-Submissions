/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var start = 0;
    var end = matrix.length-1;

//Swap arrays from top to bottom
    while(start < end){
        var tmp = matrix[start];
        matrix[start]=matrix[end];
        matrix[end]=tmp;
        start++;
        end--;
    }

// Reverse symmetry (along diagonal)
    for(var i = 0; i<matrix.length; i++){
        for(var j = i+1; j<matrix[i].length; j++){
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
};
