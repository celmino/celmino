export declare const SaveNoteAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddNoteDialog: (workspaceId: string, notebookId: string) => {
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
        parent: {
            name: string;
            type: string;
            value: string;
        };
        name: {
            label: string;
            name: string;
            type: string;
        };
    };
};
export declare const _AddNoteDialog: (workspaceId: string, notebookId: string) => {
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
    };
};
