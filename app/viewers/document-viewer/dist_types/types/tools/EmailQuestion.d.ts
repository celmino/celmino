import { API, BlockTool, BlockToolData, ToolConfig } from "@editorjs/editorjs";
interface EmailQuestionData extends BlockToolData {
    label: string;
    help: string;
    placeholder: string;
    required: boolean;
}
export default class EmailQuestion implements BlockTool {
    settings: {
        name: string;
        icon: string;
    }[];
    api: API;
    data: any;
    wrapper: undefined | HTMLElement;
    static get toolbox(): {
        icon: string;
        title?: string;
    };
    constructor({ data, }: {
        api: API;
        config?: ToolConfig;
        data?: EmailQuestionData;
    });
    save(block: HTMLDivElement): any;
    renderSettings(): HTMLElement;
    /**
     * @private
     * Click on the Settings Button
     * @param {string} tune — tune name from this.settings
     */
    _toggleTune(tune: any): void;
    render(): HTMLElement;
}
export {};
