export declare enum SiteArea {
    Unknown = "",
    Analytics = "analytics",
    Api = "api",
    UserExperience = "ux",
    Dashboard = "dashboard"
}
export declare class UrlHelper {
    static REPORTING_PERIOD_QUERY_STRING_KEY: string;
    static SORT_FIELD_QUERY_STRING_KEY: string;
    static PAGE_URL_FILTER_QUERY_STRING_KEY: string;
    static ENDPOINT_URL_FILTER_QUERY_STRING_KEY: string;
    static RESOURCE_URL_FILTER_QUERY_STRING_KEY: string;
    static siteArea: SiteArea;
    static appendQueryParams(relativeUrlWithNewQueryStrings: string, keepLocalFilters?: boolean): string;
    static get applicationId(): string;
    static get reportingPeriodKeyFragment(): string;
    static get sortField(): string;
    static get urlFilterString(): string;
    static getQueryParam(queryParamKey: string): string;
    static removeQueryParam(queryParamKey: string): string;
    static toUrlParts(url: string): {
        domain: string;
        path: string;
    };
}
