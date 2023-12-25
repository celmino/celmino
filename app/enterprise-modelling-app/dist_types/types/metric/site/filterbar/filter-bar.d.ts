/// <reference types="react" />
import { Component, JSX, RefObject } from "preact";
import { SiteArea } from "../util/UrlHelper";
import { ClickhouseServerParameter } from "./ClickhouseParameter";
import { Filter } from "./Filter";
import { FilterBuilderTab } from "./FilterStore";
declare global {
    interface Window {
        scales: {
            contentLengthScale: number[];
            sessionDurationScale: number[];
        };
    }
}
export declare function renderFilterBar(element: HTMLElement, properties: FilterBarProps): void;
export interface FilterBarProps {
    filters: Filter[];
    pathFilter: Filter;
    allParameters: ClickhouseServerParameter[];
    siteArea: SiteArea;
}
interface FilterBarState {
    dropdownOpen: boolean;
    filters: Filter[];
    originalFilters: Filter[];
    tabToStartOn: FilterBuilderTab;
}
export declare class FilterBar extends Component<FilterBarProps, FilterBarState> {
    filterBarRef: RefObject<HTMLDivElement>;
    filterBarDropdownRef: RefObject<HTMLDivElement>;
    constructor(props: FilterBarProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(props: FilterBarProps, state: FilterBarState): JSX.Element[];
    renderFilter(filter: Filter): JSX.Element;
    getFilterClass(filter: Filter): string;
    isFilterApplicableForArea(filter: Filter): boolean;
    openOrCloseDropdown: () => void;
    filterItemClicked(evt: Event, filter: Filter): void;
    handleFilterBarOutsideClick: (evt: any) => void;
    handleFilterBarKeyDown: (evt: KeyboardEvent) => void;
    stopPropagation(evt: any): void;
}
export declare function getOperatorIcon(filter: Filter): JSX.Element;
export {};
