export var allStringsOfArray1InArray2 = function (arr1, arr2) {
    return arr1.reduce(function (acc, item) { return acc && arr2.includes(item); }, true);
};
//# sourceMappingURL=allStringsOfArray1InArray2.js.map