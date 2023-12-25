declare class _ApiObserver {
    private apiEntries;
    private options;
    install(options: any): void;
    getApis(lastChance?: boolean): any[];
    private addEntry;
    private wrapFetch;
    private wrapXhr;
}
export declare const ApiObserver: _ApiObserver;
export {};
