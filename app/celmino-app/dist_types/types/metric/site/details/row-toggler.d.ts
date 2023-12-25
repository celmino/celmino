export declare class RowToggler {
    toggleSelector: string;
    rowSelector: string;
    storageKey: string;
    toggleElement: HTMLButtonElement;
    rowElements: HTMLElement[];
    static LOCAL_STORAGE_PREFIX: string;
    constructor(toggleSelector: string, rowSelector: string, storageKey: string);
    get isVisible(): boolean;
    set isVisible(isVisible: boolean);
    toggleRow(): void;
    readPreference(): boolean;
    writePreference(isVisible: boolean): void;
}
