/**
 * Simple method to check if two arrays of FilterItems
 * are sorted in the same manner or not.
 * @param {Array} arr1 the first array of FilterItems
 * @param {Array} arr2 the second array of FilterItems
 * @return {Boolean} equality
 */
export var filterItemArraysHaveSameSorting = function (filterItemsA, filterItemsB) {
    if (filterItemsA.length !== filterItemsB.length) {
        return false;
    }
    return filterItemsA.reduce(function (acc, filterItemA, index) {
        var indexA = filterItemA.getSortAttribute('index');
        var indexB = filterItemsB[index].getSortAttribute('index');
        return acc && indexA === indexB;
    }, true);
};
//# sourceMappingURL=filterItemArraysHaveSameSorting.js.map