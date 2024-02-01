import './index.css';
export default class LinkButton {
    api: any;
    config: any;
    data: any;
    nodes: any;
    static get toolbox(): {
        title: string;
        icon: string;
    };
    /**
     * Available colors
     *
     * @returns {{name: string, icon: string, title: string}[]}
     */
    static get tunes(): {
        name: string;
        icon: string;
        title: string;
    }[];
    /**
     * CSS classes
     *
     * @returns {object}
     */
    get CSS(): {
        linkInput: string;
        captionInput: string;
        blockWrapper: string;
        tuneWrapper: string;
        tuneButton: string;
    };
    /**
     * Constructor
     *
     * @param api - Editor.js API
     * @param data - previously saved data
     */
    constructor({ api, data, config }: {
        api: any;
        data: any;
        config: any;
    });
    get color(): any;
    /**
     * Set button color
     * @param {string} color
     */
    set color(color: any);
    /**
     * Rendering inputs
     * @returns {HTMLDivElement}
     */
    render(): HTMLDivElement;
    renderSettings(): HTMLDivElement;
    _toggleTune(tuneName: any): void;
    /**
     * Save
     * @returns {{anchor: string} | undefined}
     */
    save(): any;
}
