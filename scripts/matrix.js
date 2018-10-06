var Matrix = (function() {
    var Matrix = function(el, rows = 0, cols = 0) {
        this.element = el;
        this.rows = rows;
        this.cols = cols;
    }


    Matrix.prototype.getRows = function() {
        return this.rows;
    }

    Matrix.prototype.getCols = function() {
        return this.cols;
    }

    Matrix.prototype.setRows = function(rows) {
        this.rows = rows;
    }

    Matrix.prototype.setCols = function(cols) {
        this.cols = cols;
    }

    Matrix.prototype.generateMatrix = function(className) {
    
        var arr = [];

        for (var i = 0; i < this.rows; i++) {
            arr[i] = [];
            var row = document.createElement('tr');
            row.classList.add('row');
            for (var j = 0; j < this.cols; j++) {
                var square = new Square(i, j);
                var col = square.generateSquare(className);
                row.appendChild(col);
                arr[i][j] = square;
            }
            this.element.appendChild(row);
        }

        return arr;
    }

    return Matrix;
})()