export declare const SaveFolderAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddFolderDialog: (workspaceId: string, appletId: string, parent: string, path: string) => {
    title: string;
    workspaceId: string;
    appletId: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
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
