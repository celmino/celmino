export declare function isWorker(): boolean;
export declare function isURLSupported(): boolean;
export declare function truncateUrl(url: string): string;
export declare function truncate(str: string, length: number): string;
export declare function roundToDecimal(num: number, places?: number): number;
export declare function isFirstPartyUrl(url: string, pageUrl: string): boolean;
export declare function getTopLevelSegment(pageUrl: string): string;
export declare function describeElement(el: HTMLElement): string;
/**
  * patch
  * Monkeypatch a method
  *
  * @param {Object} obj The object containing the method.
  * @param {String} name The name of the method
  * @param {Function} func A function to monkeypatch into the method. Will
  *         be called with the original function as the parameter.
  */
export declare function patch(obj: any, name: string, func: any): void;
export declare function noop(): void;
export declare function newTimeId(): number;
/**
  * has
  * Examines an object if it contains a nested addressable property. for
  * example, if you want to check if window.chrome.app exists, you can
  * check with has(window, "chrome.app");
  */
export declare function has(obj: any, path: string): boolean;
