import { Filter } from "./Filter";
export interface IParameter {
    parameterName: string;
}
export type AllItems = ExactItem | SearchItem | RangeItem;
export interface ExactItem extends IParameter {
    count: number;
    displayValue: string;
    rawValue: string;
}
export interface SearchItem extends IParameter {
    query: string;
    count: number;
}
export interface RangeItem extends IParameter {
    min?: number;
    max?: number;
    count?: number;
    bucketIndex?: number;
}
export declare enum FormFactor {
    Overall = "Overall",
    Desktop = "Desktop",
    Mobile = "Mobile"
}
export interface AutocompleteResult<ExactType, SearchType> {
    exactMatches: ExactType[];
    searchMatch: SearchType;
}
export declare function isExactItem(item: IParameter): item is ExactItem;
export declare function isSearchItem(item: IParameter): item is SearchItem;
export declare function isRangeItem(item: IParameter): item is RangeItem;
export declare class FilterService {
    static getIncludedFilters(groupingKey: string): Filter[];
    static topUrls(pageNum: number): Promise<ExactItem[]>;
    static topApiMethods(pageNum: number): Promise<ExactItem[]>;
    static topDevices(pageNum: number): Promise<ExactItem[]>;
    static topNetworkTypes(pageNum: number): Promise<ExactItem[]>;
    static topCountries(pageNum: number): Promise<ExactItem[]>;
    static topRegions(pageNum: number): Promise<ExactItem[]>;
    static topDurations(pageNum: number): Promise<ExactItem[]>;
    static fetchUrlAutocomplete(text: string): Promise<AutocompleteResult<ExactItem, SearchItem>>;
    static fetchDeviceAutocomplete(text: string): Promise<AutocompleteResult<ExactItem, SearchItem>>;
    static fetchCountryAutocomplete(text: string): Promise<AutocompleteResult<ExactItem, SearchItem>>;
    static getQueryStringForFilters(filters: Filter[]): Promise<string>;
    static performanceHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static formFactorCounts(): Promise<{
        total: number;
        desktop: number;
        mobile: number;
    }>;
    static topStatusCodes(pageNum: number): Promise<ExactItem[]>;
    static fetchStatusCodeAutocomplete(text: string): Promise<AutocompleteResult<ExactItem, SearchItem>>;
    static statusCodeRangeCounts(): Promise<{
        success: number;
        clientErrors: number;
        serverErrors: number;
    }>;
    static topContentTypes(pageNum: number): Promise<ExactItem[]>;
    static fetchContentTypeAutocomplete(text: string): Promise<AutocompleteResult<ExactItem, SearchItem>>;
    static contentLengthHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static topTimeToFirstByte(pageNum: number): Promise<ExactItem[]>;
    static timeToFirstByteHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static topLandingPages(pageNum: number): Promise<ExactItem[]>;
    static fetchLandingPageAutocomplete(text: string): Promise<AutocompleteResult<ExactItem, SearchItem>>;
    static interactionsHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static pageViewHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static fcpHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static lcpHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static clsHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static fidHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static topBrowsers(pageNum: number): Promise<ExactItem[]>;
    static fetchBrowserAutocomplete(text: string): Promise<AutocompleteResult<ExactItem, SearchItem>>;
    static topTrafficSources(pageNum: number): Promise<ExactItem[]>;
    static fetchTrafficSourceAutocomplete(text: string): Promise<AutocompleteResult<ExactItem, SearchItem>>;
    static dnsHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static sslHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static serverHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static blockingAssetHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static clientHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
    static sessionDurationHistogram(): Promise<{
        bucket: number;
        count: number;
    }[]>;
}
