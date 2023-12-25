export declare const SaveAppletAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddAppletDialog: (workspaceId: string) => {
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
        name: {
            label: string;
            type: string;
            name: string;
        };
    };
};
