interface GeoPerfRecord {
    duration: number;
    count: number;
    index: number;
}
interface GeoPerfCounts {
    [code: string]: GeoPerfRecord;
}
interface CountryNameLookup {
    [countryCode: string]: string;
}
export interface GeoPerformanceChartProps {
    countryNames: CountryNameLookup;
    geoCounts: GeoPerfCounts;
    previousGeoCounts?: GeoPerfCounts;
    colors?: string;
    mode?: "perf" | "fcp" | "lcp" | "cls" | "fid" | "percent";
    rainbowLegendSelector?: string;
}
export declare function renderGeoPerformanceChart(element: HTMLDivElement, props: GeoPerformanceChartProps): void;
export {};
