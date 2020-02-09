import { Destructible, Dimensions, Resizable, Styleable } from './types/interfaces';
import FilterizrOptions from './FilterizrOptions';
import EventReceiver from './EventReceiver';
import StyledFilterizrElement from './StyledFilterizrElement';
export default abstract class FilterizrElement implements Destructible, Resizable, Styleable {
    node: Element;
    options: FilterizrOptions;
    protected eventReceiver: EventReceiver;
    constructor(node: Element, options: FilterizrOptions);
    get dimensions(): Dimensions;
    destroy(): void | Promise<void>;
    trigger(eventType: string): void;
    abstract get styles(): StyledFilterizrElement;
    protected abstract bindEvents(): void;
    protected abstract unbindEvents(): void;
}
