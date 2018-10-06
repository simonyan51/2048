var randomBetween = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ArrowKeyCodes = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40
}

var convertColorStringToHex = function(colorStr) {
    colorStr.slice(1);
    var hexArr = colorStr.split('', 2);
    console.log(hexArr);
    return {

    }
}