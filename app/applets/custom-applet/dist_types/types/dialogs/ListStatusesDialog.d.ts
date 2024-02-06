export declare const ListStatusesDialog: {
    title: string;
    mode: string;
    resource: string;
    protocol: symbol;
    actions: {
        label: string;
        type: string;
        successActions: ({
            type: string;
            url?: undefined;
        } | {
            type: string;
            url: string;
        })[];
    }[];
    fieldMap: {
        tenant_id: {
            name: string;
            type: string;
        };
        account_id: {
            name: string;
            type: string;
        };
        app_id: {
            name: string;
            type: string;
            value: string;
        };
        space_name: {
            label: string;
            type: string;
            name: string;
        };
    };
};
