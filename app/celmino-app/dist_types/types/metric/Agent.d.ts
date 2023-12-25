export declare class Agent {
    static defaults: any;
    options: any;
    private timeOrigin;
    private entryHash;
    endpoints: any[];
    private webVitalsObserver;
    private pageService;
    private resourceService;
    private shutdownSend;
    private sendCount;
    private pageViewId;
    private sessionId;
    getIngestUrl: () => string;
    constructor(options: any);
    getEndpointEntries(): any[];
    getDevice(): any;
    getNetworkType(): string;
    getPayload(lastChance?: boolean): any;
    payloadHasData(payload: any): boolean;
    shouldSendInterval(payload: any): boolean;
    checkAndSend(): void;
    sendBeacon: () => void;
    clearPayloadAfterSend(payload: any): void;
    manageResourceBuffer(): void;
}
