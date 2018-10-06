var init = function() {
    convertColorStringToHex('#f67c5f');
    var matrixEl = document.getElementById('matrix');
    var matrix = new Matrix(matrixEl, 4, 4);
    var matrixViewModel = matrix.generateMatrix('square');
    initializeLogic(matrixViewModel, matrix);
}

init();