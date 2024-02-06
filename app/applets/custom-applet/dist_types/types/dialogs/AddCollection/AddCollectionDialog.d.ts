export declare const AddCollectionDialog: (workspaceId: string, appletId: string) => {
    title: string;
    method: string;
    resource: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        workspaceId: {
            name: string;
            type: string;
            value: string;
        };
        databaseId: {
            name: string;
            type: string;
            value: string;
        };
        name: {
            label: string;
            type: string;
            name: string;
        };
    };
};
