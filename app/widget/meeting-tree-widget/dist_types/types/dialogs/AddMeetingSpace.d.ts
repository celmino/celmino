export declare const SaveMeetingSpace: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddMeetingSpace: (workspaceId: string, appletId: string) => {
    title: string;
    workspaceId: string;
    appletId: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        name: {
            label: string;
            type: string;
            name: string;
        };
    };
};
