export declare const Logger: {
    token: string;
    errorCount: number;
    tjsToken: string;
    tjsApp: string;
    tjsVersion: string;
    getErrorUrl: () => string;
    error: (error: Error, additionalInfo?: string) => void;
};
