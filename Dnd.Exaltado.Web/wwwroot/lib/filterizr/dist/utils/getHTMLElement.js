/**
 * Wrapper around document.querySelector, will function as
 * an identity function if an HTML element is passed in
 * @param {HTMLElement|string} nodeOrSelector
 */
export var getHTMLElement = function (selectorOrNode) {
    if (typeof selectorOrNode === 'string') {
        return document.querySelector(selectorOrNode);
    }
    return selectorOrNode;
};
//# sourceMappingURL=getHTMLElement.js.map