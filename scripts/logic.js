var initializeLogic = function(matrixViewModel, matrixView) {
    var renderRandomSquareNumbers = function(matrix) {
        var i;
        var j;
        i = randomBetween(0, 3);
        j = randomBetween(0, 3);
        if (matrix[i][j].getValue()) {
            renderRandomSquareNumbers(matrix);
        } else {
            matrix[i][j].setValue(2);
        }
    }

    var switchReferencesOfSquare = function(firstSquare, secondSquare, matrix) {
        var secondElementReference = secondSquare.getElementReference();
        secondSquare.setElementReference(firstSquare.getElementReference());
        firstSquare.setElementReference(secondElementReference);
        if (firstSquare.getValue() && secondSquare.getValue()) {
            firstSquare.setValue(firstSquare.getValue() + secondSquare.getValue());
        } else if (firstSquare.getValue() && !secondSquare.getValue()) {
            firstSquare.setValue(firstSquare.getValue());
        } else {
            firstSquare.setValue(null);
        }
        secondSquare.setValue(null);
        matrix[secondSquare.getI()][secondSquare.getJ()] = firstSquare;
        matrix[firstSquare.getI()][firstSquare.getJ()] = secondSquare;
        var firstSquareI = firstSquare.getI();
        var firstSquareJ = firstSquare.getJ();
        firstSquare.setI(secondSquare.getI());
        firstSquare.setJ(secondSquare.getJ());
        secondSquare.setI(firstSquareI);
        secondSquare.setJ(firstSquareJ);
    }

    var checkIfHasEmptySpace = function(matrix) {
        var hasEmptySpace = false;
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (!matrix[i][j].getValue()) {
                    hasEmptySpace = true;
                    break;
                }
            }
            if (hasEmptySpace) {
                break;
            }
        }

        return hasEmptySpace;
    }

        
    var comparing = function(col, comparingSquare, matrix, matrixView, pressFunc) {
        if (col.getValue() && col.getValue() === comparingSquare.getValue()) {
            switchReferencesOfSquare(col, comparingSquare, matrix);
        } else if (col.getValue() && !comparingSquare.getValue()) {
            switchReferencesOfSquare(col, comparingSquare, matrix);
            pressFunc(matrix, matrixView);
        }
    }


    var handleOnUpPress = function(matrix, matrixView) {
        matrix.forEach(function (row, i) {
            row.forEach(function (col, j) {
                if (i - 1 >= 0) {
                    var comparingSquare = matrix[i - 1][j];
                    comparing(col, comparingSquare, matrix, matrixView, handleOnUpPress);
                }
            });
        });
    }
    var handleOnDownPress = function(matrix, matrixView) {
        matrix.forEach(function (row, i) {
            row.forEach(function (col, j) {
                if (i + 1 < matrixView.getRows()) {
                    var comparingSquare = matrix[i + 1][j];
                    comparing(col, comparingSquare, matrix, matrixView, handleOnDownPress);
                }
            });
        });
    }

    var handleOnLeftPress = function(matrix, matrixView) {
        matrix.forEach(function (row, i) {
            row.forEach(function (col, j) {
                if (j - 1 >= 0) {
                    var comparingSquare = matrix[i][j - 1];
                    comparing(col, comparingSquare, matrix, matrixView, handleOnLeftPress);
                }
            });
        });
    }

    var handleOnRightPress = function(matrix, matrixView) {
        matrix.forEach(function (row, i) {
            row.forEach(function (col, j) {
                if (j + 1 < matrixView.getCols()) {
                    var comparingSquare = matrix[i][j + 1];
                    comparing(col, comparingSquare, matrix, matrixView, handleOnRightPress);
                }
            });
        });
    }

    var handleEventListeners = function(matrix, matrixView) {
        window.onkeydown = function(event) {
            switch(event.keyCode) {
                case ArrowKeyCodes.ARROW_LEFT:
                handleOnLeftPress(matrix, matrixView);
                break;
                case ArrowKeyCodes.ARROW_UP:
                handleOnUpPress(matrix, matrixView);
                break;
                case ArrowKeyCodes.ARROW_RIGHT:
                handleOnRightPress(matrix, matrixView);
                break;
                case ArrowKeyCodes.ARROW_DOWN:
                handleOnDownPress(matrix, matrixView);
                break;
            }
            if (checkIfHasEmptySpace(matrix)) {
                renderRandomSquareNumbers(matrix);
            } else {
                alert("GAME OVER");
            }
        }
    }

    renderRandomSquareNumbers(matrixViewModel);
    renderRandomSquareNumbers(matrixViewModel);

    handleEventListeners(matrixViewModel, matrixView);
}