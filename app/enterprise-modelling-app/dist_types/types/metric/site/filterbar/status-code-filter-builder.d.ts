/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, ExactItem } from "./FilterService";
export interface StatusCodeFilterBuilderProps {
}
interface StatusCodeFilterBuilderState {
    topStatusCodes: ExactItem[];
    topStatusCodesLoading: boolean;
    topStatusCodePage: number;
    statusCodeRangeCounts: {
        success: number;
        clientErrors: number;
        serverErrors: number;
    };
}
export declare class StatusCodeFilterBuilder extends Component<StatusCodeFilterBuilderProps, StatusCodeFilterBuilderState> {
    constructor(props: StatusCodeFilterBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(props: StatusCodeFilterBuilderProps, state: StatusCodeFilterBuilderState): JSX.Element;
    toggleStatusCodeRange(min: number, max: number): void;
    isStatusCodeRangeApplied(min: number, max: number): boolean;
    renderExistingStatusCodeFilters(): JSX.Element | JSX.Element[];
    renderTopStatusCodes(): any;
    addToFilter(evt: MouseEvent, item: AllItems, isNegated?: boolean): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    topStatusCodesNextPage(): void;
    topStatusCodesPreviousPage(): void;
    fetchTopStatusCodes(pageNum?: number): Promise<void>;
    fetchStatusCodeRangeCounts(pageNum?: number): Promise<void>;
}
export {};
