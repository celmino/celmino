export declare const SaveListAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddListDialog: (workspaceId: string, appletId: string, parent: string, path: string) => {
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
        appletId: {
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
