/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, RangeItem } from "./FilterService";
export interface PerformanceBuilderProps {
}
interface PerformanceBuilderState {
    topDurations: RangeItem[];
    topDurationsLoading: boolean;
    topDurationsPage: number;
    topTimeToFirstBytes: RangeItem[];
    topTimeToFirstBytesLoading: boolean;
    topTimeToFirstBytesPage: number;
    showTimeToFirstByte: boolean;
}
export declare class PerformanceBuilder extends Component<PerformanceBuilderProps, PerformanceBuilderState> {
    constructor(props: PerformanceBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    topDurationsRef: HTMLDivElement;
    topTtfbRef: HTMLDivElement;
    getPerformanceFilter(): Filter;
    getTimeToFirstByteFilter(): Filter;
    render(props: PerformanceBuilderProps, state: PerformanceBuilderState): JSX.Element;
    renderTopDurations(): any;
    renderTopTimeToFirstBytes(): any;
    addToFilter(evt: MouseEvent, item: AllItems, existingFilter: Filter): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    fetchTopDurations(pageNum?: number): Promise<void>;
    fetchTopTimeToFirstBytes(pageNum?: number): Promise<void>;
    refetchOtherTopList(changedFilter: Filter): void;
    topDurationsNextPage(): void;
    topDurationsPreviousPage(): void;
    topTimeToFirstBytesNextPage(): void;
    topTimeToFirstBytesPreviousPage(): void;
}
export {};
