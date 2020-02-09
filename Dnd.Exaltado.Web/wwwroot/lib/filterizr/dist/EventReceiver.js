var EventReceiver = /** @class */ (function () {
    function EventReceiver(receiver) {
        this.receiver = receiver;
        this.eventDictionary = {};
    }
    EventReceiver.prototype.on = function (eventType, eventHandler) {
        var receiver = this.receiver;
        var receiversAreMany = receiver instanceof NodeList;
        var eventExists = !!this.eventDictionary[eventType];
        if (eventExists) {
            delete this.eventDictionary[eventType];
        }
        if (receiversAreMany && !!receiver.length) {
            this.eventDictionary[eventType] = eventHandler;
            Array.from(receiver).forEach(function (node) {
                node.addEventListener(eventType, eventHandler);
            });
        }
        else if (!receiversAreMany && !!receiver) {
            this.eventDictionary[eventType] = eventHandler;
            receiver.addEventListener(eventType, eventHandler);
        }
    };
    EventReceiver.prototype.off = function (eventType) {
        var receiver = this.receiver;
        var eventHandler = this.eventDictionary[eventType];
        var receiversAreMany = receiver instanceof NodeList;
        if (receiversAreMany && !!receiver.length) {
            Array.from(receiver).forEach(function (node) {
                node.removeEventListener(eventType, eventHandler);
            });
        }
        else if (!receiversAreMany && !!receiver) {
            receiver.removeEventListener(eventType, eventHandler);
        }
        delete this.eventDictionary[eventType];
    };
    EventReceiver.prototype.destroy = function () {
        var _this = this;
        var receiver = this.receiver;
        var receiversAreMany = receiver instanceof NodeList;
        if (receiversAreMany && !!receiver.length) {
            Array.from(receiver).forEach(function (node) {
                return _this.removeAllEvents(node);
            });
        }
        else if (!receiversAreMany && !!receiver) {
            this.removeAllEvents(receiver);
        }
    };
    EventReceiver.prototype.removeAllEvents = function (node) {
        var _this = this;
        Object.keys(this.eventDictionary).forEach(function (key) {
            node.removeEventListener(key, _this.eventDictionary[key]);
            delete _this.eventDictionary[key];
        });
    };
    return EventReceiver;
}());
export default EventReceiver;
//# sourceMappingURL=EventReceiver.js.map