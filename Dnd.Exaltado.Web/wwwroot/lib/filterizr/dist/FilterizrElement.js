import EventReceiver from './EventReceiver';
var FilterizrElement = /** @class */ (function () {
    function FilterizrElement(node, options) {
        this.node = node;
        this.options = options;
        this.eventReceiver = new EventReceiver(this.node);
    }
    Object.defineProperty(FilterizrElement.prototype, "dimensions", {
        get: function () {
            return {
                width: this.node.clientWidth,
                height: this.node.clientHeight,
            };
        },
        enumerable: true,
        configurable: true
    });
    FilterizrElement.prototype.destroy = function () {
        this.styles.destroy();
    };
    FilterizrElement.prototype.trigger = function (eventType) {
        var event = new Event(eventType);
        this.node.dispatchEvent(event);
    };
    return FilterizrElement;
}());
export default FilterizrElement;
//# sourceMappingURL=FilterizrElement.js.map