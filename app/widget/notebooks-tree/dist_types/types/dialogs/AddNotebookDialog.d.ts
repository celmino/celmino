export declare const SaveNotebookAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddNotebookDialog: (workspaceId: string, parent: string, path: string) => {
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
        path: {
            name: string;
            type: string;
            value: string;
        };
        folder_name: {
            label: string;
            type: string;
            name: string;
        };
        parent: {
            name: string;
            type: string;
            value: string;
        };
    };
};
