/**
 * Set inline styles on an HTML node
 * @param {HTMLElement} node - HTML node
 * @param {Object} styles - object with styles
 * @returns {undefined}
 */
export function setStyles(node, styles) {
    Object.entries(styles).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        node.style[key] = value;
    });
}
//# sourceMappingURL=setStyles.js.map