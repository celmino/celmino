export declare class MermaidTool {
    code: any;
    caption: any;
    readOnly: any;
    static config(config: any): void;
    static get toolbox(): {
        title: string;
        icon: string;
    };
    static get isReadOnlySupported(): boolean;
    constructor({ data, readOnly }: {
        data: any;
        readOnly: any;
    });
    parse(code: any, preview: any, container: any): void;
    render(): HTMLDivElement;
    validate(savedData: any): boolean;
    save(blockContent: any): {
        code: any;
        caption: any;
    };
}
