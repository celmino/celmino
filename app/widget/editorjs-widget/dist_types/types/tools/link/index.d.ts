/**
 * @typedef {object} LinkToolData
 * @description Link Tool's input and output data format
 * @property {string} link — data url
 * @property {metaData} meta — fetched link data
 */
/**
 * @typedef {object} metaData
 * @description Fetched link meta data
 * @property {string} image - link's meta image
 * @property {string} title - link's meta title
 * @property {string} description - link's description
 */
/**
 * @typedef {object} LinkToolConfig
 * @property {string} endpoint - the endpoint for link data fetching
 * @property {object} headers - the headers used in the GET request
 */
import 'url-polyfill';
/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on link data fetching
 * @property {number} success  - 1 for successful uploading, 0 for failure
 * @property {metaData} meta - Object with link data.
 *
 * Tool may have any data provided by backend, currently are supported by design:
 * title, description, image, url
 */
export declare class LinkTool {
    api: any;
    readOnly: any;
    config: any;
    nodes: any;
    _data: any;
    /**
     * Notify core that read-only mode supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
        icon: string;
        title: string;
    };
    /**
     * Allow to press Enter inside the LinkTool input
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks(): boolean;
    /**
     * @param {object} options - Tool constructor options fot from Editor.js
     * @param {LinkToolData} options.data - previously saved data
     * @param {LinkToolConfig} options.config - user config for Tool
     * @param {object} options.api - Editor.js API
     * @param {boolean} options.readOnly - read-only mode flag
     */
    constructor({ data, config, api, readOnly }: {
        data: any;
        config: any;
        api: any;
        readOnly: any;
    });
    /**
     * Renders Block content
     *
     * @public
     *
     * @returns {HTMLDivElement}
     */
    render(): any;
    /**
     * Return Block data
     *
     * @public
     *
     * @returns {LinkToolData}
     */
    save(): any;
    /**
     * Validate Block data
     * - check if given link is an empty string or not.
     *
     * @public
     *
     * @returns {boolean} false if saved data is incorrect, otherwise true
     */
    validate(): boolean;
    /**
     * Stores all Tool's data
     *
     * @param {LinkToolData} data - data to store
     */
    set data(data: any);
    /**
     * Return Tool data
     *
     * @returns {LinkToolData}
     */
    get data(): any;
    /**
     * @returns {object} - Link Tool styles
     */
    get CSS(): any;
    /**
     * Prepare input holder
     *
     * @returns {HTMLElement}
     */
    makeInputHolder(): any;
    /**
     * Activates link data fetching by url
     *
     * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
     */
    startFetching(event: any): void;
    /**
     * If previous link data fetching failed, remove error styles
     */
    removeErrorStyle(): void;
    /**
     * Select LinkTool input content by CMD+A
     *
     * @param {KeyboardEvent} event - keydown
     */
    selectLinkUrl(event: any): void;
    /**
     * Prepare link preview holder
     *
     * @returns {HTMLElement}
     */
    prepareLinkPreview(): any;
    /**
     * Compose link preview from fetched data
     *
     * @param {metaData} meta - link meta data
     */
    showLinkPreview({ image, title, description }: {
        image: any;
        title: any;
        description: any;
    }): void;
    /**
     * Show loading progress bar
     */
    showProgress(): void;
    /**
     * Hide loading progress bar
     *
     * @returns {Promise<void>}
     */
    hideProgress(): Promise<unknown>;
    /**
     * If data fetching failed, set input error style
     */
    applyErrorStyle(): void;
    /**
     * Sends to backend pasted url and receives link data
     *
     * @param {string} url - link source url
     */
    fetchLinkData(url: any): Promise<void>;
    /**
     * Link data fetching callback
     *
     * @param {UploadResponseFormat} response - backend response
     */
    onFetch(response: any): void;
    /**
     * Handle link fetching errors
     *
     * @private
     *
     * @param {string} errorMessage - message to explain user what he should do
     */
    fetchingFailed(errorMessage: any): void;
    /**
     * Helper method for elements creation
     *
     * @param {string} tagName - name of creating element
     * @param {string|string[]} [classNames] - list of CSS classes to add
     * @param {object} [attributes] - object with attributes to add
     * @returns {HTMLElement}
     */
    make(tagName: any, classNames?: any, attributes?: {}): any;
}
