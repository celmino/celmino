export declare const AddTeamDialog: {
    title: string;
    mode: string;
    resource: string;
    protocol: symbol;
    actions: {
        label: string;
        type: string;
        successActions: {
            type: string;
        }[];
    }[];
    fieldMap: {
        tenant_id: {
            name: string;
            type: string;
            value: string;
        };
        app_id: {
            name: string;
            type: string;
            value: string;
        };
        table_name: {
            label: string;
            type: string;
            name: string;
        };
        description: {
            label: string;
            type: string;
            multiline: boolean;
            name: string;
        };
    };
};
