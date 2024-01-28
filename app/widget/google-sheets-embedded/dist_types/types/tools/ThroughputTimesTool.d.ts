export default class ThroughputTimesTool {
    api: any;
    readOnly: any;
    data: any;
    CSS: any;
    nodes: any;
    config: any;
    static get toolbox(): {
        icon: string;
        title: string;
    };
    static get isReadOnlySupported(): boolean;
    constructor({ data, config, api, readOnly }: {
        data: any;
        config: any;
        api: any;
        readOnly: any;
    });
    render(): any;
    save(): any;
}
