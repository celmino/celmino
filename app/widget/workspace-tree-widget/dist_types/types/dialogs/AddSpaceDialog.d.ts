export declare const SaveSpaceAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddSpaceDialog: (workspaceId: string, appletId: string, path: string) => {
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
        path: {
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
