import { UIView } from '@tuval/forms';
export declare class SimpleImage {
    api: any;
    readOnly: any;
    titlePlaceholder: any;
    messagePlaceholder: any;
    info: any;
    config: any;
    document: any;
    selected: boolean;
    view: () => UIView;
    wrapper: HTMLDivElement;
    static get toolbox(): {
        title: string;
        icon: string;
    };
    constructor({ data, config, api, readOnly }: {
        data: any;
        config: any;
        api: any;
        readOnly: any;
    });
    render(): HTMLDivElement;
    renderView(): void;
    validate(savedData: any): boolean;
    save(blockContent: any): {
        info: any;
        selected: boolean;
    };
}
