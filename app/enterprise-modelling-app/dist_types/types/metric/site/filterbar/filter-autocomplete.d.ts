/// <reference types="react" />
import { Component, RefObject } from "preact";
import { Filter } from "./Filter";
import { AllItems, AutocompleteResult, ExactItem, SearchItem } from "./FilterService";
export interface FilterAutocompleteState {
    autocompleteText: string;
    autocompleteResults: (ExactItem | SearchItem)[];
    autocompleteIsRunning: boolean;
    autocompleteIsVisible: boolean;
    autocompleteSelectedIndex: number;
}
export interface RowData {
    kind: string;
    displayText: string;
    count: number;
}
interface FilterAutocompleteProps {
    fetchResults: (text: string, filters: Filter[]) => Promise<AutocompleteResult<ExactItem, SearchItem>>;
    placeholder: string;
}
export declare class FilterAutocomplete extends Component<FilterAutocompleteProps, FilterAutocompleteState> {
    constructor(props: any);
    autocompleteRef: RefObject<HTMLDivElement>;
    private placeholderText;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    renderAutocompleteResults(): any[] | JSX.Element;
    getDisplayText(result: ExactItem | SearchItem): string;
    autoCompleteKeyDown(e: KeyboardEvent): any;
    onAutocompleteTextChange(text: string): void;
    doAutocomplete(text: string): Promise<void>;
    handleAutocompleteOutsideClick: (evt: any) => void;
    addToFilter(evt: KeyboardEvent | MouseEvent, item: AllItems, isNegated?: boolean): void;
}
export {};
