import { SiteArea } from "../util/UrlHelper";
import { Filter } from "./Filter";
import { AllItems } from "./FilterService";
export declare const MAX_FILTERS = 20;
export declare enum FilterBuilderTab {
    Url = "Url",
    StatusCode = "StatusCode",
    ClientDevice = "ClientDevice",
    Geolocation = "Geolocation",
    Performance = "Performance",
    Browser = "Browser",
    SourceMedium = "SourceMedium",
    LandingPages = "LandingPages",
    Engagement = "Engagement",
    WebVitals = "WebVitals",
    Content = "Content",
    TimingBreakdown = "TimingBreakdown"
}
export declare enum FilterGroup {
}
export declare namespace FilterBuilderTab {
    function isMemberOfSiteArea(tab: FilterBuilderTab): boolean;
}
declare class _FilterStore {
    getState: () => Filter[];
    setState: (additionalFilters: Filter[]) => void;
    originallyAppliedFilters: Filter[];
    pathFilter: Filter;
    initialize(getState: any, setState: any, originallyAppliedFilters: any, pathFilter?: Filter): void;
    addFilter(filter: Filter): void;
    removeFilter(filter: Filter): void;
    removeItem(item: AllItems): void;
    getFilterFromItem(item: AllItems): Filter;
    getFiltersForParameterName(parameterName: string): Filter[];
    getFiltersForGroupingKey(groupingKey: string): Filter[];
    replaceFilter(oldFilter: Filter, newFilter: Filter): void;
    isFilterApplied(filter: Filter): boolean;
    isItemApplied(item: AllItems): boolean;
    hasUnsavedChanges(tab: FilterBuilderTab): boolean;
    getFiltersForTab(tab: FilterBuilderTab): Filter[];
    getFormFactor(): Filter;
    isMemberOfSiteArea(siteArea: SiteArea, filter: Filter): boolean;
    isMemberOfTab(tab: FilterBuilderTab, filter: Filter): boolean;
}
export declare var FilterStore: _FilterStore;
export {};
