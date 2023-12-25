type OriginResourceList = {
    [origin: string]: PerformanceResourceTiming[];
};
type ResourceBins = {
    allImages: PerformanceResourceTiming[];
    allScripts: PerformanceResourceTiming[];
    allXhr: PerformanceResourceTiming[];
    allCss: PerformanceResourceTiming[];
    allFonts: PerformanceResourceTiming[];
    allOther: PerformanceResourceTiming[];
};
export declare class ResourceService {
    private hasSent;
    private static cachedResourceTimings;
    cacheResources(): void;
    getResources(): any[];
    getPageResourceTimelines(): {
        imgTimeline: string;
        xhrTimeline: string;
        jsTimeline: string;
        cssTimeline: string;
        fontTimeline: string;
        otherTimeline: string;
    };
    getResourcesByOrigin(): OriginResourceList;
    getOriginFromResource(resource: PerformanceResourceTiming): string;
    getResourceEntryByOrigin(origin: string, resources: PerformanceResourceTiming[]): any;
    static getAllResources(): PerformanceResourceTiming[];
    thirdPartyCache: {};
    getAllThirdPartyJs(): any[];
    static shouldIgnore(resource: PerformanceResourceTiming): boolean;
    binResources(resources: PerformanceEntryList): ResourceBins;
    isImage(timing: PerformanceResourceTiming): boolean;
    isScript(timing: PerformanceResourceTiming): boolean;
    isXhr(timing: PerformanceResourceTiming): boolean;
    isCss(timing: PerformanceResourceTiming): boolean;
    isFont(timing: PerformanceResourceTiming): boolean;
    isThirdParty(urlString: string): boolean;
    getWallClockTimeForResources(resources: PerformanceResourceTiming[]): number;
    getTimeRangesForResources(resources: PerformanceResourceTiming[]): TimeRange[];
    sentResources(): void;
}
declare class TimeRange {
    start: number;
    end: number;
    get duration(): number;
    constructor(timing: PerformanceResourceTiming);
    isWithinRange(timing: PerformanceResourceTiming): boolean;
    applyTiming(timing: PerformanceResourceTiming): void;
    toString(): string;
}
export {};
