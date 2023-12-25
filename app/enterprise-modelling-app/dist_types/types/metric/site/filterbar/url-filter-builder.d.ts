/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, ExactItem } from "./FilterService";
export interface UrlFilterBuilderProps {
}
interface UrlFilterBuilderState {
    topUrls: ExactItem[];
    topUrlsLoading: boolean;
    topUrlPage: number;
    topMethods: ExactItem[];
    topMethodsLoading: boolean;
    topMethodPage: number;
    showMethods: boolean;
}
export declare class UrlFilterBuilder extends Component<UrlFilterBuilderProps, UrlFilterBuilderState> {
    constructor(props: UrlFilterBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(props: UrlFilterBuilderProps, state: UrlFilterBuilderState): JSX.Element;
    renderExistingUrlFilters(): JSX.Element | JSX.Element[];
    renderExistingMethodFilters(): JSX.Element | JSX.Element[];
    renderTopUrls(): any;
    renderTopMethods(): any;
    addToFilter(evt: MouseEvent, item: AllItems, isNegated?: boolean): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    topUrlsNextPage(): void;
    topUrlsPreviousPage(): void;
    topMethodsNextPage(): void;
    topMethodsPreviousPage(): void;
    refetchOtherTopList(changedFilter: Filter): void;
    fetchTopUrls(pageNum?: number): Promise<void>;
    fetchTopMethods(pageNum?: number): Promise<void>;
}
export {};
