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
import { makeInitialStyles, makePaddingStyles, makeHeightStyles, } from './styles';
import StyledFilterizrElement from '../StyledFilterizrElement';
var StyledFilterContainer = /** @class */ (function (_super) {
    __extends(StyledFilterContainer, _super);
    function StyledFilterContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledFilterContainer.prototype.initialize = function () {
        this.set(makeInitialStyles(this.options));
    };
    StyledFilterContainer.prototype.updatePaddings = function () {
        this.set(makePaddingStyles(this.options));
    };
    StyledFilterContainer.prototype.setHeight = function (newHeight) {
        this.set(makeHeightStyles(newHeight));
    };
    return StyledFilterContainer;
}(StyledFilterizrElement));
export default StyledFilterContainer;
//# sourceMappingURL=StyledFilterContainer.js.map