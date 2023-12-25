export declare class LocalStorageHelper {
    static getLocalStorageString(key: string): string;
    static setLocalStorageString(key: string, value: string): void;
    static getLocalStorageJson(key: string): any;
    static setLocalStorageJson(key: string, value: any): void;
    static getLocalStorageBool(key: string): boolean | null;
    static setLocalStorageBool(key: string, value: boolean): void;
}
export declare class SessionStorageHelper {
    static getSessionStorageString(key: string): string;
    static setSessionStorageString(key: string, value: string): void;
    static getSessionStorageJson(key: string): any;
    static setSessionStorageJson(key: string, value: any): void;
    static getSessionStorageBool(key: string): boolean | null;
    static setSessionStorageBool(key: string, value: boolean): void;
}
