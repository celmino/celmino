import { UrlGrouperState, UrlGrouperProps, UrlPart } from "./url-grouper";
export declare class _UrlGrouperStore {
    getState: () => UrlGrouperState;
    setState: (state: any) => void;
    props: UrlGrouperProps;
    initialize(getState: any, setState: any, props: any): void;
    refreshUrlGrouper(): void;
    hasAnyGroupings(): boolean;
    getPreviousSegmentPart(currentUrlPart: UrlPart): UrlPart;
    getUrlSegmentIndex(currentUrlPart: UrlPart): number;
    segmentFirstGroupingIndex(): number;
    subdomainFirstGroupingIndex(): number;
}
export declare var UrlGrouperStore: _UrlGrouperStore;
