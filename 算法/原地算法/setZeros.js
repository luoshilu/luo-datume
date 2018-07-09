/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    matrix.forEach((xx)=>console.log(xx))
    
    var row = {};
    var col = {};
    matrix.forEach(function(item,r){
        item.forEach(function(v,c){
            if(v == 0){
                row[r] = true;
                col[c] = true;
            }
        })
    })

    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[i].length;j++){
            if(row[i]||col[j]){
                matrix[i][j] = 0;
            }
        }
    }
};

var mt = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(mt)
res = JSON.stringify(mt);
console.log(res);

