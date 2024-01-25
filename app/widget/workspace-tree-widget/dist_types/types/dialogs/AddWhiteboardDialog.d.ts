export declare const SaveWhiteboardAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddWhiteboardDialog: (workspaceId: string, appletId: string, parent: string, path: string) => {
    title: string;
    workspaceId: string;
    appletId: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
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
