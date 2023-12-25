/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, ExactItem } from "./FilterService";
export interface BrowserBuilderProps {
}
interface BrowserBuilderState {
    topBrowsers: ExactItem[];
    topBrowsersLoading: boolean;
    topBrowsersPage: number;
}
export declare class BrowserBuilder extends Component<BrowserBuilderProps, BrowserBuilderState> {
    constructor(props: BrowserBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(props: BrowserBuilderProps, state: BrowserBuilderState): JSX.Element;
    renderExistingBrowserFilters(): JSX.Element | JSX.Element[];
    renderTopBrowsers(): any;
    addToFilter(evt: MouseEvent, item: AllItems, isNegated?: boolean): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    topBrowsersNextPage(): void;
    topBrowsersPreviousPage(): void;
    fetchTopBrowsers(pageNum?: number): Promise<void>;
}
export {};
