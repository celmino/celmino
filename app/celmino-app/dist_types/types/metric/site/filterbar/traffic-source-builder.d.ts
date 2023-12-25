/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, ExactItem } from "./FilterService";
export interface TrafficSourceBuilderProps {
}
interface TrafficSourceBuilderState {
    topTrafficSources: ExactItem[];
    topTrafficSourcesLoading: boolean;
    topTrafficSourcesPage: number;
}
export declare class TrafficSourceBuilder extends Component<TrafficSourceBuilderProps, TrafficSourceBuilderState> {
    constructor(props: TrafficSourceBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(props: TrafficSourceBuilderProps, state: TrafficSourceBuilderState): JSX.Element;
    renderExistingTrafficSourceFilters(): JSX.Element | JSX.Element[];
    renderTopSources(): any;
    addToFilter(evt: MouseEvent, item: AllItems, isNegated?: boolean): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    topTrafficSourcesNextPage(): void;
    topTrafficSourcesPreviousPage(): void;
    fetchTopTrafficSources(pageNum?: number): Promise<void>;
}
export {};
