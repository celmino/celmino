interface GeoCounts {
    [code: string]: number;
}
interface CountryNameLookup {
    [countryCode: string]: string;
}
export interface GeoChartProps {
    countryNames: CountryNameLookup;
    geoCounts: GeoCounts;
    previousGeoCounts?: GeoCounts;
    colors?: string;
    disableMousewheelZoom?: boolean;
}
export declare function renderGeoChart(element: HTMLDivElement, props: GeoChartProps): void;
export {};
