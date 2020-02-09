export function getDataAttributesOfHTMLNode(node) {
    var data = {
        category: '',
        sort: '',
    };
    for (var i = 0, atts = node.attributes, n = atts.length; i < n; i++) {
        var _a = atts[i], nodeName = _a.nodeName, nodeValue = _a.nodeValue;
        if (nodeName.includes('data')) {
            data[nodeName.slice(5, nodeName.length)] = nodeValue;
        }
    }
    delete data.category;
    delete data.sort;
    return data;
}
//# sourceMappingURL=getDataAttributesOfHTMLNode.js.map