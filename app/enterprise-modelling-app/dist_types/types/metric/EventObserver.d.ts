declare class _EventObserver {
    private eventEntries;
    private options;
    install(options: any, timeOrigin: number): void;
    getEvents(lastChance?: boolean): any[];
    addEvent(event: any): void;
    private wrapActivity;
    private wrapHistory;
    private isCompatible;
    /**
      * Processes a click event for a valid user action and writes event to log.
      *
      * @method onDocumentClicked
      * @param {Object} evt The click event.
      */
    onDocumentClicked: (evt: any) => void;
    /**
      * Processes a blur event for a valid user action and writes event to log.
      *
      * @method onInputChanged
      * @param {Object} evt The click event.
      */
    onInputChanged: (evt: any) => void;
    /**
      * Processes a change to a select element and writes to the log.
      *
      * @method onSelectInputChanged
      * @param {Object} element The element raising the event.
      */
    onSelectInputChanged(element: any): void;
    onFirstScroll: () => void;
    /**
      * Writes a formatted visitor event to the log for the element.
      *
      * @method writeVisitorEvent
      * @param {Element} element The event.
      * @param {String} action The action taken on the element ('click'|'input').
      * @param {String} value The current value of the element.
      * @param {Boolean} isChecked Whether the element is currently checked.
      */
    writeActivityEvent(element: any, action: any, value?: any, isChecked?: any): void;
    /**
      * Get the element that raised an event.
      *
      * @method getElementFromEvent
      * @param {Event} evt The event.
      */
    getElementFromEvent(evt: any): any;
    getDescribedElement<T extends HTMLElement>(element: any, tagName: any, types?: any): T;
    /**
      * Get the normalized type attribute of an element.
      *
      * @method getElementType
      * @param {Element} element The element to check.
      * @returns {String} The element type.
      */
    getElementType(element: any): any;
    /**
      * Get the normalized map of attributes of an element.
      *
      * @method getElementAttributes
      * @param {Element} element The element to check.
      * @return {Object} Key-Value map of attributes on the element.
      */
    getElementAttributes(element: any): {};
    /**
      * Get the metadata information about the element value (for obfuscation).
      *
      * @method getMetaValue
      * @param {String} value The actual value of the element.
      * @param {Boolean} isChecked Whether the element was checked (for radio/checkbox).
      * @returns {Object} Metadata description of the value.
      */
    getMetaValue(value: any, isChecked: any): {
        length: any;
        pattern: string;
        checked: any;
    };
    /**
      * Matches a string against known character patterns.
      *
      * @method matchInputPattern
      * @param {String} value The string to match.
      * @returns {String} The name of the matched pattern.
      */
    matchInputPattern(value: any): "empty" | "email" | "date" | "usphone" | "whitespace" | "numeric" | "alpha" | "alphanumeric" | "characters";
}
export declare const EventObserver: _EventObserver;
export {};
