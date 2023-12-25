/// <reference types="react" />
import { Component } from "preact";
import { FilterBuilderTab } from "./FilterStore";
export interface FilterBarDropdownProps {
    closeBar: () => void;
    tabToStartOn: FilterBuilderTab;
}
interface FilterBarDropdownState {
    isApplyingFilters: boolean;
    selectedTab: FilterBuilderTab;
}
export declare class FilterBarDropdown extends Component<FilterBarDropdownProps, FilterBarDropdownState> {
    constructor(props: FilterBarDropdownProps);
    componentDidUpdate(prevProps: FilterBarDropdownProps): void;
    render(props: FilterBarDropdownProps, state: FilterBarDropdownState): JSX.Element;
    renderTab(tab: FilterBuilderTab, tabLabel: string): JSX.Element;
    applyFilters(): Promise<void>;
    cancelAndCloseBar(): void;
    changeTab(tab: FilterBuilderTab): void;
}
export {};
