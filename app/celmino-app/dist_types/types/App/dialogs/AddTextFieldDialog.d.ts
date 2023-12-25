export declare const SaveTextFieldAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddTextFieldDialog: (workspaceId: string, databaseId: string, collectionId: string) => {
    title: string;
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
        collectionId: {
            name: string;
            type: string;
            value: string;
        };
        name: {
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
