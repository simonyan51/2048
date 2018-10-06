var Square = (function() {
    var Square = function(i, j, value = null, elementReference = null, color = '#f67c5f') {
        this.i = i;
        this.j = j;
        this.value = value;
        this.elementReference = elementReference;
    }

    Square.prototype.getI = function() {
        return this.i;
    }
    
    Square.prototype.getJ = function() {
        return this.j;
    }

    Square.prototype.setI = function(i) {
        this.i = i;
    }

    Square.prototype.setJ = function(j) {
        this.j = j;
    }

    Square.prototype.setValue = function(value) {
        this.value = value;
        if (this.elementReference) {
            this.elementReference.innerText = this.value;
        }
        this.renderBackgroundColor();
    }

    Square.prototype.getValue = function() {
        return this.value;
    }

    Square.prototype.setElementReference = function(reference) {
        this.elementReference = reference;
    }

    Square.prototype.getElementReference = function() {
        return this.elementReference;
    }

    Square.prototype.generateSquare = function(className) {
        this.elementReference = document.createElement('td');
        this.elementReference.classList.add(className);
        this.elementReference.innerText = this.value;
        this.renderBackgroundColor();
        return this.elementReference;
    }

    Square.prototype.renderBackgroundColor = function() {
        if (this.value) {
            this.elementReference.classList.add('square-background-color');
        } else {
            this.elementReference.classList.remove('square-background-color');
        }
    }

    return Square;

})();