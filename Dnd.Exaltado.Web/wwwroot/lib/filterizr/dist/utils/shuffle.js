/**
 * Fisher-Yates shuffle ES6 non-mutating implementation.
 * @param {Array} array the array to shuffle
 * @return {Array} shuffled array without mutating the initial array.
 */
export var shuffle = function (array) {
    // perform deep clone on array to mutate
    var cloned = array.slice(0);
    // array to return
    var randomizedArray = [];
    // perform shuffle
    while (cloned.length !== 0) {
        var rIndex = Math.floor(cloned.length * Math.random());
        randomizedArray.push(cloned[rIndex]);
        cloned.splice(rIndex, 1);
    }
    return randomizedArray;
};
//# sourceMappingURL=shuffle.js.map