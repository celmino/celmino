export declare const GA_TRACKING_ID: string;
type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};
export declare const pageview: (url: URL) => void;
export declare const event: ({ action, category, label, value }: GTagEvent) => void;
export {};
