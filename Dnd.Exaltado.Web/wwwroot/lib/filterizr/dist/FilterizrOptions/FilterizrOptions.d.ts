import { BaseOptions, RawOptions } from './../types/interfaces';
import ActiveFilter from '../ActiveFilter';
import { Filter } from '../types';
export interface Options extends BaseOptions {
    filter: ActiveFilter;
}
export default class FilterizrOptions {
    private options;
    constructor(userOptions: RawOptions);
    get isSpinnerEnabled(): boolean;
    get areControlsEnabled(): boolean;
    get controlsSelector(): string;
    get filter(): Filter;
    set filter(filter: Filter);
    toggleFilter(filter: string): void;
    get searchTerm(): string;
    set searchTerm(searchTerm: string);
    get(): Options;
    getRaw(): RawOptions;
    set(newUserOptions: RawOptions): void;
    private convertToFilterizrOptions;
    private convertToOptions;
    private validate;
}
