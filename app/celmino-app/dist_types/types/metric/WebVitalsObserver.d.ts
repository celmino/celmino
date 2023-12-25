export declare class WebVitalsObserver {
    private vitalsSent;
    private metricQueue;
    constructor();
    addToQueue: (metric: any) => void;
    getVitals(url: string): any;
    sentVitals(): void;
}
