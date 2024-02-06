export declare const SaveBoardAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const AddBoardDialog: (workspaceId: string, appletId: string, parent: string, path: string) => {
    title: string;
    workspaceId: string;
    appletId: string;
    listId: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        board_name: {
            label: string;
            type: string;
            name: string;
        };
        type: {
            label: string;
            type: string;
            value: string;
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
