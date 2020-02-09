var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { makeInitialStyles, makeFilteringStyles, makeTransitionStyles, } from './styles';
import StyledFilterizrElement from '../StyledFilterizrElement';
var imagesLoaded = require('imagesloaded');
var StyledFilterItem = /** @class */ (function (_super) {
    __extends(StyledFilterItem, _super);
    function StyledFilterItem(node, index, options) {
        var _this = _super.call(this, node, options) || this;
        _this._index = index;
        return _this;
    }
    StyledFilterItem.prototype.initialize = function () {
        this.set(makeInitialStyles(this.options));
    };
    StyledFilterItem.prototype.setFilteredStyles = function (position, cssOptions) {
        this.set(makeFilteringStyles(position, cssOptions));
    };
    StyledFilterItem.prototype.updateTransitionStyle = function () {
        this.set(makeTransitionStyles(this._index, this.options));
    };
    StyledFilterItem.prototype.updateWidth = function () {
        var gutterPixels = this.options.get().gutterPixels;
        var containerWidth = this.node.parentElement.clientWidth;
        var itemWidth = this.node.clientWidth;
        var timesItFitsContainer = Math.floor(containerWidth / itemWidth);
        var gutterRatio = 1 / timesItFitsContainer + 1;
        var width = itemWidth - gutterPixels * gutterRatio + "px";
        this.set({ width: width });
    };
    /**
     * Sets the transition css property as an inline style on the FilterItem.
     *
     * The idea here is that during the very first render items should assume
     * their positions directly.
     *
     * Following renders should actually trigger the transitions, which is why
     * we need to delay setting the transition property.
     *
     * Unfortunately, JavaScript code executes on the same thread as the
     * browser's rendering. Everything that needs to be drawn waits for
     * JavaScript execution to complete. Thus, we need to use a setTimeout
     * here to defer setting the transition style at the first rendering cycle.
     */
    StyledFilterItem.prototype.enableTransitions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var hasImage = !!_this.node.querySelectorAll('img').length;
                        if (hasImage) {
                            imagesLoaded(_this.node, function () {
                                setTimeout(function () {
                                    _this.updateTransitionStyle();
                                    resolve();
                                }, 10);
                            });
                        }
                        else {
                            setTimeout(function () {
                                _this.updateTransitionStyle();
                                resolve();
                            }, 10);
                        }
                    })];
            });
        });
    };
    StyledFilterItem.prototype.disableTransitions = function () {
        this.remove('transition');
    };
    StyledFilterItem.prototype.setZIndex = function (zIndex) {
        this.set({ 'z-index': zIndex });
    };
    StyledFilterItem.prototype.removeZIndex = function () {
        this.remove('z-index');
    };
    StyledFilterItem.prototype.removeWidth = function () {
        this.remove('width');
    };
    return StyledFilterItem;
}(StyledFilterizrElement));
export default StyledFilterItem;
//# sourceMappingURL=StyledFilterItem.js.map