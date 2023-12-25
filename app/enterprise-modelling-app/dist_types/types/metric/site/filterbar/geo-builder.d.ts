/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, ExactItem } from "./FilterService";
export interface GeoBuilderProps {
}
interface GeoBuilderState {
    topCountries: ExactItem[];
    topCountriesLoading: boolean;
    topCountriesPage: number;
    topRegions: ExactItem[];
    topRegionsLoading: boolean;
    showRegion: boolean;
}
export declare class GeoBuilder extends Component<GeoBuilderProps, GeoBuilderState> {
    constructor(props: GeoBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(props: GeoBuilderProps, state: GeoBuilderState): JSX.Element;
    renderExistingCountryFilters(): JSX.Element | JSX.Element[];
    renderExistingRegionFilters(): JSX.Element | JSX.Element[];
    renderTopCountries(): any;
    renderTopRegions(): any;
    addToFilter(evt: MouseEvent, item: AllItems, isNegated?: boolean): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    topCountriesNextPage(): void;
    topCountriesPreviousPage(): void;
    refetchOtherTopList(changedFilter: Filter): void;
    fetchTopCountries(pageNum?: number): Promise<void>;
    fetchTopRegions(pageNum?: number): Promise<void>;
}
export {};
