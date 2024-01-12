export declare const SaveDocumentAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddDocumentDialog: (workspaceId: string, parent: string, path: string) => {
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
        list_name: {
            label: string;
            type: string;
            name: string;
        };
        parent: {
            name: string;
            type: string;
            value: string;
        };
        path: {
            name: string;
            type: string;
            value: string;
        };
    };
};
